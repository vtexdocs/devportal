import httpProxy from 'http-proxy'

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enableCors(req: any, res: any) {
  if (req.headers['access-control-request-method']) {
    res.setHeader(
      'access-control-allow-methods',
      req.headers['access-control-request-method']
    )
  }

  if (req.headers['access-control-request-headers']) {
    res.setHeader(
      'access-control-allow-headers',
      req.headers['access-control-request-headers']
    )
  }

  if (req.headers.origin) {
    res.setHeader('access-control-allow-origin', req.headers.origin)
    res.setHeader('access-control-allow-credentials', 'true')
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (req: any, res: any) =>
  new Promise((resolve, reject) => {
    const { url } = req.query
    const proxy: httpProxy = httpProxy.createProxy()
    proxy.on('proxyRes', function (proxyRes, req, res) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      res = res
      enableCors(req, proxyRes)
    })
    proxy.once('proxyRes', resolve).once('error', reject).web(req, res, {
      target: url,
      ignorePath: true,
      changeOrigin: true,
      followRedirects: false,
    })
  })
