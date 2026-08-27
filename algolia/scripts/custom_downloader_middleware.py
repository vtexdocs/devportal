"""
CustomDownloaderMiddleware
"""

import time
import requests

from scrapy.http import HtmlResponse
from urllib.parse import urlparse, unquote_plus
from selenium.common.exceptions import (
    TimeoutException,
    InvalidSessionIdException,
    WebDriverException,
)
from selenium.webdriver.support.ui import WebDriverWait

# Inline open shadow roots into light DOM so CSS selectors can match RapiDoc.
FLATTEN_SHADOW_DOM_JS = """
function inlineShadow(root) {
  root.querySelectorAll('*').forEach(function (el) {
    if (!el.shadowRoot) {
      return;
    }
    inlineShadow(el.shadowRoot);
    var wrapper = document.createElement('div');
    wrapper.setAttribute('data-inlined-shadow', '');
    while (el.shadowRoot.firstChild) {
      wrapper.appendChild(el.shadowRoot.firstChild);
    }
    el.insertBefore(wrapper, el.firstChild);
  });
}
inlineShadow(document);
return document.documentElement.outerHTML;
"""

WAIT_FOR_ENDPOINT_JS = """
var endpoint = document.querySelector('[data-api-reference-endpoint]');
if (!endpoint) {
  return false;
}
if (window.getComputedStyle(endpoint).display === 'none') {
  return false;
}
var rapi = endpoint.querySelector('rapi-doc');
if (!rapi || !rapi.shadowRoot) {
  return false;
}
return !!rapi.shadowRoot.querySelector(
  'h2[part="section-operation-summary"], [part="section-operation-summary"]'
);
"""


class CustomDownloaderMiddleware:
    driver = None

    def __init__(self):
        self.driver = CustomDownloaderMiddleware.driver

    def process_request(self, request, spider):
        if not spider.js_render:
            return None

        if spider.remove_get_params:
            o = urlparse(request.url)
            url_without_params = o.scheme + "://" + o.netloc + o.path
            request = request.replace(url=url_without_params)

        is_sitemap = request.flags is not None and "sitemap" in request.flags
        fragment = urlparse(request.url).fragment

        # Sitemap XML and static overview pages are SSG — skip Chrome.
        if is_sitemap or not fragment:
            body = requests.get(request.url).content
            return HtmlResponse(
                url=request.url,
                body=body,
                encoding='utf8'
            )

        print("Getting " + request.url + " from selenium")

        body, url = self._fetch_endpoint_page(request.url, spider)
        if not urlparse(url).fragment:
            url = request.url

        return HtmlResponse(
            url=url,
            body=body,
            encoding='utf8'
        )

    def _fetch_endpoint_page(self, url, spider):
        last_error = None
        for _ in range(2):
            try:
                self.driver.get(unquote_plus(url))
                self._wait_for_endpoint_view(spider)
                body = self.driver.execute_script(FLATTEN_SHADOW_DOM_JS)
                return body, self.driver.current_url
            except (InvalidSessionIdException, WebDriverException) as err:
                last_error = err
                print("Selenium session lost, restarting Chrome")
                self._restart_driver()
        raise last_error

    def _restart_driver(self):
        from .config.browser_handler import BrowserHandler
        self.driver = BrowserHandler.restart()
        CustomDownloaderMiddleware.driver = self.driver

    def _wait_for_endpoint_view(self, spider):
        timeout = max(int(spider.js_wait or 1), 8)
        try:
            WebDriverWait(self.driver, timeout).until(
                lambda driver: driver.execute_script(WAIT_FOR_ENDPOINT_JS)
            )
            time.sleep(0.5)
        except TimeoutException:
            time.sleep(min(timeout, 3))

    def process_response(self, request, response, spider):
        # Since scrappy use start_urls and stop_urls before creating the request
        # If the url get redirected then this url gets crawled even if it's not allowed to
        # So we check if the final url is allowed
        if spider.remove_get_params:
            o = urlparse(response.url)
            url_without_params = o.scheme + "://" + o.netloc + o.path
            response = response.replace(url=url_without_params)

        if response.url == request.url + '#':
            response = response.replace(url=request.url)

        return response
