# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.30.2](https://github.com/vtexdocs/devportal/compare/v0.30.0...v0.30.2) (2022-12-05)


### Features

* (wip) new comps for getting started page ([73569e7](https://github.com/vtexdocs/devportal/commit/73569e750152d6d02ef850b1746525dcdb92e898))
* (wip) new comps for getting started page ([261756c](https://github.com/vtexdocs/devportal/commit/261756cbe5689791fb8f5eb808f3d2619304e3fc))
* add-sfpage ([3e69ab1](https://github.com/vtexdocs/devportal/commit/3e69ab152f18828cbfd4625bf3e9f15ac7777521))
* **apis:** add proxy route ([b639e20](https://github.com/vtexdocs/devportal/commit/b639e20d229f952bc70b1162b23aa568e741e32e))
* **images:** compiler gets image data before compiling and generates blured placeholder ([f7495fc](https://github.com/vtexdocs/devportal/commit/f7495fc5c38f527ab298edeb9f9c201ad3d987a4))
* **markdown:** add support for rendering HTML magic blocks in markdown ([1e0fac1](https://github.com/vtexdocs/devportal/commit/1e0fac18efff0396d5cffadb2e8338ddcb5b48bf))


### Bug Fixes

* **api-guides:** check if code blocks inside markdown file are correctly formatted ([ec5b382](https://github.com/vtexdocs/devportal/commit/ec5b38267062051fe8a0d6756b310f2ffcf1ce9f))
* **api-guides:** escape <> occurrences ([18d6b36](https://github.com/vtexdocs/devportal/commit/18d6b36d39dc88b4e1bb17efdea29feb815f50db))
* **api-guides:** escape curly braces inside markdown files ([f9491a3](https://github.com/vtexdocs/devportal/commit/f9491a3b123a9a127fad7174662fe12358b4f630))
* **api-guides:** handle documentations with level-3 headings, but no level-2 headings ([3718a87](https://github.com/vtexdocs/devportal/commit/3718a873fcddc037ce5743cde30306f1caac28ee))
* **api-guides:** only escape curly braces outside magic blocks ([3603439](https://github.com/vtexdocs/devportal/commit/3603439cf078c7b1f77925f03e903a8530680305))
* **api-guides:** replace all occurrences of br HTML tags with JSX ([6544bb3](https://github.com/vtexdocs/devportal/commit/6544bb3e0471fd860c759a3322edce36a02b040d))
* **api-guides:** replace br HTML tags with JSX and remove HTML comments ([baebbbc](https://github.com/vtexdocs/devportal/commit/baebbbcea2641af794fd739c8daedadd688c05e5))
* **api-guides:** replace HTML blocks inside markdown files with JSX components ([e99c45b](https://github.com/vtexdocs/devportal/commit/e99c45bae24166070b7fc83fad041bfc73e1e095))
* **api-guides:** skip frontmatter when escaping curly braces ([e7cf028](https://github.com/vtexdocs/devportal/commit/e7cf0281c8527613e73c16cb6d364a5a3112307f))
* **childrenToString:** fix childrenToString when given an undefined parameter ([8697d56](https://github.com/vtexdocs/devportal/commit/8697d56e00dac2e1770de27ed5b7a541cdf0a375))
* **escapeCurlyBraces:** improve check for incorrectly formatted code blocks ([b5b65ea](https://github.com/vtexdocs/devportal/commit/b5b65eaa4660bdf23aa539a3bb2e752b48968311))
* **escapeCurlyBraces:** only escape curly braces outside of code blocks ([ce1a3b5](https://github.com/vtexdocs/devportal/commit/ce1a3b52c254f538b05aeb3be6dadbaf7597b162))
* implement handleclick and slugprefix ([cf99900](https://github.com/vtexdocs/devportal/commit/cf99900cd88cf387ae4b3df2cc79eb112e2494b7))
* improve sidebar styles ([a3cfc03](https://github.com/vtexdocs/devportal/commit/a3cfc0369b07d3d2ac1e757d539a13b22c06455e))
* improve sidebar styles ([05cc1c3](https://github.com/vtexdocs/devportal/commit/05cc1c3aaedc18b779d15217e795160010ddbc61))
* interface types ([6ac0099](https://github.com/vtexdocs/devportal/commit/6ac0099ef91d5531d05c6c8bbd4f2dbc536568a8))
* interface types ([ca0389c](https://github.com/vtexdocs/devportal/commit/ca0389cb3b870eee3babc25fc0ca8f397e46a999))
* **linting:** linting ([ba98d73](https://github.com/vtexdocs/devportal/commit/ba98d734569d3a73dfa12740c69d417ec213879a))
* **plaiceholder:** install nextjs plugin ([55aef75](https://github.com/vtexdocs/devportal/commit/55aef75037b404bbb231ec82fcdf15b78ef7f234))
* **plaiceholder:** probes for img size before calling plaiceholder ([eab2320](https://github.com/vtexdocs/devportal/commit/eab23209790716a9e9d083a9668be2f847c63afd))
* **replaceHTMLBlocks:** only match HTML tags, not JSX components ([186dea2](https://github.com/vtexdocs/devportal/commit/186dea2d1f558f6d5d25eccdfe9474aee3616f22))
* sidebar-styles ([e7ffc30](https://github.com/vtexdocs/devportal/commit/e7ffc3084028b76ae7c2cbaaab00bc03e7363cbc))
* sidebar-styles ([973e7f6](https://github.com/vtexdocs/devportal/commit/973e7f6d5fc2686e5b3f36f9f7974a39769860a2))
* svg errors ([46dafca](https://github.com/vtexdocs/devportal/commit/46dafca008c1cdfc74ee86531154e1ff3caaf10b))
* svg errors ([e87d875](https://github.com/vtexdocs/devportal/commit/e87d875207e5a07f531c9fd192cfc95a67ba0758))
* typo ([9ae3b24](https://github.com/vtexdocs/devportal/commit/9ae3b24317a5509ccbf4d1b35f3de98108658939))
* typo ([33d0ba8](https://github.com/vtexdocs/devportal/commit/33d0ba82ab43f4dc647574036b873020f8a414af))


### Style

* **api-guides:** log file path when logging error ([2ceb5ed](https://github.com/vtexdocs/devportal/commit/2ceb5edcccd4cdb670f0a1f9fea3291d784763ed))
* refactor ([ef42d6c](https://github.com/vtexdocs/devportal/commit/ef42d6c966612349835a88500dfb5e576898848f))


### Refactoring

* **components:** updates links and images for nextjs@13 ([bd2b17e](https://github.com/vtexdocs/devportal/commit/bd2b17e94e62f28ddf169af6ae3e0490688ec2aa))
* **images:** uses the latest next/image component ([dabf538](https://github.com/vtexdocs/devportal/commit/dabf5381fc299893473ab7f966b91f9c9842d29e))
* **next.config.js:** add image remotePattern for all hosts ([d6ef6e7](https://github.com/vtexdocs/devportal/commit/d6ef6e7606bf6b3208a0c23594d23a5951797567))


### Chore

* **package.json:** add http-proxy ([00555d2](https://github.com/vtexdocs/devportal/commit/00555d209eb7da7a68e0de42a087278cee0368aa))
* **release:** 0.30.1 ([9d518d2](https://github.com/vtexdocs/devportal/commit/9d518d2ec1ae4ffed9baba9fe67da1fd68f68bec))
* update nextjs react ([2c1549c](https://github.com/vtexdocs/devportal/commit/2c1549ca8fdcb536d3e67fd4c5956c1dd424a956))

### [0.30.1](https://github.com/vtexdocs/devportal/compare/v0.30.0...v0.30.1) (2022-12-05)


### Features

* (wip) new comps for getting started page ([73569e7](https://github.com/vtexdocs/devportal/commit/73569e750152d6d02ef850b1746525dcdb92e898))
* (wip) new comps for getting started page ([261756c](https://github.com/vtexdocs/devportal/commit/261756cbe5689791fb8f5eb808f3d2619304e3fc))
* add-sfpage ([3e69ab1](https://github.com/vtexdocs/devportal/commit/3e69ab152f18828cbfd4625bf3e9f15ac7777521))
* **apis:** add proxy route ([b639e20](https://github.com/vtexdocs/devportal/commit/b639e20d229f952bc70b1162b23aa568e741e32e))
* **images:** compiler gets image data before compiling and generates blured placeholder ([f7495fc](https://github.com/vtexdocs/devportal/commit/f7495fc5c38f527ab298edeb9f9c201ad3d987a4))
* **markdown:** add support for rendering HTML magic blocks in markdown ([1e0fac1](https://github.com/vtexdocs/devportal/commit/1e0fac18efff0396d5cffadb2e8338ddcb5b48bf))


### Bug Fixes

* **api-guides:** check if code blocks inside markdown file are correctly formatted ([ec5b382](https://github.com/vtexdocs/devportal/commit/ec5b38267062051fe8a0d6756b310f2ffcf1ce9f))
* **api-guides:** escape <> occurrences ([18d6b36](https://github.com/vtexdocs/devportal/commit/18d6b36d39dc88b4e1bb17efdea29feb815f50db))
* **api-guides:** escape curly braces inside markdown files ([f9491a3](https://github.com/vtexdocs/devportal/commit/f9491a3b123a9a127fad7174662fe12358b4f630))
* **api-guides:** handle documentations with level-3 headings, but no level-2 headings ([3718a87](https://github.com/vtexdocs/devportal/commit/3718a873fcddc037ce5743cde30306f1caac28ee))
* **api-guides:** only escape curly braces outside magic blocks ([3603439](https://github.com/vtexdocs/devportal/commit/3603439cf078c7b1f77925f03e903a8530680305))
* **api-guides:** replace all occurrences of br HTML tags with JSX ([6544bb3](https://github.com/vtexdocs/devportal/commit/6544bb3e0471fd860c759a3322edce36a02b040d))
* **api-guides:** replace br HTML tags with JSX and remove HTML comments ([baebbbc](https://github.com/vtexdocs/devportal/commit/baebbbcea2641af794fd739c8daedadd688c05e5))
* **api-guides:** replace HTML blocks inside markdown files with JSX components ([e99c45b](https://github.com/vtexdocs/devportal/commit/e99c45bae24166070b7fc83fad041bfc73e1e095))
* **api-guides:** skip frontmatter when escaping curly braces ([e7cf028](https://github.com/vtexdocs/devportal/commit/e7cf0281c8527613e73c16cb6d364a5a3112307f))
* **childrenToString:** fix childrenToString when given an undefined parameter ([8697d56](https://github.com/vtexdocs/devportal/commit/8697d56e00dac2e1770de27ed5b7a541cdf0a375))
* **escapeCurlyBraces:** improve check for incorrectly formatted code blocks ([b5b65ea](https://github.com/vtexdocs/devportal/commit/b5b65eaa4660bdf23aa539a3bb2e752b48968311))
* **escapeCurlyBraces:** only escape curly braces outside of code blocks ([ce1a3b5](https://github.com/vtexdocs/devportal/commit/ce1a3b52c254f538b05aeb3be6dadbaf7597b162))
* implement handleclick and slugprefix ([cf99900](https://github.com/vtexdocs/devportal/commit/cf99900cd88cf387ae4b3df2cc79eb112e2494b7))
* improve sidebar styles ([a3cfc03](https://github.com/vtexdocs/devportal/commit/a3cfc0369b07d3d2ac1e757d539a13b22c06455e))
* improve sidebar styles ([05cc1c3](https://github.com/vtexdocs/devportal/commit/05cc1c3aaedc18b779d15217e795160010ddbc61))
* interface types ([6ac0099](https://github.com/vtexdocs/devportal/commit/6ac0099ef91d5531d05c6c8bbd4f2dbc536568a8))
* interface types ([ca0389c](https://github.com/vtexdocs/devportal/commit/ca0389cb3b870eee3babc25fc0ca8f397e46a999))
* **linting:** linting ([ba98d73](https://github.com/vtexdocs/devportal/commit/ba98d734569d3a73dfa12740c69d417ec213879a))
* **plaiceholder:** install nextjs plugin ([55aef75](https://github.com/vtexdocs/devportal/commit/55aef75037b404bbb231ec82fcdf15b78ef7f234))
* **plaiceholder:** probes for img size before calling plaiceholder ([eab2320](https://github.com/vtexdocs/devportal/commit/eab23209790716a9e9d083a9668be2f847c63afd))
* **replaceHTMLBlocks:** only match HTML tags, not JSX components ([186dea2](https://github.com/vtexdocs/devportal/commit/186dea2d1f558f6d5d25eccdfe9474aee3616f22))
* sidebar-styles ([e7ffc30](https://github.com/vtexdocs/devportal/commit/e7ffc3084028b76ae7c2cbaaab00bc03e7363cbc))
* sidebar-styles ([973e7f6](https://github.com/vtexdocs/devportal/commit/973e7f6d5fc2686e5b3f36f9f7974a39769860a2))
* svg errors ([46dafca](https://github.com/vtexdocs/devportal/commit/46dafca008c1cdfc74ee86531154e1ff3caaf10b))
* svg errors ([e87d875](https://github.com/vtexdocs/devportal/commit/e87d875207e5a07f531c9fd192cfc95a67ba0758))
* typo ([9ae3b24](https://github.com/vtexdocs/devportal/commit/9ae3b24317a5509ccbf4d1b35f3de98108658939))
* typo ([33d0ba8](https://github.com/vtexdocs/devportal/commit/33d0ba82ab43f4dc647574036b873020f8a414af))


### Style

* **api-guides:** log file path when logging error ([2ceb5ed](https://github.com/vtexdocs/devportal/commit/2ceb5edcccd4cdb670f0a1f9fea3291d784763ed))
* refactor ([ef42d6c](https://github.com/vtexdocs/devportal/commit/ef42d6c966612349835a88500dfb5e576898848f))


### Refactoring

* **components:** updates links and images for nextjs@13 ([bd2b17e](https://github.com/vtexdocs/devportal/commit/bd2b17e94e62f28ddf169af6ae3e0490688ec2aa))
* **images:** uses the latest next/image component ([dabf538](https://github.com/vtexdocs/devportal/commit/dabf5381fc299893473ab7f966b91f9c9842d29e))
* **next.config.js:** add image remotePattern for all hosts ([d6ef6e7](https://github.com/vtexdocs/devportal/commit/d6ef6e7606bf6b3208a0c23594d23a5951797567))


### Chore

* **package.json:** add http-proxy ([00555d2](https://github.com/vtexdocs/devportal/commit/00555d209eb7da7a68e0de42a087278cee0368aa))
* update nextjs react ([2c1549c](https://github.com/vtexdocs/devportal/commit/2c1549ca8fdcb536d3e67fd4c5956c1dd424a956))

## [0.30.0](https://github.com/vtexdocs/devportal/compare/v0.29.2...v0.30.0) (2022-11-21)


### Features

* **docs:** add the doctype metatag to docs pages to crawling ([68dc438](https://github.com/vtexdocs/devportal/commit/68dc4380d9a57b43bee8ba19e8fe69e47e7eed49))
* **search:** add search input and results components ([e645517](https://github.com/vtexdocs/devportal/commit/e6455177a9d27f1c8c311e1bddf8b7511d2f4973))


### Bug Fixes

* **search-input:** add hits keys ([6278f99](https://github.com/vtexdocs/devportal/commit/6278f9987ed5ad5e09f12363c3421a512397156d))
* **search-input:** input size on hover overlapping docs button ([cb11b6d](https://github.com/vtexdocs/devportal/commit/cb11b6dfd8ff2a249a86f5de3b6eb0fae0592b25))


### Chore

* **package.json:** add search dependencies ([b043d96](https://github.com/vtexdocs/devportal/commit/b043d96cee67781df07138c0e3b8f745ba895c99))


### Style

* **search-input:** add clickOutSide behavior ([7e82f42](https://github.com/vtexdocs/devportal/commit/7e82f426a3ea7d29198ac038b9629e5746f09faa))


### Refactoring

* **header:** update the search component ([9596dc8](https://github.com/vtexdocs/devportal/commit/9596dc8e386aa56a094068ec2da9641bcb50f2a0))
* **search-input:** rename variables and remove unnecessary ESLint rule disable ([7de2d02](https://github.com/vtexdocs/devportal/commit/7de2d02c3a666e79478aac901df9e50e056d519f))


### Tests

* **landing-page-tests:** remove conflicting and unnecessary testing ([f27c21f](https://github.com/vtexdocs/devportal/commit/f27c21f8a064e9c1c24fccebb8e3254222b2e8e1))

### [0.29.2](https://github.com/vtexdocs/devportal/compare/v0.29.1...v0.29.2) (2022-10-07)


### Features

* **layout:** add support for rendering the sidebar conditionally ([100f1bb](https://github.com/vtexdocs/devportal/commit/100f1bbb8791fa2a1cf9388095b071938731e399))


### Bug Fixes

* **sidebar:** remove duplicate sidebar from search and release notes pages ([b1c6bc9](https://github.com/vtexdocs/devportal/commit/b1c6bc9f540ed89b5f6d83998cb9f0bc1fbc5b39))


### Chore

* add yarn.lock ([9b6ee7c](https://github.com/vtexdocs/devportal/commit/9b6ee7c52f232eda15c7069ae142a66ddb705a92))

### [0.29.1](https://github.com/vtexdocs/devportal/compare/v0.29.0...v0.29.1) (2022-10-06)


### Bug Fixes

* remove console.log from code ([b9568ad](https://github.com/vtexdocs/devportal/commit/b9568ad52c395d0b6ab159b3539f78a1d0891e90))


### Build

* **rapidoc:** update rapidoc version ([332fcb9](https://github.com/vtexdocs/devportal/commit/332fcb96cf42ba84e38dafbe89fdbf2bfe85f810))
* **rapidoc:** update to v1.0.10-vtex ([85ecf98](https://github.com/vtexdocs/devportal/commit/85ecf98fe203d8c2546c4bb2316719bed91e90c7))

## [0.29.0](https://github.com/vtexdocs/devportal/compare/v0.28.0...v0.29.0) (2022-10-01)


### ⚠ BREAKING CHANGES

* **project:** Project now needs `.env.local` file with github app parameters

### Features

* debug ([112ecea](https://github.com/vtexdocs/devportal/commit/112ecea7e28286c2b9c5dc7d46d479b157b868af))
* debug ([46b41a1](https://github.com/vtexdocs/devportal/commit/46b41a1a19911d19d8ec0bf0e8bc98c64060d938))
* debug ([4e4d50f](https://github.com/vtexdocs/devportal/commit/4e4d50f8528b1eeef214143f612342d1a6ac736c))
* debug ([90a5ab6](https://github.com/vtexdocs/devportal/commit/90a5ab66d66e1c59b240fc6c253e95c2038901a6))
* debug ([836b85a](https://github.com/vtexdocs/devportal/commit/836b85a2efa08ccb0b0844d654e4bb5097d1a1e7))
* debug ([2a6bde2](https://github.com/vtexdocs/devportal/commit/2a6bde28b0ac1dde50c348fb122b5d239734372d))
* debug ([d12724a](https://github.com/vtexdocs/devportal/commit/d12724a0a4f8ec6daaa1b31f7d6f0f3f26bf38d4))
* debug ([b2d50e9](https://github.com/vtexdocs/devportal/commit/b2d50e9c7161140975d29cf59b69377165400b25))
* debug ([0af82d8](https://github.com/vtexdocs/devportal/commit/0af82d8530153312f6f7a4107b7c901b03fbaddf))
* debug ([9ac51f7](https://github.com/vtexdocs/devportal/commit/9ac51f7e4b8032584f10176415065c1dd458b318))
* debug ([c0dadf3](https://github.com/vtexdocs/devportal/commit/c0dadf3a7010e83766b6f8c82378f748e542863d))
* **debug:** debug ([2f308a4](https://github.com/vtexdocs/devportal/commit/2f308a44012be91bb28b863b58ddc927ebf4ce95))
* debyg ([f4867ff](https://github.com/vtexdocs/devportal/commit/f4867ffd3d4ba268f74133ba88ebeda2bb003cb8))
* **project:** refactors api-guides data fetching architecture ([432100d](https://github.com/vtexdocs/devportal/commit/432100da1d81841ab43243df1b39349008d48a6e))
* rerun checks ([021c98b](https://github.com/vtexdocs/devportal/commit/021c98ba728049360ba3f6421d806b30a1795744))


### Bug Fixes

* **api-guides:** removes json library from highlight.js ([710b668](https://github.com/vtexdocs/devportal/commit/710b6686fb125982695cb0dbe6bede314e68948e))
* debug ([17ce301](https://github.com/vtexdocs/devportal/commit/17ce30164a8d90f36fe3c23ce2b7d7cd9a788803))
* debug ([f1507de](https://github.com/vtexdocs/devportal/commit/f1507dea9e62211233163661855545db43c930d0))
* **octokit:** checks if netlify and unescapes env variable ([7a4f7cd](https://github.com/vtexdocs/devportal/commit/7a4f7cd4fd92c6e7dcdac31db40fd5a2a0256ea0))
* **octokit:** uses replace instead of unescape ([17b594f](https://github.com/vtexdocs/devportal/commit/17b594f27479475e84bed03e4956160b70c14d9f))
* replace env variables if needed ([45445bf](https://github.com/vtexdocs/devportal/commit/45445bf20d96f67ddb606b591c4a0dba43338060))
* still debugging ([0f8e038](https://github.com/vtexdocs/devportal/commit/0f8e0386fe4dfcfec5e1e6650806114f190a1e45))
* still debugging ([6ac9ed8](https://github.com/vtexdocs/devportal/commit/6ac9ed82d003876bd621d79a20c3584f6f4c46a2))
* still debugging ([9d75c0a](https://github.com/vtexdocs/devportal/commit/9d75c0ab0b43d986fc9db448b33494146892882c))
* use base64 for privatekey in netlify ([ae35a61](https://github.com/vtexdocs/devportal/commit/ae35a61c30b927c219c92440e955760119a51606))
* use split/join instead of replace ([f440e59](https://github.com/vtexdocs/devportal/commit/f440e591d485755856c99aef9ad4e73ac4e3831f))
* **workflows:** set env ([1b3e139](https://github.com/vtexdocs/devportal/commit/1b3e139735639e39b4cb4859f6973ff15f5329ef))
* **yarn.lock:** easy rebase ([26fa0b8](https://github.com/vtexdocs/devportal/commit/26fa0b81f38aa7863c496761ee2ade4111aa5f33))


### Build

* **next.config:** increase staticstaticPageGenerationTimeout to 3600 so we can wait for github ([9f89163](https://github.com/vtexdocs/devportal/commit/9f891639f0937b88056bbac7db2cadfb5e1bd783))


### Refactoring

* debug netlify env variables ([e92a216](https://github.com/vtexdocs/devportal/commit/e92a2164cb26936269e14ddb571b00feef85d54a))
* **navigation:** remove try catch ([8dc3333](https://github.com/vtexdocs/devportal/commit/8dc3333b0430c9bef100ae23e0fb0b556ece11d2))
* **navigation:** removes top level async ([0668486](https://github.com/vtexdocs/devportal/commit/0668486bbcff1dd5f3569ee3807e96a3a72c93e3))
* **octokit:** trow error for missing env variables ([586ab9d](https://github.com/vtexdocs/devportal/commit/586ab9dff0e9bc3115b88396e21e5019c606c47f))


### Tests

* still debuggin ([4b07c09](https://github.com/vtexdocs/devportal/commit/4b07c0920b01db243c18759c0947a36c367750a6))
* still debugging ([6233b74](https://github.com/vtexdocs/devportal/commit/6233b7457ae316d59dcb5409ae45dd8abe8dd6cc))
* still debugging ([e486931](https://github.com/vtexdocs/devportal/commit/e4869318aad12312c8484f269a3f453cd937e428))


### Chore

* **package:** add dependencies: `highlight.js, highlightjs-curl, next-plugin-preval, octokit` ([dedd884](https://github.com/vtexdocs/devportal/commit/dedd884523f890a63d1eecca459c0d34e7c12e1e))
* refactor config ([2279958](https://github.com/vtexdocs/devportal/commit/2279958b1a1dc34fe2fd4df7b4c4911d165eb0e7))

## [0.28.0](https://github.com/vtexdocs/devportal/compare/v0.27.2...v0.28.0) (2022-09-14)


### Features

* **api-reference:** add new open api examples and pass the Medium font to the rapidoc component ([66ee73e](https://github.com/vtexdocs/devportal/commit/66ee73e7936817b7ed5ba8d4b836ed42c6f0f5c8))


### Chore

* **docs:** add new open api examples ([0c49bdc](https://github.com/vtexdocs/devportal/commit/0c49bdcacfa1c5eabcebc69003f717953ff2adcc))


### Build

* **rapidoc:** update version ([d86f0a6](https://github.com/vtexdocs/devportal/commit/d86f0a615457ebd98af36ccc6f9a1cdbcc28a030))
* **rapidoc:** update version ([9c96939](https://github.com/vtexdocs/devportal/commit/9c9693982e72af756bf42256916657de5529072f))

### [0.27.2](https://github.com/vtexdocs/devportal/compare/v0.27.1...v0.27.2) (2022-09-06)


### Build

* **rapidoc:** update version ([03393f2](https://github.com/vtexdocs/devportal/commit/03393f22d13d4867a41f1240561ba5f6eb1f1b36))
* **rapidoc:** update version to 1.0.8-vtex ([5b4c17e](https://github.com/vtexdocs/devportal/commit/5b4c17e6a41f49efe9733e1c74ea23f2a97367ab))

### [0.27.1](https://github.com/vtexdocs/devportal/compare/v0.27.0...v0.27.1) (2022-08-29)


### Features

* **_app.tsx:** custom app uses shared Layout component ([c92f643](https://github.com/vtexdocs/devportal/commit/c92f643dc101e3305e7be998e02db36af8a8e738))
* **layout.tsx:** adds Layout file ([045764a](https://github.com/vtexdocs/devportal/commit/045764a1eb302d2eac554136e5e1913863b808f1))
* **layout:** layout includes theme provider ([6601d95](https://github.com/vtexdocs/devportal/commit/6601d951ec68c7720d32bbcc59230daec1b69f0a))


### Chore

* **header:** update mutationObserver to detect body style changes ([0e4b8a1](https://github.com/vtexdocs/devportal/commit/0e4b8a1a8c91de79f7eb779980144cc498f31533))


### Build

* **rapidoc:** update version ([17c534e](https://github.com/vtexdocs/devportal/commit/17c534e73cd1e44ecf0a1d6253841c58b7e8e264))


### Refactoring

* **pages:** use shared Layout component for every page ([a7f8bbe](https://github.com/vtexdocs/devportal/commit/a7f8bbec6fc4d39f63176a05e37469a2bf3aa51c))

## [0.27.0](https://github.com/vtexdocs/devportal/compare/v0.26.1...v0.27.0) (2022-08-27)


### Features

* navigation api ([2839630](https://github.com/vtexdocs/devportal/commit/28396303cfa02c5aaf3df695fcac96732a373b21))
* **next.config.js:** navigation s3 store url in config ([fbc6b62](https://github.com/vtexdocs/devportal/commit/fbc6b6290c8028b2efbd3e4c1544c3185bf5e601))
* **package.json:** add swr ([1eeb1bf](https://github.com/vtexdocs/devportal/commit/1eeb1bf352c369ecccecbcc749c4c6245d568201))
* **pages:** pages use sidebarfallback feature ([f893f14](https://github.com/vtexdocs/devportal/commit/f893f14bee38013f4c66015a68cab3322022857d))
* **sidebar:** navigation data from api ([8d929f0](https://github.com/vtexdocs/devportal/commit/8d929f0db2adce4d117a30ef330fc90be97407b5))
* **sidebar:** sidebar context uses swr config ([a09e972](https://github.com/vtexdocs/devportal/commit/a09e97205393fede1cc5cb226319f9f8bfa7a378))


### Refactoring

* **yarn.lock:** yarn lock ([1198850](https://github.com/vtexdocs/devportal/commit/1198850c1d5844de9d2a871a02b1d2f34f7f6f49))

### [0.26.1](https://github.com/vtexdocs/devportal/compare/v0.26.0...v0.26.1) (2022-08-15)


### Bug Fixes

* **yarn.lock:** update ([f90c742](https://github.com/vtexdocs/devportal/commit/f90c742e650977c955febde57c813e3b902bece3))


### Refactoring

* **markdown-renderer:** use next-mdx-remote to render mdx ([1130536](https://github.com/vtexdocs/devportal/commit/1130536995c004116eeda5a981a9986fee2ceb22))


### Chore

* **github actions:** updated github actions to use node 14.x ([8e36eaa](https://github.com/vtexdocs/devportal/commit/8e36eaaaf971c4025859adb29fb6c34fb35d292d))
* **next.config.js:** add valid image sources ([661e575](https://github.com/vtexdocs/devportal/commit/661e575d61fe9ea978551183f06ee09f7910011b))
* **package.json:** add next-mdx-remote to dependencies ([5c9d9cc](https://github.com/vtexdocs/devportal/commit/5c9d9cc37aa91f996d670564bd95a10340e84bb7))

## [0.26.0](https://github.com/vtexdocs/devportal/compare/v0.25.1...v0.26.0) (2022-08-11)


### Bug Fixes

* add a match-path compatible with the checkout API page ([b5f99cd](https://github.com/vtexdocs/devportal/commit/b5f99cd8d10dbe0d5bf81f2d0252bbee4113de3e))
* update api-reference page with sidebarContextProvider ([ec6fd4b](https://github.com/vtexdocs/devportal/commit/ec6fd4b4ae960674699b4451a3d3b1dadb6dbfd7))


### Refactoring

* switch from Rapidoc to Rapidoc-mini ([be9d142](https://github.com/vtexdocs/devportal/commit/be9d142f40fd20846e7ccb5db6ac6c1d453cc718))


### Tests

* update rapidoc test to suit rapidoc-mini's characteristics ([35d5c30](https://github.com/vtexdocs/devportal/commit/35d5c30fa5bdffd4b697321d4ff5cc7f6edb3dbd))

### [0.25.1](https://github.com/vtexdocs/devportal/compare/v0.25.0...v0.25.1) (2022-08-10)


### Build

* **rapidoc:** update rapidoc version to v1.0.7-vtex ([ce10f91](https://github.com/vtexdocs/devportal/commit/ce10f914b470e2d01777c063a8c1b3f5c58cbc77))
* **rapidoc:** update version ([14ac20e](https://github.com/vtexdocs/devportal/commit/14ac20efee308dda75b73ec47f41225f25aac8aa))

## [0.25.0](https://github.com/vtexdocs/devportal/compare/v0.24.0...v0.25.0) (2022-08-10)


### Features

* **method-category:** create the MethodCategory component ([c4b7241](https://github.com/vtexdocs/devportal/commit/c4b7241952473493a1072da0f73ac7a4bcca9f89))
* **sidebar-section:** add the method filter behavior ([3518899](https://github.com/vtexdocs/devportal/commit/3518899b0bcd200e80d7e5b14e5ccebc0841ef52))


### Bug Fixes

* **api-reference:** put the sidebar on this page ([b7238c8](https://github.com/vtexdocs/devportal/commit/b7238c80b788f5b85ec465104610dac0a69f8347))
* **sidebar-section:** change the filter section to appear only in the API Reference section ([f0b9a83](https://github.com/vtexdocs/devportal/commit/f0b9a83f2baff3035b269a533e0ed231d929eda7))
* **sidebar-section:** sidebar width to auto adjust ([0a5196e](https://github.com/vtexdocs/devportal/commit/0a5196e2ddc8e20b9b7d155203815611b35e2da3))
* **sidebar:** put the right cleanup function to the sidebar timer ([6ccc4d0](https://github.com/vtexdocs/devportal/commit/6ccc4d00886aa01c76f90df58fcbe28d86603a50))
* **sidebar:** sidebar-items style and update sidebar mock to testing ([95ea33e](https://github.com/vtexdocs/devportal/commit/95ea33ef3598c67cf1ea79b4793e4207ff133091))


### Refactoring

* **sidebar-section:** componentize the filter ([75fae03](https://github.com/vtexdocs/devportal/commit/75fae0374cc7f35100bc347c7dec8493a66222b7))
* **sidebar:** fix typo in sidebar data prop ([f2058b0](https://github.com/vtexdocs/devportal/commit/f2058b018a62ddcba57ad7a4e739b4a5b48babd7))
* **sidebar:** update the sidebar structure with the new json master ([1f94305](https://github.com/vtexdocs/devportal/commit/1f943050fd69f6b57bc56b32951413ebf5ffac49))

## [0.24.0](https://github.com/vtexdocs/devportal/compare/v0.23.0...v0.24.0) (2022-08-05)


### Features

* **contributors:** add contributors to mobile breakpoints ([09d9612](https://github.com/vtexdocs/devportal/commit/09d96124a51d9289dedad16f44bbd6b16737f50a))
* **on-this-page:** add arrows and close icons ([cf60c14](https://github.com/vtexdocs/devportal/commit/cf60c14e891dbd673f68b6e9e1ee55260dd28028))
* **on-this-page:** add component to API Guide pages ([edde134](https://github.com/vtexdocs/devportal/commit/edde134c5b63b94b959e9cfb50a325d023f0b290))
* **on-this-page:** add height and with animation ([d229bd3](https://github.com/vtexdocs/devportal/commit/d229bd384d99dca4c95ed850594d8db116a261c9))
* **on-this-page:** add mobile TOC and contributors component ([dd3b12c](https://github.com/vtexdocs/devportal/commit/dd3b12c6de63c53f6f4b613858f0bb99ab38567e))


### Bug Fixes

* **on-this-page:** change icon ([c782cff](https://github.com/vtexdocs/devportal/commit/c782cff54b7ee7082af3d182129e02601b01c044))
* **on-this-page:** change layout on first breakpoint ([1b48e91](https://github.com/vtexdocs/devportal/commit/1b48e9187d47900c1f271925d138db4efbe98414))
* **on-this-page:** close on this page when user clicks a heading ([8f5bc78](https://github.com/vtexdocs/devportal/commit/8f5bc7869986dabe0ca3f098a37692e9e0a2bc18))
* **on-this-page:** fix button text-icon orientation ([9c6acb5](https://github.com/vtexdocs/devportal/commit/9c6acb51540acc66143bb9d1f6ba64ccf5e0a0c5))
* **on-this-page:** fix style bugs on TOC and contributors component ([d413414](https://github.com/vtexdocs/devportal/commit/d413414ae76661c929a95a4691fbbe8cd161d188))
* **on-this-page:** improve height and width animations ([b223188](https://github.com/vtexdocs/devportal/commit/b223188feaa0e1c573cc46d2418b5a0544832820))
* **on-this-page:** remove contributors from component ([a8b2f7e](https://github.com/vtexdocs/devportal/commit/a8b2f7e8232cd0b6d5de78abe7535aa1119e19d4))


### Refactoring

* **on-this-page:** move strings to JSON ([b2df44d](https://github.com/vtexdocs/devportal/commit/b2df44d7e9c65d5db8e1e8b38e155c3b9b455c17))

## [0.23.0](https://github.com/vtexdocs/devportal/compare/v0.22.1...v0.23.0) (2022-08-01)


### Features

* **release-section:** update the getData method to return release date inside of the release card ([9f647ef](https://github.com/vtexdocs/devportal/commit/9f647ef2c57b6c3a079e40805ff4385320e0952a))


### Bug Fixes

* **release-note:** add the hover behavior on release title/arrow and fix the days elapsed logic ([6225ac5](https://github.com/vtexdocs/devportal/commit/6225ac5d88972524b5d6611e72fd06c64a6227c6))


### Refactoring

* **release section:** add the days elapsed text in messages and add one example to release data ([24231e9](https://github.com/vtexdocs/devportal/commit/24231e93f8574004621d32f80661715ce88aff3d))

### [0.22.1](https://github.com/vtexdocs/devportal/compare/v0.22.0...v0.22.1) (2022-07-29)


### Chore

* **rapidoc:** update rapidoc version ([98eecc1](https://github.com/vtexdocs/devportal/commit/98eecc1317748f5874ed74911c7d1bf09adb371d))
* **rapidoc:** update rapidoc version ([5cdc367](https://github.com/vtexdocs/devportal/commit/5cdc36703d269d671f3ceba758a5642679f85520))

## [0.22.0](https://github.com/vtexdocs/devportal/compare/v0.21.0...v0.22.0) (2022-07-25)


### Features

* **tooltip:** add the sx prop to tooltip component ([d5db1d9](https://github.com/vtexdocs/devportal/commit/d5db1d95c98e5d2bff33aaf0d44877383f2f9a3c))


### Bug Fixes

* **sidebar:** sidebar-section title and the icon description behavior on medium screens ([df88d6b](https://github.com/vtexdocs/devportal/commit/df88d6bba9e23bcad484b34a7884cfd4877f7914))
* **sidebar:** update the sidebar style ([65e7b30](https://github.com/vtexdocs/devportal/commit/65e7b30243e376953e20e2126e9a68220e36b8a8))

## [0.21.0](https://github.com/vtexdocs/devportal/compare/v0.20.0...v0.21.0) (2022-07-22)


### Bug Fixes

* **header:** update header style ([add32a2](https://github.com/vtexdocs/devportal/commit/add32a2eec1c3ad323001a9546392123a9a723dc))

## [0.20.0](https://github.com/vtexdocs/devportal/compare/v0.19.1...v0.20.0) (2022-07-14)


### Chore

* **package.json:** update rapidoc version ([dfd5500](https://github.com/vtexdocs/devportal/commit/dfd5500684f82a337004caa3220cd5ab40013b3e))
* **rapidoc:** update rapidoc version ([0d9a1b5](https://github.com/vtexdocs/devportal/commit/0d9a1b5ad87a6a5ee449ba254339273af592683a))

### [0.19.1](https://github.com/vtexdocs/devportal/compare/v0.19.0...v0.19.1) (2022-07-11)


### Bug Fixes

* **documentation-card:** fix description size on large screens ([f66b3b3](https://github.com/vtexdocs/devportal/commit/f66b3b3993a0f9b61072b6b6a7e249ad5352a8e3))
* **documentation-section-card:** fix card margin and description size ([7a84191](https://github.com/vtexdocs/devportal/commit/7a84191c499e4d7296f5b8595ddc9a5f78f861ac))
* **language.json:** update documentation cards description ([de39630](https://github.com/vtexdocs/devportal/commit/de39630a2688740139a6a0ac9a1ced1057759906))


### Refactoring

* **constants:** update the documentation/updates description messages ([ebb7ee8](https://github.com/vtexdocs/devportal/commit/ebb7ee855a98d4ef815fa29df950a17b002588e4))
* **documentation-card:** card type ([fc46fc6](https://github.com/vtexdocs/devportal/commit/fc46fc67cbb7aa359a0a377ed1d171ba1c102f01))
* **documentation-card:** enforce the containerType ([4823f68](https://github.com/vtexdocs/devportal/commit/4823f689a5218c176ba4d0b6cb9654be32d63bb7))

## [0.19.0](https://github.com/vtexdocs/devportal/compare/v0.18.1...v0.19.0) (2022-07-11)


### Bug Fixes

* **font:** update brand-ui version with new font ([7fafd26](https://github.com/vtexdocs/devportal/commit/7fafd2692ada10d6652884f2b6adf8dad16a8d35))

### [0.18.1](https://github.com/vtexdocs/devportal/compare/v0.18.0...v0.18.1) (2022-07-11)


### Features

* **documentation-section-card:** add tooltip on description overflow ([a8af997](https://github.com/vtexdocs/devportal/commit/a8af9974ad5631054b69bd0146e8244849ef6b77))


### Bug Fixes

* **documentation-section-card:** use the translated description as tooltip label ([65bcafb](https://github.com/vtexdocs/devportal/commit/65bcafb54fb615a0ded4c149462e1f6c1d746f89))
* **tooltip:** update tooltip on cards ([7fab2d9](https://github.com/vtexdocs/devportal/commit/7fab2d9f132ff930c8c8b990dc2b8b517ef7ab03))

## [0.18.0](https://github.com/vtexdocs/devportal/compare/v0.17.3...v0.18.0) (2022-07-08)


### Features

* **vtex-io:** add hover and active animations to whats next cards ([d8cd9df](https://github.com/vtexdocs/devportal/commit/d8cd9df2f5d87a7db1d2e9b053a69b51731ab141))
* **vtex-io:** add whats next card component ([45990ba](https://github.com/vtexdocs/devportal/commit/45990ba7cfa5b9b690d66b2461cf02a8210d3a1c))
* **vtex-io:** add whats next cards data ([42befc0](https://github.com/vtexdocs/devportal/commit/42befc042f97bce7f407de1310c4c9ea82353f48))
* **vtex-io:** add whats next cards to VTEX IO page ([2459341](https://github.com/vtexdocs/devportal/commit/2459341339917b02852cb3140b66c5004a0bb4a0))


### Bug Fixes

* **vtex-io:** add caret and fix card styles ([a072d35](https://github.com/vtexdocs/devportal/commit/a072d35804fa9b3dcb881f99aaf034652760c75a))
* **whats-next-card:** fix shadow on hover ([fc725a9](https://github.com/vtexdocs/devportal/commit/fc725a92aab32348e5450e3426ee2d1553aae510))
* **whats-next-cards:** fix caret color ([2f6f0b1](https://github.com/vtexdocs/devportal/commit/2f6f0b1a0d95cede67435792c8a8d024935d8874))


### Refactoring

* **whats-next-card:** remove duplicate type ([564737c](https://github.com/vtexdocs/devportal/commit/564737cb63c8f20b445a43f76aa4759079bee760))

### [0.17.3](https://github.com/vtexdocs/devportal/compare/v0.17.2...v0.17.3) (2022-07-05)


### Bug Fixes

* **sidebar:** fix multiple active elements ([b1f7672](https://github.com/vtexdocs/devportal/commit/b1f76727262cc55a39d8b609e509d0c04575eb32))


### Refactoring

* **search:** rename search context file ([071d28e](https://github.com/vtexdocs/devportal/commit/071d28e129f5c1788852024b4b81339fd0475358))
* **sidebar:** remove firstActive from sidebar elements props ([9747b63](https://github.com/vtexdocs/devportal/commit/9747b63550ee28e97c12190bc43b8e13eb3d51c0))
* **sidebar:** remove unecessary variables from sidebar context ([4d03501](https://github.com/vtexdocs/devportal/commit/4d0350145b9691f896ba8992a9aa1c21a1b18a55))
* **sidebar:** rename sidebar context ([68389de](https://github.com/vtexdocs/devportal/commit/68389de3c62d6bba708967293b51004e86681188))

### [0.17.2](https://github.com/vtexdocs/devportal/compare/v0.17.1...v0.17.2) (2022-06-30)


### Bug Fixes

* **documentation-page:** page margin in mobile screen ([d2d5c13](https://github.com/vtexdocs/devportal/commit/d2d5c1340a4814b8f0b59efc6ae58bb6979c316f))

### [0.17.1](https://github.com/vtexdocs/devportal/compare/v0.17.0...v0.17.1) (2022-06-22)


### Refactoring

* **header:** change DOM access to reference access ([232343c](https://github.com/vtexdocs/devportal/commit/232343cb50504c5ca587f966beee764b628824aa))

## [0.17.0](https://github.com/vtexdocs/devportal/compare/v0.16.0...v0.17.0) (2022-06-22)


### Features

* add string utils ([a63d1b2](https://github.com/vtexdocs/devportal/commit/a63d1b266851ec01b4132e91343a84ab837558c1))
* **api-guide:** add table of contents component ([a25f3e7](https://github.com/vtexdocs/devportal/commit/a25f3e731c6a53bc8e89ad72a861c9c2f859b3b6))
* **api-guides:** add another API guide example page ([73b9bbd](https://github.com/vtexdocs/devportal/commit/73b9bbd6fe93238bf493415b76aa92f7f2c4491d))
* **api-guides:** add table of contents to documentation pages ([bad66b9](https://github.com/vtexdocs/devportal/commit/bad66b958c895800cd4b9959e1dc16aea32eabc8))
* **api-guides:** track visible headers and allow anchor links ([0d66276](https://github.com/vtexdocs/devportal/commit/0d66276c66936a5671dee6fb188bbb795b5a55f5))
* **table-of-contents:** add height transition animation ([7c68d91](https://github.com/vtexdocs/devportal/commit/7c68d9122055f890fa64b2953c6487edd1bb852c))


### Bug Fixes

* **api-guides:** fix active item when clicking a title inside the table of contents ([6a324cf](https://github.com/vtexdocs/devportal/commit/6a324cf6e032b73418affb7b27e0df41226d97ae))
* **api-guides:** fix API guide pages right container width ([ec2ac63](https://github.com/vtexdocs/devportal/commit/ec2ac637800525b2dd0055a712d7859eadf6ef8d))
* **string-utils:** fix bug in removeHTML ([149438b](https://github.com/vtexdocs/devportal/commit/149438bc80a1ec1f441a3b84b1ecf17fb530c4a6))
* **string-utils:** fix slugify bugs ([b6a556e](https://github.com/vtexdocs/devportal/commit/b6a556eaba8ae976d08319c803374fd0eeb1c1d5))
* **table-of-contents:** fix bugs when scrolling fast or following anchor links ([2335fcc](https://github.com/vtexdocs/devportal/commit/2335fcc79c5a1f5270c629c13a719a77bd670415))
* **table-of-contents:** fix style bugs and add responsivity ([006dfb3](https://github.com/vtexdocs/devportal/commit/006dfb311b0eb52b7498e65db3c0eb2e48d2b893))
* **table-of-contents:** fix viewport margins and scrolling-up bugs ([3800ff0](https://github.com/vtexdocs/devportal/commit/3800ff0b21b3115ab4981ff67caba35bf4a90608))
* **table-of-contents:** remove ':' from title ([072e01b](https://github.com/vtexdocs/devportal/commit/072e01b4205695c0d616bf026a9dbcd2ad54f9f2))


### Refactoring

* **api-guides:** move markdown components to another file and rename headers to headings ([66026d2](https://github.com/vtexdocs/devportal/commit/66026d28d504da6ca4339c8aec9c5d47e221af12))
* **table-of-contents:** move headers array to context ([62f1059](https://github.com/vtexdocs/devportal/commit/62f1059864c0f3b452836cbf3cb606cb0c616675))


### Style

* **api-guides:** fix prettier issue ([6572084](https://github.com/vtexdocs/devportal/commit/657208402a046d21115a516de5ae2d6bc22bc953))


### Chore

* **dependencies:** add react-animate-height ([e13fac6](https://github.com/vtexdocs/devportal/commit/e13fac6c462cab54af4ec92f4e519ef12411e957))

## [0.16.0](https://github.com/vtexdocs/devportal/compare/v0.15.2...v0.16.0) (2022-06-21)


### Features

* **feedback-modal:** add the feedback modal component ([cbd3290](https://github.com/vtexdocs/devportal/commit/cbd329037d4abbae7f5c644bea1923ab678ced6f))
* **feedback-modal:** add the modal position on large screens ([fc72a53](https://github.com/vtexdocs/devportal/commit/fc72a53a45b14b5ff5e93a8582d897ee298ba672))
* **feedback-section:** link the modal component in the feedback section ([75bb86d](https://github.com/vtexdocs/devportal/commit/75bb86d77cb381d0c2f7f812fbf7e8b7d336d3f4))
* **hooks:** add the useClickOutside hook ([67bf548](https://github.com/vtexdocs/devportal/commit/67bf54807cc91533d53bea52e68fc3e3584056be))


### Bug Fixes

* **feedback-modal:** change the input to textarea ([45d4299](https://github.com/vtexdocs/devportal/commit/45d4299222ce6d893b7d9a72c4c2cd6a68f903bb))
* **feedback-modal:** feedback modal props ([ec1db9f](https://github.com/vtexdocs/devportal/commit/ec1db9f840de9f86ad4087ecc33a9342e4eed41e))
* **feedback-modal:** fix the modal arrow position on cross-browser ([c6af71f](https://github.com/vtexdocs/devportal/commit/c6af71ffc0024408bfb3073c2b64b507e1e73b66))
* **feedback-section:** fix the dislike button margin ([b20506a](https://github.com/vtexdocs/devportal/commit/b20506ab078437c17253442fc90f2fba7fbe18b7))
* **feedback-section:** requested changes ([d60b65a](https://github.com/vtexdocs/devportal/commit/d60b65ac788d9eeef4579626a6485144acf43330))
* **feedback-section:** set button active when modal is open ([dff88cc](https://github.com/vtexdocs/devportal/commit/dff88ccba25630e4ba2aa29d5b52dd6557981081))
* **header:** fix header opening when the modal opens ([69a8c3a](https://github.com/vtexdocs/devportal/commit/69a8c3ab250bc31c5bbb076dfe8bbca27b3d172e))
* **useclickoutside:** remove eventListener on cleanup function ([f7570f5](https://github.com/vtexdocs/devportal/commit/f7570f5296075e77a8a28af91eaee8d79a8ec84f))


### Refactoring

* **feedback-modal:** use Refs for DOM elements ([1e2dfa3](https://github.com/vtexdocs/devportal/commit/1e2dfa3a9d1a3cbfff6269f88adfb4834bf3f5a2))
* **feedback-modal:** variable names ([aafebb6](https://github.com/vtexdocs/devportal/commit/aafebb625f121cd16a44ccd82a1c04942a770155))


### Style

* **feedback-modal:** centralize the modal with the chosen button ([29995b6](https://github.com/vtexdocs/devportal/commit/29995b636d9523a99bd392aa15750750e2b101fe))
* **global.css:** add the body class to block scrolling ([6b57679](https://github.com/vtexdocs/devportal/commit/6b57679ef858080844ec102ee8ff5419ff3d04b6))

### [0.15.2](https://github.com/vtexdocs/devportal/compare/v0.15.1...v0.15.2) (2022-06-14)


### Build

* **rapidoc:** update rapidoc version ([9fffed7](https://github.com/vtexdocs/devportal/commit/9fffed7cf1e5a6bfb3754019d1377f7e230018c2))
* **rapidoc:** update rapidoc version to v1.0.4-vtex ([9a6da54](https://github.com/vtexdocs/devportal/commit/9a6da547595f4ee7afebb013188316d001a19f35))

### [0.15.1](https://github.com/vtexdocs/devportal/compare/v0.15.0...v0.15.1) (2022-06-14)


### Build

* **rapidoc-request-section:** update rapidoc version ([36f681d](https://github.com/vtexdocs/devportal/commit/36f681d2c7133ca9a07131db509a7bcc5b0be1bd))
* **rapidoc:** update rapidoc version ([fde9a03](https://github.com/vtexdocs/devportal/commit/fde9a03ebed447a4b29132adfb703ceaf20b0f01))
* **rapidoc:** update rapidoc version ([d547e0e](https://github.com/vtexdocs/devportal/commit/d547e0e95204c71919d6c08427b101a618baea0e))

## [0.15.0](https://github.com/vtexdocs/devportal/compare/v0.14.0...v0.15.0) (2022-06-14)


### Features

* **feedback icons:** add the edit and like icons ([e1170a8](https://github.com/vtexdocs/devportal/commit/e1170a8dce475609517dc6e5f3316c69ea468097))
* **feedback-section:** add the component to api-guides page ([791b988](https://github.com/vtexdocs/devportal/commit/791b988544c73189a440840dc060995397f7f896))
* **feedbacksection:** create the feedback section ([89d45ad](https://github.com/vtexdocs/devportal/commit/89d45ad9f89427bdd30a097250b8934c162ee068))
* **feedbacksection:** the logic of the feedback choice ([f69475f](https://github.com/vtexdocs/devportal/commit/f69475f5c2453d21ff4e0a5f03ef586c686a5005))
* **likeselectedicon:** add the icon with the feedback response ([49e3df3](https://github.com/vtexdocs/devportal/commit/49e3df35365ff4b849b581fa2ba7d222fc63de84))


### Bug Fixes

* **feedback-section:** fix like button margin ([b3a3d56](https://github.com/vtexdocs/devportal/commit/b3a3d5690227fc5893218df18d08cdd6e3af0bbe))


### Style

* **feedback-section:** external link security and like margin ([0bca739](https://github.com/vtexdocs/devportal/commit/0bca7396220080dd1f6126ab7b937e478fdb36e8))
* **language.json:** add the feedback texts to language file ([ba97a09](https://github.com/vtexdocs/devportal/commit/ba97a09749124679a13cdadf8385bcd27c96f165))

## [0.14.0](https://github.com/vtexdocs/devportal/compare/v0.13.1...v0.14.0) (2022-06-13)


### Features

* **constants:** adds new release examples ([2236abe](https://github.com/vtexdocs/devportal/commit/2236abeeda2f602cb3a74628f4ad755d0debbdb4))
* **release-note:** adds new props ([556f6af](https://github.com/vtexdocs/devportal/commit/556f6afdff6790c351d6544971774583af3f74b7))
* **release-note:** calls date function and adds styles ([cb07760](https://github.com/vtexdocs/devportal/commit/cb077604853ade089c363746b83d9e9579994e98))
* **release-note:** create getDate function ([f92a9db](https://github.com/vtexdocs/devportal/commit/f92a9db9f4d1f16717da6230a4ed879493807696))
* **release-note:** hides releases that shouldn't appear ([b64337d](https://github.com/vtexdocs/devportal/commit/b64337dc89d2757bc9dfae92fd4983ac75cbe242))
* **release-styles:** create arrow styles and fix description width ([0126e2e](https://github.com/vtexdocs/devportal/commit/0126e2e2dcb43d22a02728321c2ff7c68d566038))
* **release-toggle:** create toggle for open and close the release description ([edd2c2e](https://github.com/vtexdocs/devportal/commit/edd2c2ee5af0af76bec57fd0fbb3d90f6094f59d))


### Bug Fixes

* **context:** remove unnecessary values from context ([ed208d9](https://github.com/vtexdocs/devportal/commit/ed208d99d0a7f08f4b7146dab2412a18bace035e))
* **release-icons:** fix icons color ([f7df051](https://github.com/vtexdocs/devportal/commit/f7df051ca8cad81cc5cd1a9bee6edef2912120e4))
* **release-note:** changes type date to string ([70bd1b5](https://github.com/vtexdocs/devportal/commit/70bd1b5f82e05c772b0bc0f65c11be1d4f001d84))
* **release-note:** fix spacing ([a29314c](https://github.com/vtexdocs/devportal/commit/a29314cf10d066d4577c6331dd57fde5d91a65f6))
* **release-note:** fix timeline width ([0090705](https://github.com/vtexdocs/devportal/commit/00907059af0e8dc053a4c148ecbb5250cd60c896))
* **release-note:** fix update type ([0ad0e70](https://github.com/vtexdocs/devportal/commit/0ad0e7002c6019b6d985c1f35887be7b84da4606))
* **release-notes:** fix spacing and color ([db2e8ba](https://github.com/vtexdocs/devportal/commit/db2e8ba0f6f6648d65bdc8c7894dec9f18915303))


### Chore

* **rapidoc:** update rapidoc version ([60f85c8](https://github.com/vtexdocs/devportal/commit/60f85c8c436ec3fdf45a4d325dec92bb0f043ab2))

### [0.13.1](https://github.com/vtexdocs/devportal/compare/v0.13.0...v0.13.1) (2022-06-10)


### Features

* **rapidoc-auth:** add correct styles to rapidoc's authentication page ([b59e575](https://github.com/vtexdocs/devportal/commit/b59e575b51182288d2008edbc5c2e70d4d50852d))

## [0.13.0](https://github.com/vtexdocs/devportal/compare/v0.12.1...v0.13.0) (2022-06-06)


### Features

* add see also section at the bottom of an api-guide documentation ([ad9db35](https://github.com/vtexdocs/devportal/commit/ad9db35286e714940e06de6e5e0d5d09fcf1f1f0))


### Bug Fixes

* adjust the width of see-also-section and documentation-card components ([271f0e0](https://github.com/vtexdocs/devportal/commit/271f0e04c6fb0808d79781ae3162623461df95b3))
* **documentation-card:** adjust titleContainer marginBottom attribute ([bf6c6d7](https://github.com/vtexdocs/devportal/commit/bf6c6d7f4d374fdf3b7de5c417de6acf106f0c22))
* **see-also-section:** adjust section margin and title font-weight ([cd9d091](https://github.com/vtexdocs/devportal/commit/cd9d091a2cc64ab419feda0d6ab89bd68c30d64f))


### Refactoring

* adapt documentation-card component to work properly in the see-also-section component ([ab578ff](https://github.com/vtexdocs/devportal/commit/ab578ff005f421273ec8f5716d2f449bcd685a95))
* rename two components ([130e1d7](https://github.com/vtexdocs/devportal/commit/130e1d75ba01577bdd5be80943b21aeb89b5c128))


### Tests

* add a test for an api guides page and update the value of a selector ([dcff4d0](https://github.com/vtexdocs/devportal/commit/dcff4d003ee5f3a9eca583934ea8a69e44194d5f))

### [0.12.1](https://github.com/vtexdocs/devportal/compare/v0.12.0...v0.12.1) (2022-06-01)


### Chore

* **gitignore:** remove rapidoc-min.js file from version control ([40dc2fd](https://github.com/vtexdocs/devportal/commit/40dc2fda96d38b46f570e4415c6de31db3538d1b))


### Style

* **rapidoc:** remove style overrides related to method-path section ([8f136fe](https://github.com/vtexdocs/devportal/commit/8f136fe5c8938645effdc8f0465e9000499c6187))


### Build

* **rapidoc:** update rapidoc version ([4415654](https://github.com/vtexdocs/devportal/commit/4415654f2e75e74935db2c41eb9b07686abe0056))

## [0.12.0](https://github.com/vtexdocs/devportal/compare/v0.11.0...v0.12.0) (2022-05-30)


### Features

* **vtex-io:** add correct layout to VTEX IO page ([eb9d444](https://github.com/vtexdocs/devportal/commit/eb9d444ea83fe33f386de401bcb6ff324ba54d04))
* **vtex-io:** add linear gradient to welcome image ([4528650](https://github.com/vtexdocs/devportal/commit/452865025e0ac77f79d4457020103e470294ee48))


### Bug Fixes

* **vtex-io:** fix style bugs on first breakpoint ([ee4ffd3](https://github.com/vtexdocs/devportal/commit/ee4ffd38ddf7ac3f961e6a6ea583edcc1429d041))
* **vtex-io:** fix width of line that separates the welcome and content sections ([d1d32c8](https://github.com/vtexdocs/devportal/commit/d1d32c8be48054cef751e3f1e7d263da8d0b9ad0))

## [0.11.0](https://github.com/vtexdocs/devportal/compare/v0.10.0...v0.11.0) (2022-05-27)


### Features

* add custom tooltip component ([02f5a82](https://github.com/vtexdocs/devportal/commit/02f5a823832270d4bced972bc7dd358d1d1338b0))


### Bug Fixes

* **api-guides:** fix tooltip in contributors component ([3cc7b83](https://github.com/vtexdocs/devportal/commit/3cc7b839a8d18a9835f75de45307fdf14de860bb))

## [0.10.0](https://github.com/vtexdocs/devportal/compare/v0.9.2...v0.10.0) (2022-05-27)


### Features

* **messages:** adds release messages ([754d1d7](https://github.com/vtexdocs/devportal/commit/754d1d76083e0b32e2e32444bec8b51e7a4bee38))
* **release-note:** create release component and styles ([e6150aa](https://github.com/vtexdocs/devportal/commit/e6150aaef9c84288caa870ed2a6782163f9d197d))
* **release-note:** create release temporary data ([9778224](https://github.com/vtexdocs/devportal/commit/97782248d77439d56770608eb2f83e035256df9c))
* **release-note:** create release type ([c0d41b9](https://github.com/vtexdocs/devportal/commit/c0d41b95f5315ba9c2288b7249d9c444137f2a35))
* **release-page:** create release page and route ([a1fb7bc](https://github.com/vtexdocs/devportal/commit/a1fb7bc4956fb6d74de6a0a6079f0fda8ab69124))
* **release-section:** create release section and styles ([4d5217d](https://github.com/vtexdocs/devportal/commit/4d5217d4191306a151f69b5ed53f8faaa0519699))
* **styles:** create release styles ([3f973cd](https://github.com/vtexdocs/devportal/commit/3f973cd8ece31a2e8b05d9b02a10de85b7b2a8ff))
* **update-functions:** moves days elapsed function to utils ([ee1e003](https://github.com/vtexdocs/devportal/commit/ee1e00360ef50223874b18dbca6908cb3932cda8))


### Bug Fixes

* **release-note:** fix styles names ([84aaf7c](https://github.com/vtexdocs/devportal/commit/84aaf7c37f2d44bcce7e03b9304dbf674faa58f7))
* **release-note:** styles adjusts and move release notes to the correct page ([199b5ce](https://github.com/vtexdocs/devportal/commit/199b5ce7abd124df77803d4d3d2c6107bcab32f0))

### [0.9.2](https://github.com/vtexdocs/devportal/compare/v0.9.1...v0.9.2) (2022-05-19)


### Build

* **rapidoc:** add script to fetch rapidoc-min.js from vtexdocs/RapiDoc ([7ea1238](https://github.com/vtexdocs/devportal/commit/7ea1238647723bd58a079c8426ca3351333c866e))

### [0.9.1](https://github.com/vtexdocs/devportal/compare/v0.9.0...v0.9.1) (2022-05-19)


### Bug Fixes

* **cypress-workflow:** replace npm commands with yarn ([ad280d8](https://github.com/vtexdocs/devportal/commit/ad280d878318125bc9c9fc4ef3f3264a718f9218))
* **cypress-workflow:** update yarn install command ([5c05067](https://github.com/vtexdocs/devportal/commit/5c050673d0e4d0e26510f21f64c5eab7a5824b62))

## [0.9.0](https://github.com/vtexdocs/devportal/compare/v0.8.3...v0.9.0) (2022-05-19)


### Features

* **api-guides:** add contributors component ([b8482e4](https://github.com/vtexdocs/devportal/commit/b8482e467b79cf5293e92c8d8f5b2b140bfb8bbd))
* **api-guides:** add transition effect to contributors component toggle ([11f27d3](https://github.com/vtexdocs/devportal/commit/11f27d3df85ce447a4a7c86ad7927b0d3b181508))
* **api-guides:** change API guides documentation page layout ([3f87916](https://github.com/vtexdocs/devportal/commit/3f8791633cfef253852c6048afb2787b567f93a1))


### Bug Fixes

* **api-guides:** fix contributors component toggle animation speed ([584f8a8](https://github.com/vtexdocs/devportal/commit/584f8a8429e5c6e5c60750ae21f217a2724aa595))
* **markdown-renderer:** fix image width inside markdown ([d82dc58](https://github.com/vtexdocs/devportal/commit/d82dc58cd165de99677f61172913d1f9afcb4924))
* **sidebar:** fix sidebar changing width and appearing ing first breakpoint ([6e2ed6d](https://github.com/vtexdocs/devportal/commit/6e2ed6d0e56b0a4f8e3215a6816a63ebfc9e1d97))


### Style

* **markdown-renderer:** disable no-img-element ([aa4babd](https://github.com/vtexdocs/devportal/commit/aa4babdaf6fda6f2efcc9765b7329f2413ef56e3))

### [0.8.3](https://github.com/vtex/devportal/compare/v0.8.2...v0.8.3) (2022-05-10)


### Features

* **last-updates:** add documentation updates and release notes pages ([d8bbbd4](https://github.com/vtex/devportal/commit/d8bbbd416ea9461e14f9a89677802a313440e4bd))


### Bug Fixes

* **last-updates:** render one card for each type of update ([ed9aa2c](https://github.com/vtex/devportal/commit/ed9aa2c3ca8449f9934e5cd11285525960c5c711))

### [0.8.2](https://github.com/vtex/devportal/compare/v0.8.1...v0.8.2) (2022-05-09)


### Style

* **rapidoc:** add tag attributes and css styles to RapiDoc elements ([f1a5364](https://github.com/vtex/devportal/commit/f1a53647809129dd05c4d72e36d51510944862e9))

### [0.8.1](https://github.com/vtex/devportal/compare/v0.8.0...v0.8.1) (2022-05-09)


### Refactoring

* change landing page title ([d220a0a](https://github.com/vtex/devportal/commit/d220a0ae0ec759c3542edbf12cf76c8b37b5081d))


### Tests

* add a test to simulate user navigation in an API reference page ([07db875](https://github.com/vtex/devportal/commit/07db875664b65eacd3c87c68e2f315b2d673a340))

## [0.8.0](https://github.com/vtex/devportal/compare/v0.7.0...v0.8.0) (2022-05-06)


### Features

* **search-page-filter:** add the filter logic ([f217f27](https://github.com/vtex/devportal/commit/f217f27c9f326b85131886a5e9f6d27380f3ffe8))
* **search-page-filter:** add the occurrence count feature ([536484e](https://github.com/vtex/devportal/commit/536484e807099118ab54abbb0dd6eb94ae849124))


### Bug Fixes

* **search-section:** fix the all-results filter ([81ecd55](https://github.com/vtex/devportal/commit/81ecd55ebf6b581b3a27b6c8980ee3ef0a98873e))


### Refactoring

* **search-resuls:** move the mocked data to outside of component ([cda163e](https://github.com/vtex/devportal/commit/cda163e8c3517e10bbb18364287e7458da7ddcc9))

## [0.7.0](https://github.com/vtex/devportal/compare/v0.6.0...v0.7.0) (2022-05-02)


### Features

* **searchcontext:** create the SearchContext ([262bf3b](https://github.com/vtex/devportal/commit/262bf3babfd8ae266da71e06c053efff1ec00060))


### Bug Fixes

* **search-components:** update paths after rebase ([7300bfc](https://github.com/vtex/devportal/commit/7300bfc45df9c6102b5822e664364f1699d84b36))


### Refactoring

* **allresults section:** code refactoring to make all-results section as SearchSection componen ([e8c881c](https://github.com/vtex/devportal/commit/e8c881c9c3499e53680751f06f44f5527d1dfc84))
* **search-results:** create the SearchResults component ([5ead14b](https://github.com/vtex/devportal/commit/5ead14bce6e7492cb4ac02fd79eaaf6db4fb0984))
* **searchcontext:** remove unnecessary function ([b82b43e](https://github.com/vtex/devportal/commit/b82b43e52a1d32acf73d61494e0029406a99b4a7))
* **searchcontext:** update the filter type in searchContext ([658f2ba](https://github.com/vtex/devportal/commit/658f2ba4e7717311dc613f323f41660ab3cfc569))


### Chore

* update rebase ([81dd140](https://github.com/vtex/devportal/commit/81dd1408479a51e5429eadf4d85d552343e659ab))

## [0.6.0](https://github.com/vtex/devportal/compare/v0.5.2...v0.6.0) (2022-05-02)


### Features

* **markdown:** add two markdown example files ([f4d2e6f](https://github.com/vtex/devportal/commit/f4d2e6fccb348e3dfe21d27c01f9a430e8b1973a))
* **markdown:** render example markdowns ([03c7308](https://github.com/vtex/devportal/commit/03c7308d9c5d0c70b223e7a45e89c9827c17d0ee))


### Refactoring

* **api-reference:** move OpenAPI specs to /docs/api-reference ([5829e87](https://github.com/vtex/devportal/commit/5829e87c76fef21e71c57148dfb778f7b5d4c103))

### [0.5.2](https://github.com/vtex/devportal/compare/v0.5.1...v0.5.2) (2022-04-28)


### Tests

* add three tests to the landing page ([5e5e9d1](https://github.com/vtex/devportal/commit/5e5e9d1ac073442fcffb024d26d2fa0f68ecbc73))


### Refactoring

* add a selector attribute in tested components ([6e6baed](https://github.com/vtex/devportal/commit/6e6baed0c1caebc3928c4f7614f6fca76d4ad7a1))
* set src/tests/cypress as test folder ([3a79203](https://github.com/vtex/devportal/commit/3a792033195cbc94a75d82cb3fc1e605ce454b0c))

### [0.5.1](https://github.com/vtex/devportal/compare/v0.5.0...v0.5.1) (2022-04-28)


### Features

* **sidebar:** add the sidebar props ([6da63ff](https://github.com/vtex/devportal/commit/6da63ff99ebe5b21e8566b92c7a4a8c067fa6408))


### Bug Fixes

* **sidebar:** fix key warning ([9dae009](https://github.com/vtex/devportal/commit/9dae009dedd1ddd4c8592e285c37a1c803c957ed))
* **sidebar:** use the Link component from next ([fe8d0ab](https://github.com/vtex/devportal/commit/fe8d0abc50bd5050802b12760dfdb8fc035bf35d))


### Refactoring

* create constants.ts and refact the typings ([c06bb03](https://github.com/vtex/devportal/commit/c06bb03d69e9058a73684c4fe40d48fee1181c36))
* **documentation:** refactoring the cards data structure and update the type ([ff98bdf](https://github.com/vtex/devportal/commit/ff98bdf329950c85e8b7132bd923a91ebf3a5a86))
* **search:** update the documentation/notes data and update the types ([4cff017](https://github.com/vtex/devportal/commit/4cff01735d5c1ac2240f2d1f8cc16789edbd3bc8))
* **sidebar:** create the SideBarIcon component and refactor the data structure ([83bb99f](https://github.com/vtex/devportal/commit/83bb99f9dedcbeacf5f765fb61030da54d61735b))

## [0.5.0](https://github.com/vtex/devportal/compare/v0.4.1...v0.5.0) (2022-04-26)


### Features

* **search-page:** export icon data and call the searchsection component ([bb18fda](https://github.com/vtex/devportal/commit/bb18fda0cbb4481e257d0370f6ab995f0d7ab465))
* **search-section:** create the search-section component ([449140b](https://github.com/vtex/devportal/commit/449140bf8af4c7072014e79e47aba955d038817b))
* **search-section:** implement hover effect ([881b857](https://github.com/vtex/devportal/commit/881b857987492ba8455c2284fe0bbb4f378ae42c))
* **search-sections:** create the search-sections component ([0756d9c](https://github.com/vtex/devportal/commit/0756d9c6a45afe9c7b8bc6d837437f1d6869ea16))


### Bug Fixes

* **search-sections:** make the all-results element clickable ([3c4336a](https://github.com/vtex/devportal/commit/3c4336a330952946fceabde239a405699aac296d))
* **sidebar:** fix items title type ([a480b45](https://github.com/vtex/devportal/commit/a480b452c3e72db414acb9296f6949237d3b0bd4))


### Refactoring

* **types:** split the DocTitle type and refact the search components types ([5735dec](https://github.com/vtex/devportal/commit/5735decdb09c1c7c96b2c8d3fc0b6d44f6e0ac39))


### Style

* **search-section:** add the border-radius to this component on hover ([13ed2c9](https://github.com/vtex/devportal/commit/13ed2c913f47067c9e71c19cd92e0781e71ca4a0))

### [0.4.1](https://github.com/vtex/devportal/compare/v0.4.0...v0.4.1) (2022-04-25)


### Bug Fixes

* **footer:** adds a box on footer component and fix responsiveness ([a900854](https://github.com/vtex/devportal/commit/a900854087bf64bd4a5ff9d968cab44008901ed0))
* **footer:** adjust link padding ([402304e](https://github.com/vtex/devportal/commit/402304eab89c018bf19fda2f450381c084b7817a))

## [0.4.0](https://github.com/vtex/devportal/compare/v0.3.1...v0.4.0) (2022-04-20)


### Features

* **header:** add custom scrollbar to dropdown menu ([712ef8d](https://github.com/vtex/devportal/commit/712ef8d2ef44175f0455075e0769dbfaa5f52588))
* **header:** add Docs dropdown menu ([96eb711](https://github.com/vtex/devportal/commit/96eb711fd1e71413d8aa9d16c4d85aad04318f16))
* **header:** add interactivity to Docs button ([939a1c3](https://github.com/vtex/devportal/commit/939a1c3e89ee9161be293348bf9367de55081081))
* **header:** hide dropdown on route change ([0f9afe2](https://github.com/vtex/devportal/commit/0f9afe2b680f5c4deece25a494394499d9517527))
* **header:** show dropdown menu on hover and fix its styles ([5aa1830](https://github.com/vtex/devportal/commit/5aa1830433f60c6e6eb9e6205f8ddff71d124da6))


### Bug Fixes

* **header:** add pointer cursor to Docs button ([e28964d](https://github.com/vtex/devportal/commit/e28964d1afafb3a72d4d3609153bfd542dd069a5))
* **header:** fix dropdown menu card description text color on hover ([143237a](https://github.com/vtex/devportal/commit/143237ab87bd996268f3b529165e3ec470116f9c))
* **header:** fix dropdown menu position on Safari ([9faf99f](https://github.com/vtex/devportal/commit/9faf99f0e55d8fd5a02f695627507682c3396675))
* **header:** fix scroll propagation from dropdown menu ([5a253f9](https://github.com/vtex/devportal/commit/5a253f99acc79a2abdc30a87dbcccf2bd5abbf63))
* **header:** remove shadow from top of dropdown menu and fix hiding bug ([33df8b8](https://github.com/vtex/devportal/commit/33df8b8d6676fa2ec3f945e4c6a909b8851621b0))
* **header:** show dropdown menu scrollbar only on dropdown hover ([39082ca](https://github.com/vtex/devportal/commit/39082ca437c0e285b7f67b0531628bf9b64dd82f))
* **header:** show dropdown menu scrollbar only on hover ([c2c68bb](https://github.com/vtex/devportal/commit/c2c68bb98ee93b4d56068de02812f803d47511b2))


### Refactoring

* **header:** replace line with border ([0f24929](https://github.com/vtex/devportal/commit/0f24929fdcb74a93d508695ecadacf7d0daa5219))

### [0.3.1](https://github.com/vtex/devportal/compare/v0.3.0...v0.3.1) (2022-04-18)


### Bug Fixes

* **hamburger-menu:** fix the portuguese name ([cdbe7c2](https://github.com/vtex/devportal/commit/cdbe7c2ac974b02825a208be9e8bcc92f1d45864))
* **hamburguer-menu:** change name component and file ([246d612](https://github.com/vtex/devportal/commit/246d6120bde776d63500cdd37f9c1992ca74ad33))
* **header:** adds hamburguer menu to header ([762da5a](https://github.com/vtex/devportal/commit/762da5acf6d57fa48322103ec3e869ae04433744))
* **header:** fix header responsiveness ([1324f72](https://github.com/vtex/devportal/commit/1324f7299cdba2f54d00e34d8dbda81265b74cf4))
* **header:** remove right links and fix logo size ([9eb4af0](https://github.com/vtex/devportal/commit/9eb4af02feaf09e3938781559aea8c34836343cc))

## [0.3.0](https://github.com/vtex/devportal/compare/v0.2.2...v0.3.0) (2022-04-13)


### Features

* **search-bar:** add the redirect on enter click ([023b2a4](https://github.com/vtex/devportal/commit/023b2a4bf4abd0437a7a55e5eb3458cae1c1a6c3))
* **search-component:** add the search card component ([4822982](https://github.com/vtex/devportal/commit/4822982fd4bcc8f37cf7dbf270d447f3f73fe216))
* **search-page:** first version of search page structure ([0bcc086](https://github.com/vtex/devportal/commit/0bcc086e809be62dff730815ae3177d0d4eaed3c))


### Bug Fixes

* fix some warnings ([2dc4fd9](https://github.com/vtex/devportal/commit/2dc4fd9ef2b8bd02deda96cfad1f770673d4bd8c))


### Refactoring

* **typings:** add the methods type ([5034383](https://github.com/vtex/devportal/commit/5034383267f9176efadc5ddb72d982335e78a6ef))


### Style

* **search-page:** fix the divider style ([d26d4c1](https://github.com/vtex/devportal/commit/d26d4c123b183cabc1e1b5b8e625f941038ddde2))

### [0.2.2](https://github.com/vtex/devportal/compare/v0.2.1...v0.2.2) (2022-04-13)


### Bug Fixes

* move search box placeholder string to json ([3483b4a](https://github.com/vtex/devportal/commit/3483b4a9351dd93d4280ef93aed596c4c3205ebc))
* move the hard-coded strings to a json file ([33f4182](https://github.com/vtex/devportal/commit/33f4182ad119f3e281342d84118dd9b611754b25))

### [0.2.1](https://github.com/vtex/devportal/compare/v0.2.0...v0.2.1) (2022-04-12)


### Docs

* **readme:** add a project summary (features, patterns...) and contribution guide ([01307bc](https://github.com/vtex/devportal/commit/01307bc467609c0609a01a12df8971d0cfd3511c))
* **readme:** define a file naming convention ([43f922d](https://github.com/vtex/devportal/commit/43f922d01d269217451a8c5e67400ca4a15cdf8d))
* **readme:** fix 'concepts and features' section topics spacing ([4dbb378](https://github.com/vtex/devportal/commit/4dbb378c4006bfc97bffd4d7740bf9ebc5025ccd))
* **readme:** fix typo and release labels table column ([9a207f4](https://github.com/vtex/devportal/commit/9a207f425cd78141b152088d655c68b634c688ce))
* **readme:** fix typos ([547161a](https://github.com/vtex/devportal/commit/547161a335d0ec1bfb75a8e0ba31e287f1edf21e))
* **readme:** refactor some sections to make them more practical ([5a3a9aa](https://github.com/vtex/devportal/commit/5a3a9aada22d2baa925d452651dff97dd2b7b758))
* **readme:** update 'code linting and format' section ([38f3851](https://github.com/vtex/devportal/commit/38f385150f1b0c6e9b0a4a7d49c74e5a094a6e2d))
* **readme:** update directory tree to remove 'public/' from 'src/' ([7fb2fad](https://github.com/vtex/devportal/commit/7fb2fad39deca1328feb171936ce16e9f2c423e9))

## [0.2.0](https://github.com/vtex/devportal/compare/v0.1.5...v0.2.0) (2022-04-11)


### Features

* **icons:** add the sidebar toggle icon ([5662f0b](https://github.com/vtex/devportal/commit/5662f0b823f5867e08b29f1653d6c444aa3a99a3))
* **sidebar:** add sidebar component ([cab8fbc](https://github.com/vtex/devportal/commit/cab8fbc1940acb667160014558d7a683b6693e1f))
* **sidebar:** add sidebar to api-guides page ([1bea6a6](https://github.com/vtex/devportal/commit/1bea6a6776bbdeecbbad31d3cf8d2e015f4a3a07))
* **sidebar:** add the initial structure of sidebar section and add the help icon ([1f63110](https://github.com/vtex/devportal/commit/1f63110ef5bb0377de9ee17815ae4ef75ff446ff))
* **sidebar:** add the section divider ([6034326](https://github.com/vtex/devportal/commit/6034326af3a6a08d5c6f0b17106deb3680a96e2e))
* **sidebar:** add the sidebar elements component ([034100b](https://github.com/vtex/devportal/commit/034100b1dbe88c73e36c384a211b4276277a3689))
* **sidebar:** add the sidebar toggle animation ([6fbd14b](https://github.com/vtex/devportal/commit/6fbd14b1fe576f4ed4efffbcfdd55558cc39c817))
* **sidebar:** create a context to manipulate sidebar logic ([fa38b07](https://github.com/vtex/devportal/commit/fa38b0752296c409bd554d2a0f4f57e3f2052eba))


### Bug Fixes

* **sidebar:** add element hover and toggle subitem list on click in parent ([d6e96f8](https://github.com/vtex/devportal/commit/d6e96f8fd1691a126fa40e45a44978c0fb1af97d))
* **sidebar:** fix element pointer on hover ([4d4f65d](https://github.com/vtex/devportal/commit/4d4f65db47d7abb27502bea27859477982506cbd))
* **sidebar:** fix sidebar element hover ([2d4d449](https://github.com/vtex/devportal/commit/2d4d449a61504281ca52d293fc0043688bf2708a))
* **sidebar:** fix the screen adjust when sidebar is closed ([6c117b5](https://github.com/vtex/devportal/commit/6c117b514d86904e056d85028555c44934e9dc35))


### Refactoring

* **sidebar:** change variable names and add union type ([cbf45ac](https://github.com/vtex/devportal/commit/cbf45ac63099a19c00ac9de94592983db8d48e3d))
* **sidebar:** remove unecessary code and adjust sidebar elements structure ([1d799aa](https://github.com/vtex/devportal/commit/1d799aadae4d4c0d795659ba969fe9b6076d60a7))

### [0.1.5](https://github.com/vtex/devportal/compare/v0.1.4...v0.1.5) (2022-04-07)


### Features

* **landing-page:** add responsivity for tablet screens ([b6290ad](https://github.com/vtex/devportal/commit/b6290ad8cf51d540fd814fcc4efce4b99e8fe102))
* **landing-page:** add responsivity for the fourth breakpoint ([ed45c55](https://github.com/vtex/devportal/commit/ed45c55b4e175625851c3e761407a5aa7f28aca6))
* **landing-page:** add responsivity for the third breakpoint ([12e2818](https://github.com/vtex/devportal/commit/12e2818e4d2de6c3fbdd146154ec6cfc79437670))
* **landing-page:** add responsivity to large screens ([94f006e](https://github.com/vtex/devportal/commit/94f006ef74b7533656f7c8a55c4239437677eae0))
* **landing-page:** add the landing page version for mobile screens ([7c29f9f](https://github.com/vtex/devportal/commit/7c29f9f6d9555a426f01154e5a656d99b1c54d9d))


### Bug Fixes

* **landing-page:** fix card icons in safari browser ([c5a02f9](https://github.com/vtex/devportal/commit/c5a02f9b06ab4db3864b3b5568af6376d37cabc4))
* **landing-page:** fix last updates card width ([c18b9b4](https://github.com/vtex/devportal/commit/c18b9b49aec7fd833af42806ea8e7429bc483302))
* **landing-page:** fix newsletter border and last updates card structure ([1af7b1f](https://github.com/vtex/devportal/commit/1af7b1f83c6824387c4a26e8678019f3eb5ce8c7))
* **landing-page:** responsive style adjustments ([fa89513](https://github.com/vtex/devportal/commit/fa89513b3b3a500abb35e72570197c3a2b2f9240))

### [0.1.4](https://github.com/vtex/devportal/compare/v0.1.3...v0.1.4) (2022-04-06)


### CI

* **lighthouse:** fix lighthouse mobile and adds desktop ([d380e46](https://github.com/vtex/devportal/commit/d380e46844bdafa3296596b68c50b24753518739))

### [0.1.3](https://github.com/vtex/devportal/compare/v0.1.2...v0.1.3) (2022-04-05)


### Features

* **src/pages/index.tsx:** add page title ([579a648](https://github.com/vtex/devportal/commit/579a6484980d6fef47fff8cd0d4c6179e8537506))


### Chore

* add favicon ([4e97b32](https://github.com/vtex/devportal/commit/4e97b3291ec1c8e2ae48ef008be80b02a834d3a7))

### [0.1.2](https://github.com/vtex/devportal/compare/v0.1.1...v0.1.2) (2022-04-05)


### Features

* **api-reference:** add default rendering of Catalog and Checkout APIs ([2d6264b](https://github.com/vtex/devportal/commit/2d6264b3e45f9360f532adc2b07da684bc6da42b))

### 0.1.1 (2022-04-04)


### Bug Fixes

* change kebab-case props to camelCase format in icons ([95c4d22](https://github.com/vtex/devportal/commit/95c4d22370822d9faadab657314ff4d240b1fb6e))
* documentation cards and education section styles ([a3c8265](https://github.com/vtex/devportal/commit/a3c8265e99dd751e26bf09108af4488a9a6e9daf))
* **education cards:** education cards style ([b74c01b](https://github.com/vtex/devportal/commit/b74c01b6354b98fda79cf5bb197bb581c635f7c6))
* education-section names ([a1be16a](https://github.com/vtex/devportal/commit/a1be16ade705d2b064ecb2eab4055f22c72bc839))
* header height name ([dc1b4da](https://github.com/vtex/devportal/commit/dc1b4da82b2c3dcacd1c0fb221724dbc677ffda1))
* header optimization and fix righlinks structure ([b6d6aa0](https://github.com/vtex/devportal/commit/b6d6aa06e21707c753eab32d0aa1dfeb2468ade3))
* header responsive structure ([51b0257](https://github.com/vtex/devportal/commit/51b02573682ce687bd7ae0423e7fdaa622489c20))
* icon-related warnings ([f9d42e7](https://github.com/vtex/devportal/commit/f9d42e717cdb8882f0ef42f02420dbffe4e1088c))
* landing-page optimization ([60291e7](https://github.com/vtex/devportal/commit/60291e7907b4d519ef3d1606c5673c8411a71c52))
* last-update key conflict and put header and footer to root ([1e95167](https://github.com/vtex/devportal/commit/1e95167b6d354b875e6db4417d63fcfb2b317e16))
* **last-updates-card:** add missing shadow effect to Last Updates section cards ([3c214dd](https://github.com/vtex/devportal/commit/3c214dd095b9a7537a9928611cb0f13e0de56b8e))
* **lastupdatescard:** fix Last Updates section cards layout ([e0bc062](https://github.com/vtex/devportal/commit/e0bc062308e925401541436a9624f2f0479fbe24))
* new structure of subcomponents in education-section ([808ef3d](https://github.com/vtex/devportal/commit/808ef3da0fd8562726189570c53ccf9c4b87b500))
* open external links in another tab ([f51c9c1](https://github.com/vtex/devportal/commit/f51c9c149e8c900e563c51c881ed0c137111b1e9))


### Performance

* add sharp package for image optimization ([3d46d11](https://github.com/vtex/devportal/commit/3d46d1193fcf678ca5de22833337e62f30fbd4b0))


### Chore

* rebase landing-page ([ca29ee2](https://github.com/vtex/devportal/commit/ca29ee2803485cf0fa87ba844ec54879fd78db19))
* remove sharp dependency ([0ad0e99](https://github.com/vtex/devportal/commit/0ad0e998c0acbc59d6bfdc69dd773d8fd55a6715))
* **versioning:** add commit-msg hook to Husky for running Commitlint ([4d0e777](https://github.com/vtex/devportal/commit/4d0e7775b6dc9e4713e87386466e61360830b970))
* **versioning:** add Commitizen + script to help writing commits ([cf21fbb](https://github.com/vtex/devportal/commit/cf21fbb3e3b37286b118a77690836630fde6191d))
* **versioning:** add Commitlint to lint commit messages ([e83f32e](https://github.com/vtex/devportal/commit/e83f32ef5407582a19c30479d8a3a3c87c234b75))
* **versioning:** add Standard Version and release script ([fdacbfe](https://github.com/vtex/devportal/commit/fdacbfed3711699347c0933df7ed95a1a03e4a9f))
* **versioning:** update changelog.md sections names ([9dee46a](https://github.com/vtex/devportal/commit/9dee46ad5a5431f91a1cda867de54c607e2c9fb2))


### Style

* **icons:** move icons to components directory and solve lint issues ([f284162](https://github.com/vtex/devportal/commit/f2841622c1fb0f152097a1d8f5705066dc0e08b0))


### Refactoring

* change newsletter style name ([e474591](https://github.com/vtex/devportal/commit/e4745916141f37754d29e38fae4e257ab1a6650a))
* **public:** move public to root directory ([0293093](https://github.com/vtex/devportal/commit/0293093bc60afae0566741262050bfbaf8d84771))
* update name of module.css file ([808691c](https://github.com/vtex/devportal/commit/808691c1c280782d6e128bcaa096482613a1cade))


### CI

* **versioning:** add Release-Version GitHub workflow ([790a99a](https://github.com/vtex/devportal/commit/790a99a7d042dd7ab96ab9930011709bd3fce0f2))
* **versioning:** add Verify-PR-Labels GitHub workflow ([bc6eea2](https://github.com/vtex/devportal/commit/bc6eea2982bcb6310cf7febf95e79000b00bb4ff))
