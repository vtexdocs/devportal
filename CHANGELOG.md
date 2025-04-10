# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.19.1](https://github.com/vtexdocs/devportal/compare/v1.19.0...v1.19.1) (2025-04-10)


### Features

* **api:** integrate SwaggerParser to resolve OpenAPI references ([8ab24b9](https://github.com/vtexdocs/devportal/commit/8ab24b923c75ff79f59fbd09a03ba54a55cb9a95))


### Bug Fixes

* **api:** improve OpenAPI reference resolution with SwaggerParser.bundle() ([92b91f5](https://github.com/vtexdocs/devportal/commit/92b91f57c50a07a4daea2271c2f52d602cc6b4f1))
* **api:** improve OpenAPI spec reference resolution and error handling ([337bd78](https://github.com/vtexdocs/devportal/commit/337bd78a581e8169e66082815369d38d75d6cd90))
* **api:** make X-References-Resolved header accurately reflect resolution success ([3590ae9](https://github.com/vtexdocs/devportal/commit/3590ae92f4ffc89c37c9bf00c54f31303ebb83c9))
* correct OpenAPI spec handling in static site generation ([71df125](https://github.com/vtexdocs/devportal/commit/71df12559d6e59fb22bcfefcce10ca6361329dd1))


### Refactoring

* **api:** update getReferencePaths to use internal API routes ([698deb7](https://github.com/vtexdocs/devportal/commit/698deb7fca21745b6fb2e278b9f567074c0033d1))

## [1.19.0](https://github.com/vtexdocs/devportal/compare/v1.18.4...v1.19.0) (2025-04-09)


### Features

* **api:** improve OpenAPI spec delivery with tiered caching strategy ([88bbf15](https://github.com/vtexdocs/devportal/commit/88bbf15398d0f7243eaf678c6f078c588cc95ca4))


### Docs

* **navigation.json:** Add 'Sending custom events' guide ([d0df27d](https://github.com/vtexdocs/devportal/commit/d0df27dd7553c5ff4cd57f331c95e3d1454ca5ee))
* **navigation.json:** add FastStore Cart overview ([d365026](https://github.com/vtexdocs/devportal/commit/d365026adc4f790b8d23c221bc974e23e9a93823))
* **navigation.json:** domain management in webops ([36c0aa2](https://github.com/vtexdocs/devportal/commit/36c0aa2f83495cfd61b63c9ff018eea526dfcf33))
* **navigation.json:** fixing slug ([8339442](https://github.com/vtexdocs/devportal/commit/833944283f4b967aaf5e6e98bffe41809056c4f3))
* **navigation.json:** remove FastStore and Ad Network integration guide ([8b7bf90](https://github.com/vtexdocs/devportal/commit/8b7bf90ecb97f714313f49ce04df9634acf1d632))
* **navigation:** add refresh token api ref and guide ([87197e6](https://github.com/vtexdocs/devportal/commit/87197e6d8e09c123244ecaeca8641a0188e4c155))
* **navigation:** remove deprecated guide ([da30d1d](https://github.com/vtexdocs/devportal/commit/da30d1d1927f0329ea1a059df98b752ec5b330bb))
* **navigation:** remove vtex ad network api ([3add51a](https://github.com/vtexdocs/devportal/commit/3add51a5ea76e065a26e88d8a1abd466fb49172b))
* remove references to vtex ad network api ([83f78cb](https://github.com/vtexdocs/devportal/commit/83f78cbb84dfac7d2f54b0002e8bce7f6e30aefd))


### Chore

* **modalbase.tsx:** add ModalFooter to FastStore Modal usage example ([9e1f8ab](https://github.com/vtexdocs/devportal/commit/9e1f8ab662e426612f964b76712fab7b4618f84e))

### [1.18.4](https://github.com/vtexdocs/devportal/compare/v1.18.3...v1.18.4) (2025-03-31)


### Features

* add operational capacity api release note to navigation ([263994b](https://github.com/vtexdocs/devportal/commit/263994b9bb929c451f9dc2db3a15a8364977493d))
* **navigation.json:** EDU-14516 - Add Session guide ([e5af0af](https://github.com/vtexdocs/devportal/commit/e5af0afd6b90fc685bf99ce3388792d8638cf2c3))


### Bug Fixes

* correct release note slug ([12088a7](https://github.com/vtexdocs/devportal/commit/12088a702791122aac9273e2ce675ec8de36bdcc))
* **navigation.json:** typo ([dd13f43](https://github.com/vtexdocs/devportal/commit/dd13f43592948ecd6559708fb5273925bef65105))

### [1.18.3](https://github.com/vtexdocs/devportal/compare/v1.18.2...v1.18.3) (2025-03-28)


### Features

* add Operational Capacity API ([d9a4907](https://github.com/vtexdocs/devportal/commit/d9a4907e873574cec1a361f4ef849482ea5d9249))
* add Operational Capacity API to navigation ([4b670b6](https://github.com/vtexdocs/devportal/commit/4b670b6abeb267ea1faaee6a7c0e20295404b8d2))


### Bug Fixes

* fix endpoint path ([011a840](https://github.com/vtexdocs/devportal/commit/011a840b7d4cc1529a8bba7f7696f77fcbc4fed2))

### [1.18.2](https://github.com/vtexdocs/devportal/compare/v1.18.1...v1.18.2) (2025-03-27)


### Features

* add Operational Capacity API ([0d9e7e9](https://github.com/vtexdocs/devportal/commit/0d9e7e9fb54a6352ea63703487b5efd8e1103282))
* **navigation.json:** update SEO category ([ae1a423](https://github.com/vtexdocs/devportal/commit/ae1a423f4748226a9406ad935dd62aab2f4fa138))
* **netlify.toml:** FastStore SEO redirects ([c4f4a71](https://github.com/vtexdocs/devportal/commit/c4f4a717d7ffc5cc1209df0680aec9b3422bb9e7))

### [1.18.1](https://github.com/vtexdocs/devportal/compare/v1.18.0...v1.18.1) (2025-03-26)


### Features

* add Cypress component testing setup and initial tests ([e03e9c3](https://github.com/vtexdocs/devportal/commit/e03e9c33a5bf9fe10dd6eceb1dc5f656aee5076e))
* add Operational Capacity API to navigation ([6ce1546](https://github.com/vtexdocs/devportal/commit/6ce1546b7b0213cf8f93befc9b0b66276dc8e53e))
* **navigation.json:** add FastStore Search guides ([e16616f](https://github.com/vtexdocs/devportal/commit/e16616f0aca9aaf0ef0599d3bc29a91841dbf122))
* **navigation.json:** add new FastStore guide ([a1c50c4](https://github.com/vtexdocs/devportal/commit/a1c50c482214f6866fa9f46b1b52620c9cab81d7))


### Bug Fixes

* **cypress:** add valid date strings to Contributors test mock data ([32c1be3](https://github.com/vtexdocs/devportal/commit/32c1be3525bf394ac171b78d217a875b4578e20b))
* **cypress:** use fixed ISO date strings in Contributors test ([ec7dcd3](https://github.com/vtexdocs/devportal/commit/ec7dcd3fe73de73227f7023a384d7218480b1c0d))
* update documentation card component to support testing ([91dd126](https://github.com/vtexdocs/devportal/commit/91dd1267bbec1cdac84aa67cf3c161f264653f6b))


### Chore

* add eslint disable comment for unused vars in cypress config ([bb6cd10](https://github.com/vtexdocs/devportal/commit/bb6cd109b02b70195f4016f14ef4912146d6f8d1))
* configure TypeScript for Cypress component tests ([b548604](https://github.com/vtexdocs/devportal/commit/b54860451dfb844e1e87fdca28ee9e27d0242297))
* update Next.js config to handle Cypress test files ([f35ff1a](https://github.com/vtexdocs/devportal/commit/f35ff1a57af092f14a1314f99167f84a01f05d96))


### Tests

* **cypress:** add MarkdownRenderer component tests and documentation ([c874fc8](https://github.com/vtexdocs/devportal/commit/c874fc87abc16daca98246cfc45448173e7325fa))
* fix component test setup and types ([c02a2d8](https://github.com/vtexdocs/devportal/commit/c02a2d89ed6a05e39a30924c02fd805e09c1d718))


### Refactoring

* **markdownrenderer:** linting ([1c2635a](https://github.com/vtexdocs/devportal/commit/1c2635ae5a4b0f09733b2d50dcc929f0da70a541))


### Docs

* document github actions and its dependencies ([b12a612](https://github.com/vtexdocs/devportal/commit/b12a612e1bbc99e22c05910aa2651a1d98a1f082))
* **navigation.json:** move apps troubleshooting ([bde48d1](https://github.com/vtexdocs/devportal/commit/bde48d1d374dd8f5bb5b420b69b37ed407b186ef))
* **navigation:** add vtex id release notes ([8668d02](https://github.com/vtexdocs/devportal/commit/8668d029f1f394f6ec5a27affa30333a0baa930d))

## [1.18.0](https://github.com/vtexdocs/devportal/compare/v1.17.1...v1.18.0) (2025-03-14)


### Features

* add GitHub API rate limit handling utilities ([118e3ee](https://github.com/vtexdocs/devportal/commit/118e3ee4056966f9c3f475a406bea73b8a62828b))
* implement GitHub API rate limiting and error handling ([6b13a01](https://github.com/vtexdocs/devportal/commit/6b13a01d742eab76369f3ecafe8cf66d2494f268))
* **index.tsx:** update 'last-update' card ([df6b69e](https://github.com/vtexdocs/devportal/commit/df6b69eca75b6114d8cb04a1e36467a70289a3cf))
* **index.tsx:** update 'last-updates-section' ([4dd6a6f](https://github.com/vtexdocs/devportal/commit/4dd6a6fa2e0560293261a7a3218c0c51e64f642d))
* update Gift components to use Next.js Image component ([44f0cc7](https://github.com/vtexdocs/devportal/commit/44f0cc7437db476e83fb749ff41b148827723595))


### Bug Fixes

* **build:** handle github api rate limits with fallback mechanism ([3165c38](https://github.com/vtexdocs/devportal/commit/3165c388cb74cd3a5782d428afa076e1c636f7f4))
* **cypress config:** makes the config buildable ([d6641d1](https://github.com/vtexdocs/devportal/commit/d6641d117fad0496e46169bbba4d26154b43148f))
* **cypress:** handle PDF content-type and React hydration errors ([ad17fce](https://github.com/vtexdocs/devportal/commit/ad17fcef31fc160054cf8bfc0a7debb1a9cb2a3b)), closes [#423](https://github.com/vtexdocs/devportal/issues/423)
* **getreferencepaths:** get correct paths ([8b1cb7b](https://github.com/vtexdocs/devportal/commit/8b1cb7bc41d7f1fc7c90244c92b832d95e6933e4))
* **getreferencepaths:** restore complete API fileSlugMap ([797b89e](https://github.com/vtexdocs/devportal/commit/797b89e29bf01b3bb20a5ffdda195846f15219ae))
* **getreferencepaths:** use correct Repo ([7f42427](https://github.com/vtexdocs/devportal/commit/7f4242789b26789fbe78ae72b928a8ad4dc70a3a))
* improve icon handling in see-also-section ([ed0e05e](https://github.com/vtexdocs/devportal/commit/ed0e05efa399e72bc8f8c5ca3c43b919440bab32))
* **openreplay tracker:** have to remove tracker code ([f40c3d7](https://github.com/vtexdocs/devportal/commit/f40c3d7f06af45fbd73266ebfe4e3673d30b8b7e))
* **openreplay tracker:** really remove ([1a13aae](https://github.com/vtexdocs/devportal/commit/1a13aae216668c1df3ba5d120b126b3c9a853aee))
* **openreplay:** remove openreplay tracker ([56809a2](https://github.com/vtexdocs/devportal/commit/56809a24fbe759f2c1398686e14ae51a598d973b))
* prevent long build delays by failing fast when retry delay exceeds 60s ([570274c](https://github.com/vtexdocs/devportal/commit/570274c72c81a7f027656518e91c2baf9210de74))
* remove legacyBehavior prop from Link components and fix linting issues ([184be81](https://github.com/vtexdocs/devportal/commit/184be81800b87a384e3076fdb2620ebe0437919a))
* resolve key prop warning in Breadcrumb and useLayoutEffect warning in Contributors ([1ae1146](https://github.com/vtexdocs/devportal/commit/1ae1146d3aeaa1176521ed18fb65cb7c5e3ed5b2))


### Chore

* **release:** 1.17.0 ([010916c](https://github.com/vtexdocs/devportal/commit/010916ca938285e70bd9373fcad923066dc036b7))


### Performance

* **contributors:** prevent layout flash during SSR by using placeholder content ([b1e3ce3](https://github.com/vtexdocs/devportal/commit/b1e3ce30ceaca8073e2ea842841305d72232d8bd))


### CI

* **cypress:** add Node.js 18 setup to fix yarn install issues ([3a342b3](https://github.com/vtexdocs/devportal/commit/3a342b319bae9f531c37317316f0e115e5215447))


### Tests

* **cypress:** handle React hydration errors in documentation page tests ([3caaa95](https://github.com/vtexdocs/devportal/commit/3caaa95b294ee103fa03c34711628d4aa26162b1))


### Docs

* add GitHub API rate limiting documentation ([9f8fc74](https://github.com/vtexdocs/devportal/commit/9f8fc7472bda3473a415d4032a0803263f34a749))
* **improve cypress test documentation:** - Add detailed descriptions of test coverage areas ([a3392d7](https://github.com/vtexdocs/devportal/commit/a3392d726bc137e3d55c9447f8b109ff06d7c359))
* **navigation.json:** add b2b quotes graphql ([4b1a63a](https://github.com/vtexdocs/devportal/commit/4b1a63ab1354a33677782226bcb158c2925fe4af))
* **navigation:** add payment notification endpoints ([6fc0503](https://github.com/vtexdocs/devportal/commit/6fc0503ccf7c2ea320f9c049cc673723fe247669))
* **navigation:** add payments release notes ([2fed8fd](https://github.com/vtexdocs/devportal/commit/2fed8fdd035c7b39f74c0232910038178b8b164a))
* **navigation:** fix spacing ([c4ea48a](https://github.com/vtexdocs/devportal/commit/c4ea48a044ec428ae567c381cc0dbca0dff896ad))


### Refactoring

* add TypeScript types for GitHub API responses ([148e436](https://github.com/vtexdocs/devportal/commit/148e4364b30334e9b0c32b4ad47ac256e3de36ba))
* add TypeScript types to GitHub API clients ([f3a8f71](https://github.com/vtexdocs/devportal/commit/f3a8f71fc1f9cd1cbd61ff7ac884393140ac5e52))
* **cypress tests:** add docs and improve compatibility ([c9549c3](https://github.com/vtexdocs/devportal/commit/c9549c3d4477dd2c1918ef893a5e716e4c9b5bb8))
* **cypress tests:** add docs and improve compatibility ([381a373](https://github.com/vtexdocs/devportal/commit/381a373da5fdfc415b9930feb4de5d5fb90b4e49))
* **github:** make repository configurations configurable via environment variables ([44bddeb](https://github.com/vtexdocs/devportal/commit/44bddeb1e1bef4b8336f1cbae80faedb45329adc))
* improve GitHub file content handling ([46ee614](https://github.com/vtexdocs/devportal/commit/46ee6141c7cd82615319aaebc18f95b5868902e8))
* improve tree node typing in path utility functions ([456e0bb](https://github.com/vtexdocs/devportal/commit/456e0bbcb8eecde657d98486d2902390b1b46c16))
* replace octokit error logging with warn and custom error handling ([147873b](https://github.com/vtexdocs/devportal/commit/147873b23db2386f62d47fba457203037d318668))
* standardize on warn for all octokit logging ([d41bb42](https://github.com/vtexdocs/devportal/commit/d41bb42778ab4258a8450423d16de7b18d746fe6))

### [1.17.1](https://github.com/vtexdocs/devportal/compare/v1.17.0...v1.17.1) (2025-03-01)


### Bug Fixes

* **openreplay tracker:** have to remove tracker code ([5de4a70](https://github.com/vtexdocs/devportal/commit/5de4a700d1913425950c5bc13ad89bdb0f9058cb))
* **openreplay tracker:** really remove ([c6a094b](https://github.com/vtexdocs/devportal/commit/c6a094bbac3163b8abc4deced71cd43ad54b8a42))
* **openreplay:** remove openreplay tracker ([d7d3945](https://github.com/vtexdocs/devportal/commit/d7d39450cccd2f64a1ccb2908e0b93a3dd14e83f))

## [1.17.0](https://github.com/vtexdocs/devportal/compare/v1.16.8...v1.17.0) (2025-03-01)


### Features

* **dockerfile:** add dockerfile for running devmode ([4657e29](https://github.com/vtexdocs/devportal/commit/4657e29e2549c6af51188862622a0c7882a1bd52))


### Bug Fixes

* **api-reference:** review hash link behavior ([b6c32d4](https://github.com/vtexdocs/devportal/commit/b6c32d4904c689585d16e373d3bd8a4d862158d4))


### Chore

* **api-reference:** remove test ([abe1773](https://github.com/vtexdocs/devportal/commit/abe1773fbd6e287b9ca47e822d5ad4343cef848b))


### Docs

* create redirect ([e4c724a](https://github.com/vtexdocs/devportal/commit/e4c724a243cfd990bd9f40894a06831a3e366abf))
* **navigation.json:** accessibility ([7f614ba](https://github.com/vtexdocs/devportal/commit/7f614bab5b611465d0d1f57f620d87c3b7b5a94b))
* **navigation.json:** add marketplace integration app graphql ([3b7615b](https://github.com/vtexdocs/devportal/commit/3b7615beda3498b0bfd6c073fde7c591272a7c4b))
* **navigation.json:** add session client app and graphql ([b7c2627](https://github.com/vtexdocs/devportal/commit/b7c2627ece8825c6d1e5ac25d9515d3ec5750fcb))
* **navigation:** add ad network integration endpoints ([e761f4c](https://github.com/vtexdocs/devportal/commit/e761f4cac86b0f29f299bf09b266585c5dcd6017))
* **navigation:** add token renewal endpoints ([788692e](https://github.com/vtexdocs/devportal/commit/788692e8291a4b8b30f8369c33dae2ebf1f45bda))
* **netlify.toml:** SEO ([ebdece6](https://github.com/vtexdocs/devportal/commit/ebdece6b87393ba931cb08e4f8a2dbc769c49dfc))
* remove deprecated guide from navigation ([2ec45dd](https://github.com/vtexdocs/devportal/commit/2ec45dd45c6792c5dabc3fa9ff273949c00bb86a))

### [1.16.8](https://github.com/vtexdocs/devportal/compare/v1.16.7...v1.16.8) (2025-01-29)


### Chore

* **api-reference:** update the position in the sidebar when an api-reference hash link is clicked ([e6096cc](https://github.com/vtexdocs/devportal/commit/e6096cc2e343febbdce43bf3a0a4f25881e30f75))

### [1.16.7](https://github.com/vtexdocs/devportal/compare/v1.16.6...v1.16.7) (2025-01-28)


### Features

* add pick and pack order changes api ([00beb60](https://github.com/vtexdocs/devportal/commit/00beb601f4046a128ca3d04e585a9d755de3914f))


### Docs

* create redirect ([7f0197a](https://github.com/vtexdocs/devportal/commit/7f0197a562ef0655d5d3dba43e7ab41a3610b2cd))
* create redirect for architecture guide ([c679688](https://github.com/vtexdocs/devportal/commit/c6796888e648e4fe1ad5a1b54fa81507b1561385))
* create redirects for master data guides ([b230075](https://github.com/vtexdocs/devportal/commit/b2300750d5d2985fee5608970cfbe011b1551da6))
* edit navigation ([9aeaca7](https://github.com/vtexdocs/devportal/commit/9aeaca7a5730cd99e1245b6777611c2994ccd7e1))
* edit schemas and triggers in navigation.json ([5f15739](https://github.com/vtexdocs/devportal/commit/5f15739382414a2634e84f4244fc34fdb930827c))
* **navigation.json:** 404 page doc ([d545d28](https://github.com/vtexdocs/devportal/commit/d545d2815cc19cedcd0a758f52dd6808fe212fa5))
* **navigation.json:** adding advanced layout docs to sidebar ([69231f4](https://github.com/vtexdocs/devportal/commit/69231f44beb085cbd91144f0269c725471fb052e))
* **navigation.json:** adding analytics docs to sidebar ([0bcc9bf](https://github.com/vtexdocs/devportal/commit/0bcc9bf8a4fb4a7885c68bf8c184bc35b17ffc12))
* **navigation.json:** adding doc to sidebar ([8ee8f22](https://github.com/vtexdocs/devportal/commit/8ee8f22c1467ca97fa4f95d9e205873a15093609))
* **navigation.json:** adding doc to sidebar ([cbbc2eb](https://github.com/vtexdocs/devportal/commit/cbbc2ebe660a037d214173e4f935d70ff44af871))
* **navigation.json:** configuring analytics gtm ([e5bd9a4](https://github.com/vtexdocs/devportal/commit/e5bd9a454c8408c7f0e6be864a403a646b5ce9d3))
* **navigation.json:** enabling performance settings ([c4d8527](https://github.com/vtexdocs/devportal/commit/c4d85277086557ae14f635d9a4fa4d459e7140a7))
* **navigation.json:** fixing ([f870e28](https://github.com/vtexdocs/devportal/commit/f870e28cf40e6653f359fafd8f4658abb19b7078))
* **navigation.json:** fixing type ([af58e6a](https://github.com/vtexdocs/devportal/commit/af58e6a7ee83c2d4144c1318860a62618b337fff))
* **navigation.json:** managing performance ([4753043](https://github.com/vtexdocs/devportal/commit/4753043499d2a58386611e740e3f0b3bdb028fbf))
* **navigation.json:** removing analytics docs from sidebar ([910b44f](https://github.com/vtexdocs/devportal/commit/910b44f9f0b348e50ceab35d644b27a53992279f))
* **navigation.json:** storefront best practices ([6f2b173](https://github.com/vtexdocs/devportal/commit/6f2b1738ecb3358244a3aeebada68c38b2f95efe))
* **navigation.json:** storefront best practices - performance ([d89ee0b](https://github.com/vtexdocs/devportal/commit/d89ee0b9e659747909e6124cad90c5ba15bc75cb))
* **navigation.json:** storefront performance docs ([f82bd31](https://github.com/vtexdocs/devportal/commit/f82bd31aab621db194cda78c63fa52a4eb906cdd))
* **navigation:** update master data guides ([1e2ea30](https://github.com/vtexdocs/devportal/commit/1e2ea30841685a8c1af632e6d00e3458af58f5a8))
* **navigation:** update md guides ([cbb5bb7](https://github.com/vtexdocs/devportal/commit/cbb5bb7458b097a1834794cd274abaf463ec0bfa))
* **navigation:** update prepositions ([427fbf1](https://github.com/vtexdocs/devportal/commit/427fbf108ab46ec6bff8e56027f82357a29bb96d))
* **netlify.toml:** configuring analytics ([42c03c0](https://github.com/vtexdocs/devportal/commit/42c03c08ec9f6ef8ea07cf3644438cc805e406f0))
* **netlify.toml:** creating redirect ([0409bc7](https://github.com/vtexdocs/devportal/commit/0409bc716f92ba301f4913a42d2af8de20dcd2da))
* **netlify.toml:** creating redirect ([fb691d9](https://github.com/vtexdocs/devportal/commit/fb691d9e5c4f2eebe2e03b2e22a17b36725ed987))
* **netlify.toml:** enabling performance settings ([8c21a5b](https://github.com/vtexdocs/devportal/commit/8c21a5b2a719cf7234e79358441c89fc880a5e07))
* **netlify.toml:** performance ([703c8d6](https://github.com/vtexdocs/devportal/commit/703c8d69f0f318e505ce286e37ef05b240e67217))
* **netlify.toml:** removing duplicated redirect ([dfb75ea](https://github.com/vtexdocs/devportal/commit/dfb75eaf485075a12f2fd8dbb523fc8762c7dce1))
* update navigation.json ([535b8bf](https://github.com/vtexdocs/devportal/commit/535b8bf4a2647aa2793375a767edacd56e73c0b7))
* update redirects ([606d75e](https://github.com/vtexdocs/devportal/commit/606d75e5c79a7d92b126d007d714302ef4cba504))
* update redirects ([f6f37d7](https://github.com/vtexdocs/devportal/commit/f6f37d7da9d420b55c847b39776134d5454ab1b5))

### [1.16.6](https://github.com/vtexdocs/devportal/compare/v1.16.5...v1.16.6) (2024-12-09)


### Docs

* **navigation.json:** Adding custom headers to your Store Framework store ([5be0d87](https://github.com/vtexdocs/devportal/commit/5be0d871e9d0a9f23dbf97177e43e60e592ead74))
* **navigation.json:** Optimizing image rendering ([f6c0112](https://github.com/vtexdocs/devportal/commit/f6c011290eac45ce9f1f63cc3d685e5fd951a8fd))
* **netlify.toml:** creating redirect ([48f7574](https://github.com/vtexdocs/devportal/commit/48f75744f7d2052fe9b2b31a22792146ed99e94c))
* **netlify.toml:** Optimizing image rendering ([5cb2605](https://github.com/vtexdocs/devportal/commit/5cb2605a931c4215122ae2e5dbaa8a2f6b897241))


### Chore

* **navigation.json:** add rn to navigation file ([534df40](https://github.com/vtexdocs/devportal/commit/534df400e7e38bbfbfa4a652816af45a70ad8859))
* **navigation.json:** update navigation ([ab1344f](https://github.com/vtexdocs/devportal/commit/ab1344fb3c956b8589cf02259eef698c526debd4))
* **navigation.json:** update navigation file ([a9eeac6](https://github.com/vtexdocs/devportal/commit/a9eeac6c1da255f8be716f1bd440097a5ecc99c9))
* **navigation.json:** update navigation file ([195ac54](https://github.com/vtexdocs/devportal/commit/195ac54e9f0f3b9ea095589ce2325e911678c772))
* **package.json:** update dependencies ([0a739d8](https://github.com/vtexdocs/devportal/commit/0a739d86d6c61eeda454e0def3af47caf20f37e1))

### [1.16.5](https://github.com/vtexdocs/devportal/compare/v1.16.4...v1.16.5) (2024-11-14)


### Features

* **release-notes:** add pagination ([e761ee3](https://github.com/vtexdocs/devportal/commit/e761ee3f2930a9b792422ccbb9e7c068a4a35da0))


### Bug Fixes

* remove unused ([1a1c239](https://github.com/vtexdocs/devportal/commit/1a1c239f32e7108476cc0b1248acef11dfcd2d2a))


### Docs

* **navigation.json:** working-with-site-editor-fixing-slug ([c7c2b6f](https://github.com/vtexdocs/devportal/commit/c7c2b6f277021152f4c789e4a0b10b58c747dd7f))
* **netlify.toml:** working with site editor fixing slug ([ab73abc](https://github.com/vtexdocs/devportal/commit/ab73abc7aefc97479b5a3b5e2ef63ae9d4f086cd))


### Chore

* **package.json:** update components package version ([38ff788](https://github.com/vtexdocs/devportal/commit/38ff7883ecbf8e1df445b2e61ceea1cdac6f0174))

### [1.16.4](https://github.com/vtexdocs/devportal/compare/v1.16.3...v1.16.4) (2024-11-13)


### Features

* adjust docsearch-scraper action considering pr [#5](https://github.com/vtexdocs/devportal/issues/5) ([6da0314](https://github.com/vtexdocs/devportal/commit/6da031480445cec21dfcb477c43b72de20e15fb6))

### [1.16.3](https://github.com/vtexdocs/devportal/compare/v1.16.2...v1.16.3) (2024-11-13)


### Bug Fixes

* **algolia:** fix configs ([7a79377](https://github.com/vtexdocs/devportal/commit/7a793779f69d59543e59c0db632476d2e140acb1))

### [1.16.2](https://github.com/vtexdocs/devportal/compare/v1.16.1...v1.16.2) (2024-11-12)


### Features

* removing article from navigation ([6e96eaa](https://github.com/vtexdocs/devportal/commit/6e96eaa68f3bbfdf3f6545b2f713d843711350e2))
* **Update navigation.json:** New FastStore release note ([5935711](https://github.com/vtexdocs/devportal/commit/5935711e9926cc87d642fad1528675eef7f77a83))


### Bug Fixes

* **navigation.json:** update FastStore title and slug name (updating-the-cli-package-version) ([39530ab](https://github.com/vtexdocs/devportal/commit/39530ab92f8d7b35297a586baa6572ea4940b33b))


### Docs

* adding new endpoint to navigation ([6127d73](https://github.com/vtexdocs/devportal/commit/6127d73d8d2a235d70c6aa44e1870eaabcb2bc5e))
* adding new endpoints to navigation ([eee135f](https://github.com/vtexdocs/devportal/commit/eee135f4e4f02dc8735eee14f5177f97964be177))
* correcting endpoint name ([f315980](https://github.com/vtexdocs/devportal/commit/f31598085c55e03e3ba8a6b1b75f66e3154b5941))
* create redirect ([2353176](https://github.com/vtexdocs/devportal/commit/2353176d56b5b2a68076726870c3482a57d53c1d))
* create redirect ([6010df1](https://github.com/vtexdocs/devportal/commit/6010df1da1ff613fa1b7d27cdbeef11ce28f9468))
* **navigation.json:** building pages ([5beb49b](https://github.com/vtexdocs/devportal/commit/5beb49bd5d88f92104353c13c1ae0da6de171fac))
* **navigation.json:** fixing slug ([c4b53bd](https://github.com/vtexdocs/devportal/commit/c4b53bd8ef2400e3034445ea9074db0485d847c8))
* **navigation.json:** updating live stores ([1a6b003](https://github.com/vtexdocs/devportal/commit/1a6b00375a75577f06f34c9963538835dd506af5))
* **navigation.json:** using components ([dde67a4](https://github.com/vtexdocs/devportal/commit/dde67a48eec64472fdb8574f2931f2bab2684008))
* **navigation:** add master data guide ([e5c5cd6](https://github.com/vtexdocs/devportal/commit/e5c5cd62986d2a389ae07f85daedb4bc5961d076))
* **navigation:** remove old version of search and scroll guide ([8efa60a](https://github.com/vtexdocs/devportal/commit/8efa60a112f96446739ceb70236694232a9776f7))
* **navigation:** rename master data categories ([6fe6c45](https://github.com/vtexdocs/devportal/commit/6fe6c4513922fee9ab4fc41b1eea5a7dafd00397))
* **netlify.toml:** redirect dealing with events ([0fe70ec](https://github.com/vtexdocs/devportal/commit/0fe70ec6674a8f5b7af5ab15748169c4dff0862b))
* **netlify.toml:** redirect using components ([72013fa](https://github.com/vtexdocs/devportal/commit/72013fac28d5165e15db8392b07702b952a4c00b))
* update documents names ([17a1fc6](https://github.com/vtexdocs/devportal/commit/17a1fc6b4efd9971880668c4005e9b2310c0a67b))


### Chore

* **faststore-components:** update available gs icons ([6be0bbb](https://github.com/vtexdocs/devportal/commit/6be0bbb741659c72a6c575711f9a1f812f502b2b))
* update components package ([2f49da1](https://github.com/vtexdocs/devportal/commit/2f49da15784fe6690e78a9ec2e16f7dc579de7c0))

### [1.16.1](https://github.com/vtexdocs/devportal/compare/v1.16.0...v1.16.1) (2024-10-02)


### Bug Fixes

* personal shopper navigation.json ([7c8fd0b](https://github.com/vtexdocs/devportal/commit/7c8fd0b3e45d5706fce730b180f6fb62715b3c6c))

## [1.16.0](https://github.com/vtexdocs/devportal/compare/v1.15.0...v1.16.0) (2024-10-02)


### Features

* adding to navigation.json ([4fcba55](https://github.com/vtexdocs/devportal/commit/4fcba55676af2672733254926f2030b1d01b07aa))
* **formatting the document:** formatting the document ([1750dd4](https://github.com/vtexdocs/devportal/commit/1750dd4fcd03485f6d3945baf34fef2a4f98f429))
* **index.tsx:** update `last-updates-section` component ([3ee08b7](https://github.com/vtexdocs/devportal/commit/3ee08b704594de1348e5e152954c383b132bc243))
* **last-updates-section:** update last-updates-section component ([91a371f](https://github.com/vtexdocs/devportal/commit/91a371f3e6d11a382030604cfeb061063f32fa6e))
* **navigation.json:** add new troubleshooting article ([38e9ab6](https://github.com/vtexdocs/devportal/commit/38e9ab68e53b398e563686d2524374de7ab18b4d))
* **navigation.json:** add new troubleshooting category ([4a68879](https://github.com/vtexdocs/devportal/commit/4a688793aec5be9709eff7922ab475f5822f8d5f))
* **navigation.json:** add section override use cases ([04cb658](https://github.com/vtexdocs/devportal/commit/04cb658bfdc69fc74a594c026642ec8cde108a18))
* **navigation.json:** add the article The Price in the shelf or in the search results is different from the product page ([f238728](https://github.com/vtexdocs/devportal/commit/f2387287be0bf745064767ee5c4110bcace7d9c9))
* **navigation.json:** EDU-13292 Card component ([67823ec](https://github.com/vtexdocs/devportal/commit/67823ecf8a058f5e997c2c93ae2c63ba997ac2fd))
* **navigation.json:** EDU-13391 WebOps ([589fbfd](https://github.com/vtexdocs/devportal/commit/589fbfdbd6e526004ac9de65e7690f68937443d7))
* **navigation.json:** new FastStore release note ([74cfabf](https://github.com/vtexdocs/devportal/commit/74cfabf828f7094810d9a5b94a343fa6f6b49a45))
* **navigation.json:** new hCMS content ([7598df4](https://github.com/vtexdocs/devportal/commit/7598df4975dc6bd65e9430db2b8d526860a9de6b))
* **navigation.json:** new release note - troubleshooting guides ([e9f3ce8](https://github.com/vtexdocs/devportal/commit/e9f3ce84e50bcc7e0fe489c2733ffa3d24aa9db2))
* **navigation.json:** update troubleshooting sidebar ([ccfde89](https://github.com/vtexdocs/devportal/commit/ccfde89fc83d6c47674ed5399e3fdc1193090c49))
* **storefront-development/index.tsx:** adding dev experience link ([6ab6251](https://github.com/vtexdocs/devportal/commit/6ab62515047502d66299a5adbbbc238d585e5d81))


### Bug Fixes

* **faststorecomponents.tsx:** fix Tabs behavior ([c96393f](https://github.com/vtexdocs/devportal/commit/c96393f6d72ca0afe5e3089944c42bde179f00b0))
* **index.tsx:** fix prettier issues ([a0b6092](https://github.com/vtexdocs/devportal/commit/a0b60926c9ca52320b5ef9f244768f21e97d35e7))
* **navigation.json:** dynamic content guides ([85af4a0](https://github.com/vtexdocs/devportal/commit/85af4a0baca5c40f750ab2662da7fd381ade86a7))
* **navigation.json:** fix Radio Field menu position ([c75f6c5](https://github.com/vtexdocs/devportal/commit/c75f6c51e1c67bc3e5c8973a5f70ac7e08e88aa5))
* **navigation.json:** paymentprovider builder ([a8d03c8](https://github.com/vtexdocs/devportal/commit/a8d03c8680e374f09d1e3a174324360b445a4f0b))
* **navigation.json:** scopes guide ([a73fafe](https://github.com/vtexdocs/devportal/commit/a73fafe47463dbaf13614b15fcc9fe557a4cb86f))
* **rehypeblockquote:** update extendedNames ([9a638cc](https://github.com/vtexdocs/devportal/commit/9a638cc991ee660e3393b5615929dd68142fdb5d))
* **troubleshooting/[slug].tsx:** fix pagination route ([fe51afa](https://github.com/vtexdocs/devportal/commit/fe51afa89c952d7346b64168caaea71906037daf))
* update hCMS sidebar ([d6f3d89](https://github.com/vtexdocs/devportal/commit/d6f3d89a8c60b8054b58034383a3298d6c850724))


### Chore

* **navigation.json:** FastStore release note ([b7446e7](https://github.com/vtexdocs/devportal/commit/b7446e760dac5b662c822d674cdaf55fb0a42c60))
* **navigation.json:** update list of io apps ([5bade4b](https://github.com/vtexdocs/devportal/commit/5bade4b5356fa77d40de2ba56e6920597b312eac))


### Docs

* add vtex-ad-network-api ([9c50ada](https://github.com/vtexdocs/devportal/commit/9c50adab8e539bcfb267ea30a0df12cd3d35b5c6))
* adding to navigation ([a4909f5](https://github.com/vtexdocs/devportal/commit/a4909f5300e6b58f74e7fdc67386de26ff5064ea))
* adjusting API name capitalization ([ab187b6](https://github.com/vtexdocs/devportal/commit/ab187b6e73d84f5131cfef0c603797ae5d755e3d))
* adjusting capitalization ([451829b](https://github.com/vtexdocs/devportal/commit/451829beefaf5e83dea6eec42fb43d8b0b2e67a8))
* correct navigation ([a87619f](https://github.com/vtexdocs/devportal/commit/a87619f7051f680295ad21478ea779afbdb1d7e3))
* correct navigation ([d6162c3](https://github.com/vtexdocs/devportal/commit/d6162c398edab8a06e92f98921182a76572a7abe))
* correct path ([c0bfac3](https://github.com/vtexdocs/devportal/commit/c0bfac31f6b5f7bf51702832514d06b238e1cf73))
* correct path ([0f5e8c7](https://github.com/vtexdocs/devportal/commit/0f5e8c7706ed370a11a900f12200483cc668f5ab))
* correct path ([1e451e1](https://github.com/vtexdocs/devportal/commit/1e451e1c875b1fb63c5b8c5915d58806fdfd78e4))
* correcting navigation ([130b091](https://github.com/vtexdocs/devportal/commit/130b09158c0ee9af8f571605b51f4d64b9a14e09))
* correcting navigation ([5c7f6d2](https://github.com/vtexdocs/devportal/commit/5c7f6d23625dd1e490e91a94451c36f4bfb1d134))
* correcting navigation ([f1d2d79](https://github.com/vtexdocs/devportal/commit/f1d2d7951af21c71bd2f4262ea28fee4f2b620d0))
* correcting navigation link being added ([40cb7cb](https://github.com/vtexdocs/devportal/commit/40cb7cbf30cad73f93d0e9d7c43a7c0d36032a52))
* deprecated API being removed ([4e7514e](https://github.com/vtexdocs/devportal/commit/4e7514ede1270a007cce836ceeb1560cb210b9c5))
* **navigation.json:** add API extensions use cases guides ([6e8862f](https://github.com/vtexdocs/devportal/commit/6e8862f5a162b1574b46dc0aa400f13fe5b0ef56))
* **navigation.json:** ga4 discrepancy troubleshooting ([7495fe3](https://github.com/vtexdocs/devportal/commit/7495fe3e53bb8aabf2142efb0267ce2699f3b28d))
* **navigation.json:** promotion flag ([9cdf43c](https://github.com/vtexdocs/devportal/commit/9cdf43c025b137aaa362dcdde6caeeb55347f2ac))
* **navigation.json:** reorganizing sidebar ([16b45b3](https://github.com/vtexdocs/devportal/commit/16b45b38a797e53646c463a602f6ef9183eb4722))
* **navigation.json:** styling ([1b9895d](https://github.com/vtexdocs/devportal/commit/1b9895de0a6d88366e80100d67251011167fe0a5))
* **navigation.json:** updating sidebar ([ad68292](https://github.com/vtexdocs/devportal/commit/ad68292072642c9aca3b25bf1b18f03e419a7b98))
* **navigation.json:** working with site editor ([8edfd21](https://github.com/vtexdocs/devportal/commit/8edfd2109f2186b07588278d694d250d2938c289))
* **navigation:** add extensibility guide ([8f8becf](https://github.com/vtexdocs/devportal/commit/8f8becfd98cf34f762c6fa00cc64093a36a78116))
* **navigation:** add master data pagination guide ([7f638e5](https://github.com/vtexdocs/devportal/commit/7f638e580015ed060bef2d5454ed35878d7984e3))
* **navigation:** add master data v1 guide ([57312a3](https://github.com/vtexdocs/devportal/commit/57312a354249c33b92a02f12cf486c226dd9fc57))
* **navigation:** add release note to the sidebar ([8010769](https://github.com/vtexdocs/devportal/commit/8010769fb0c7076d527930c59ebc09ccc91d223d))
* **navigation:** add vtex-ad-network-api ([885d413](https://github.com/vtexdocs/devportal/commit/885d4134ee805053855e3d23efa9af9e1e017796))
* **navigation:** fix ad network api ([739076b](https://github.com/vtexdocs/devportal/commit/739076b1a0bea4a9a370b3c4820c17c0c64076f8))
* **navigation:** fix data protection plus guides ([3c65326](https://github.com/vtexdocs/devportal/commit/3c653268152d5233e313771ede2f18878effce39))
* **netlify.toml:** creating redirect ([4e4ffa4](https://github.com/vtexdocs/devportal/commit/4e4ffa49d1ca845dfc47e92860c352a721435b26))
* **netlify.toml:** redirect to working with site editor ([095de03](https://github.com/vtexdocs/devportal/commit/095de03e8004d89b091a59d1cdc0d71bce11b357))
* **netlify.toml:** redirect wordpress integration ([2440439](https://github.com/vtexdocs/devportal/commit/244043901db2e1de83e0bd64bda4079ac723ba2b))
* redirect ([83bbfa2](https://github.com/vtexdocs/devportal/commit/83bbfa2748619e22170d357c86902b50450cf368))
* removing api ([f016595](https://github.com/vtexdocs/devportal/commit/f016595cff428e7262bc8b61a9b833b55dfde97f))
* removing API ([2625bb7](https://github.com/vtexdocs/devportal/commit/2625bb78391eae3b3ef6efc0c653563f22bf9b97))
* removing api doc ([1489a35](https://github.com/vtexdocs/devportal/commit/1489a35f5b312e0609af957db15cd89c853b7289))
* removing mentions to deprecated API ([d193adc](https://github.com/vtexdocs/devportal/commit/d193adcb3ca34413e2bf7f743a09a49210555a28))
* removing mentions to Subscriptions v2 ([0104124](https://github.com/vtexdocs/devportal/commit/01041242b0baf07c3fc2d1e2fbe1e6a8c2b1e23e))
* removing mentions to subscriptions v2 API ([a5d15f8](https://github.com/vtexdocs/devportal/commit/a5d15f83218e9bb8e4dd62e2386392f883e4f0f8))
* reorganizing and updating navigation.json ([3798982](https://github.com/vtexdocs/devportal/commit/379898246fc2d4cf41652ae4233367d5f1078261))
* update postman file ([9fc1de9](https://github.com/vtexdocs/devportal/commit/9fc1de95aa6ad063f7580b74e786c7921c937ff0))
* updating navigation.json ([649e0e6](https://github.com/vtexdocs/devportal/commit/649e0e643f37b8d0567fddd005f067af229847e2))
* updating navigation.json ([94c0c41](https://github.com/vtexdocs/devportal/commit/94c0c4102643307f9150d2db7257ca90db9ff1df))

## [1.15.0](https://github.com/vtexdocs/devportal/compare/v1.14.0...v1.15.0) (2024-06-20)


### Features

* **index.tsx:** adding new support component to the troubleshooting page ([78f691b](https://github.com/vtexdocs/devportal/commit/78f691b8d4a57d7bd28184d67b4d190f715eee42))
* **navigation.json:** add dynamic content release note ([c7f83ba](https://github.com/vtexdocs/devportal/commit/c7f83baf3d7ab1a99fd63eb3fb8996ad476c4094))
* **navigation.json:** add fs dynamic content ([07197c1](https://github.com/vtexdocs/devportal/commit/07197c13e74ebbc1f5e149f2cbe6106e6e34eb85))
* **navigation.json:** update troubleshooting sidebar ([a6e0a61](https://github.com/vtexdocs/devportal/commit/a6e0a61c30c314664baaf15c23ce7d4a861286eb))


### Bug Fixes

* **navigation.json:** troubleshooting docs name ([6e13b65](https://github.com/vtexdocs/devportal/commit/6e13b65670a4b56a84bca4ef10df63ea721ffb90))
* **navigation.json:** troubleshooting sidebar ([fea4836](https://github.com/vtexdocs/devportal/commit/fea4836a8db875a5084142281a2f950da6a747ec))
* **navigation.json:** troubleshooting sidebar ([b22df06](https://github.com/vtexdocs/devportal/commit/b22df06a2fd121df4dc0c7ceb821f4c94165c58a))
* **navigation.json:** troubleshooting sidebar navigation ([4df5444](https://github.com/vtexdocs/devportal/commit/4df5444d5d5b755b9add6acf35c1f54c64aba0cf))


### Docs

* add new enpoints to navitation ([b7e1ccc](https://github.com/vtexdocs/devportal/commit/b7e1cccfefc7f42703ab73fc3b574016f7ec9c47))
* adding dev experience link ([88f5c60](https://github.com/vtexdocs/devportal/commit/88f5c60b752e607b9493b1b5558e8ca0e70801a6))
* adding to navigation ([8a0a9b3](https://github.com/vtexdocs/devportal/commit/8a0a9b371161496d33eeea0bbdc771389891ea49))
* **navigation:** add troubleshooting modal layout ([cd8bb07](https://github.com/vtexdocs/devportal/commit/cd8bb07c935772b0a8ef1ac2746388ddad6be721))

## [1.14.0](https://github.com/vtexdocs/devportal/compare/v1.13.2...v1.14.0) (2024-06-13)


### Features

* **faststore/[slug].tsx:** allow hideTOC frontmatter option ([1cfc2c7](https://github.com/vtexdocs/devportal/commit/1cfc2c746a81501ebf55b05722c4295b8ec6edab))
* **navigation.json:** add a  new doc to the sidebar ([690b56c](https://github.com/vtexdocs/devportal/commit/690b56c59ce1513c0c2d6f9404130f0cae4e2625))
* **navigation.json:** add fs managing performance ([3c3ea57](https://github.com/vtexdocs/devportal/commit/3c3ea571242129e295f4c68d09aaa796635158b6))
* **navigation.json:** add fs testing-the-server-side-rendering doc ([df541b3](https://github.com/vtexdocs/devportal/commit/df541b358a662e02193d41a2d4dfd03d06aeee45))
* **navigation.json:** new troubleshooting ([b6c608a](https://github.com/vtexdocs/devportal/commit/b6c608a08135cd306e996dfb468ed0023cc9006d))
* **navigation.json:** update faststore overview doc slug ([398e4d5](https://github.com/vtexdocs/devportal/commit/398e4d57389c06adf2e8ff3a50f940248bfee238))
* **navigation.json:** update navigation.json ([30cb875](https://github.com/vtexdocs/devportal/commit/30cb875ab38b4abcda083f38c7d7a181471cb41b))
* new sidebar category ([296eb01](https://github.com/vtexdocs/devportal/commit/296eb01f055a4620b55445727c9afd268184eb46))
* **pagination:** create pagination component ([863c061](https://github.com/vtexdocs/devportal/commit/863c06122f1f15cc94a17268143dda43f8d7ef77))
* **productgridusage:** add ProductGridUsage faststore component ([e265f86](https://github.com/vtexdocs/devportal/commit/e265f862fc02d716eaaf0a58c1d2b2c428b1d4a6))
* **storefront-development:** update storefront-developemnt page with faststore content ([4fbf9a8](https://github.com/vtexdocs/devportal/commit/4fbf9a8eb4628d9888d7ca543e1705bfb6563141))
* **troubleshooting:** create troubleshooting page ([f5d10bd](https://github.com/vtexdocs/devportal/commit/f5d10bde5b6dfac6cf0646ff8d262fcf530b0327))


### Bug Fixes

* **carditem:** fix type ([be2c798](https://github.com/vtexdocs/devportal/commit/be2c798544a5b4ded394a2b7df9550819e3bbc7b))
* **gettroubleshootingdata:** fix frontmatter data ([7b7c401](https://github.com/vtexdocs/devportal/commit/7b7c401b6aa7c5514d5389fa9b99c1d2e5482296))
* **netlify.toml:** redirect troubleshooting article ([7c2740c](https://github.com/vtexdocs/devportal/commit/7c2740ca872a455e49172e7d0a83e4d63fdb5abe))
* **styles.ts:** fix card component styles ([00fcb9f](https://github.com/vtexdocs/devportal/commit/00fcb9f4aceef927b0db667c032828f02f3b8b1a))
* **styles.ts:** fix card styles ([ed84982](https://github.com/vtexdocs/devportal/commit/ed8498275f509d612fc2b614a102b6f4235d1fc7))
* **troubleshooting fix:** fix troubleshooting props ([01b017c](https://github.com/vtexdocs/devportal/commit/01b017cff6303e38dfb262800509f7819a5c81de))
* **troubleshooting:** change branch to main ([9d98a09](https://github.com/vtexdocs/devportal/commit/9d98a092b8ebfce413699de802ae832b47f251f1))
* **troubleshooting:** fix navigation.json ([163f949](https://github.com/vtexdocs/devportal/commit/163f949acdc31e6cc735a5429c380644d7c95fab))
* **troubleshooting:** fix update getTroubleshootingData ([c0f0492](https://github.com/vtexdocs/devportal/commit/c0f049203a946fbb91686978597a2e02e02b63df))
* update navigation.json ([36d5119](https://github.com/vtexdocs/devportal/commit/36d511976f39b0b204174d2227950a71529c68fd))
* updating pick and pack api ([126f3f3](https://github.com/vtexdocs/devportal/commit/126f3f3896fa7e8ea9e31e9ed9ada7ab053acc0f))


### Style

* **apps-page:** update apps-page css ([1afd567](https://github.com/vtexdocs/devportal/commit/1afd567c2e818b27d6ef131d180ac0ae56ccf97f))
* **faststore.scss:** fix styles ([43811e7](https://github.com/vtexdocs/devportal/commit/43811e733a95a766319ded0587f0e87d9ca5272c))
* **faststore.scss:** update faststore table styles ([3aa8e87](https://github.com/vtexdocs/devportal/commit/3aa8e8797b02c878e6264cfd7be0d0778f9b4a77))
* **section-item.module.css:** update faststore-sectionItem ([f10aa67](https://github.com/vtexdocs/devportal/commit/f10aa67566458065778dcaa24d48767bc29574b2))
* **section-item.module.css:** update sectionimage min max width ([3c0a477](https://github.com/vtexdocs/devportal/commit/3c0a477a7973462f49503120726de7fff0161047))
* **sectionitem:** update sectionitem styles ([6e76182](https://github.com/vtexdocs/devportal/commit/6e761826f38b4581d07cadb773b54e70724dca54))
* **sectionitem:** update styles ([e8142cd](https://github.com/vtexdocs/devportal/commit/e8142cdeaeb3a43540cacf4142d1718a9801fa65))
* update troubleshooting card styles ([9c06a68](https://github.com/vtexdocs/devportal/commit/9c06a68b6e4e6feee96b482691f72a3f08e18df3))


### Chore

* **faststore/index.tsx:** remove unused page ([6f410c7](https://github.com/vtexdocs/devportal/commit/6f410c7d56b7f93cba301c10f6b288399e1c78a4))
* **last-update-section:** udpate lastreleasenote ([b0b4731](https://github.com/vtexdocs/devportal/commit/b0b473147a9b38514f5e37599ebd9269a9bd6041))
* **navigation.json:** fix navigation error ([476f172](https://github.com/vtexdocs/devportal/commit/476f172c4949d146cfc4b63b324e4312e03769f1))
* **netlify.toml:** update redirect ([752aad8](https://github.com/vtexdocs/devportal/commit/752aad8ab6fe957289a9e4a3ddc211bab2c96310))
* **package.json:** update vtexdocs/components version ([ae4239e](https://github.com/vtexdocs/devportal/commit/ae4239ea5eca6006e624aa6a62436f14981fc065))
* **storefront-development:** update copy ([8fe31b7](https://github.com/vtexdocs/devportal/commit/8fe31b7f203b92a9701c000f16e370a5623ff57a))
* **storefront-development:** update faststore link ([eb7bb3f](https://github.com/vtexdocs/devportal/commit/eb7bb3f1798c6997629cc937bd754c6f51959de3))


### Docs

* add new category and docs to navigation ([6116830](https://github.com/vtexdocs/devportal/commit/6116830cca1c1f6dbbb25b46bf43f318404c2517))
* create redirect for store framework guide ([aa6d2a7](https://github.com/vtexdocs/devportal/commit/aa6d2a7593c8cd786729960135d525409ef9b706))
* create redirect to new platform overview category ([91f55c4](https://github.com/vtexdocs/devportal/commit/91f55c4566262406589db57dd02357ed3a4f8d19))
* edit store framework category nav ([e6f7630](https://github.com/vtexdocs/devportal/commit/e6f7630b3b074a28cf45d326072eae8e772309b2))
* fix orders pii api navigation ([44278c7](https://github.com/vtexdocs/devportal/commit/44278c797b1d9d536c4d5dbd844e2b5b7a3fd2fe))
* **navigation:** add data protection plus guides ([9fecaa9](https://github.com/vtexdocs/devportal/commit/9fecaa9da3f1f948c09cb48aef32c54aa2b4ed69))
* **navigation:** add orders pii api ([2ff2cd9](https://github.com/vtexdocs/devportal/commit/2ff2cd90f4c92dbffdf4c9b7ff2cde34a8c06f53))
* **navigation:** edit pii api navigation ([c1c67e0](https://github.com/vtexdocs/devportal/commit/c1c67e0c03f77321773162620c29ea6cbb93b6c3))
* **navigation:** fix checkout security subcategory ([200e138](https://github.com/vtexdocs/devportal/commit/200e1385e30c8a293c8765bdc19669ba1f9fd9d7))
* **navigation:** fix copy sku files endpoint nav ([2500518](https://github.com/vtexdocs/devportal/commit/250051827690258b44d5b667ee52dd18b3e8cee5))
* **redirect:** data protection plus ([1d5913a](https://github.com/vtexdocs/devportal/commit/1d5913aed4954f9cffdf9c6bb887039fd87c6eed))
* remove data-privacy redirect ([cece66f](https://github.com/vtexdocs/devportal/commit/cece66fb84358c6d52bcf00e100d9f16505268d6))

### [1.13.2](https://github.com/vtexdocs/devportal/compare/v1.13.1...v1.13.2) (2024-05-10)


### Style

* **faststore.scss:** fix rating styles ([83dd59f](https://github.com/vtexdocs/devportal/commit/83dd59f4a822c26babe90ec21e3badb17df7a3e7))
* **faststore.scss:** fixes ([db4298c](https://github.com/vtexdocs/devportal/commit/db4298c9898d17966117de3b8d8d8e1876c593c8))


### Chore

* **package.json:** update @vtexdocs/components version ([e6a4ba0](https://github.com/vtexdocs/devportal/commit/e6a4ba0ef1d556490060e03b3606c28b899e0f5c))
* **package.json:** update components version ([60c77f4](https://github.com/vtexdocs/devportal/commit/60c77f48dbcd34575044042313122f93260ac5ca))

### [1.13.1](https://github.com/vtexdocs/devportal/compare/v1.13.0...v1.13.1) (2024-05-10)


### Bug Fixes

* remove duplicated ([f9b631b](https://github.com/vtexdocs/devportal/commit/f9b631bb79d21d5d5649d22edb815ce58e137501))
* **replacehtmlblocks:** close open img tags ([9b18646](https://github.com/vtexdocs/devportal/commit/9b1864659f4fdd56de014eb491356c42e31cdc67))
* **replacehtmlblocks:** consider <img...></img> case ([b72bf74](https://github.com/vtexdocs/devportal/commit/b72bf7450aeea5774326c5187621f1e50e01340e))


### Chore

* **layout.tsx:** update LibraryContextProvider ([759824d](https://github.com/vtexdocs/devportal/commit/759824d18a3661c7091b1de5c769f8d44aa92e80))
* **package.json:** update components package ([c5aa97a](https://github.com/vtexdocs/devportal/commit/c5aa97a91eb72378b43f57b77178e37fc39b4576))

## [1.13.0](https://github.com/vtexdocs/devportal/compare/v1.12.0...v1.13.0) (2024-05-07)


### Features

* add pick and pack api ([947e5be](https://github.com/vtexdocs/devportal/commit/947e5be8b6c6e31b6fe9b98c10c9d68f3a18cf22))


### Bug Fixes

* **apps/[slug]:** parse markdown value from json ([ee0b420](https://github.com/vtexdocs/devportal/commit/ee0b4207575b7d912d03dc5138140c4c31e3b3a9))
* **apps/slug:** do not use replacemagicblocks ([b38f34a](https://github.com/vtexdocs/devportal/commit/b38f34a9cf64326d9dc2e782e3a2d49250528c9a))
* faststore docs path ([6ff2a4f](https://github.com/vtexdocs/devportal/commit/6ff2a4fab2e0787bf3bcb369e5be5c6e8e720394))
* **next.config.js:** use branch navigation url ([e25d99f](https://github.com/vtexdocs/devportal/commit/e25d99f596c343bec01cfbdc5b62ae2965c869d3))
* **pages/docs/apps:** use replaceHTMLBlocks ([a1f874e](https://github.com/vtexdocs/devportal/commit/a1f874eb3a2154567423176bd29c43057399dc9f))


### Style

* **faststore.scss:** update checklist styles ([8e0b451](https://github.com/vtexdocs/devportal/commit/8e0b451f9f14044e14bc89c44c4739ef479f6976))


### Tests

* project structure slug ([96d5a18](https://github.com/vtexdocs/devportal/commit/96d5a18908c3fec5bce02a011e16c3792dad2460))


### Docs

* adding change order beta to navigation ([e835d2c](https://github.com/vtexdocs/devportal/commit/e835d2cd70706b0949791542cc5e30ab9524ccf5))
* adding to logistics navigation ([9acd0d5](https://github.com/vtexdocs/devportal/commit/9acd0d5f5349c48da9461e4db47c961d6c4adc4a))
* adding to oms navigation ([fcdb6d6](https://github.com/vtexdocs/devportal/commit/fcdb6d63e93c196db50ca5cd15e74616fa1a8963))
* changing category name ([2b3bd55](https://github.com/vtexdocs/devportal/commit/2b3bd5507312888d75f2bc6b5597341e87d4b3c5))
* create redirect ([84958ac](https://github.com/vtexdocs/devportal/commit/84958aca0acbcb1cb1d837d463f1043978a01beb))
* create redirect search graphql ([a039572](https://github.com/vtexdocs/devportal/commit/a0395729060babfb1ab7c1f4bea0f8b9d992805c))
* create redirect to safedata app doc ([fd83462](https://github.com/vtexdocs/devportal/commit/fd834621daaa0b67cce26483bff107379f369dee))
* fixing redirect ([2255646](https://github.com/vtexdocs/devportal/commit/225564689cd484bc93fc99663ab3bf990f9fe49c))
* **navigation:** fix sidebar link ([f6f9651](https://github.com/vtexdocs/devportal/commit/f6f9651d4a23057e6f85cfe8617ba04c9bbe16a3))
* **navigation:** update master data apis navigation ([1287d82](https://github.com/vtexdocs/devportal/commit/1287d82f130d827b7c83326662571f347cfffa4e))


### Chore

* **apps/slug:** add official vendor vtexus ([1578ad4](https://github.com/vtexdocs/devportal/commit/1578ad4c1104a6b33b845baad6dd28500dd73b37))
* **constants:** export const officialvendors ([a6d0b3a](https://github.com/vtexdocs/devportal/commit/a6d0b3a228a960cba60f2e8c98dbcec833276183))
* **last-updates-section:** update last rn ([7b99b1d](https://github.com/vtexdocs/devportal/commit/7b99b1d29155960da11fddcbda6922d836c317cd))
* **navigation.json:** update faststore nav ([4f74f17](https://github.com/vtexdocs/devportal/commit/4f74f17b8b9675f791bec5731d2920766a24f246))
* **navigation:** fix doc path ([42584b0](https://github.com/vtexdocs/devportal/commit/42584b039e4460664452292d88d5acf7c1581be4))
* **navigation:** wIP add faststore docs ([32e7f9e](https://github.com/vtexdocs/devportal/commit/32e7f9e4ce0c18724b9d6630bef893f37b79c3fd))
* **netlify.toml:** add faststore redirects ([31ea78d](https://github.com/vtexdocs/devportal/commit/31ea78d64b72cc943bae76e6f6127e9e7b93064d))
* **netlify.toml:** add faststore redirects ([d2d611f](https://github.com/vtexdocs/devportal/commit/d2d611f91d7446a99659e556a1814b550922732c))
* **netlify.toml:** add missing redirects ([3d40a89](https://github.com/vtexdocs/devportal/commit/3d40a8986c442f16091661b9f8b00a93262cb6b8))
* **netlify.toml:** fix faststore redirects ([e4fdf29](https://github.com/vtexdocs/devportal/commit/e4fdf2989281395e41c5b8ac5df3a77fbbc96d6e))
* **netlify.toml:** fix redirect typo ([07a2b8f](https://github.com/vtexdocs/devportal/commit/07a2b8f73e2dc817ac8b52b2a16fac33991c353c))
* **netlify.toml:** specify troubleshooting docs to avoid future issues ([e7ae844](https://github.com/vtexdocs/devportal/commit/e7ae844085fbfe04eaf9690a2749d12dae2bcc94))
* **netlify.toml:** update faststore redirects ([fe59206](https://github.com/vtexdocs/devportal/commit/fe59206d25198a1d7f5ecd683c347929431a080a))
* **package.json:** update faststore major ([353130d](https://github.com/vtexdocs/devportal/commit/353130d670596633277cf3b5d31dedf79cf08a9b))

## [1.12.0](https://github.com/vtexdocs/devportal/compare/v1.11.6...v1.12.0) (2024-03-06)


### Features

* add Checkout Config API ([d8ffec2](https://github.com/vtexdocs/devportal/commit/d8ffec20b8737bd0bf0d5d64fc6362c4d2df3081))


### Chore

* **last-updates-section:** update lastreleasenote ([5f27356](https://github.com/vtexdocs/devportal/commit/5f273561a285fafedcfc4558faa3d62d71e581d2))
* **navigation.json:** update navigation ([fa89191](https://github.com/vtexdocs/devportal/commit/fa891915970879f1005f0a9ef333dff586d1334b))
* **netlify.toml:** add redirect ([a3bd2c9](https://github.com/vtexdocs/devportal/commit/a3bd2c927d8cf47902f3420b82235d9326a3fe86))
* **netlify.toml:** update redirect ([9844af3](https://github.com/vtexdocs/devportal/commit/9844af358889252c12c1f86b4564c26f97c072fa))


### Docs

* create redirect ([70f459a](https://github.com/vtexdocs/devportal/commit/70f459a843ecbee84e1ae11e178830d52cd0e4f9))
* create redirect master data api ([fff2260](https://github.com/vtexdocs/devportal/commit/fff22606b00138db71c2eb1fbeea2a4be41f97a9))
* create redirects api overviews ([85dbc68](https://github.com/vtexdocs/devportal/commit/85dbc68ef7e00f1f43804fa6a0cf1ad5dbf249d8))
* **navigation:** edit intelligent search api ([348cd31](https://github.com/vtexdocs/devportal/commit/348cd31da66b21c574b642f97ad331683fa88138))
* **navigation:** update VTEX ID API ([1d87b2e](https://github.com/vtexdocs/devportal/commit/1d87b2edcceb8ba4648ee4d213d1f0ea2407be9f))
* redirect ([45a441f](https://github.com/vtexdocs/devportal/commit/45a441f1bca9a650295b1c632caaab3d6cee633a))

### [1.11.6](https://github.com/vtexdocs/devportal/compare/v1.11.5...v1.11.6) (2024-01-31)


### Bug Fixes

* **getdocspaths:** do not fetch docs/faststore in getDocsPaths() ([a6f9698](https://github.com/vtexdocs/devportal/commit/a6f9698bfa6cee5a5b130c42d5875019aab8104f))
* **package.json:** update faststore version ([7033429](https://github.com/vtexdocs/devportal/commit/703342966e2cbce0a76df198187b4f80b8d63cb4))


### Docs

* creating a redirect ([faaeb57](https://github.com/vtexdocs/devportal/commit/faaeb57d8687136bfb48d8310b6e1ec6c02067fd))
* **navigation:** edit category title ([e5e399a](https://github.com/vtexdocs/devportal/commit/e5e399a1aad7dcbcdb9a5435d63cc073838e4068))
* **navigation:** edit store framework navigation ([83dcec0](https://github.com/vtexdocs/devportal/commit/83dcec0bb4a0a90749f182336a2526822d7097aa))
* **navigation:** fix master data api v1 and v2 navigation ([1d0d821](https://github.com/vtexdocs/devportal/commit/1d0d821c79afdd62cb7e3c3ba9af5f9a5c69666b))


### Chore

* **faststore-components:** feat: newsletterusage example ([6b3db40](https://github.com/vtexdocs/devportal/commit/6b3db406ba58350311091551a88e7afbc29941b5))
* **faststore-components:** update usage examples ([49d52fd](https://github.com/vtexdocs/devportal/commit/49d52fdd071ab55a0baa368d231700912e813bab))
* **getfaststorepaths:** update FastStore docs branch ([0da00cb](https://github.com/vtexdocs/devportal/commit/0da00cbb1ae0e2e109e7c1d2808e97b7f84b2122))
* **package.json:** update faststore version ([4e9446a](https://github.com/vtexdocs/devportal/commit/4e9446a846da5098fb0548ee02d1e531e5ea4a99))
* **package.json:** update FS version ([59e117d](https://github.com/vtexdocs/devportal/commit/59e117d802d2c2cbfa2663116517a5da740d0c6d))

### [1.11.5](https://github.com/vtexdocs/devportal/compare/v1.11.4...v1.11.5) (2024-01-12)


### Features

* **faststore/[slug].tsx:** enable seeAlso functionality ([c6f105c](https://github.com/vtexdocs/devportal/commit/c6f105c0da8640340111afb4f7cea20b9292e448))

### [1.11.4](https://github.com/vtexdocs/devportal/compare/v1.11.3...v1.11.4) (2024-01-12)


### Bug Fixes

* **apps:** edit specifiedVersion checks ([8235f61](https://github.com/vtexdocs/devportal/commit/8235f61e247caf94314b347576863ee876022d04))
* **package:** fix path ([665601d](https://github.com/vtexdocs/devportal/commit/665601d618a81d237ae4c5233866aa4b4a80d4a7))
* **sectionitem:** icon usage ([e0862c2](https://github.com/vtexdocs/devportal/commit/e0862c2e1cc6b2738d9427bc55576cb3fc7eb027))


### Docs

* create redirect master data api v2 ([e1a54ad](https://github.com/vtexdocs/devportal/commit/e1a54ad2e06af9eaa35eede2daa48b70abcc7d95))


### Style

* **faststore-components:** improve faststore content rendering styles ([ffd6bc8](https://github.com/vtexdocs/devportal/commit/ffd6bc835a30775f95d7ea430bb0ec7e364dd307))
* **section-item:** update section item styles ([3d0e148](https://github.com/vtexdocs/devportal/commit/3d0e14843b3fdefb64b3ab3b67d81c94367c032e))


### Chore

* **faststore-componentes:** update faststore components and constants ([d57880f](https://github.com/vtexdocs/devportal/commit/d57880fd3d74dc70e87d68e3dd5270d6a374352f))
* **package.json:** update components lib version ([e84365e](https://github.com/vtexdocs/devportal/commit/e84365e903c83f1bc85762fca98b8b23b65251c8))
* **package:** @vtexdocs/components version ([65784fc](https://github.com/vtexdocs/devportal/commit/65784fc61a17f8d5a8998c5a96f6ecf2631877ac))
* **package:** update dependencies ([db61da1](https://github.com/vtexdocs/devportal/commit/db61da110308a1c60f9293065bbf7ea67a33861f))

### [1.11.3](https://github.com/vtexdocs/devportal/compare/v1.11.2...v1.11.3) (2024-01-08)


### Bug Fixes

* **faststore/[slug].tsx:** allows listing faststore docs ([dbac5f8](https://github.com/vtexdocs/devportal/commit/dbac5f8c797bd65cd0425960f52cca565f1a9382))

### [1.11.2](https://github.com/vtexdocs/devportal/compare/v1.11.1...v1.11.2) (2024-01-04)


### Docs

* **netlify.toml:** redirect headless commerce release note ([4653527](https://github.com/vtexdocs/devportal/commit/465352743f86200efc3cf726aa3e8572106e95bf))

### [1.11.1](https://github.com/vtexdocs/devportal/compare/v1.11.0...v1.11.1) (2024-01-04)


### Chore

* **faststore-components/constants:** update faststore constants ([018d60d](https://github.com/vtexdocs/devportal/commit/018d60dfe4331f827c64295550fcc105c608b241))


### Docs

* **navigation:** add calling commerce apis course ([dcadc12](https://github.com/vtexdocs/devportal/commit/dcadc12f16b9d3106177a5318ce3994939155619))
* **netlify.toml:** redirect legacy page get-to-know-vtex-apis ([5b8b629](https://github.com/vtexdocs/devportal/commit/5b8b629f6aab73342967584ed549bca04f9d9773))
* **netlify.toml:** redirect legacy page using-postman ([e4d695c](https://github.com/vtexdocs/devportal/commit/e4d695c7f0913a34593854e1ed255754682e6e0c))
* **redirect:** fix redirect using-postman ([faba12b](https://github.com/vtexdocs/devportal/commit/faba12b6bb27aa12e6697ce18054826d0886dfc1))

## [1.11.0](https://github.com/vtexdocs/devportal/compare/v1.10.2...v1.11.0) (2023-12-22)


### Features

* **faststore-components:** feat GiftTemplate components ([1c1a4c9](https://github.com/vtexdocs/devportal/commit/1c1a4c9b7ef38375502c9c99b065a4fdcb675c62))


### Bug Fixes

* **gift:** add Icon attributes ([0912dda](https://github.com/vtexdocs/devportal/commit/0912ddabb498e5d6d864d581cdba6f35f49a1b3a))


### Docs

* **navigation:** add services course ([09543d8](https://github.com/vtexdocs/devportal/commit/09543d8e3b535610f4af01fa0a862410385c8d21))

### [1.10.2](https://github.com/vtexdocs/devportal/compare/v1.10.1...v1.10.2) (2023-12-19)


### Bug Fixes

* **getdocspaths:** do not fetch docs/release-notes paths for guides ([deaefef](https://github.com/vtexdocs/devportal/commit/deaefef5229a9c2c7b6b4a095e1dda0a2e038d8d))

### [1.10.1](https://github.com/vtexdocs/devportal/compare/v1.10.0...v1.10.1) (2023-12-15)


### Bug Fixes

* revert ol and ul styling ([6a3f4cf](https://github.com/vtexdocs/devportal/commit/6a3f4cf1bfa2df08dcba0b6b7e155493b866e2ed))


### Docs

* create session manager api redirect ([0bf7421](https://github.com/vtexdocs/devportal/commit/0bf742117060f651bdf36277066fc76bdff5408f))
* edit redirects ([1f1264d](https://github.com/vtexdocs/devportal/commit/1f1264dbc380b27c5eb33b819e8ec85d2574e75a))

## [1.10.0](https://github.com/vtexdocs/devportal/compare/v1.9.29...v1.10.0) (2023-12-11)


### Features

* add @vtexdocs/library dependency and update imports ([e3114cf](https://github.com/vtexdocs/devportal/commit/e3114cf85e2f00f2d68406ed92300252931318c4))
* add component lib build file ([d0cc0a3](https://github.com/vtexdocs/devportal/commit/d0cc0a376d7b4757047550fc76b24201e7825af9))
* **code-samples:** add code samples page to showcase boilerplate repositories ([331576c](https://github.com/vtexdocs/devportal/commit/331576cce2047f0827a0542a14f8cbe477900c6d))
* **codehike:** install codehike ([5b49d5e](https://github.com/vtexdocs/devportal/commit/5b49d5e428f0369a5be2e90eaf2103f46bcb5a44))
* **components:** add faststore components ([6e0acb9](https://github.com/vtexdocs/devportal/commit/6e0acb906d1d725ad4bcadeb64176f7de70d3480))
* create alias for component lib filepath ([b483d7b](https://github.com/vtexdocs/devportal/commit/b483d7bd6844aee4905f1d7deeaa325d7a69e313))
* create faststore page ([d269385](https://github.com/vtexdocs/devportal/commit/d2693853ad0d8f0ae58d760df4defc4cb1964824))
* **editor:** openapi preview ([4836e77](https://github.com/vtexdocs/devportal/commit/4836e770131bc395ed3e8dedcbd3b457fbf74844))
* **faststore-components:** add and update mocks examples ([3c3d62c](https://github.com/vtexdocs/devportal/commit/3c3d62cf54f2506b26e637a69280853245ddfa02))
* **faststore:** add components ([d70e57e](https://github.com/vtexdocs/devportal/commit/d70e57ef0c6cdc49681202e5b1972883f2c714df))
* **faststore:** add faststore icon ([2bc8fc8](https://github.com/vtexdocs/devportal/commit/2bc8fc89258829a408b28636e41789155201e682))
* **faststore:** add faststore icons and add global style ([2873adf](https://github.com/vtexdocs/devportal/commit/2873adf276147f053de3a821a2665080fee0c56b))
* **faststore:** add first version of faststore docs page ([f07a808](https://github.com/vtexdocs/devportal/commit/f07a808bce41080fc020050ae2f124bae9565b41))
* **faststore:** add new images ([34082e9](https://github.com/vtexdocs/devportal/commit/34082e9d08074a831d3f195b464b4349367adc6b))
* **faststore:** add remark and rehype plugins ([2c66188](https://github.com/vtexdocs/devportal/commit/2c6618856f9da934b7d21df9bf5e0030bc069304))
* **faststore:** create steps component ([feb515a](https://github.com/vtexdocs/devportal/commit/feb515aa63f75054e1dc9be46e7da8bb4a721de5))
* **faststore:** update main page ([0347e25](https://github.com/vtexdocs/devportal/commit/0347e259f25f2115adc72486412df1f6762dadce))
* **faststore:** update sidebar structure ([28ed257](https://github.com/vtexdocs/devportal/commit/28ed257fde2de433439c8e36033a8a1d49b01ef8))
* **faststore:** using logger ([9180f6c](https://github.com/vtexdocs/devportal/commit/9180f6cbe09855a3a92f972d209118041c9492f6))
* get all build files ([c32ba10](https://github.com/vtexdocs/devportal/commit/c32ba10248fe510fe805799c45e6ab377b27e900))
* **markdown-renderer:** add Tab and Tabs to faststore components ([79810f9](https://github.com/vtexdocs/devportal/commit/79810f92b6cee0d412b4fc09f793c21575306151))
* **pages:** use code hike in all page types ([fafa8ac](https://github.com/vtexdocs/devportal/commit/fafa8acf0bd5f7b3c35e85162f2720f75e47257f))
* update rapidoc submodule ([3ce25a2](https://github.com/vtexdocs/devportal/commit/3ce25a21c3c9915f81ae5527b346ba33c02c22ee))
* update rapidoc submodule ([66a6666](https://github.com/vtexdocs/devportal/commit/66a6666a089781b341873fd9191ac73ac73f96ac))
* use MarkdownRenderer and toc from library ([204aaab](https://github.com/vtexdocs/devportal/commit/204aaab78fae621d7c32b30dc2194887390a6817))


### Bug Fixes

* add headingList as prop ([4ceecea](https://github.com/vtexdocs/devportal/commit/4ceecea6653718ad9120d5a0a4b4e9a02d370bbf))
* **api-reference:** try to stop category indexing to prevent no-canonical errors by google crawler ([029db98](https://github.com/vtexdocs/devportal/commit/029db98fcd75544c9f1fdc7fc8af923a88ebf3cb))
* **apps:** add warning about app version ([b8be03e](https://github.com/vtexdocs/devportal/commit/b8be03e358c0fd78664fc83326e554e68b94ee42))
* change markdown renderer prop name ([cc88231](https://github.com/vtexdocs/devportal/commit/cc882319e973349460d6e5f37f288c7f4fc4adea))
* **codehiketheme:** change folder and file name ([c947ffa](https://github.com/vtexdocs/devportal/commit/c947ffa35772d6bda738bacada0c3027d532db18))
* edit [child].tsx ([572170f](https://github.com/vtexdocs/devportal/commit/572170f2a8d41200d8bd991ff52f847be8892d32))
* edit getChildDocApp.ts ([ad4d2c9](https://github.com/vtexdocs/devportal/commit/ad4d2c9faf80c58da22fee0e3733dd0aadfeace3))
* **faststore-components:** remove propsection export ([359fec9](https://github.com/vtexdocs/devportal/commit/359fec981a7b35facdfc433b51982beb556bfdbc))
* **faststore:** add pagination, article title and description; fix frontmatter render ([5893838](https://github.com/vtexdocs/devportal/commit/5893838fde6238f28242cb6be5cf6c613acbbefc))
* **faststore:** fix imports and exports ([c315230](https://github.com/vtexdocs/devportal/commit/c31523012056fa7bb2cb8f94067e1dd1d752ec36))
* **faststore:** fix lint problems ([e6d1af9](https://github.com/vtexdocs/devportal/commit/e6d1af9583f4bca5efa107dc6d62a15016bf43f2))
* **faststore:** fix mocks imports ([2c92f8d](https://github.com/vtexdocs/devportal/commit/2c92f8d84ededbe63a1120fada3f5cb00d6c8a63))
* **faststore:** get components from frontmatter ([93da725](https://github.com/vtexdocs/devportal/commit/93da7253a42859891a1a8ff1510fe016df64765a))
* **faststore:** hydration error ([6241cd5](https://github.com/vtexdocs/devportal/commit/6241cd56d7957829773673320ca8fb56b5f2eb24))
* **faststore:** remove branch argument ([fe5192f](https://github.com/vtexdocs/devportal/commit/fe5192fa24db4d913646335da4472a0d638588a5))
* **faststore:** remove css reset and fix section component ([4c77899](https://github.com/vtexdocs/devportal/commit/4c77899cd6403ac79f58ded47c0b75c75a4711e3))
* **faststore:** remove window usage ([bdb3cf9](https://github.com/vtexdocs/devportal/commit/bdb3cf9c8509db6a3f18f4cd7f51c020968936ed))
* **faststore:** rename and add the faststore site components style to global css ([1d988b8](https://github.com/vtexdocs/devportal/commit/1d988b86fb47030c8fae3d242ce5e7550e89fecd))
* **faststore:** update components and add scope ([c98ed12](https://github.com/vtexdocs/devportal/commit/c98ed12a689fa1becfcf408f7dce1af276d1f2b0))
* **faststore:** update components and scope ([1a15ddd](https://github.com/vtexdocs/devportal/commit/1a15ddd9a88b7165369d1532ddbd0e1b8ce46855))
* **faststore:** use next-mdx-remote ([25131c7](https://github.com/vtexdocs/devportal/commit/25131c79040c8de03a3e50ef178d943af774ceb2))
* hide faststore menu and move it to guides ([69a2561](https://github.com/vtexdocs/devportal/commit/69a25615181a11f791d169b95e0df6ae590533c6))
* **mytheme:** fix component declaration ([e057f3b](https://github.com/vtexdocs/devportal/commit/e057f3b99373b48e4b2a308bf840e33a84030871))
* **mytheme:** fix import ([6d682a2](https://github.com/vtexdocs/devportal/commit/6d682a281405a4257556876e1a963dc45e4ea7e6))
* **openapi preview:** rapidoc route prefix ([d955d66](https://github.com/vtexdocs/devportal/commit/d955d660e34b06aeba50dbc7efc07f1abc0c20be))
* **openapi-preview:** remove auth component ([c289e97](https://github.com/vtexdocs/devportal/commit/c289e972d16be696413689c0ff4db7bda6adfd80))
* **package:** removing esbuild and mdx-bundler ([83957ed](https://github.com/vtexdocs/devportal/commit/83957edcc59b3a41e550f3c8ecc913267afcbe15))
* **propsSection:** replacing process.cwd() ([55d4eca](https://github.com/vtexdocs/devportal/commit/55d4eca94b7acaf810e3ad282d98b3c596a0bbfd))
* restore header ([42fd828](https://github.com/vtexdocs/devportal/commit/42fd82811bf4377b690bdb132230eaa991bedd3b))
* **server-sitemap:** fix url redirects ([cdfbac7](https://github.com/vtexdocs/devportal/commit/cdfbac7b2b3d7abf272e90fcfdda717993c58d97))
* update callout message ([890bb69](https://github.com/vtexdocs/devportal/commit/890bb6937af79457bd9c83e2585a8cd4e9b8795f))
* update faststore images paths ([64c7f8f](https://github.com/vtexdocs/devportal/commit/64c7f8fc5e4d805b366e0848926a5f856e1e93a4))
* update prebuild script ([4706ede](https://github.com/vtexdocs/devportal/commit/4706ede5cc6841e598a432c3a5f14e7be71a64db))
* update rapidoc submodule ([b6d82dc](https://github.com/vtexdocs/devportal/commit/b6d82dc5548472b74b9003d844058020c7b7804b))
* use announcements as header props ([f737c39](https://github.com/vtexdocs/devportal/commit/f737c39e9243195e4b98767f712591fa6ae50fdd))
* use ImageGalleryViewer ([b66986d](https://github.com/vtexdocs/devportal/commit/b66986db5df6faf7d8d67398a529866327e1fea4))
* use library config ([102bed3](https://github.com/vtexdocs/devportal/commit/102bed3431455cc99610fb5eb60261b36e8558bc))
* use MarkdownRenderer from components lib ([cd32d32](https://github.com/vtexdocs/devportal/commit/cd32d32d675ce16211534a64787d08d440a5cb4b))
* use router to check if it is preview ([09dc196](https://github.com/vtexdocs/devportal/commit/09dc196d5cb0e471ef6711a1a0808a20f7c001ea))


### Tests

* **api-reference:** add additional wait to tests in reference page ([f014c0c](https://github.com/vtexdocs/devportal/commit/f014c0cf21167248251508945aa04dacafb5bde9))
* **documentation-page-status:** add retries on error ([36fdc7b](https://github.com/vtexdocs/devportal/commit/36fdc7b3d0a225f97f1f7bfc2754439363d3f2b1))


### Refactoring

* **openapi-preview:** update header text and remove unnecessary rapidoc attributes ([0dac9aa](https://github.com/vtexdocs/devportal/commit/0dac9aa8e365bb9a3e3fcb77207c5a85c9da9e25))
* use header from library ([538f7c6](https://github.com/vtexdocs/devportal/commit/538f7c617fa7451d0e64ddcd8321314108f66a79))
* use librarycontext ([30eb652](https://github.com/vtexdocs/devportal/commit/30eb652e16551c44448a1a8618e683fd9afdffca))
* use was this helpful component from lib ([b2baaea](https://github.com/vtexdocs/devportal/commit/b2baaeae54f049fa30cf5219afdaa025905ae4f6))
* using search components from lib ([d2300d3](https://github.com/vtexdocs/devportal/commit/d2300d366ad59c4c86e22fa1c0bfcb404d876e0e))


### Revert Changes

* remove lib build files from public ([6fdcd4b](https://github.com/vtexdocs/devportal/commit/6fdcd4bc95436fae9d78e1b3aafc61a3b2c7184e))


### Chore

* **code-samples:** improve code-samples page ([9e45814](https://github.com/vtexdocs/devportal/commit/9e45814dbbb9e478d72bc177e819ed465b1e1bd6))
* delete all search related components ([39c1a76](https://github.com/vtexdocs/devportal/commit/39c1a76d2d259deaf1d9b399d9cadf53450d40af))
* delete all sidebar related components ([b03aeb3](https://github.com/vtexdocs/devportal/commit/b03aeb3d17cd6ff9a29df5789cb42a6d2b22b0e7))
* delete mermaidInit file ([2213fab](https://github.com/vtexdocs/devportal/commit/2213fabce9544dd11975bcf44424253c489c4b17))
* delete unused file ([6a4923d](https://github.com/vtexdocs/devportal/commit/6a4923d1a2c964aca1cf39bfcf7f7d9c119079af))
* delete unused files ([97f6ba3](https://github.com/vtexdocs/devportal/commit/97f6ba3b46875637625dc990360d0ceb9a2756fe))
* **global.css:** update scrollycoding styles ([a4aa47e](https://github.com/vtexdocs/devportal/commit/a4aa47e44cae76298eb8a7dbeb67af5fd9c9ede5))
* **last-updates-section:** min fixes ([223b9ee](https://github.com/vtexdocs/devportal/commit/223b9ee85410826ee560d1248c78c4af09f11f73))
* **last-updates-section:** update last release ([5364b7b](https://github.com/vtexdocs/devportal/commit/5364b7b79b5a30df7078efb3fdabfc1b103ce54a))
* **markdown-preview:** (temp) remove auth ([0a60965](https://github.com/vtexdocs/devportal/commit/0a60965b221205b110dd3e59c989c552800a92f6))
* **markdown-preview:** enable codehike preview ([8f8b3c7](https://github.com/vtexdocs/devportal/commit/8f8b3c707064315d010fe85a098921a1026954ca))
* **markdown-preview:** undo changes to markdown-preview ([eafdf19](https://github.com/vtexdocs/devportal/commit/eafdf19e966adb819723e5f5762d8521bef8289c))
* **navigation.json:** add release note to navigation ([e7338b3](https://github.com/vtexdocs/devportal/commit/e7338b3ab767302df0cf0061bbba0d4a4b24cd68))
* **navigation.json:** update api guides navigation ([8e53e22](https://github.com/vtexdocs/devportal/commit/8e53e220aebee3b898ddb8c5a5abc2b33527ed6a))
* **package.json:** update faststore dependencies ([3f73dbf](https://github.com/vtexdocs/devportal/commit/3f73dbf6d0c7864d192ad68f1088ac3719b41519))
* **rapidoc:** update rapidoc ([2a7d22a](https://github.com/vtexdocs/devportal/commit/2a7d22a3680b28a843cec396808a5018ec9032a6))
* **rapidoc:** update rapidoc submodule ([f1b8fb9](https://github.com/vtexdocs/devportal/commit/f1b8fb90410a05b17e3b59fd0d883c4cff79599b))
* update component lib version ([d76dd55](https://github.com/vtexdocs/devportal/commit/d76dd553b534ca0cc7eb56facc20057e14df97dd))
* update components lib version ([b14d2c2](https://github.com/vtexdocs/devportal/commit/b14d2c25ff2c141ed1e22d14b75ae33204ea1b57))
* update components lib version ([398ffd1](https://github.com/vtexdocs/devportal/commit/398ffd10288b4b2f99badb3dd6713f783e405749))
* update lock file ([a3168d6](https://github.com/vtexdocs/devportal/commit/a3168d65fc9dcc0d79e022cf44aa8eb356d9c3d8))
* update yarn.lock ([91af2c1](https://github.com/vtexdocs/devportal/commit/91af2c159f9ed6502597717902efc8d6f139aad5))


### Style

* add components lib css ([491657e](https://github.com/vtexdocs/devportal/commit/491657e0e837b98c759dd7e219d21541bf44023c))
* **code-samples:** add content and improve styles ([1f018d1](https://github.com/vtexdocs/devportal/commit/1f018d119e631c6397262be6749aa6ceef4e5ec5))
* **global.css:** fix code hike style ([4bef05b](https://github.com/vtexdocs/devportal/commit/4bef05b7a5b939fd3fb67f7d06694a68d3a34d2a))
* **global:** update codehike styles ([958c054](https://github.com/vtexdocs/devportal/commit/958c054a8ea7bbbd9999fd1ea32939489cbb63ba))
* **guides:** update codehike theme ([8ac35fc](https://github.com/vtexdocs/devportal/commit/8ac35fc686f99a37b49502bb88af05e7d2abcd4c))
* import utilities ([1129476](https://github.com/vtexdocs/devportal/commit/11294765d1f49d8eaa445eb97d6f6503150cad3b))
* **release-notes:** add info release type + improve styles ([016108c](https://github.com/vtexdocs/devportal/commit/016108cba910c835d2a724662d251c432a0eef46))


### Build

* update components lib versoin ([e954c8b](https://github.com/vtexdocs/devportal/commit/e954c8b27ecf20d3ca320d25bd9092e7b6ef07d1))
* update components version ([1ea5959](https://github.com/vtexdocs/devportal/commit/1ea59591579311511f912f30133c3eebd63903e2))


### Docs

* create redirect ([ca3fb79](https://github.com/vtexdocs/devportal/commit/ca3fb793fb0a430c2bc3b724555a53438d2642dc))
* create redirects ([48ac082](https://github.com/vtexdocs/devportal/commit/48ac082c6c3ed286a36e65abcd855b9be8d2b844))
* creating redirect ([647c8ca](https://github.com/vtexdocs/devportal/commit/647c8caf891137f0e236f2d7eab04fc63c4db0fe))
* edit [slug].tsx ([96fb7c5](https://github.com/vtexdocs/devportal/commit/96fb7c5c49e1d1e1c7359fe969796fd280269c07))
* edit api name ([64655fb](https://github.com/vtexdocs/devportal/commit/64655fb19a5feebe38b217ede3e3a3c13b004a44))
* edit getReferencePaths.ts ([f7f31dd](https://github.com/vtexdocs/devportal/commit/f7f31ddadf774f95857e5372a37c7c5ab469d437))
* edit netlify.toml ([b525987](https://github.com/vtexdocs/devportal/commit/b525987f14243163ad71c63cba946cdee0f20626))
* **navigation:** add intelligent search api ([a585508](https://github.com/vtexdocs/devportal/commit/a585508b21c23178f6c7f3807eec9bc4809fc1e1))
* **navigation:** add LM api delete user ([304792c](https://github.com/vtexdocs/devportal/commit/304792cff671f786ca333c1ed790747d2f0f58ff))
* **navigation:** update auth guides ([e32ceeb](https://github.com/vtexdocs/devportal/commit/e32ceeb32f4bc08fc8e6d993611d50bf78b77722))
* **navigation:** update master data v1 title ([222f30f](https://github.com/vtexdocs/devportal/commit/222f30fd8260ede205127b6defbcbfbab11e365d))
* redirect ([8c22200](https://github.com/vtexdocs/devportal/commit/8c2220050cd12ff163efae523cb0120592d19749))

### [1.9.29](https://github.com/vtexdocs/devportal/compare/v1.9.28...v1.9.29) (2023-10-02)


### Chore

* **last-updates-section:** update lastReleaseNote ([b17d712](https://github.com/vtexdocs/devportal/commit/b17d71252886bc33ed7291dfcb1aca77dbd9bd54))
* **navigation.json:** update navigation ([ecb24e6](https://github.com/vtexdocs/devportal/commit/ecb24e60bd17dd078632fefa2e58dd0730aa7a9f))
* **navigation.json:** update sidebar ([8a3e43e](https://github.com/vtexdocs/devportal/commit/8a3e43e02cf61733273abb4817a2b371f1ec1422))
* **navigation.json:** update troubleshooting section ([76fa1df](https://github.com/vtexdocs/devportal/commit/76fa1df6468bdaed61d4435c434ea8db325f9c93))
* **navigation:** improving clients docs ([a240941](https://github.com/vtexdocs/devportal/commit/a24094152e0b581f97305bdb49c2cfbd40196aad))
* **navigation:** update docs name ([410003f](https://github.com/vtexdocs/devportal/commit/410003f4949cfeab2ac1c4fdb81d635abc8802e0))
* **navigation:** update sidebar ([0690664](https://github.com/vtexdocs/devportal/commit/06906641a0d3b2437fd40791250c01c300029ced))


### Docs

* correcting redirect ([c237563](https://github.com/vtexdocs/devportal/commit/c23756318f62b83ebcc50743f78e369f56a905bf))
* create redirect ([238e98e](https://github.com/vtexdocs/devportal/commit/238e98e320829a3658e0b1049652ed3d584a0afd))
* creating redirect ([342daba](https://github.com/vtexdocs/devportal/commit/342daba4279d17155bbf92ca8b62c2c3c29d0dad))
* fix GTM container ([7a6b8a3](https://github.com/vtexdocs/devportal/commit/7a6b8a3763a83136b29fa286f419f26f60a66b05))
* fix publicid value ([c740255](https://github.com/vtexdocs/devportal/commit/c740255da24f1133143ddf15d94633c9a8a29769))
* **last updates section:** add homologation freeze for 23 BF release note ([027e61d](https://github.com/vtexdocs/devportal/commit/027e61d4230b110c9706665fcd321e132361f94d))

### [1.9.28](https://github.com/vtexdocs/devportal/compare/v1.9.27...v1.9.28) (2023-09-18)


### Features

* **api reference:** get query param from endpoint url ([fc9465c](https://github.com/vtexdocs/devportal/commit/fc9465c4231f00e7d2fdfd6384be048987cd1465))
* **newsletter-section:** change image to parallax ([4def726](https://github.com/vtexdocs/devportal/commit/4def7264de174f2be2b264acf646ca99fd407625))
* **public:** add parallax layers ([6894129](https://github.com/vtexdocs/devportal/commit/689412981308d301383df70a00fb6edc3e95ca10))
* **search-page:** add infinite scroll ([270bc64](https://github.com/vtexdocs/devportal/commit/270bc64dd3fb805a7b7d4a40268f9023c2e0a856))
* **steps:** adds the steps components and improves some styles ([64d80d2](https://github.com/vtexdocs/devportal/commit/64d80d255fa2fceda843025c1567405291740a66))


### Bug Fixes

* **hamburger:** fix and scroll and hide menu correctly ([4bfa52d](https://github.com/vtexdocs/devportal/commit/4bfa52d295b36c5ef94eb3e37b9cd051b14fd7e8))
* **sidebar:** fix endpoint filter in api reference ([2c8978b](https://github.com/vtexdocs/devportal/commit/2c8978b9f754f782411541bfae976dc3c678540d))
* **sitemap:** remove guides page with noindex from sitemap ([3894da7](https://github.com/vtexdocs/devportal/commit/3894da7156350577a65eb9d5d3807f842162edb0))


### Docs

* add user data rights api to [slug].tsx ([af5c752](https://github.com/vtexdocs/devportal/commit/af5c75245aa73eb4211e86b19189ea7f28d55296))
* add user data rights api to getReferencePaths.ts ([3a58783](https://github.com/vtexdocs/devportal/commit/3a587837ef1385df6e795a0df645a043a61275ae))
* add zendesk app redirect ([29107e3](https://github.com/vtexdocs/devportal/commit/29107e36ddbbe38389808f69cbe98ebb4767395e))
* **changes doc title:** adds more context to this doc's title ([a5ce31d](https://github.com/vtexdocs/devportal/commit/a5ce31d8f8cbb96e38ef8349da8b7a34b30131a4))
* create pii doc redirect ([3cf0108](https://github.com/vtexdocs/devportal/commit/3cf0108217119201b865ba44c1a70f698dfa90ff))
* create redirect ([927fc77](https://github.com/vtexdocs/devportal/commit/927fc777a00a9d377b62882378f28a2891440501))
* create redirect ([1e012f5](https://github.com/vtexdocs/devportal/commit/1e012f5724a2cbb8c1a25c2114975ae6d68def9a))
* create redirect ([884224a](https://github.com/vtexdocs/devportal/commit/884224a8452f8d20657de1a8abffc6dac2741472))
* create redirect authentication guide ([6d1ef2e](https://github.com/vtexdocs/devportal/commit/6d1ef2e35fc93c44756c9f341e472cdb8cb5c403))
* edit legacy cms portal api reference paths ([926a9c1](https://github.com/vtexdocs/devportal/commit/926a9c1f9beee23ecbfb50a4613e746337602f8f))
* fix broken link ([a404f32](https://github.com/vtexdocs/devportal/commit/a404f32b782c3203b2a88489a522ca703353b11a))
* fix broken page ([4f52b47](https://github.com/vtexdocs/devportal/commit/4f52b474bc117e3fcafef897804b6372326c1c98))
* **fix typo in slug:** removes extra space in slug ([16506a4](https://github.com/vtexdocs/devportal/commit/16506a4fc1882749372b6e487d6960b8e4cad47d))
* **navigation:** add vtex id endpoints ([345f458](https://github.com/vtexdocs/devportal/commit/345f458b4694e2e244b13970f04801acd4f99e94))
* **navigation:** edit legacy cms portal api ([b49aacf](https://github.com/vtexdocs/devportal/commit/b49aacf7c25fa32993c55587276da608167daf63))
* **navigation:** edit master data api v2 ([8bd1321](https://github.com/vtexdocs/devportal/commit/8bd132172f88556bfeab9541e9268c6f7105ca21))
* **navigation:** fix vtex id endpoint path ([a20d4a7](https://github.com/vtexdocs/devportal/commit/a20d4a741c060df237681bb5956f07f399975729))
* **navigation:** update authentication guides ([d4cb4b8](https://github.com/vtexdocs/devportal/commit/d4cb4b8e1255e88e33cab8cba76f2cadd81cb086))
* **navigation:** update erp guide name in nav ([0f5551a](https://github.com/vtexdocs/devportal/commit/0f5551a3178917d0e0b8a25a736572ef15cc08a4))
* **redirect about vtex do:** change rediret empty page ([adce0c3](https://github.com/vtexdocs/devportal/commit/adce0c3e6d9eec63316c0d4d5a4417fcffd88a0d))
* redirect broken link ([4c1ecbf](https://github.com/vtexdocs/devportal/commit/4c1ecbf71f7a8f036a6f0f4ea5a4dcbb5a68666f))
* **redirect erp guide:** creates a redirect for a 404 erp guide link ([f25bf59](https://github.com/vtexdocs/devportal/commit/f25bf5969f51cd00546a8f51fd6ea31c1c019ab5))
* **redirect:** redirect ([fd50b41](https://github.com/vtexdocs/devportal/commit/fd50b41e24579643fd34bdb2b0349da835b2c921))
* **remove file from navigation:** remove export order report from navigation ([aa4abca](https://github.com/vtexdocs/devportal/commit/aa4abca3c973e8b930cc24050228c3c6c217eac0))
* update index.tsx ([488d92c](https://github.com/vtexdocs/devportal/commit/488d92cef6d19bdb4aa813e22ece52bade40320f))
* update netlify.toml ([0358bdf](https://github.com/vtexdocs/devportal/commit/0358bdf8a14aa422ed74ed99aa2fc73746563b90))


### Chore

* **navigation:** update sidebar ([86234a7](https://github.com/vtexdocs/devportal/commit/86234a787afbe973d1056eb1549764aafa738c6b))
* **navigation:** updates navigation.json ([2f30c8e](https://github.com/vtexdocs/devportal/commit/2f30c8e2bb3619326d7ba76fdced0a5bab30686b))
* **netlify.toml:** fix redirects ordering ([a5f85f2](https://github.com/vtexdocs/devportal/commit/a5f85f291db9cc02bc9dc35947a90a956a478b8e))
* **netlify.toml:** update redirects and lastrelease ([1981b4f](https://github.com/vtexdocs/devportal/commit/1981b4fae6e9bca7b3b8d38f4722c4856e3da547))
* **rapidoc:** update version ([18d86c7](https://github.com/vtexdocs/devportal/commit/18d86c7f2e966e55eab05f3289c6ec4d4964cc30))
* update rapidoc submodule ([922950d](https://github.com/vtexdocs/devportal/commit/922950da7cd2210df78a12d2ab52227648389040))


### Style

* **documentation-page:** update content width ([616fd83](https://github.com/vtexdocs/devportal/commit/616fd83c2bc480ca9af37a116bdfc15417d03fc9))
* **global.css:** fix details styles ([17979a6](https://github.com/vtexdocs/devportal/commit/17979a65dfba01743b0e775429ef141a2ca0bfdb))
* **global.css:** update details and summary styles ([9d1b2d8](https://github.com/vtexdocs/devportal/commit/9d1b2d840abc2c4e819d001c4dbd49a97210c829))
* **mermaidinit.ts:** update mermaid theme ([85fef8e](https://github.com/vtexdocs/devportal/commit/85fef8e8c835f7b5e3de4c07e97ccf4eddecdae0))
* **rapidoc:** update api padding ([04ba318](https://github.com/vtexdocs/devportal/commit/04ba3181d41ee7b7f54316658e182833fa5f9395))
* **whatsnextcard:** increase whatnextcard font size ([11e3017](https://github.com/vtexdocs/devportal/commit/11e30173c14e4180876982d9e1ff9a451e6cee1d))

### [1.9.27](https://github.com/vtexdocs/devportal/compare/v1.9.26...v1.9.27) (2023-07-20)


### Bug Fixes

* **api proxy:** set Headers correctly ([d5955a6](https://github.com/vtexdocs/devportal/commit/d5955a6239bd7c343385c44730b3822898ba422e))


### Docs

* add missing comma ([c8c487d](https://github.com/vtexdocs/devportal/commit/c8c487dd660799c9e7de472dd1a4cd38da49ac9d))
* add redirect ([b683402](https://github.com/vtexdocs/devportal/commit/b68340270c678cd32a9e31d013ebf92cdac2edeb))
* add webservice guide to navigation ([5fd3131](https://github.com/vtexdocs/devportal/commit/5fd3131917891dee69f14d9a1c5ce537b0b88aaf))
* create redirect to webservice guide pdf ([dba5190](https://github.com/vtexdocs/devportal/commit/dba519011daf5a2ea9a7e648df337eeed0ab7fa6))
* fix redirect url ([ccd9fe4](https://github.com/vtexdocs/devportal/commit/ccd9fe4ba6a4ef7b2da3c7842efc38b251d114a3))
* **navigation:** edit promotions api ([7b98089](https://github.com/vtexdocs/devportal/commit/7b980899c996c3c83d73e577b6399048a344fa2a))

### [1.9.26](https://github.com/vtexdocs/devportal/compare/v1.9.25...v1.9.26) (2023-07-12)


### Bug Fixes

* **search-card:** hide full description by default ([fa17e5e](https://github.com/vtexdocs/devportal/commit/fa17e5e80edb79a05508fae07f847684894c8ca3))


### Chore

* update rapidoc to show postman button in overview ([8efe47a](https://github.com/vtexdocs/devportal/commit/8efe47a3a40d58128879e8e599268d5f460514c5))


### Docs

* add intelligent search events api to [slug].tsx ([22f17b5](https://github.com/vtexdocs/devportal/commit/22f17b550cf82fe8084506eb2b1c46634488ea83))
* add intelligent search events api to getReferencePaths.ts ([73d1470](https://github.com/vtexdocs/devportal/commit/73d14706fb29f98268032c24176226e3b52f0470))
* added docs builder docs to navigation.json ([f401f83](https://github.com/vtexdocs/devportal/commit/f401f83b8b65cf38860becd49132bea701523265))
* create redirect catalog api seller portal ([2cedbcc](https://github.com/vtexdocs/devportal/commit/2cedbcc3ad0dd7e32b9d516872fc9a9f95d4993b))
* **navigation:** add change in sku notification release notes ([6ddbdd3](https://github.com/vtexdocs/devportal/commit/6ddbdd344c2446b1412bbc60d370442fc67d37e6))
* **navigation:** add teasers field release notes to navigation ([685fc4d](https://github.com/vtexdocs/devportal/commit/685fc4d467126468841d7ca6763ab5c6daad51cd))
* **navigation:** added jun/jul 2023 releases ([b7df11d](https://github.com/vtexdocs/devportal/commit/b7df11d6f2bb3415e5e131823b3d49ed51d41107))

### [1.9.25](https://github.com/vtexdocs/devportal/compare/v1.9.24...v1.9.25) (2023-06-30)

### [1.9.24](https://github.com/vtexdocs/devportal/compare/v1.9.23...v1.9.24) (2023-06-28)


### Features

* redirect user to sign in page when trying to reach preview API endpoint ([1a4038f](https://github.com/vtexdocs/devportal/commit/1a4038fa3426b6773118834b179bb70cc7b00826))


### Bug Fixes

* fix bug in preview API endpoint ([431f38c](https://github.com/vtexdocs/devportal/commit/431f38cc82121d2d880d4c35eef597f54de4ef1c))


### Docs

* **navigation:** add promotions api endpoint ([ee09cca](https://github.com/vtexdocs/devportal/commit/ee09ccad3bbe57ae438fd0807e10e37e14491771))

### [1.9.23](https://github.com/vtexdocs/devportal/compare/v1.9.22...v1.9.23) (2023-06-27)


### Features

* **dropwdown-menu:** different menu for admin pages ([b46bd8d](https://github.com/vtexdocs/devportal/commit/b46bd8d57f13dda1326bf8bf1fb036060e722521))
* **markdown-editor:** title, subtitle and copy button ([01440ae](https://github.com/vtexdocs/devportal/commit/01440ae1810142404013711a5eddcca311649700))
* **markdown-preview:** add resize button, numered lines in code editor and fix frontmatter parse ([cb6d94f](https://github.com/vtexdocs/devportal/commit/cb6d94fb78def5a5e955dc9ce104282f03c61e54))
* **markdown-preview:** first version of markdown preview ([017ab63](https://github.com/vtexdocs/devportal/commit/017ab632e1992a91bedf1744f25d7242518e8c28))
* **package.json:** add react-simple-code-editor ([320f10d](https://github.com/vtexdocs/devportal/commit/320f10d3917d557b54586aa30699830d80db6ee0))
* **remark plugins:** image plugin to client side render in preview ([b908390](https://github.com/vtexdocs/devportal/commit/b908390d494383803e1e4044700080d11306c279))
* update serialize plugins and funcions ([a7ac0ad](https://github.com/vtexdocs/devportal/commit/a7ac0ada9b82a97cbd9eb59d20fcdd19d6c14000))


### Bug Fixes

* **apireferences:** fail gracefully for parse errors on openapi ([f8419bb](https://github.com/vtexdocs/devportal/commit/f8419bbcd9303ce8126f13747a7472c804408110))
* **getreferencepaths:** check if path is on root ([eece0db](https://github.com/vtexdocs/devportal/commit/eece0db1a2478d4c4a594afd562db46cfb84dd27))
* **markdown-preview:** add mobile version, update template ([75c42b6](https://github.com/vtexdocs/devportal/commit/75c42b652a0ca6beaade990c5b1a7817f61a0e41))
* **markdown-preview:** page name and template structure ([4cd22a5](https://github.com/vtexdocs/devportal/commit/4cd22a55e4aabb4679a8b8edb9d8c3602a2baadd))
* **mdxrenderer:** render next image only if base64 is loaded ([3f1ae25](https://github.com/vtexdocs/devportal/commit/3f1ae254f33d70960134c3525bb7afd027bc9814))


### Revert Changes

* **markdown-preview:** remove auth ([04ac694](https://github.com/vtexdocs/devportal/commit/04ac694739e48805486bd3d6870910d349884a9c))


### Style

* **markdown-preview:** fix copy button position ([cdb6136](https://github.com/vtexdocs/devportal/commit/cdb613661dcd7a637a30719256c7758ad86fdcb7))


### Refactoring

* **markdown-preview:** edit template ([7e95bf3](https://github.com/vtexdocs/devportal/commit/7e95bf38e9926cf53c720d72d7d4ffb11a59fe62))
* **markdown-preview:** update route and add auth ([08c2c3b](https://github.com/vtexdocs/devportal/commit/08c2c3b5ef5e8439ea3cc1f8a7dfbbcef6551841))


### Chore

* **markdown-preview:** add isEditor true ([c71d574](https://github.com/vtexdocs/devportal/commit/c71d574814a549e18beccbe13cd69d418659d41b))
* **markdown-preview:** use PageHeader ([fa61eb2](https://github.com/vtexdocs/devportal/commit/fa61eb2aa493d96e17b1fc91478831e7cacc5a33))

### [1.9.22](https://github.com/vtexdocs/devportal/compare/v1.9.21...v1.9.22) (2023-06-15)


### Features

* create api route to get postman collection ([565201f](https://github.com/vtexdocs/devportal/commit/565201f0c1eb8e8ce148804081c4ecbfbce8a912))


### Bug Fixes

* change endpoint to postman and update folder name ([0c33529](https://github.com/vtexdocs/devportal/commit/0c33529cdc940a29e8dae4ed0178f9528f8c5591))


### Chore

* update rapidoc submodule ([ae3db8c](https://github.com/vtexdocs/devportal/commit/ae3db8cc0eb59e0eacfee7641468b89c7d0186b2))
* update rapidoc submodule to add icons ([62f8611](https://github.com/vtexdocs/devportal/commit/62f8611cecdd819a93fcb793e3d36816c2bc3074))
* update rapidoc submodule to fix curl url ([e831e55](https://github.com/vtexdocs/devportal/commit/e831e55e192a0123f677a8e9988e9d57875c1dd2))

### [1.9.21](https://github.com/vtexdocs/devportal/compare/v1.9.20...v1.9.21) (2023-06-12)


### Chore

* update rapidoc submodule ([f2d1612](https://github.com/vtexdocs/devportal/commit/f2d1612ef0b371c0c23fd2b691ff9271a228874d))

### [1.9.20](https://github.com/vtexdocs/devportal/compare/v1.9.19...v1.9.20) (2023-06-09)


### Bug Fixes

* **mermaid:** remove zoom on scroll ([989804d](https://github.com/vtexdocs/devportal/commit/989804de7fbb6bcf4a878b91b23bb2de50639990))
* **mermaid:** set detect auto pan to false ([2f4b853](https://github.com/vtexdocs/devportal/commit/2f4b85304d0661442490006d17b319368ed4a01c))
* **mermaid:** using themes to set diagram colors ([1e83a2e](https://github.com/vtexdocs/devportal/commit/1e83a2e54e305c03006720c8aacd8ca0aba2f96a))

### [1.9.19](https://github.com/vtexdocs/devportal/compare/v1.9.18...v1.9.19) (2023-06-06)


### Docs

* **navigation:** publish headless release note ([5da0bb9](https://github.com/vtexdocs/devportal/commit/5da0bb9b6ab5d7e5cb6a6af2e9383717125e06b3))

### [1.9.18](https://github.com/vtexdocs/devportal/compare/v1.9.17...v1.9.18) (2023-06-06)


### Docs

* **navigation:** publish headless commerce guides ([36fc086](https://github.com/vtexdocs/devportal/commit/36fc0869e3dcd30695c636432b352414e1d354f3))
* **navigation:** publish password expiring guide ([baffd9c](https://github.com/vtexdocs/devportal/commit/baffd9cf96b6353317b151151e8094c1c8860b49))

### [1.9.17](https://github.com/vtexdocs/devportal/compare/v1.9.16...v1.9.17) (2023-06-05)


### Docs

* **navigation:** add troubleshooting category and first guide ([75a18dc](https://github.com/vtexdocs/devportal/commit/75a18dcd5ddd7f5cb5ead4e61390cf37a714607e))

### [1.9.16](https://github.com/vtexdocs/devportal/compare/v1.9.15...v1.9.16) (2023-06-05)


### Docs

* **netlify.toml:** fixing pii article redirect ([5448971](https://github.com/vtexdocs/devportal/commit/5448971be4e0bfa3f5fd70ca504d5e54e6a7aa19))

### [1.9.15](https://github.com/vtexdocs/devportal/compare/v1.9.14...v1.9.15) (2023-06-05)


### Docs

* **redirects:** redirecting data privacy article to new correct slug ([8653514](https://github.com/vtexdocs/devportal/commit/86535141d77ad552c13335194ee670090fc92ed6))

### [1.9.14](https://github.com/vtexdocs/devportal/compare/v1.9.13...v1.9.14) (2023-06-05)


### Bug Fixes

* format ([44c2eb5](https://github.com/vtexdocs/devportal/commit/44c2eb596c715c6c6916c887cd730095941a1250))
* **getfilecontributors:** check for author ([3e2dd54](https://github.com/vtexdocs/devportal/commit/3e2dd54728847d401a9acb4db0a35dc2f7c99fbc))
* **getfilecontributors:** check for author ([47104e7](https://github.com/vtexdocs/devportal/commit/47104e7f30f8719d6bb2c1d00a7832ec4dd3da16))


### Docs

* **netlify.toml:** update pii redirects ([94ed2aa](https://github.com/vtexdocs/devportal/commit/94ed2aa62961b7c86dad6cc416ef2ff4aca9c172))

### [1.9.13](https://github.com/vtexdocs/devportal/compare/v1.9.12...v1.9.13) (2023-05-26)


### Tests

* **cypress:** simplify the test on TOC in guides pages ([1f004e9](https://github.com/vtexdocs/devportal/commit/1f004e9271173a9edb53eaaa3040b7b5159ac4ae))
* **cypress:** wait before run test ([9ba58c0](https://github.com/vtexdocs/devportal/commit/9ba58c0b12767c2735bd7b63e0caada1cc98f81f))


### Chore

* **rapidoc:** update rapidoc submodule - adds danger callout style ([378b2ca](https://github.com/vtexdocs/devportal/commit/378b2ca77d1cd2b132407cedf61246f905f1918c))
* **rapidoc:** update rapidoc submodule to enable warning callout ([55bcc71](https://github.com/vtexdocs/devportal/commit/55bcc71907c60b27d8ce44f01e166d1af4072deb))
* **rapidoc:** update rapidoc submodule to fix param table ([cf67044](https://github.com/vtexdocs/devportal/commit/cf67044cb8dc715fbf88055f6ccf5d90ab9db335))

### [1.9.12](https://github.com/vtexdocs/devportal/compare/v1.9.11...v1.9.12) (2023-05-25)


### Docs

* **navigation:** making small change just to force build to test if my guide changes will show ([bb94273](https://github.com/vtexdocs/devportal/commit/bb9427370abb50bd455829015e041ecb8bc5c35b))

### [1.9.11](https://github.com/vtexdocs/devportal/compare/v1.9.10...v1.9.11) (2023-05-24)


### Features

* add authentication higher order component ([e8dbfc1](https://github.com/vtexdocs/devportal/commit/e8dbfc10a12e8edc14b6f35db4d427b200431e50))
* add authentication to editor pages ([435e1d2](https://github.com/vtexdocs/devportal/commit/435e1d22c995bff16c50413ec2b3d1b6883ef8ce))
* add checkbox icon ([010870b](https://github.com/vtexdocs/devportal/commit/010870bdd366601307f02b8e6a4f6d12212e1886))
* add filter to release notes page ([e51ce1e](https://github.com/vtexdocs/devportal/commit/e51ce1e47133a7a6e7b083e2e5ea42d66dafa6eb))
* add rapidoc to components ([5ec43bb](https://github.com/vtexdocs/devportal/commit/5ec43bb7f5bbef2591f788c49d5efd1c4bcc7f83))
* add support for authentication ([5d04e08](https://github.com/vtexdocs/devportal/commit/5d04e08504a0f6efb0b8f0260983e78e847a304f))
* **algolia-scraper:** update attributes to retrieve ([908c51d](https://github.com/vtexdocs/devportal/commit/908c51dd369a66b9e15825786e356dab27252d0f))
* **api-references:** add api pagination and other minor improv ([4e10f6c](https://github.com/vtexdocs/devportal/commit/4e10f6c714073dad192ef001f31016ecab5365e5))
* **auth:** add authentication to preview API route ([634c31e](https://github.com/vtexdocs/devportal/commit/634c31e606365b6acf6d2be6f0119cb8c4630aec))
* create multiselect component ([dbf5293](https://github.com/vtexdocs/devportal/commit/dbf5293340135aee2675b12dc21207da4c7fe0e2))
* **customhighlights:** add search-page behavior to customHighlight component ([837e8f4](https://github.com/vtexdocs/devportal/commit/837e8f4a876d49d0b2e6a1c5057b65df56be8beb))
* get list of action types ([c3ca8b8](https://github.com/vtexdocs/devportal/commit/c3ca8b8c8cb5cf7d7f3bb877cfeda5ca627a4490))
* **pages:** add searchable attributes to doc pages head ([9944a2e](https://github.com/vtexdocs/devportal/commit/9944a2e1d90ed657480f12a54708f0bee84327a0))
* **search-card:** add methodCategory ([d4a94f7](https://github.com/vtexdocs/devportal/commit/d4a94f71f5844493ac35258ca344858a0c1af1b5))
* **search-card:** update card style ([d32cc25](https://github.com/vtexdocs/devportal/commit/d32cc255029da493d2a5cbc308c427ad97fb6ce1))
* **search-page:** add custom search results using instantsearch infinitehits hook ([d80bf4a](https://github.com/vtexdocs/devportal/commit/d80bf4a3ec1c03a190f7ebd57d8ac0517c7142bb))
* **search-page:** open merged cards by default ([ef36358](https://github.com/vtexdocs/devportal/commit/ef3635804af5f73c394c59336e2017ee46ffe802))
* **search-page:** switch infinite scroll for pagination ([91e012f](https://github.com/vtexdocs/devportal/commit/91e012fcfb0aa4d754213a60475bf4a0700aca6a))
* **search-results:** connect instantsearch with infinite hits hook ([f66cce5](https://github.com/vtexdocs/devportal/commit/f66cce5dc321c9eaf8fd8bea21a6af89f8161e6d))
* use submodule and add spec property to rapidoc ([c9c2d12](https://github.com/vtexdocs/devportal/commit/c9c2d1238cadadd9b3676acea1f54bf472f6bb2d))
* using rapidoc lit component ([4b7e95e](https://github.com/vtexdocs/devportal/commit/4b7e95e3d4589b5862299523fec00647bc81594a))


### Bug Fixes

* add @octokit/auth-app module to typings ([528ec97](https://github.com/vtexdocs/devportal/commit/528ec9722dd97ad8e70a406b3e9e1c1c438b1dda))
* **api-references:** fix method type ([3a03395](https://github.com/vtexdocs/devportal/commit/3a03395565511b6f7bd2d79a5b025ca931c26292))
* **auth:** fix auth component width in the first breakpoint ([c02754b](https://github.com/vtexdocs/devportal/commit/c02754b2751e2ff9c9832692f86541f0a5bd2b5f))
* check for custom element before defining ([88750ae](https://github.com/vtexdocs/devportal/commit/88750ae96e74484cf641704e3f5c675cd4773965))
* comment lines that caused errors ([2f21675](https://github.com/vtexdocs/devportal/commit/2f21675980f67ff8db25ff9375b29105da1b3ecd))
* **customhighlight:** remove types any and text style ([9366151](https://github.com/vtexdocs/devportal/commit/936615114bb7271e4a7846907bad64a580436015))
* doctype name ([c031a78](https://github.com/vtexdocs/devportal/commit/c031a7811da1e86a63388c11eaabe7818287c14d))
* get endpoint value even if haven't description and remove mock from search card ([c528e35](https://github.com/vtexdocs/devportal/commit/c528e35c6f11631fa20e71b06306a85277a0e4a6))
* **guides:** correct type of pages from another documentation ([c07c1bd](https://github.com/vtexdocs/devportal/commit/c07c1bdb9f2bf1d52cad9518a26f1a3f8b7067af))
* **pages:** add missing doc titles ([4ac2a5e](https://github.com/vtexdocs/devportal/commit/4ac2a5e2270619185cf60dfa70d7d2f3dfc0ea16))
* replace package to perform open api parsing ([0353bae](https://github.com/vtexdocs/devportal/commit/0353bae322ccc4604513db7ade6955749530eeac))
* **results-box:** remove search state after rebase ([ea88ac7](https://github.com/vtexdocs/devportal/commit/ea88ac72e48223a50c7aeb8f6b155b4509d26915))
* **search-card:** breadcrumbs behavior ([db802ea](https://github.com/vtexdocs/devportal/commit/db802ea85a8e179b4195036d312699ca25734fdf))
* **search-components:** revert names of docsearch's searchable attributes ([6e81f38](https://github.com/vtexdocs/devportal/commit/6e81f3814b570baafc29d900f82b67efb8b7e6be))
* **search-input:** enable see all results button and connect the search bar with the search page ([040c871](https://github.com/vtexdocs/devportal/commit/040c8714508b5fa19b93566bfb7fb1ed76be1f51))
* **search-page:** add no-result feedback ([5c58219](https://github.com/vtexdocs/devportal/commit/5c582194d14d5c30ec659c2b79cd7fd57c7ba438))
* **search-page:** clear filter when new search was fired ([8406ceb](https://github.com/vtexdocs/devportal/commit/8406cebd03f38013e6ed9e31de080dddd12b6b0b))
* **search-page:** filter by facets ([bfdde9c](https://github.com/vtexdocs/devportal/commit/bfdde9c165f6e3e8e6ade069604f4dab381017bc))
* **search-page:** update results text to match the selected filter ([0f41e79](https://github.com/vtexdocs/devportal/commit/0f41e79f101c99d545dd1092cb30ea637b2b7fb8))
* **search:** fix results width and update search index ([f03a9fe](https://github.com/vtexdocs/devportal/commit/f03a9fef49c57a6a0519b2c7b24ea3ca0f7c296b))
* **sidebar:** fix sidebar searchbar placeholder text in editor pages ([cbef791](https://github.com/vtexdocs/devportal/commit/cbef791d8f335bc44a1bfb0f0d51054374157304))
* **sidebar:** move section state to context and add correct behavior of sidebar to search page ([2d2456c](https://github.com/vtexdocs/devportal/commit/2d2456c16d80e19c0d2e8128f95680154893fc48))
* use swagger-parse and dereference refs ([e03f9b5](https://github.com/vtexdocs/devportal/commit/e03f9b589f1c898360e13d0120452816323adb94))


### Build

* add lit-labs/nextjs and update config ([b0ddc77](https://github.com/vtexdocs/devportal/commit/b0ddc77f542f8a2fa3801aa6bd46b9abdc3b681b))
* add some rapidoc dependencies ([8fad4d9](https://github.com/vtexdocs/devportal/commit/8fad4d9b097a10908119a8194824a73712927610))


### Performance

* **reference-page:** get endpoint title in getStaticProps ([0b2aa72](https://github.com/vtexdocs/devportal/commit/0b2aa724642b3301489663e3adef4900b3cf25dc))


### Refactoring

* **reference-page:** add endpoint interface and remove method state ([602b85f](https://github.com/vtexdocs/devportal/commit/602b85fb049c7f720394f29a8fd20e16c2d0eafd))
* **search-input:** close search box ([f644e3b](https://github.com/vtexdocs/devportal/commit/f644e3ba40d6a74804a0e0485f505dd47fdf0b59))
* update types and move search client to constants ([f27b862](https://github.com/vtexdocs/devportal/commit/f27b86208a9f33a060f63b13f512bd04ed2bc4ff))
* **utils:** move search functions to utils ([ff2474f](https://github.com/vtexdocs/devportal/commit/ff2474f01cd224d54fecb6a33b4bdf256e7e35ee))


### Revert Changes

* **search-input:** result text overflow ([90569a9](https://github.com/vtexdocs/devportal/commit/90569a9fba97e341e03d937b198d97fb56d59612))


### Tests

* **api-reference:** remove copy test ([35803b5](https://github.com/vtexdocs/devportal/commit/35803b533f0158d718c674404478785279d33642))
* **cypress:** fix reference page load ([f9e531c](https://github.com/vtexdocs/devportal/commit/f9e531c07d61d836b5c4d7dbfdadd47405242247))
* **cypress:** run on headed chrome and increase defaultCommandTimeout ([30ee862](https://github.com/vtexdocs/devportal/commit/30ee862436e80ea82fd41ad3d67b63066f82b6e8))
* **cypress:** update the tests to consider the opened sidebar ([f93d23c](https://github.com/vtexdocs/devportal/commit/f93d23c3b8d661f18775892205646d54baca8f18))


### Chore

* add NextAuth package ([9a34bfe](https://github.com/vtexdocs/devportal/commit/9a34bfe831957a56288c4d5d65baccc01e1e652c))
* **netlify.toml:** add redirect for livestreaming app ([13aba09](https://github.com/vtexdocs/devportal/commit/13aba094341835f9288df6fea1c1b8c94b2e38b1))
* **rapidoc:** update submodule ([4fd28e0](https://github.com/vtexdocs/devportal/commit/4fd28e068364497504cffa37db5a0901c5b9772e))
* **rapidoc:** update submodule ([9a35a2e](https://github.com/vtexdocs/devportal/commit/9a35a2e736967097b1e4a9410834167f83d3ea71))
* remove rapidoc files ([b042fb6](https://github.com/vtexdocs/devportal/commit/b042fb6cd74a05ac582b8f992f366db17fe318b4))
* update yarn.lock ([b096cf8](https://github.com/vtexdocs/devportal/commit/b096cf8a74005d47877ef434da6704e58a39cd79))
* update yarn.lock ([5f638d5](https://github.com/vtexdocs/devportal/commit/5f638d5ea622e6d231d5ab61d760c3dd3f15ac59))


### Style

* **auth:** update auth environment variables ([32ea68f](https://github.com/vtexdocs/devportal/commit/32ea68faa7017185d645074c09355c54740dc8ab))
* **search-page:** first version of mobile design ([e2df0b3](https://github.com/vtexdocs/devportal/commit/e2df0b3074255bab85b6f208d520e5c445e452ac))
* **search-page:** fix pagination in mobile, results ellipsis and right spacing ([689b5ba](https://github.com/vtexdocs/devportal/commit/689b5babf5c2d4f3fc729fb66cc72cf762277340))

### [1.9.10](https://github.com/vtexdocs/devportal/compare/v1.9.9...v1.9.10) (2023-05-06)


### Features

* **apps:** add Breadcrumbs and Pagination to app pages, among other minor improvements ([0d701fd](https://github.com/vtexdocs/devportal/commit/0d701fd9f3c03364e47eb6cea5679f39189ff06b))
* **lighthouse:** add mean of performance results to the summary report ([1c36a94](https://github.com/vtexdocs/devportal/commit/1c36a94b109b9b60abcf3dead84c5b73deaec600))
* **sidebar:** support different openapi specs in the same category ([f815289](https://github.com/vtexdocs/devportal/commit/f815289e688be4b58f08694c57db9b099883667b))


### Bug Fixes

* **apps:** find in navbar despite version ([d982dc4](https://github.com/vtexdocs/devportal/commit/d982dc4f1fd7be35f7df72ac30df8f6d4a24318e))
* **cypress:** fix file path in action ([ec09e00](https://github.com/vtexdocs/devportal/commit/ec09e003386ae4b6f41c21d9c7673b0c87ea8a97))
* **lighthouse:** update action version ([2b715da](https://github.com/vtexdocs/devportal/commit/2b715daa652ad9d468aa6edf28704e79061839f0))
* nextjs shouldn't optimize image if it is a gif ([1aa1ab9](https://github.com/vtexdocs/devportal/commit/1aa1ab93b075e36b6be926bfd116d5d776d777a8))
* **sidebar:** general api reference cases ([447c3a0](https://github.com/vtexdocs/devportal/commit/447c3a09c640f8a4d08b79e76a30066ed843fd20))


### Docs

* **navigation.json:** added new release note to navigation ([44fa6a9](https://github.com/vtexdocs/devportal/commit/44fa6a9a2a37fcb173a7604dd233f51c533a79dc))


### Performance

* prevent rerenders and remove useEffects ([e7345bd](https://github.com/vtexdocs/devportal/commit/e7345bd917b26c351197c0b060727ea3c9467166))
* remove unnecessary effects ([6933a65](https://github.com/vtexdocs/devportal/commit/6933a65793ce60695d26f8de1828f6d0004e13ab))


### Revert Changes

* **sidebar-section:** sidebar shift ([8901806](https://github.com/vtexdocs/devportal/commit/8901806b06d41aed1de848d265a75034252ae6b3))


### Chore

* **apps:** remove .x from version text ([fec51c7](https://github.com/vtexdocs/devportal/commit/fec51c7a0de0ee8fe2464091b5bdb58a4a871b16))
* **navigation.json:** fixes navigation slugs ([299e9b7](https://github.com/vtexdocs/devportal/commit/299e9b7f8efad64c73901a3e11db110823183f77))

### [1.9.9](https://github.com/vtexdocs/devportal/compare/v1.9.8...v1.9.9) (2023-04-27)


### Features

* add api ref index generator index.tsx ([da09561](https://github.com/vtexdocs/devportal/commit/da09561d911b92feaacf43d7d031c4697e04ce1f))
* add buttons to zoom and pan svgs ([3d41e39](https://github.com/vtexdocs/devportal/commit/3d41e398341e9cc0ce5c7795374be51f4831c24b))
* **api-index:** add api-index page ([8dc8694](https://github.com/vtexdocs/devportal/commit/8dc8694db48b9c22abad6b5c1cf55fb902db86c2))
* **guides:** add remark-mermaidjs plugin ([23b4464](https://github.com/vtexdocs/devportal/commit/23b44647a7aed180fb4ad5f8e92a33ea843491df))
* **guides:** use chromium executable path ([e52fbbf](https://github.com/vtexdocs/devportal/commit/e52fbbf31d685b658474be904209868239eb4049))
* **lighthouse:** add toggle items to lighthouse summary report ([62cb015](https://github.com/vtexdocs/devportal/commit/62cb015fe579430f426a9c4d5fabc61bcc93878c))
* **pages:** update searchable attributes ([80a7877](https://github.com/vtexdocs/devportal/commit/80a7877c42b48e3ff22aa0966655c0a1159c4f68))
* **select-random-pages:** improve algorithm to allow getting the same number of pages of each type ([d8084d6](https://github.com/vtexdocs/devportal/commit/d8084d6445d8a7847d8e52ea2e9b10b77546ffb7))
* update lighthouse action version and comment PR with lighthouse results summary ([c2fad50](https://github.com/vtexdocs/devportal/commit/c2fad504ce7c6588f2ffed14ec4662dbfef862c0))


### Bug Fixes

* add args and headless to launch options ([a1560db](https://github.com/vtexdocs/devportal/commit/a1560dbdc43b4009aa06e6b2d9735f8ef5bf6bdb))
* add lighthouse config file for setting screen resolution during performance tests ([ebcb61b](https://github.com/vtexdocs/devportal/commit/ebcb61b65968bc5108aed0fa10d41468ede830a4))
* add missing variable and debug command to lighthouse action ([e19d642](https://github.com/vtexdocs/devportal/commit/e19d64238a80b6a916c77338b360554b3bbf2be9))
* adjust navigation.json ([f7beab9](https://github.com/vtexdocs/devportal/commit/f7beab9f4ad2a59f7d6fdced931b268c168bb954))
* **api-reference:** get title and description from openapi overviews ([df2670f](https://github.com/vtexdocs/devportal/commit/df2670fc523cfafe8629e56f4ae2da1cdd4d04ff))
* **api-reference:** retrieve title and description of patch-type endpoints ([aae8543](https://github.com/vtexdocs/devportal/commit/aae85431ad792919efd50137de6623466a38d220))
* create plugin to replace remark-mermaidjs ([be55b79](https://github.com/vtexdocs/devportal/commit/be55b795099086563d2c0c1ac45ef77c884b3b0d))
* don't send feedback if it's a test ([c32cc7f](https://github.com/vtexdocs/devportal/commit/c32cc7f0226ae8defc3d4f2d730ca99a2fb42d5b))
* fix typo in lighthouse action ([5ac2316](https://github.com/vtexdocs/devportal/commit/5ac23169c385dc8197bba12b1655b6c0e9a5199e))
* fix typo in lighthouse action ([65f2390](https://github.com/vtexdocs/devportal/commit/65f23904ec6426e4eca36531da2da3170a7dc9d2))
* fix typos in lighthouse action ([438783d](https://github.com/vtexdocs/devportal/commit/438783dd6d0bd8ef9987e83a941d2b0c2cefb09c))
* **guides:** fix activeslug ([8b5af4c](https://github.com/vtexdocs/devportal/commit/8b5af4ccd4fef5a6bc7c1f032d567b92f4dd30a7))
* **jsoneditorindex:** remove setsidebar code ([9f42841](https://github.com/vtexdocs/devportal/commit/9f42841352203aaf607cc02cec739ca3090ff085))
* **jsoneditorindex:** use typeof instead of instanceof ([285d485](https://github.com/vtexdocs/devportal/commit/285d485f168266cfad73ef8112a27fc62cb470d4))
* launch browser ([1318e62](https://github.com/vtexdocs/devportal/commit/1318e62d1dfe8badcd671d13f4dae53a8a1646e8))
* **lighthouse:** fix indentation ([ae29684](https://github.com/vtexdocs/devportal/commit/ae296846054b465baa8f63c1875c5f59374aa02e))
* **lighthouse:** fix typo ([842f3d6](https://github.com/vtexdocs/devportal/commit/842f3d69b874b1c8f2db94a02dcdc839b578a669))
* **lighthouse:** remove deploy url from comment ([6d56408](https://github.com/vtexdocs/devportal/commit/6d564083db689b216996931e9b3b6e7693d4e564))
* **lighthouse:** run lighthouse in less pages ([25f06d2](https://github.com/vtexdocs/devportal/commit/25f06d27f75f1f49535bfcc7461b5376417946f6))
* **lighthouse:** update action ([3835a36](https://github.com/vtexdocs/devportal/commit/3835a36dcc3dd5394a31eae79dfb05309fd7991a))
* **pages:** apps navigation ([93b6359](https://github.com/vtexdocs/devportal/commit/93b6359706b241e1b5556ff2df446bc3ecf659e0))
* remove id and add width and height props to svg ([ce705ca](https://github.com/vtexdocs/devportal/commit/ce705caffe838cf6303e1b597aa5989244bc928d))
* replace chrome-aws-lambda ([d9bc5d8](https://github.com/vtexdocs/devportal/commit/d9bc5d85f1cbf6123299ff7b02421030ff29d99c))
* **tests:** update documentation-page-status test ([ab289b3](https://github.com/vtexdocs/devportal/commit/ab289b3dd93b322805626865bbe4d935696b3c54))
* **tsconfig:** add module declaration for @octokit/plugin-throttling ([857d0ea](https://github.com/vtexdocs/devportal/commit/857d0ea16a3ea95e3e3a3c421d04cb201b4ebb05))
* update from main ([0c39c90](https://github.com/vtexdocs/devportal/commit/0c39c90884b8c61e3cd4e753765e60890adfbf60))
* update lighthouse action to run on multiple pages ([d74af74](https://github.com/vtexdocs/devportal/commit/d74af74dd34eeb8b34ad39e8f670333e314a2a14))
* use chromium.headless ([499b554](https://github.com/vtexdocs/devportal/commit/499b554571f52ca2b7d56d5654f42ef26c3b16a6))
* use render method to generate diagram ([c7c468d](https://github.com/vtexdocs/devportal/commit/c7c468dfb42b3a508964dabdd99696f2f0f3165c))
* using react-svg-pan-zoom ([e7796aa](https://github.com/vtexdocs/devportal/commit/e7796aa267b076773337cf29f9f3ef6d9890ea3f))
* **vtex-io-apps:** update links vtex-io-apps page ([1b100e1](https://github.com/vtexdocs/devportal/commit/1b100e1dfde369d0a6256413ad160a66af211a18))
* wait for chromium executable path ([68efe7c](https://github.com/vtexdocs/devportal/commit/68efe7cca3e0b4f02f5f4cccd05fcf67b01b61e4))


### Tests

* update response component test ([d4f9a02](https://github.com/vtexdocs/devportal/commit/d4f9a02e8607933c802d1bd83a0763dab5a57d1b))


### Performance

* **markdown-renderer:** remove highlightjs import using head link ([508e2c1](https://github.com/vtexdocs/devportal/commit/508e2c1fd8c8b49d91d33be6d3433d0ad6cb3330))


### Docs

* **adding missing api ref:** adds new cards with missing api ref and corrects previous copies ([b029e5a](https://github.com/vtexdocs/devportal/commit/b029e5ad5708833dc6be8cbb62089025a08f5522))
* fix navigation.json ([985c9f4](https://github.com/vtexdocs/devportal/commit/985c9f4c52365edc0845f2b91ba7f4ec4970917a))
* fix navigation.json ([786d655](https://github.com/vtexdocs/devportal/commit/786d6550834b369ce6e5afe5a41274058f9a5ea1))
* **navigation:** fix promotions and taxes api ([9002543](https://github.com/vtexdocs/devportal/commit/9002543c3895163b090303d720df93eeab95e9f1))
* **redirect for pricing hub:** redirected 404 link for pricing hub API overview ([3072688](https://github.com/vtexdocs/devportal/commit/30726885ad49c71787ed97eaa611dc6de698d302))
* redirect subscriptions ([8c2aeb1](https://github.com/vtexdocs/devportal/commit/8c2aeb10b0e40a4e57511d93601837212f81a740))
* update navigation.json ([4632a9f](https://github.com/vtexdocs/devportal/commit/4632a9f9d9fc0f713576576a51108386ba962197))
* update slug ([e14f3fe](https://github.com/vtexdocs/devportal/commit/e14f3fedeaae708de59c4be5f3d2cd212b50142b))


### Build

* add puppeteer-core to dependencies ([f77a6ac](https://github.com/vtexdocs/devportal/commit/f77a6ac2140e68b4dbf5444c59d760cece01adf9))
* add react-svg-pan-zoom to dependencies ([16a9b57](https://github.com/vtexdocs/devportal/commit/16a9b57a2d42348f23a1130775d2c8d822f5ab45))
* **package:** update rapidoc version ([cc48e50](https://github.com/vtexdocs/devportal/commit/cc48e501dac6db1be1865882e51f2bfcc41920cd))
* update rapidoc version ([0004785](https://github.com/vtexdocs/devportal/commit/00047851edd58f21997f6fdfa48b028730069110))


### Refactoring

* **announcementbar:** changes the code of announcement bar to hide it ([6862af4](https://github.com/vtexdocs/devportal/commit/6862af4af3635d154437aade74a75bc1b4cf31fa))
* **api-index:** edit headerDescription ([fe0f4a8](https://github.com/vtexdocs/devportal/commit/fe0f4a8f2e745e4a02a7de06a564f936ae3bdf53))
* **tests:** create function for randomly selecting documentation pages ([2a28aa9](https://github.com/vtexdocs/devportal/commit/2a28aa92b77e584db13d653ac728fc12eabf1a1a))


### Style

* create mermaidjs diagram CSS file ([5475f45](https://github.com/vtexdocs/devportal/commit/5475f45d1004bba8556a3894759263acf050efa0))
* **jsoneditorindex:** add api ref index generator styles.ts ([1e67fc6](https://github.com/vtexdocs/devportal/commit/1e67fc6fe7a306ac2447510d8edf9ee30a833ad2))
* **lighthouse:** remove unecessary line break ([60faf3b](https://github.com/vtexdocs/devportal/commit/60faf3b0c58719c6fd095c2ad2afe2453be198f9))
* **tests:** remove unused import ([40faf97](https://github.com/vtexdocs/devportal/commit/40faf970e422d0bf997ddf72577c36219e7b680f))
* update mermaid diagram css ([49787d7](https://github.com/vtexdocs/devportal/commit/49787d7fbf9f352da2f88a4b6c5a6f0467acfbd2))


### Chore

* **last-updates-section:** update lasReleaseNote ([989fb3f](https://github.com/vtexdocs/devportal/commit/989fb3f029e86a1699b2b4a7097b55499209d22a))
* **navigatin.json:** update search result slug ([0ea9f6e](https://github.com/vtexdocs/devportal/commit/0ea9f6e6d6f325b947db999930fbbaab0f592c3a))
* **navigation.json:** remove beta label from faststore link ([c5c4dcb](https://github.com/vtexdocs/devportal/commit/c5c4dcb8862b278d033ecc29c71d467572d8fbad))
* **navigation.json:** update vtex io apps sidebar ([906813c](https://github.com/vtexdocs/devportal/commit/906813c08ec9f455d1cfce8a444c660a12924b57))
* **netlify.toml:** add redirects most visited apps ([18bf50e](https://github.com/vtexdocs/devportal/commit/18bf50e502e924a680a1e1514a3fa19261af14e4))
* **package.json:** update next version ([8b21537](https://github.com/vtexdocs/devportal/commit/8b21537d42935b12eb79de17a56a77c2321a56ea))
* **package:** add chrome-aws-lambda ([098e835](https://github.com/vtexdocs/devportal/commit/098e83597b85eeb1402f500404f019d3e0c4cec4))
* **package:** add remark-mermaidjs ([aef31aa](https://github.com/vtexdocs/devportal/commit/aef31aa82e8760d331585d8a98923770e6e02da8))
* update dependencies ([07ebf8a](https://github.com/vtexdocs/devportal/commit/07ebf8a93064bcdd8cd2e247d6a3ac334902edd4))
* update yarn.lock ([6dd68f9](https://github.com/vtexdocs/devportal/commit/6dd68f9960f2084277845c638f46066ee137f0fd))
* update yarn.lock ([a3a82db](https://github.com/vtexdocs/devportal/commit/a3a82dbb0b50e754f929bb629a22f34eadda88b7))
* update yarn.lock ([726a50b](https://github.com/vtexdocs/devportal/commit/726a50bbe61bdad4ad1e12ee46102c0cfc7b6add))
* update yarn.lock ([d109937](https://github.com/vtexdocs/devportal/commit/d109937b931ab283ab476958f1ac4976679092ba))
* update yarn.lock and package-lock.json ([73cdcec](https://github.com/vtexdocs/devportal/commit/73cdcec0f0f58b954e56566630504b9d1f08a90a))

### [1.9.8](https://github.com/vtexdocs/devportal/compare/v1.9.7...v1.9.8) (2023-04-11)


### Features

* add action for extensive testing ([dc8f184](https://github.com/vtexdocs/devportal/commit/dc8f184f59eefbdd98110520ff9ac3c3da77c606))
* **api:** create feedback endpoint ([5b10d4c](https://github.com/vtexdocs/devportal/commit/5b10d4c8f73b4364b0af308a2aceea410d3aaddb))
* create encrypted file to store environment variables ([0357902](https://github.com/vtexdocs/devportal/commit/03579028c5c40bce2f1f11465a1db82f96b0e158))
* **feedback:** send feedback to the respective endpoint ([e18a7b0](https://github.com/vtexdocs/devportal/commit/e18a7b07053f4ac5a3de04651f7282054f8c9359))


### Bug Fixes

* **components:** fix modal and lightbox position ([767f730](https://github.com/vtexdocs/devportal/commit/767f7304625207076714aab2a5d7deb359541927))
* **feedback:** fix url sent with feedback ([1e06747](https://github.com/vtexdocs/devportal/commit/1e06747e61af10bf255e982c0b27caa91fbdcda5))
* **feedback:** modal should not wait for the request response ([623f15f](https://github.com/vtexdocs/devportal/commit/623f15fd71545aa4583a6d8d3cb98d03cb8b436e))
* **feedback:** send only one response ([0467f0c](https://github.com/vtexdocs/devportal/commit/0467f0cd739b1e42c79ab84b93ce81d640b95434))
* **feedback:** send sheets api response ([e241bd7](https://github.com/vtexdocs/devportal/commit/e241bd7f2c7103e2241e6a3d1eddc0814e6f0f6d))
* **get-variable:** get working directory ([a5739ec](https://github.com/vtexdocs/devportal/commit/a5739ecf69b3f369d2c366be5c73d68894b4d1c5))
* reduce memory consumption on test runs ([457fdd3](https://github.com/vtexdocs/devportal/commit/457fdd3e48acf669097b282e7921fb17dc3ce08c))
* reset feedback when documentation changes ([3a41499](https://github.com/vtexdocs/devportal/commit/3a414994fecb4f4f71faeb59200add1ad9cb8e4a))
* use getVariable to get environment variables ([33a734f](https://github.com/vtexdocs/devportal/commit/33a734f16482a7d80d9969d4c758135fda7a3af3))


### Build

* add googleapis dependency ([4496437](https://github.com/vtexdocs/devportal/commit/44964376368107a2fe90243c9429cffddf3eb6a5))


### Chore

* remove console log ([37ea5a5](https://github.com/vtexdocs/devportal/commit/37ea5a5386d90ec36d938ff718661d9184d8f859))


### Docs

* **navigation:** adding navigation for new pick and pack docs ([32c4a0f](https://github.com/vtexdocs/devportal/commit/32c4a0f1dbe06ae9bda8255e8dd4fadb260be322))
* **navigation:** adding navigation for new pick and pack protocol guide ([f95859e](https://github.com/vtexdocs/devportal/commit/f95859e9052e3f75428d6babf4c0a2918b395be8))
* **navigation:** update catalog api menu ([91184b5](https://github.com/vtexdocs/devportal/commit/91184b58294745737d1532faa766ac3d9363880b))

### [1.9.7](https://github.com/vtexdocs/devportal/compare/v1.9.6...v1.9.7) (2023-03-29)


### Features

* **overviewcard:** add fulfillment icon ([95de3dc](https://github.com/vtexdocs/devportal/commit/95de3dc3c3e0abc320f83f2c497e212271ab9f1b))
* **overviewcard:** add icons to overview card - getting started doc ([a144def](https://github.com/vtexdocs/devportal/commit/a144defb71655753d2804de32bda00752ec03b95))
* **overviewcard:** update icons ([1f5c2e8](https://github.com/vtexdocs/devportal/commit/1f5c2e8433dab24ea201659cd11c2e5e86f8c40e))
* **previewcontext:** display name of the branch in use ([3f5bfae](https://github.com/vtexdocs/devportal/commit/3f5bfae232c9c0d4d071c4edd9f4da1df7c7df32))
* **previewcontext:** update pages to use previewcontext ([b11740a](https://github.com/vtexdocs/devportal/commit/b11740a44232380daa310905e8fc896bedeab771))
* **preview:** enable preview mode ([9fe11f1](https://github.com/vtexdocs/devportal/commit/9fe11f1f8d219d60351ff1b0e7762439284ecebc))
* **preview:** only add preview cookies if branch exists ([3ccd6f4](https://github.com/vtexdocs/devportal/commit/3ccd6f4d06f23e00515d08820d01f2ac032a16d5))
* **tests:** comment tests results summary in PR ([796767e](https://github.com/vtexdocs/devportal/commit/796767ee970b53e816db752f4c58073df1e1f41b))


### Bug Fixes

* **cypress-action:** add action for waiting for pages to update ([d86d936](https://github.com/vtexdocs/devportal/commit/d86d936617c6f9f8741befa60a021b43c181f3f6))
* **disable-preview:** fix value declared but never used ([b7bd30e](https://github.com/vtexdocs/devportal/commit/b7bd30e68e08894bd38e0e4eb59760122cac24d4))
* **getreleasesdata:** add missing branch param ([9dae1d9](https://github.com/vtexdocs/devportal/commit/9dae1d943332383c3eaaaf2d348bdb069fe3d88c))
* **guides:** add missing prop ([af13536](https://github.com/vtexdocs/devportal/commit/af13536730d086e88e52a41b2f5da5178a090117))
* prevent type errors ([7932cf2](https://github.com/vtexdocs/devportal/commit/7932cf28e888affe1c11c7edf9cedaae88e06ad3))
* **redirects:** force redirects ([cb39199](https://github.com/vtexdocs/devportal/commit/cb39199f8283e72a60cf9fd31943a61266c6fa9a))
* **redirects:** use correct http code ([310dc64](https://github.com/vtexdocs/devportal/commit/310dc64611ea0be8b95e302efe7bee73fb5abcfd))
* **sidebar:** rerenders in sidebar ([2b5d574](https://github.com/vtexdocs/devportal/commit/2b5d5742bdc2ae89684bdf6a654debc031e8a011))
* **slug:** update previewbranch ([164e620](https://github.com/vtexdocs/devportal/commit/164e6203dfb2f78bb5264b816831172670e3a0a2))
* **tests:** add missing import statement and remove deleteLog plugin ([60c2c83](https://github.com/vtexdocs/devportal/commit/60c2c832900ae51fbd6efcfbb779cd84e937e559))
* **tests:** do not record screenshots and video ([d7b67e6](https://github.com/vtexdocs/devportal/commit/d7b67e607e0e4465723ef80c2b9fbfe87c90a176))
* **tests:** fix typo in test title ([c27e12b](https://github.com/vtexdocs/devportal/commit/c27e12b9493187e9ba0c948e485819efc511b541))
* **tests:** generate summary report even if cypress run failed ([29db8da](https://github.com/vtexdocs/devportal/commit/29db8daf4db216e072ca5e5d315a64ae22355372))
* **tests:** increase timeout when waiting for netlify ([ba97b1e](https://github.com/vtexdocs/devportal/commit/ba97b1eda4523ab9b9fd12643104ead0a1c346ff))
* **tests:** run comment PR action regardless of cypress run exit code ([94b2d9e](https://github.com/vtexdocs/devportal/commit/94b2d9e25ebfbfae477b11f5796e53f1802982ed))
* **tsconfig:** add nextjs config ([c86dc5a](https://github.com/vtexdocs/devportal/commit/c86dc5aae7a593995864d7c85b8022627ea3b8c9))
* **tsconfig:** who would've guessed tsconfig can get this hard ([e949566](https://github.com/vtexdocs/devportal/commit/e94956692262ce73838ffa25238d3158899d4251))


### Build

* **package.json:** add clipboardy dependency ([644ee97](https://github.com/vtexdocs/devportal/commit/644ee971e2dcbd17ccbe6764d9c580ec8275362f))
* update yarn.lock ([1586fa8](https://github.com/vtexdocs/devportal/commit/1586fa89d02d878f93f7eb67442b0957135af170))
* update yarn.lock ([504779e](https://github.com/vtexdocs/devportal/commit/504779ed2b75d3c78cf311225f3a84849561e1e8))


### Refactoring

* **previewcontext:** update pages to pass branch value ([1d4989c](https://github.com/vtexdocs/devportal/commit/1d4989cd2fbe8fe9c3e5c78605a6a03cf63b64b4))
* **redirects:** use netlify redirects ([3ba9cc2](https://github.com/vtexdocs/devportal/commit/3ba9cc2cecb1eadbb40475cd3283dc867878b889))
* **sidebar:** add sidebar-component class ([96b9ba3](https://github.com/vtexdocs/devportal/commit/96b9ba3f57bcb4a09a868790ea945dd774309c74))
* **tsconfig:** remove unecessary dependencies and change module resolution ([730a3ad](https://github.com/vtexdocs/devportal/commit/730a3ad7edef8cad0bfca15970190d831bc74c7c))


### Docs

* changed navigation.json ([96a35f7](https://github.com/vtexdocs/devportal/commit/96a35f70e5f69752d8d822760a06ab200acdfe24))
* changed navigation.json ([f172fd4](https://github.com/vtexdocs/devportal/commit/f172fd424943a89472e20d301322a30d2557821d))
* changed navigation.json ([e8229cc](https://github.com/vtexdocs/devportal/commit/e8229cc87c84ebf0812187bd646431577ec88b22))
* changed navigation.json ([3815191](https://github.com/vtexdocs/devportal/commit/381519117a741559a34c99f5bc486f1e499379cf))
* changed navigation.json ([59ad125](https://github.com/vtexdocs/devportal/commit/59ad1259d1437acc58159a4fc2d88e984b045067))
* changed navigation.json ([3b8bb44](https://github.com/vtexdocs/devportal/commit/3b8bb445db7fb29f2c5cefd80aa4466788cb971f))
* changed url in navigation.json ([c535aa3](https://github.com/vtexdocs/devportal/commit/c535aa33f632718e509db2687f70bf0d6b8eb38b))
* **navigation:** add new guide: service path patterns ([dca69e2](https://github.com/vtexdocs/devportal/commit/dca69e2ef6377f75fa3dc0222705fbc02b1db738))
* **navigation:** change order of authentication category in the getting started section ([a51f1cf](https://github.com/vtexdocs/devportal/commit/a51f1cfd2012041fb0cbe3bfedee0ada73030550))


### Tests

* add cypress id to containers ([7c2c779](https://github.com/vtexdocs/devportal/commit/7c2c7796dc330334119c36ec4ca5ef33a8cefe19))
* **api-reference:** test sidebar navigation and check shadowDOM elements ([d9de723](https://github.com/vtexdocs/devportal/commit/d9de723e5b8c1bf70e8b6b89cd74a2b2af08ad6c))
* **commands:** add commands to get a random element inside of a list ([9d53baf](https://github.com/vtexdocs/devportal/commit/9d53bafc3291a44a6d9b500d4a9494516683697b))
* **cypress:** add error log to tests ([f661a87](https://github.com/vtexdocs/devportal/commit/f661a87e169191360edc5f4edef418ea95c9a9ea))
* **cypress:** add log messages to documenation-pages-status test ([2f072de](https://github.com/vtexdocs/devportal/commit/2f072de5f8a87e1f0ab70215d025c2fef304bf6e))
* **cypress:** add write and remove functios to manage log file ([bce244c](https://github.com/vtexdocs/devportal/commit/bce244c6a53df4db8b8e501c564f052f4cf49499))
* **cypress:** api guides tests ([64fb15f](https://github.com/vtexdocs/devportal/commit/64fb15f864b7aebd9a087c1af3d5568ce9a4499d))
* **cypress:** conditional test if doc have TOC ([23c9b32](https://github.com/vtexdocs/devportal/commit/23c9b3288ecb133d7b206debdad7b06f01f58bd5))
* **cypress:** open sidebar after page load in large screen ([d340f2c](https://github.com/vtexdocs/devportal/commit/d340f2c80b650bb5727e3e0e8aab0c4035d1f123))
* **cypress:** prevent security erros from chrome ([52c1072](https://github.com/vtexdocs/devportal/commit/52c107261921b90df809a710361ce2569afa5bad))
* **cypress:** set false to chromeWebSecurity ([fe18549](https://github.com/vtexdocs/devportal/commit/fe185499aac11637c8a8b9a9f81b05fc89cf2a55))
* **documentation page status:** fix double slash in url and multiple tests for same reference page ([da6157b](https://github.com/vtexdocs/devportal/commit/da6157bea56f0591c4ea3be5e7e1657e80218c39))
* fix bug in documentation pages status test ([068b60b](https://github.com/vtexdocs/devportal/commit/068b60b329abcda351f19d18920c8fabade30259))
* **plugins:** add task plugin ([97026d6](https://github.com/vtexdocs/devportal/commit/97026d68da9a479c95e7d15417a1d01dea08c6db))
* remove wrong index file and add reference tests ([45a15e2](https://github.com/vtexdocs/devportal/commit/45a15e263787e5ad3e48743833f9c8121201e598))
* run documentation pages status test on a small number of pages ([190b6cf](https://github.com/vtexdocs/devportal/commit/190b6cf8d810aa9dacc0d598571c933bdf92b605))


### Chore

* **package.json:** update rapidoc version ([9dbe46b](https://github.com/vtexdocs/devportal/commit/9dbe46b4e3a6a59f1b285ca1cc4dc0bd0b84523f))
* **package:** add clipboardy ([2b522c4](https://github.com/vtexdocs/devportal/commit/2b522c4d2015fcd681f3a9bd862647e29fad7d2f))
* remove tests screenshots and videos from git track ([a2a90b4](https://github.com/vtexdocs/devportal/commit/a2a90b4aaf02e3cbf60c112870689e0528d0e68d))
* **tracker:** update tracker ([2f73087](https://github.com/vtexdocs/devportal/commit/2f730875b02853c8656126ef4e903153da86c1dd))
* update cypress version ([1ad1fa0](https://github.com/vtexdocs/devportal/commit/1ad1fa0a29fed0417ff92ff025f23b27ea926b2f))


### Style

* **announcementbar:** announcement bar not closable when in preview mode ([96b003a](https://github.com/vtexdocs/devportal/commit/96b003a00d332254b5ba01bbd2834169e033a116))
* **api-reference:** update rapi-doc fonts ([d51967f](https://github.com/vtexdocs/devportal/commit/d51967f12aed8a20f764631a31b2dab111f2507b))
* **article-pagination:** update padding ([b59152b](https://github.com/vtexdocs/devportal/commit/b59152b764eafe05579d6b3f21a0404ceb637f4a))
* **article-pagination:** use figma file as a reference for pagination component ([2b0c811](https://github.com/vtexdocs/devportal/commit/2b0c81112a0efd048a63c7dd8b33234f1491e953))
* **rapidoc:** update rapidoc version and styles ([66a38bc](https://github.com/vtexdocs/devportal/commit/66a38bc94ed7d2dc77cb8bc3cdce9993c9e3a6cb))

### [1.9.6](https://github.com/vtexdocs/devportal/compare/v1.9.5...v1.9.6) (2023-03-20)


### Chore

* **deps:** bump ansi-regex from 3.0.0 to 3.0.1 ([d923de3](https://github.com/vtexdocs/devportal/commit/d923de3e80cfd5cab9ec26e692a399404240e811))


### Build

* **deps:** bump jsonwebtoken and universal-github-app-jwt ([b423c97](https://github.com/vtexdocs/devportal/commit/b423c97d7cb512beab1ce20628328b17075571e0))
* **deps:** bump loader-utils from 2.0.2 to 2.0.4 ([998fcc8](https://github.com/vtexdocs/devportal/commit/998fcc8691135809d6514245a9eded80c2ec2258))
* **deps:** bump luxon from 1.28.0 to 1.28.1 ([c5ccd33](https://github.com/vtexdocs/devportal/commit/c5ccd337f4a0753e3760fea1cd12eac73af6db87))
* **deps:** bump node-fetch from 3.2.6 to 3.2.10 ([70f4a64](https://github.com/vtexdocs/devportal/commit/70f4a64ee554a09b3a529578eea0dd43b2f4d517))
* **deps:** bump webpack from 5.74.0 to 5.76.2 ([a54c142](https://github.com/vtexdocs/devportal/commit/a54c142be6ffcdd386745bb598ddf5032b389947))

### [1.9.5](https://github.com/vtexdocs/devportal/compare/v1.9.4...v1.9.5) (2023-03-20)


### Bug Fixes

* **sidebar:** check the parent to expand the correct endpoint ([d58bbd6](https://github.com/vtexdocs/devportal/commit/d58bbd662771ff5016744d96397d04bc547979b6))


### Docs

* create redirect for catalog api ref ([62d863b](https://github.com/vtexdocs/devportal/commit/62d863b1244ab7a828b87970793c7508453c3ec5))
* **navigation:** fix position of catalog guide ([843b4d2](https://github.com/vtexdocs/devportal/commit/843b4d2c8caa08e5d8f6823d6461ffc3952f4c7c))

### [1.9.4](https://github.com/vtexdocs/devportal/compare/v1.9.3...v1.9.4) (2023-03-17)


### Features

* **editor:** add toast feedback to json editor ([83bdfbf](https://github.com/vtexdocs/devportal/commit/83bdfbf37fa7f49af2062541ba1f3a76f317d47a))
* **editor:** allow file query string ([4c8ed87](https://github.com/vtexdocs/devportal/commit/4c8ed87783cf5635c5b9847f9a6cd6127c0fa511))
* **editor:** v1 of sidebar editor ([248d715](https://github.com/vtexdocs/devportal/commit/248d7152dfebadcc90514e870f495b8ce224a74e))


### Bug Fixes

* **editor:** fix ispreview type ([bf1762d](https://github.com/vtexdocs/devportal/commit/bf1762d14fab123179e53ad5de2a872b1dc5d725))
* **editor:** fix isPreview type ([462783d](https://github.com/vtexdocs/devportal/commit/462783d1a92137521cc1bc91eef0d669d553f538))


### Docs

* add change chain order navigation ([f6654f9](https://github.com/vtexdocs/devportal/commit/f6654f9d7da42502a26c8355625c1e4a684d597f))


### Refactoring

* **editor:** remove duplicated sidebar code ([6b571f4](https://github.com/vtexdocs/devportal/commit/6b571f444de50b04df0f2edd9d65c0e39f858d07))
* **editor:** rewrite conditions ([2713bbb](https://github.com/vtexdocs/devportal/commit/2713bbbcd7bf9ff6f862bad81ee2abf5898de4e5))

### [1.9.3](https://github.com/vtexdocs/devportal/compare/v1.9.2...v1.9.3) (2023-03-15)


### Bug Fixes

* handle image loading errors ([4e81bbd](https://github.com/vtexdocs/devportal/commit/4e81bbd0be92488a5f72cb1d369ac23161649467))


### Build

* **package:** update rapidoc version ([9ac04b3](https://github.com/vtexdocs/devportal/commit/9ac04b3d3b82c98d36b7c9bf0f1c9c191247cbb3))

### [1.9.2](https://github.com/vtexdocs/devportal/compare/v1.9.1...v1.9.2) (2023-03-15)


### Features

* add lightbox component to images ([731bff1](https://github.com/vtexdocs/devportal/commit/731bff1b95a40dfe1df920069ab085ead1609673))
* create lightbox component ([a22dc7a](https://github.com/vtexdocs/devportal/commit/a22dc7a5e0c813d869bac46ccb5c29b5fb716717))


### Bug Fixes

* **components:** fix missing unique key error ([d79cf95](https://github.com/vtexdocs/devportal/commit/d79cf95d1cc4f2d71603d1547ebb2138a32dc1d4))
* **hambuger:** fix missing unique key error ([0700857](https://github.com/vtexdocs/devportal/commit/070085780bf55774ba91425e62a78015af42bb11))
* **lightbox:** use clickoutside hook ([5e12ee6](https://github.com/vtexdocs/devportal/commit/5e12ee65eb1c659845a1dbbc48e409290a0edeb2))


### Style

* **lightbox:** change close icon size and color ([b9a17e6](https://github.com/vtexdocs/devportal/commit/b9a17e61be1ecab3b185763de2081ca278f4198c))
* **lightbox:** change image display to block ([0bf14b8](https://github.com/vtexdocs/devportal/commit/0bf14b86120922e21bf0683c547d5a8214d8e9ce))
* **lightbox:** remove white modal to show only the image ([94acac0](https://github.com/vtexdocs/devportal/commit/94acac0fc2c37fb374e39034d6b37077a4c527d7))


### Docs

* create redirect mkp api overview ([0ce3e49](https://github.com/vtexdocs/devportal/commit/0ce3e49282a7fd66cb7b98c534f1612b598e5bef))
* **navigation:** add new intelligent search guides ([2ef02bd](https://github.com/vtexdocs/devportal/commit/2ef02bdb93e1f7a1f0a95ea43731c96f6500bd2c))
* **top bar:** change header content to persona research form ([b5b54f4](https://github.com/vtexdocs/devportal/commit/b5b54f4d3497a3a805d2efa47ff5127ca1072a92))
* **top bar:** remove old sentence from top bar ([e8aab0d](https://github.com/vtexdocs/devportal/commit/e8aab0d3eadc835263a9852fc9176a404769902c))

### [1.9.1](https://github.com/vtexdocs/devportal/compare/v1.9.0...v1.9.1) (2023-03-09)


### Bug Fixes

* **sidebar:** hide sidebar by default in smaller breakpoints ([f2c2996](https://github.com/vtexdocs/devportal/commit/f2c2996cd5ab2c0f9f3d7c6474b2dedd5fd48c98))


### Docs

* redirect ([934aac6](https://github.com/vtexdocs/devportal/commit/934aac69514ec1732ec285a7d158d9a69a32c4a8))


### Style

* **documentation:** decrease contributors width and container padding ([9614cec](https://github.com/vtexdocs/devportal/commit/9614cec833dfbd9dbc6298c20e88451b26465615))

## [1.9.0](https://github.com/vtexdocs/devportal/compare/v1.8.4...v1.9.0) (2023-03-07)


### Features

* **api-reference:** allow spec file download ([94c8b47](https://github.com/vtexdocs/devportal/commit/94c8b47bc557e942f3e331b57ae642eae5394b4b))


### Build

* **package:** update rapidoc version ([3db62b6](https://github.com/vtexdocs/devportal/commit/3db62b65a1f26ad111ab6b8ca83058bd6088b666))

### [1.8.4](https://github.com/vtexdocs/devportal/compare/v1.8.3...v1.8.4) (2023-03-07)


### Bug Fixes

* **hamburger-menu:** show search input only in main menu, fix cards positions ([4f6d575](https://github.com/vtexdocs/devportal/commit/4f6d575a21b3107353f84d4da4a38fc7a38a83c6))
* **sidebar:** show scroll on hover ([6672f93](https://github.com/vtexdocs/devportal/commit/6672f93380baa4b322da92182a36b8153cc3a64b))


### Style

* **sidebar:** fixed sidebar ([0d5d0cd](https://github.com/vtexdocs/devportal/commit/0d5d0cd35498b29313845ed474fcbaa26877539a))

### [1.8.3](https://github.com/vtexdocs/devportal/compare/v1.8.2...v1.8.3) (2023-03-07)


### Bug Fixes

* **cypress:** update cypress-io action version ([c9eb2b6](https://github.com/vtexdocs/devportal/commit/c9eb2b689e6485a91490b40c5666ae525cdd2448))
* fix import preventing successful build ([117b5ef](https://github.com/vtexdocs/devportal/commit/117b5efb8851f8b586407816e1e4d9f0b3174773))


### Chore

* update dependencies ([8c97f21](https://github.com/vtexdocs/devportal/commit/8c97f21d058ef8eed780c2506204f447aca56faf))


### Tests

* add test for checking documentation pages status ([c644586](https://github.com/vtexdocs/devportal/commit/c64458671f6d3556a7e1c3dd30044d398ceec8bd))
* update cypress action ([2bf9757](https://github.com/vtexdocs/devportal/commit/2bf97574c2311f06b09977c8a955f622c4909153))
* update cypress version and delete deprecated tests ([5c16cc9](https://github.com/vtexdocs/devportal/commit/5c16cc9e4acdf8303036119fbf8e78c1c061b6d4))


### Docs

* add apps-graphql release note to navigation ([fcd5d3e](https://github.com/vtexdocs/devportal/commit/fcd5d3e486ded47adebe72e8a633379c892e0458))
* change MOI navigation ([3b8c820](https://github.com/vtexdocs/devportal/commit/3b8c820321eb1cf7d741b2ad5fdc0eb78c0f0b24))
* change navigation ([ba230dc](https://github.com/vtexdocs/devportal/commit/ba230dcfc8563038c5edab0f0cfa1a01bf7115c5))
* change navigation ([c1db862](https://github.com/vtexdocs/devportal/commit/c1db862dbae46a9757d3d84e23b581850595b737))
* change navigation ([26c47fb](https://github.com/vtexdocs/devportal/commit/26c47fb558b04b879f6d8ebea87c903945354ec0))
* change navigation ([df37e78](https://github.com/vtexdocs/devportal/commit/df37e78891de95ab2c6fd57cea9b1c294335d52a))
* change navigation ([c359443](https://github.com/vtexdocs/devportal/commit/c359443d464e0a6f905ffb329d3c9b7d6fb93878))
* change navigation vtex shipping network ([262edbf](https://github.com/vtexdocs/devportal/commit/262edbfe5fbd8dcde307441af8690c5809bda60e))
* correct marketplace protocol slug ([b4875d5](https://github.com/vtexdocs/devportal/commit/b4875d5348003ec32ea3c8f3c75905eea2df1f55))
* correct marketplace protocol slugs ([7f2a4d8](https://github.com/vtexdocs/devportal/commit/7f2a4d8224180f74de3abf90f6dc77d3537a2d19))
* create redirects marketplace protocol ([822c264](https://github.com/vtexdocs/devportal/commit/822c264a829842a9280f6abc00ab6505d93b653b))
* delete guide and create redirect ([71f8ef7](https://github.com/vtexdocs/devportal/commit/71f8ef7aa95e62703019ffe322ef28cffff729fc))
* edit navigation.json ([03213f4](https://github.com/vtexdocs/devportal/commit/03213f4cacd847773ba0c1663387c64944b950e5))
* fix code formatting ([05f79dd](https://github.com/vtexdocs/devportal/commit/05f79dd09b43929823fc57d8c1a35a50e1ac9095))
* fix redirect ([350a067](https://github.com/vtexdocs/devportal/commit/350a067f4e927fea44ade3b95e7331455e7bb90c))
* **navigation:** correct marketplace protocol ([f3264c5](https://github.com/vtexdocs/devportal/commit/f3264c56a7c701fd7784c4ca73426db186693386))
* **navigation:** fix formatting ([8a71e6f](https://github.com/vtexdocs/devportal/commit/8a71e6f5bdb8963fd5580b9174c6ef2a3df5f501))
* **navigation:** fix path ([8d2d7c6](https://github.com/vtexdocs/devportal/commit/8d2d7c60ed3e68fe2c48d2f8dc17ff2d7757fcd0))
* **navigation:** fix sessions endpoints that have had the paths fixed ([dfb3093](https://github.com/vtexdocs/devportal/commit/dfb3093c85020e070c3fe4491f0f8637cd6ce68d))
* **navigation:** update yarn.lock ([02a62a4](https://github.com/vtexdocs/devportal/commit/02a62a4bab7c2c305b9546d1da8e5b8f93b60cb2))
* redirects ([a2c8ac6](https://github.com/vtexdocs/devportal/commit/a2c8ac6e73c15c5e0fade61bcf6469ece2231e26))
* remove redirect ([9a43c8c](https://github.com/vtexdocs/devportal/commit/9a43c8cf5ccec78e8c413a4abc68097574210993))
* update yarn.lock ([498a6b6](https://github.com/vtexdocs/devportal/commit/498a6b6479977387aa1281ec67d1667296a10f5d))

### [1.8.2](https://github.com/vtexdocs/devportal/compare/v1.8.1...v1.8.2) (2023-02-28)


### Features

* **search box:** event to analyze user clicks ([282c611](https://github.com/vtexdocs/devportal/commit/282c611f6050685d3fa3466b9b0f7dc97af825d2))


### Bug Fixes

* **algolia script:** update name of algolia keys ([bd33b68](https://github.com/vtexdocs/devportal/commit/bd33b684efcbd5e4969ae9ed876dfec9b9e2e9f5))
* **hamburger-menu:** add search input ([5392539](https://github.com/vtexdocs/devportal/commit/5392539cb734430598c4e17d088aeebe8d406446))
* **hamburger-menu:** larger arrow in main menu ([379287f](https://github.com/vtexdocs/devportal/commit/379287fa36f052eb414a7767d274cb06696cb343))
* **styles:** fix landing page cards ([88e4b90](https://github.com/vtexdocs/devportal/commit/88e4b9000530fc17fe89c353b0f5dba439e7ceb0))


### Chore

* **package.json:** add search-insights library ([3b10f3b](https://github.com/vtexdocs/devportal/commit/3b10f3b6bcb3e40e57c077b687d98144604b10c8))

### [1.8.1](https://github.com/vtexdocs/devportal/compare/v1.8.0...v1.8.1) (2023-02-27)


### Bug Fixes

* **styles:** add break-word to inline code ([47858bc](https://github.com/vtexdocs/devportal/commit/47858bce0bafa8e249b4dab4cfede559581331d8))
* **styles:** add overflow wrap to headings and strong tags ([eed6180](https://github.com/vtexdocs/devportal/commit/eed6180666dd757d81bd52f5366b3862df18ce36))
* **styles:** limit img, svg and iframe width ([ccb3fea](https://github.com/vtexdocs/devportal/commit/ccb3feac2516934492379735c64b4b8e5b664459))
* **styles:** show scrollbar in overflowing preformatted text ([d440e45](https://github.com/vtexdocs/devportal/commit/d440e457650ceca40a2161a06fd15ff7a09e988d))


### Docs

* chage path ([7daa0af](https://github.com/vtexdocs/devportal/commit/7daa0afc748589363b593ae6f62d4191745e8546))
* redirect ([8a448fd](https://github.com/vtexdocs/devportal/commit/8a448fd10fa8b81d6f52d85476fe328c60f3b291))
* remove from navigation ([114aaca](https://github.com/vtexdocs/devportal/commit/114aacaf8d20e9252ccd68a54f446e6a9642e99b))

## [1.8.0](https://github.com/vtexdocs/devportal/compare/v1.7.3...v1.8.0) (2023-02-24)


### Features

* add working sidebar component to hamburger menu ([94ee834](https://github.com/vtexdocs/devportal/commit/94ee834d81be3419632a185b61d608f83dba2f84))
* creating mobile menu ([25f66b7](https://github.com/vtexdocs/devportal/commit/25f66b72617919728d0bb84015407beea42fe32e))
* **icons:** add arrow left icon ([b408d4d](https://github.com/vtexdocs/devportal/commit/b408d4d11276468ddd13af503ef5ceba444765cb))
* **menu:** improve animation and add arrow to cards ([d32758c](https://github.com/vtexdocs/devportal/commit/d32758cbfa1b21bdba0ffc7b51a82a1bd114f8e7))
* **sidebar:** create sidebar version to hamburger menu ([1ab74c8](https://github.com/vtexdocs/devportal/commit/1ab74c8b0b53acb4a466608dade4a64f8860c765))
* **sidebar:** store current sidebar tab ([c6170eb](https://github.com/vtexdocs/devportal/commit/c6170eb6e804f5e6414251d838941f771fdea97f))


### Bug Fixes

* **hamburger-menu:** disable horizontal scroll ([f066928](https://github.com/vtexdocs/devportal/commit/f066928bd36d37430acd9924012fed82e034db57))
* **hamburger-menu:** remove menu default  selection ([46261a2](https://github.com/vtexdocs/devportal/commit/46261a2339594d422e674b999c30db3ff834d5c6))
* **header:** remove unused prop ([85d8b78](https://github.com/vtexdocs/devportal/commit/85d8b7829c8827f242ce5a384bf5099b7d4073d4))


### Docs

* create redirects ([1dc789a](https://github.com/vtexdocs/devportal/commit/1dc789a98d4d0b5648504ec8e4829f0206e8ff79))
* **navigation:** remove deleted guides ([a1b8021](https://github.com/vtexdocs/devportal/commit/a1b80213f4bea360b36e784214c648552030ad4e))


### Style

* always show close icon on announcement bar ([a69c57b](https://github.com/vtexdocs/devportal/commit/a69c57b101c3c49eae42826c0e6f013b224aa5a4))
* update sidebar and header styles ([82116d1](https://github.com/vtexdocs/devportal/commit/82116d12c3bf49df0b776a347bdd742374aa25f4))

### [1.7.3](https://github.com/vtexdocs/devportal/compare/v1.7.2...v1.7.3) (2023-02-17)


### Features

* **layout:** add GTM ([70407ee](https://github.com/vtexdocs/devportal/commit/70407eee7c2c1ca7df24a21e16a27b8edb332d8e))
* **layout:** correct GTM ([28d4652](https://github.com/vtexdocs/devportal/commit/28d4652bb09e43eaae790833764e5b5e8a0d5374))


### Bug Fixes

* **overview-card:** update overview card ([4e00ed3](https://github.com/vtexdocs/devportal/commit/4e00ed35e0e92e454f77413bf72bc33710c7228e))


### Docs

* move Catalog guides ([5e2b8fd](https://github.com/vtexdocs/devportal/commit/5e2b8fd8bf5e1126f02a6367f5dc245dd7898175))
* move Message Center guides ([d0c7d80](https://github.com/vtexdocs/devportal/commit/d0c7d8093a828960907621503fe00b810fc58988))
* **navigation:** edit pricing api paths ([97797d8](https://github.com/vtexdocs/devportal/commit/97797d8e5cc2549712d18d987874e2e0dc049fef))
* **navigation:** improve authentication navigation in getting started section ([a26e2ae](https://github.com/vtexdocs/devportal/commit/a26e2ae3dbddca25c1d716278594ef3526b32680))
* **redirect:** redirect authentication overview to new slug, according to architecture improvements ([0d4998b](https://github.com/vtexdocs/devportal/commit/0d4998b3476f7e85b2941d5b1cc681ecfd6be140))

### [1.7.2](https://github.com/vtexdocs/devportal/compare/v1.7.1...v1.7.2) (2023-02-15)


### Bug Fixes

* **rehypeblockquote:** fixes long callouts ([0ea745c](https://github.com/vtexdocs/devportal/commit/0ea745c4ded725df50e6101cf1f0158b5301beff))
* **release-notes:** use remarkBlockquote ([ca26cb9](https://github.com/vtexdocs/devportal/commit/ca26cb9ad8db1079b2578b2e1251428b19e948c6))

### [1.7.1](https://github.com/vtexdocs/devportal/compare/v1.7.0...v1.7.1) (2023-02-14)


### Docs

* **navigation:** correct navigation slug for guide: Making your first request ([29c8580](https://github.com/vtexdocs/devportal/commit/29c85804d91c2d315a61db51f6cd72619d21d680))
* **redirect:** redirect guide due to slug change: Making your first request ([1c89e1e](https://github.com/vtexdocs/devportal/commit/1c89e1e4c38995b3ee998a772835ddb42f343bb3))


### Build

* update rapidoc version ([98bf11b](https://github.com/vtexdocs/devportal/commit/98bf11bfb4c076ef1d7b5e337c74982d7c8772a6))
* update rapidoc version ([162db4b](https://github.com/vtexdocs/devportal/commit/162db4b46a472287ffd3c72166971d7f3a19a389))

## [1.7.0](https://github.com/vtexdocs/devportal/compare/v1.6.1...v1.7.0) (2023-02-13)


### Features

* **header scripts:** add GA script ([5ba815c](https://github.com/vtexdocs/devportal/commit/5ba815cfb1adf6a9a76bc7970debf492e5187588))


### Bug Fixes

* check endpoint type to prevent errors ([a8fecb2](https://github.com/vtexdocs/devportal/commit/a8fecb237c1ba4e8e8c6f8581943df489368a301))
* **format:** format ([66674a4](https://github.com/vtexdocs/devportal/commit/66674a498a965222faed40b263d001f154c94bd6))
* **getreferencepaths:** remove undefined routes and add error log for them ([6ca4947](https://github.com/vtexdocs/devportal/commit/6ca4947c6d3b17f9c6b145178882a2d91f4e7d1c))
* **navigation.json:** revert deletion ([4af8661](https://github.com/vtexdocs/devportal/commit/4af86612323db52d3e7c5cd1ee68863ed5c41b3e))
* **sidebar:** fetch sidebardatamaster from usenavigation ([928aa36](https://github.com/vtexdocs/devportal/commit/928aa36a7d7a05c368f6db637d76fa557ee40e4d))
* **usenavigation:** stop revalidating on focus ([309da0d](https://github.com/vtexdocs/devportal/commit/309da0d1afad15f3637f121c96ff2f75243b1d7a))


### Performance

* **api-reference:** add short description using the first endpoint paragraph ([0701dd9](https://github.com/vtexdocs/devportal/commit/0701dd9aff996a8ed939b4fc92cb7ea1e496a27a))


### Refactoring

* line break ([91bc5ae](https://github.com/vtexdocs/devportal/commit/91bc5ae07a6d6c98733e3c91dc50f4115e34b695))


### Chore

* **navigation:** add kit look app release note to navigation.json ([ae09cc3](https://github.com/vtexdocs/devportal/commit/ae09cc336d5c7b450f5b3a7628c61d854a8ae10f))


### Style

* **styles:** update styles considering the figma file ([f836443](https://github.com/vtexdocs/devportal/commit/f83644386935f184b871f5466226b98f20c83751))


### Docs

* adding new release note to navigation ([87ca215](https://github.com/vtexdocs/devportal/commit/87ca215a205780ba1e9a9c9533faea477f594c11))
* change path ([5221964](https://github.com/vtexdocs/devportal/commit/52219646f397154d13e974778f9eff5c607ff75d))
* change path ([8233e1d](https://github.com/vtexdocs/devportal/commit/8233e1d3a7a51b5867fac5a2f23970f8a1b3273e))
* change path ([de8b7c3](https://github.com/vtexdocs/devportal/commit/de8b7c38cb637f47cb840e09f8812832e7253e1b))
* path change ([5635cc1](https://github.com/vtexdocs/devportal/commit/5635cc19676b38f08d1d60d4daf29aac0cb8d454))

### [1.6.1](https://github.com/vtexdocs/devportal/compare/v1.6.0...v1.6.1) (2023-02-09)


### Style

* **styles:** update table font-size ([90c4ee7](https://github.com/vtexdocs/devportal/commit/90c4ee72afcfd0d6a30de87f92e63ab8f1d483fd))

## [1.6.0](https://github.com/vtexdocs/devportal/compare/v1.5.2...v1.6.0) (2023-02-08)


### Features

* **apps:** feat children docs from io apps ([813d71d](https://github.com/vtexdocs/devportal/commit/813d71dfeb1f8e2181eadad252a67b2b9f148a7d))
* **apps:** fetches vtex io apps documentation ([8c5d65e](https://github.com/vtexdocs/devportal/commit/8c5d65eddbf2f72ad7b797e2cb3d05007d72d13c))

### [1.5.2](https://github.com/vtexdocs/devportal/compare/v1.5.1...v1.5.2) (2023-02-08)


### Build

* **package:** upgrade rapidoc version ([8a38e62](https://github.com/vtexdocs/devportal/commit/8a38e62f77f6f7b25bb4cb6844a5ad2e527290e7))
* update rapidoc version to add language selection ([25f09a3](https://github.com/vtexdocs/devportal/commit/25f09a3c25512a8b61a98f1f4b017e13f063b118))

### [1.5.1](https://github.com/vtexdocs/devportal/compare/v1.5.0...v1.5.1) (2023-02-07)


### Bug Fixes

* **guides:** update meta description ([fb8ff74](https://github.com/vtexdocs/devportal/commit/fb8ff748369dbe466fb6686cc1eae54747927559))

## [1.5.0](https://github.com/vtexdocs/devportal/compare/v1.4.3...v1.5.0) (2023-02-07)


### Features

* **header:** update aria-label and add meta description ([0082450](https://github.com/vtexdocs/devportal/commit/008245017ed5406d7776be8d7dba80fcbeb5b376))


### Bug Fixes

* **api-reference:** change function name to scrollToPath ([b086b42](https://github.com/vtexdocs/devportal/commit/b086b4267167b0cca082f2dbb551e1785829f7fa))
* **components:** add aria-label to buttons; expand guide content width; add meta desc to guides ([444db81](https://github.com/vtexdocs/devportal/commit/444db818228f73a28d4aaad4f9f2441853b9eac1))


### Build

* **package:** update rapidoc version ([b763e1d](https://github.com/vtexdocs/devportal/commit/b763e1d8de2b10bfc7b87c64e393ed3298be8039))
* update rapidoc version ([d3d51ac](https://github.com/vtexdocs/devportal/commit/d3d51ac4925411defe23b83966a834a0561082f5))

### [1.4.3](https://github.com/vtexdocs/devportal/compare/v1.4.2...v1.4.3) (2023-02-06)


### Bug Fixes

* **pagges:** use sidebarfallback and getNavigation - all pages ([677a2a4](https://github.com/vtexdocs/devportal/commit/677a2a4317f88af7608e489905e40ee23b9e0e2c))


### Refactoring

* **sidebar:** (wip) rewrite sidebar functions ([470c662](https://github.com/vtexdocs/devportal/commit/470c6622ad4938936964eec39cca0f3cfa8da9df))
* **sidebarcontext:** use sidebarfallback ([ba2d39c](https://github.com/vtexdocs/devportal/commit/ba2d39c592b2f77ccaf8a41daa9f3fbf6d4f4a84))

### [1.4.2](https://github.com/vtexdocs/devportal/compare/v1.4.1...v1.4.2) (2023-02-04)


### Style

* **sidebar-elements:** fix maxwidth ([661a384](https://github.com/vtexdocs/devportal/commit/661a384ffd4bbe9ad97cf93edcee32cc4cd38c25))

### [1.4.1](https://github.com/vtexdocs/devportal/compare/v1.4.0...v1.4.1) (2023-02-04)


### Bug Fixes

* **article-pagination:** fix styles and other accessibility issues ([9003ef6](https://github.com/vtexdocs/devportal/commit/9003ef6f13905f09d3b3ad7377fa54532e2a479d))

## [1.4.0](https://github.com/vtexdocs/devportal/compare/v1.3.0...v1.4.0) (2023-02-03)


### Features

* **article-pagination:** add Next and Previous page links to guides ([2cdde02](https://github.com/vtexdocs/devportal/commit/2cdde0234b6a97bc4ce4499d701007faa7e19076))
* **method-category:** enable patch filtering, improve callout style and update navigation ([56e6b33](https://github.com/vtexdocs/devportal/commit/56e6b337d9a4abe274ecf15d3a9ed9cb03ade99f))


### Bug Fixes

* **article-pagination:** fix extreme cases ([9243a1a](https://github.com/vtexdocs/devportal/commit/9243a1a1e0bdb9c2dd3fe6fe5c3c00ed642f7fde))
* **article-pagination:** remove console log ([810f8f4](https://github.com/vtexdocs/devportal/commit/810f8f43ae4ee5c928b335f8efdd33f3130b782b))


### Docs

* **fix navigation:** adding  subscriptions v2 to navigation ([e584c57](https://github.com/vtexdocs/devportal/commit/e584c57c033f24db1cb9b9cf710e756ea43b07c9))


### Chore

* **release:** 1.3.0 ([e470f14](https://github.com/vtexdocs/devportal/commit/e470f1475a47b8a340269d1e41226cabf6d2e9bf))


### Refactoring

* **article-pagination:** handle click ([1ac9abb](https://github.com/vtexdocs/devportal/commit/1ac9abb2bc1f95658b09c57b67c65cf72abc61e9))
* **article-pagination:** handle null cases ([cb9d801](https://github.com/vtexdocs/devportal/commit/cb9d8012b1b3bb3774d712f556a83a4b458922f2))
* **article-pagination:** use getStaticProps ([30141b6](https://github.com/vtexdocs/devportal/commit/30141b6fdb938f1d42e944ad36b6bcc246c5a609))

## [1.3.0](https://github.com/vtexdocs/devportal/compare/v1.2.0...v1.3.0) (2023-02-02)


### Features

* **method-category:** enable patch filtering, improve callout style and update navigation ([45c9362](https://github.com/vtexdocs/devportal/commit/45c936211ea0174597ccb4c9d0410441caf8f6c9))


### Docs

* adding subscriptions v2 to navigation ([3d47f2a](https://github.com/vtexdocs/devportal/commit/3d47f2a3d2acb8c569cb8c44b045c1b1419212f3))
* **fix navigation:** adding  subscriptions v2 to navigation ([c7349fd](https://github.com/vtexdocs/devportal/commit/c7349fda24b377d18fc0ef446defe455c1db689e))

## [1.2.0](https://github.com/vtexdocs/devportal/compare/v1.1.0...v1.2.0) (2023-02-01)


### Features

* **markdown-renderer:** add CodeBlock and CopyButton components ([433340a](https://github.com/vtexdocs/devportal/commit/433340a3ec4e28428c8df62e9dd07de8a2052822))


### Bug Fixes

* **code-block:** remove console.log and add aria label to copybutton ([03394d3](https://github.com/vtexdocs/devportal/commit/03394d3ac0be0bf793381e95ac2cacf961ba0250))


### Style

* **codeblock:** update code styles - font and copy button ([f8c7cc9](https://github.com/vtexdocs/devportal/commit/f8c7cc9bea9b45b2a151d20f9e2762f3c93fef29))

## [1.1.0](https://github.com/vtexdocs/devportal/compare/v1.0.4...v1.1.0) (2023-02-01)


### Features

* **search:** add search bar and filter tabs to the first three breakpoints of the search page ([013e354](https://github.com/vtexdocs/devportal/commit/013e3547840d40112b1f8aa81f341c27af6d9d0b))
* **see-also-section:** improve the See Also Section component ([b28932a](https://github.com/vtexdocs/devportal/commit/b28932aae237f2b3214553fcbd38c456267678a9))
* **see-also-section:** support api reference links ([e467e76](https://github.com/vtexdocs/devportal/commit/e467e7611b1da520c71ea7eeaacc2f9f9b6e16ab))


### Bug Fixes

* **search-bar:** fix search bar sizes and position ([5164dab](https://github.com/vtexdocs/devportal/commit/5164dab0920dbe9b41acc40e406ea8b704c26422))
* **search:** hide some components in smaller breakpoints ([0167f81](https://github.com/vtexdocs/devportal/commit/0167f81c8491969a7adc933f0e8916ad5a5e7ff5))


### Docs

* **navigation:** fix marketplace api slugs ([61b4f16](https://github.com/vtexdocs/devportal/commit/61b4f1625b602f44d24448c856cddf58e347854c))
* **navigation:** fix reference paths ([eceb0fd](https://github.com/vtexdocs/devportal/commit/eceb0fda6df4a12d6eb5ae02e344979d14492add))
* **navigation:** fix slugs ([764ebe4](https://github.com/vtexdocs/devportal/commit/764ebe44bf76c359bd814c3eeb769b083e4d7ae9))


### Build

* **package:** update rapidoc version ([272641a](https://github.com/vtexdocs/devportal/commit/272641a7bd8f7eb26de3e742f48ac7bd6af37f78))
* **package:** update rapidoc version ([7b3aab3](https://github.com/vtexdocs/devportal/commit/7b3aab3db55c5d2b1ff8df63027d2f39e3554651))
* **package:** update rapidoc version ([b19bd49](https://github.com/vtexdocs/devportal/commit/b19bd497375c0892239cd06ec254b25db0c712e8))


### Chore

* **navigation:** update navigation file and copy of the app development page ([337f3cf](https://github.com/vtexdocs/devportal/commit/337f3cf77d614ab7bffd49e4f43583be0e648884))

### [1.0.4](https://github.com/vtexdocs/devportal/compare/v1.0.3...v1.0.4) (2023-01-31)


### Performance

* **search-input:** remove search with empty query ([6ff1011](https://github.com/vtexdocs/devportal/commit/6ff10113dd6d4f8ec5e49af4f7910d25cac39a8e))


### Chore

* **last-updates-section:** update hard-coded lastReleaseNote ([1788ba1](https://github.com/vtexdocs/devportal/commit/1788ba182d6336c68276e7df98eb72083da55d57))


### Docs

* **navigation:** correct vtex id endpoint (generate authentication token) ([431a409](https://github.com/vtexdocs/devportal/commit/431a4092c341fda14c80028210c258669c31e405))

### [1.0.3](https://github.com/vtexdocs/devportal/compare/v1.0.2...v1.0.3) (2023-01-30)


### Docs

* **navigation:** correcting navigation order of jan 23 release notes ([b678bd0](https://github.com/vtexdocs/devportal/commit/b678bd06767941b758f9312a4656ee911f97ff79))

### [1.0.2](https://github.com/vtexdocs/devportal/compare/v1.0.1...v1.0.2) (2023-01-30)


### Bug Fixes

* **config:** stop worker threads ([650ade0](https://github.com/vtexdocs/devportal/commit/650ade0cedb19cc8f2cd1e597a46db3177dcca0d))


### Chore

* **navigation:** update master data v2 overview redirect ([2cd610d](https://github.com/vtexdocs/devportal/commit/2cd610d1923c1abc4785c3c8ac6a64ad37e7b90c))


### Docs

* **navigation:** edit marketplace api paths ([11103a8](https://github.com/vtexdocs/devportal/commit/11103a8cd5f4d8c3a1b8785ee0b2061d3b2a01a0))
* **navigation:** fix marketplace api navigation ([f5badc4](https://github.com/vtexdocs/devportal/commit/f5badc492f7455a326597b0473f4c0d480d9f6a5))

### [1.0.1](https://github.com/vtexdocs/devportal/compare/v1.0.0...v1.0.1) (2023-01-27)


### Bug Fixes

* **global.css:** create css classes for http methods ([4bfaf40](https://github.com/vtexdocs/devportal/commit/4bfaf406b08608fa3e902f88f2254a264a26d8f4))

## [1.0.0](https://github.com/vtexdocs/devportal/compare/v0.29.2...v1.0.0) (2023-01-26)


### Features

* (wip) new comps for getting started page ([73569e7](https://github.com/vtexdocs/devportal/commit/73569e750152d6d02ef850b1746525dcdb92e898))
* (wip) new comps for getting started page ([261756c](https://github.com/vtexdocs/devportal/commit/261756cbe5689791fb8f5eb808f3d2619304e3fc))
* **404:** feat 404 page ([bc5e863](https://github.com/vtexdocs/devportal/commit/bc5e863d7552441298045c5b745c653fcc5c1d8a))
* **500:** feat 500 page ([1a26027](https://github.com/vtexdocs/devportal/commit/1a26027e2d2a5437a04c9cf41dbfbdeba417da73))
* add sectionselected ([6d71070](https://github.com/vtexdocs/devportal/commit/6d7107021ca0d3dc2fe5c87c990c051dcf3f3760))
* add-sfpage ([3e69ab1](https://github.com/vtexdocs/devportal/commit/3e69ab152f18828cbfd4625bf3e9f15ac7777521))
* **announcement-bar:** feat announcement bar ([5e2630e](https://github.com/vtexdocs/devportal/commit/5e2630e51567a1c2cb85f734806302d76f98d950))
* **api-guides:** turn parameters magic blocks into markdown tables ([ddca865](https://github.com/vtexdocs/devportal/commit/ddca8656fd9c70b4b8d0735389d89fc3144cc6e2))
* **api-reference:** update the API Reference page with cards ([62c4a47](https://github.com/vtexdocs/devportal/commit/62c4a47c208844c7468e8ca132482777ae093cfc))
* **apis:** add proxy route ([b639e20](https://github.com/vtexdocs/devportal/commit/b639e20d229f952bc70b1162b23aa568e741e32e))
* **breadcrumb:** add breadcrumb component to api-guides ([7ec1cf6](https://github.com/vtexdocs/devportal/commit/7ec1cf6d5416b285c272ab6efc968ac48d04d614))
* **components:** export overviewcard and update table styles ([510e13d](https://github.com/vtexdocs/devportal/commit/510e13de3527f92108ade25dc73627fa3430b2da))
* **components:** export whatsnextcard and flex components to MDXremote ([96f7fbb](https://github.com/vtexdocs/devportal/commit/96f7fbb9011b98c106e6b316753c2dda44bd7691))
* **contributors:** create function to get contributors from file ([de9d0f9](https://github.com/vtexdocs/devportal/commit/de9d0f951cbc020d4b062c9f9a6b3170052ab28e))
* **devportal-scraper:** add scraper action and command to run locally ([7095029](https://github.com/vtexdocs/devportal/commit/7095029111b4126691fc781594a617ebf66053f1))
* **docs:** add the doctype metatag to docs pages to crawling ([68dc438](https://github.com/vtexdocs/devportal/commit/68dc4380d9a57b43bee8ba19e8fe69e47e7eed49))
* **images:** compiler gets image data before compiling and generates blured placeholder ([f7495fc](https://github.com/vtexdocs/devportal/commit/f7495fc5c38f527ab298edeb9f9c201ad3d987a4))
* **logs:** send error logs from guides to slack ([07519da](https://github.com/vtexdocs/devportal/commit/07519dab0c357cb107342cf21bc86ae107cce603))
* **markdown:** add support for rendering HTML magic blocks in markdown ([1e0fac1](https://github.com/vtexdocs/devportal/commit/1e0fac18efff0396d5cffadb2e8338ddcb5b48bf))
* **navigation:** add cache-control ([4687a47](https://github.com/vtexdocs/devportal/commit/4687a4743d6e48be257ed7cff518a75ec862a41f))
* **navigation:** get navigation from public directory ([a50af57](https://github.com/vtexdocs/devportal/commit/a50af57e1d354f4271df1d6d7a6e39d3ce8d8769))
* **navigation:** navigation.json comes from public folder ([06dd1d3](https://github.com/vtexdocs/devportal/commit/06dd1d3e1d2ffce49d668a8d9d5eff9980ed2238))
* **netlify.toml:** add file ([4239d02](https://github.com/vtexdocs/devportal/commit/4239d02cf9b2c463020530a61470d71945bb83bd))
* **pages:** (wip) feat api-guides page ([d561d36](https://github.com/vtexdocs/devportal/commit/d561d363e74f117325797c8463624225d943a8c4))
* **pages:** feat store-development page ([efa310a](https://github.com/vtexdocs/devportal/commit/efa310a1b69a0d93ccc19a3bef2a9ec69f67cf36))
* **pages:** feat vtex-io-apps page ([886c951](https://github.com/vtexdocs/devportal/commit/886c951e4848a9a8999b180b04f00802aba15acf))
* **pages:** reorganize pages (wip) ([b9444bf](https://github.com/vtexdocs/devportal/commit/b9444bf4345f0a24ac782a5e13b828bbafa38382))
* **public:** add images ([38c9ce6](https://github.com/vtexdocs/devportal/commit/38c9ce6741db8228ab4bf01c29bd6bdeb9393ae1))
* **redirects:** add redirects for /vtex-developer-docs guides and release notes ([1d01e10](https://github.com/vtexdocs/devportal/commit/1d01e10040045df497654d67f8619cd77ca29176))
* **redirects:** add vtex-rest-api redirects ([30c5c01](https://github.com/vtexdocs/devportal/commit/30c5c01643501d422d438c64d5b09bc63f0648bd))
* **redirects:** api-guides -> guides ([09db141](https://github.com/vtexdocs/devportal/commit/09db1413bddc2faa5942c027ac37120aa164e0d1))
* **redirects:** include root in api-guides -> guides redirect ([7ed10c1](https://github.com/vtexdocs/devportal/commit/7ed10c1e2537303c41cad6b1ea73620b097b436c))
* **redirects:** redirect readme references ([a468b20](https://github.com/vtexdocs/devportal/commit/a468b20aac0de4543b52afa1cd2d87b80c0cb38b))
* **references:** all references being downloaded from github via jsdelivr ([b55ab85](https://github.com/vtexdocs/devportal/commit/b55ab850d12efd0f3e2b9d3aaee97aaa20a5ec4d))
* **references:** use edge api to get openapis ([5f6f691](https://github.com/vtexdocs/devportal/commit/5f6f6914dd5357cb5e40731bdc8f3dd9666996cc))
* **release-notes:** add logger to release notes ([081db60](https://github.com/vtexdocs/devportal/commit/081db609afe3a6251ec6fbc364063557382bcf27))
* **release-notes:** add logger to release notes ([9f36ec5](https://github.com/vtexdocs/devportal/commit/9f36ec58e65b1bce29c29c65da1336030419f248))
* **release-notes:** feat release notes page ([9edb36f](https://github.com/vtexdocs/devportal/commit/9edb36f7326885e86e7e4356749baf6a5c184104))
* **releases:** release notes now are built on demand ([f1836bc](https://github.com/vtexdocs/devportal/commit/f1836bcd894ac1498792f9253fae2b306cdf309d))
* **releases:** release notes now are built on demand ([d92eab2](https://github.com/vtexdocs/devportal/commit/d92eab2a215af4fc99c04173f2af6354a401276d))
* **scraper md:** remove js wait ([0c084ea](https://github.com/vtexdocs/devportal/commit/0c084ea89fbbbd64b59953d32415d6db4cac03aa))
* **scraper openapi:** add sitemap ([91b2c57](https://github.com/vtexdocs/devportal/commit/91b2c572dfcf84d9e65f4828e9fcf9842eec57f1))
* **scraper:** update scraper config files ([62adc6c](https://github.com/vtexdocs/devportal/commit/62adc6c844b9d71d324ec92337e2d263bd4964f4))
* **search-input:** custom highlighting to search results ([67359fa](https://github.com/vtexdocs/devportal/commit/67359faa1301b55868c43d9c957139eec2426f39))
* **search:** add search input and results components ([e645517](https://github.com/vtexdocs/devportal/commit/e6455177a9d27f1c8c311e1bddf8b7511d2f4973))
* **see also section:** update component to render cards from path ([de2b67d](https://github.com/vtexdocs/devportal/commit/de2b67d01618d914e1ab064a1a2efd6c68fdaec9))
* **sidebar-elements:** rewrite sidebar-elements slug for handling onclick ([4f2b76b](https://github.com/vtexdocs/devportal/commit/4f2b76bb2f4cd91d226301bdbe9c12801ad9616f))
* **sidebar-elements:** support link type ([3d2f7df](https://github.com/vtexdocs/devportal/commit/3d2f7df9a5c83dc46ff03c0ebd91377b1cef2af3))
* **sidebar:** add search functionality ([6ef48cc](https://github.com/vtexdocs/devportal/commit/6ef48cc4710b9fa0e9262248611f5332fea0368e))
* **sidebar:** correct href generation ([91848fe](https://github.com/vtexdocs/devportal/commit/91848fe46a58c85d3be7fd67c4baabe66d403ad4))
* **sidebarelements:** handle categories ([e45e109](https://github.com/vtexdocs/devportal/commit/e45e1096bb4a040080795e417073254b6033e330))
* **sidebar:** sidebar element now uses recursive function instead of jasonPath ([249ed36](https://github.com/vtexdocs/devportal/commit/249ed36fae6a0a4d64ee524198a6ae6fd02eda47))
* **sidebar:** stores navigation data on sidebarContext ([fea6618](https://github.com/vtexdocs/devportal/commit/fea6618900432741ea9140ce5420086852a66c2d))
* **sidebar:** update toggleSidebarElementStatus. Create closeSidebarElements ([60dd247](https://github.com/vtexdocs/devportal/commit/60dd2472a252e5dae3354776911d662387438207))
* **sitemap:** add sitemap for guides-type articles ([4546cf0](https://github.com/vtexdocs/devportal/commit/4546cf00f2f6682bbc824dea26c26643002a4b14))
* **sitemap:** sitemap for dynamic pages ([2497afa](https://github.com/vtexdocs/devportal/commit/2497afaa9f6d604e4e0ead197cb16866785cacdb))
* **tracker:** add correct ingestion point ([9f20cb0](https://github.com/vtexdocs/devportal/commit/9f20cb061be13b6a1328957a61f005cbb07a9f88))
* **tracking:** add openreplay tracker ([43a13b2](https://github.com/vtexdocs/devportal/commit/43a13b2ec9bc071c26018afcd9e065831652917a))
* treat callout (info, warning, danger, success) ([f004a4d](https://github.com/vtexdocs/devportal/commit/f004a4d371c787c30ed676aa0c0bb086da48e5c0))
* wip remark ([c8e12a9](https://github.com/vtexdocs/devportal/commit/c8e12a9d885d2dd5922876b48a7b81c54c4e9cce))


### Bug Fixes

* add create-a-brand to navigation.json ([4c01b9f](https://github.com/vtexdocs/devportal/commit/4c01b9f68f6daf6f9e01522d2dd3d2a17020670a))
* add endpoint to navigation.json ([b56ff21](https://github.com/vtexdocs/devportal/commit/b56ff216dd0cb567fa8af02eba696f9e954cf625))
* add endpoints to navigation.json ([b2658da](https://github.com/vtexdocs/devportal/commit/b2658da2fb130c4a0cb7fba186d6d9076af75ac9))
* add list migration doc to navigation.json ([349ab23](https://github.com/vtexdocs/devportal/commit/349ab236026fdc50cc9fdc138278ebdf7572088f))
* **api guides page:** add see also in front matter check before data parsing ([cd1a1f6](https://github.com/vtexdocs/devportal/commit/cd1a1f6e9cdbf8b5ba1290ad05403bb085fa371e))
* **api-guides:** add missing legacyBehavior attribute from Link component ([1b3c8fd](https://github.com/vtexdocs/devportal/commit/1b3c8fdc9a892b996bb93315e4b09d1fe14ce111))
* **api-guides:** check if code blocks inside markdown file are correctly formatted ([ec5b382](https://github.com/vtexdocs/devportal/commit/ec5b38267062051fe8a0d6756b310f2ffcf1ce9f))
* **api-guides:** escape <> occurrences ([18d6b36](https://github.com/vtexdocs/devportal/commit/18d6b36d39dc88b4e1bb17efdea29feb815f50db))
* **api-guides:** escape curly braces inside markdown files ([f9491a3](https://github.com/vtexdocs/devportal/commit/f9491a3b123a9a127fad7174662fe12358b4f630))
* **api-guides:** fix API guide pages content size in last breapoint ([39f28f8](https://github.com/vtexdocs/devportal/commit/39f28f8a66ba8702d8876b94d76c899d7d5f8572))
* **api-guides:** fix API guides index page content size in last breakpoint ([0293295](https://github.com/vtexdocs/devportal/commit/02932959ba728a8712232c488d73d59e8bd8169c))
* **api-guides:** fix API guides pages sizes ([3611aa9](https://github.com/vtexdocs/devportal/commit/3611aa9c2d70652f7c8dc933a22b6a6fc5713243))
* **api-guides:** fix diagram ([2c68ef6](https://github.com/vtexdocs/devportal/commit/2c68ef622ecaa95fa0cfc8d91e6646f2f382847a))
* **api-guides:** fix font sizes and line heights in last breakpoint ([cfcc102](https://github.com/vtexdocs/devportal/commit/cfcc102cfaf04bd10f0d5026a1bd281aba5ab06b))
* **api-guides:** handle documentations with level-3 headings, but no level-2 headings ([3718a87](https://github.com/vtexdocs/devportal/commit/3718a873fcddc037ce5743cde30306f1caac28ee))
* **api-guides:** log the line and column of the last unmatched backtick ([bf86ca3](https://github.com/vtexdocs/devportal/commit/bf86ca3f27db3e982ec972ea8d295f6cfd2e1305))
* **api-guides:** only escape curly braces outside magic blocks ([3603439](https://github.com/vtexdocs/devportal/commit/3603439cf078c7b1f77925f03e903a8530680305))
* **api-guides:** remove see also mock and get info from front matter ([8b8471e](https://github.com/vtexdocs/devportal/commit/8b8471ea5f172272c8750364c5f0529297c876f8))
* **api-guides:** render as markdown when incorrectly formatted code blocks are found ([7ead258](https://github.com/vtexdocs/devportal/commit/7ead2587e2d74ed43e8606fb9fd9bac6e33ac932))
* **api-guides:** replace all occurrences of br HTML tags with JSX ([6544bb3](https://github.com/vtexdocs/devportal/commit/6544bb3e0471fd860c759a3322edce36a02b040d))
* **api-guides:** replace br HTML tags with JSX and remove HTML comments ([baebbbc](https://github.com/vtexdocs/devportal/commit/baebbbcea2641af794fd739c8daedadd688c05e5))
* **api-guides:** replace diagram styles file ([5ea1aa6](https://github.com/vtexdocs/devportal/commit/5ea1aa68fee8ee0aba7673a762d78a98e201582e))
* **api-guides:** replace HTML blocks inside markdown files with JSX components ([e99c45b](https://github.com/vtexdocs/devportal/commit/e99c45bae24166070b7fc83fad041bfc73e1e095))
* **api-guides:** replace line breaks in table cells with br tags ([a4c2ca8](https://github.com/vtexdocs/devportal/commit/a4c2ca8bd6f45b5239124209c1a54a69a71ed1a4))
* **api-guides:** skip frontmatter when escaping curly braces ([e7cf028](https://github.com/vtexdocs/devportal/commit/e7cf0281c8527613e73c16cb6d364a5a3112307f))
* **api-reference:** fix docs links ([3b4e1b2](https://github.com/vtexdocs/devportal/commit/3b4e1b29d6643151854116db7e8d775f33bba1d1))
* **api-reference:** open schema tab by default in API Reference pages ([5fdabbb](https://github.com/vtexdocs/devportal/commit/5fdabbb27a96a180507ee1e827b51d4085911270))
* **api-references:** remove legacybehaviour from links ([041590f](https://github.com/vtexdocs/devportal/commit/041590ff6a60bb924ccc5074ff953288ec39cd61))
* **api-reference:** use rapidoc and listen to hash change event to update rendered endpoint ([84314d1](https://github.com/vtexdocs/devportal/commit/84314d1dc7bc16d3184b62d3736b6900db14767a))
* **api/openapi:** set only one header ([cfe4a4a](https://github.com/vtexdocs/devportal/commit/cfe4a4a9092931bfe8dd2577509c8d912036cc6b))
* **api/openapi:** use regular runtime ([cd341bf](https://github.com/vtexdocs/devportal/commit/cd341bfd6bf7b7273c7044d204201b979803c05d))
* **blockquote:** use trimStart instead of trim ([92e8a20](https://github.com/vtexdocs/devportal/commit/92e8a203957c3ca1797d46fde91ffd0dbed3d361))
* **breadcrumbs:** fix breadcrumbs component sizes ([f6dafd6](https://github.com/vtexdocs/devportal/commit/f6dafd63a5e9af681f438e0d42dc3999568df3f2))
* **breadcrumbs:** fix breadcrumbs size in last breakpoint ([b389b3d](https://github.com/vtexdocs/devportal/commit/b389b3dc5d765330ca9d897e0db6522219c9ea1a))
* callout-cases ([052ccb9](https://github.com/vtexdocs/devportal/commit/052ccb94f2ba7ba4424b9411a7034d117e50a039))
* **childrenToString:** fix childrenToString when given an undefined parameter ([8697d56](https://github.com/vtexdocs/devportal/commit/8697d56e00dac2e1770de27ed5b7a541cdf0a375))
* **config:** always  use import ([2d17767](https://github.com/vtexdocs/devportal/commit/2d17767b72743162dd694d4121a0fadfca4c6690))
* **config:** import pem with webpack ([a2299cc](https://github.com/vtexdocs/devportal/commit/a2299ccbe438b0198b9d1db05386f2f359969018))
* **config:** increse max page data size warning ([50ce67d](https://github.com/vtexdocs/devportal/commit/50ce67d38720a0d262b3da6344058a92b2dc07c9))
* **contributors:** fix contributors component sizes ([b8c3477](https://github.com/vtexdocs/devportal/commit/b8c34773ec31bf949c8ee5d3daf0e15c26012cd1))
* **contributors:** fix contributors size in last breakpoint ([518b2a1](https://github.com/vtexdocs/devportal/commit/518b2a17e51351c1c8d3b7170b1c94e05345f4bf))
* **contributors:** update component to render info from file commits ([e88e23f](https://github.com/vtexdocs/devportal/commit/e88e23f094720be3aae5ab7d045e7765cd24dfde))
* **customhighlights:** fix highlights responsivity ([f532385](https://github.com/vtexdocs/devportal/commit/f532385d01a75e6453d15c8f1f3068184ab5cc91))
* **docs:** set activeSection ([6590d83](https://github.com/vtexdocs/devportal/commit/6590d83e25bc4bd68369db4f06c25ee5341f7a90))
* **documentation-card:** add mouse pointer on hover ([199c2a1](https://github.com/vtexdocs/devportal/commit/199c2a12e71af78e447eefbb77a6e6ecd1ad2d14))
* **documentation-landing-page:** fix documentation landing pages sizes ([b027b5a](https://github.com/vtexdocs/devportal/commit/b027b5a76eee64f46ca500afa9e608e12f7a1d18))
* **dropdown:** fix uppercase text in dropdown menu ([f9720c0](https://github.com/vtexdocs/devportal/commit/f9720c031bb9cbda0e030b578e51e0f087496b3a))
* **escapeCurlyBraces:** improve check for incorrectly formatted code blocks ([b5b65ea](https://github.com/vtexdocs/devportal/commit/b5b65eaa4660bdf23aa539a3bb2e752b48968311))
* **escapeCurlyBraces:** only escape curly braces outside of code blocks ([ce1a3b5](https://github.com/vtexdocs/devportal/commit/ce1a3b52c254f538b05aeb3be6dadbaf7597b162))
* **escapecurlybraces:** pass frontmatter to newContent ([379d5bb](https://github.com/vtexdocs/devportal/commit/379d5bb1800b6efd138c9207ef4cf91a25fe8e97))
* **feedback-section:** fix feedback section size in last breakpoint ([45e99f0](https://github.com/vtexdocs/devportal/commit/45e99f0afefd080f856da651a539241fb395b1a3))
* **feedback-section:** fix suggest edits url ([8b00189](https://github.com/vtexdocs/devportal/commit/8b00189edda65d8cea2d0cbc5efd226940da9136))
* **feedback-section:** fix suggest edits url ([f7587af](https://github.com/vtexdocs/devportal/commit/f7587af385817341caf6bda9242017785fe157e2))
* **feedback:** fix feedback component sizes ([41763a8](https://github.com/vtexdocs/devportal/commit/41763a847ae47f0ca8c149741a92658251bf02f8))
* **getdocspaths:** list only md and mdx files ([3a1003f](https://github.com/vtexdocs/devportal/commit/3a1003fe483ac0aa6e9118b4fa8ebda071c96291))
* **getdocspaths:** remove hardcoded paths ([2569d56](https://github.com/vtexdocs/devportal/commit/2569d563d645dc97e4434aa1d466ee30328df464))
* **getgithubfile:** no longer logs each execution ([0c17258](https://github.com/vtexdocs/devportal/commit/0c17258dd3427be67797aacfedc4c93ba651b95c))
* **getheadings:** check if children exists ([917ee03](https://github.com/vtexdocs/devportal/commit/917ee03c57be4e9b1e2237677419372940332318))
* implement handleclick and slugprefix ([cf99900](https://github.com/vtexdocs/devportal/commit/cf99900cd88cf387ae4b3df2cc79eb112e2494b7))
* improve sidebar styles ([a3cfc03](https://github.com/vtexdocs/devportal/commit/a3cfc0369b07d3d2ac1e757d539a13b22c06455e))
* improve sidebar styles ([05cc1c3](https://github.com/vtexdocs/devportal/commit/05cc1c3aaedc18b779d15217e795160010ddbc61))
* interface types ([6ac0099](https://github.com/vtexdocs/devportal/commit/6ac0099ef91d5531d05c6c8bbd4f2dbc536568a8))
* interface types ([ca0389c](https://github.com/vtexdocs/devportal/commit/ca0389cb3b870eee3babc25fc0ca8f397e46a999))
* link com a na sidebar (teste) ([508b3ec](https://github.com/vtexdocs/devportal/commit/508b3ec23ceedcec4bf0097bf00208849acd7ef9))
* **linting:** linting ([ba98d73](https://github.com/vtexdocs/devportal/commit/ba98d734569d3a73dfa12740c69d417ec213879a))
* **markdown-renderer:** put table inside container with horizontal scroll ([542fc2f](https://github.com/vtexdocs/devportal/commit/542fc2fffabf01d4df15f719a737249332bbb559))
* **merge fix:** fix merge issues ([85a1a1b](https://github.com/vtexdocs/devportal/commit/85a1a1b081f36f3ce1c1c9eae07c2450a3079afa))
* **messages:** fix messages ([11467ec](https://github.com/vtexdocs/devportal/commit/11467ece7249572e58fe0f453e4f4382835c8382))
* **method-category:** add default color ([aa4d5ac](https://github.com/vtexdocs/devportal/commit/aa4d5acbfdbdd2e00832a1ccd16dd912a04898b5))
* **navigation:** get navigation.json from CDN ([887c8aa](https://github.com/vtexdocs/devportal/commit/887c8aa267b9d2ba14a622346760576b4edea1e9))
* **navigation:** now gets from public folder ([f4fd5c4](https://github.com/vtexdocs/devportal/commit/f4fd5c45974c4f4d4ca0797443950810e2e7a466))
* **navigation:** store navigation.json ([45e0451](https://github.com/vtexdocs/devportal/commit/45e04511ac0101234dcb01582016aa96e86a6076))
* **newsletter:** hiding newsletter description and input ([ede43ba](https://github.com/vtexdocs/devportal/commit/ede43baea642b1394aa099fe88750791f911e77e))
* **newsletter:** hiding newsletter description and input ([7ebef4c](https://github.com/vtexdocs/devportal/commit/7ebef4c680665feb679154f49de21d97a0f8f084))
* **next.config.js:** change navigation route ([65aee1f](https://github.com/vtexdocs/devportal/commit/65aee1f883a79a926ff9a9fca26499393ed8dd9d))
* **package.json:** overides nextjs ([3ca50c4](https://github.com/vtexdocs/devportal/commit/3ca50c47ae100dfda66ec3222d7fa10b96a2aceb))
* **package.json:** update package.json ([814a554](https://github.com/vtexdocs/devportal/commit/814a554122e0571a100bd9be6351968e93f8ed27))
* **package.json:** updates confliting packages ([28720b3](https://github.com/vtexdocs/devportal/commit/28720b30916e97c534edcabdb7cd5bcd41b32fb4))
* **package:** update rapidoc version ([da8271f](https://github.com/vtexdocs/devportal/commit/da8271f3037bebe1631d4594c9b4029f1edc12fe))
* **page-header:** fix page header component sizes ([d8a48dc](https://github.com/vtexdocs/devportal/commit/d8a48dca374c3a6f2f9e8ecdea5bb23df29fafdd))
* **page-header:** fix styles ([22cf3b0](https://github.com/vtexdocs/devportal/commit/22cf3b0d572301d6891ff6549aa19e06c436f65a))
* **pages:** add see more to vtex-io-apps page ([2ba7cd1](https://github.com/vtexdocs/devportal/commit/2ba7cd112695d57a634121d5d2509d1a10b3479d))
* **pages:** code refactoring ([fe6b7f0](https://github.com/vtexdocs/devportal/commit/fe6b7f049ec1f8ebfb3351ca659514f4d172c69d))
* **plaiceholder:** adds fallback for everything ([398fc7b](https://github.com/vtexdocs/devportal/commit/398fc7b870006728744ec3a4d738047e326a3b9e))
* **plaiceholder:** correclty handle promise termination ([f643fec](https://github.com/vtexdocs/devportal/commit/f643fec507bfa799412a2cf817ec9843672c6ed2))
* **plaiceholder:** install nextjs plugin ([55aef75](https://github.com/vtexdocs/devportal/commit/55aef75037b404bbb231ec82fcdf15b78ef7f234))
* **plaiceholder:** probes for img size before calling plaiceholder ([eab2320](https://github.com/vtexdocs/devportal/commit/eab23209790716a9e9d083a9668be2f847c63afd))
* **redirects:** add needed redirects ([4adb723](https://github.com/vtexdocs/devportal/commit/4adb7231b8431dea4fcd96b2811d0fcc7b014e51))
* **redirects:** do root redirects for paths ([82cd066](https://github.com/vtexdocs/devportal/commit/82cd066b13dc45cd7dd572ec446efec52001b50d))
* **redirects:** fix redirect loop ([ac96bff](https://github.com/vtexdocs/devportal/commit/ac96bfff7c8947e624c431c072e1ffff6ac0ee3e))
* **redirects:** import file in different path ([d44183c](https://github.com/vtexdocs/devportal/commit/d44183cd1a56451d9fd4d73bd9559b490921f0c6))
* **referencepaths:** fix reference paths x slug map ([f51c576](https://github.com/vtexdocs/devportal/commit/f51c576e984d9e0eb4dacad5e1438a9b463bb5b7))
* **referencepaths:** fix reference paths x slug map ([818c5eb](https://github.com/vtexdocs/devportal/commit/818c5eb93b27e57cd27a5e2aa2debaae2b58af53))
* **release notes:** fix suggestion button ([52a7db9](https://github.com/vtexdocs/devportal/commit/52a7db98ebf65afe06e8742d1242acb8d9160e7e))
* **release-note:** fix release note pages sizes ([10f0b53](https://github.com/vtexdocs/devportal/commit/10f0b53366c3d53901b95f95b9547f6881d6fd9e))
* **release-notes:** fix release notes page sizes ([fe0cbf8](https://github.com/vtexdocs/devportal/commit/fe0cbf82b54adc6eca60755fc14719456e098585))
* **release-notes:** get only files in release-notes folder ([20570f8](https://github.com/vtexdocs/devportal/commit/20570f8bedc43104fed4521c25ae2d64b5e482c2))
* **release-notes:** remove contributors from release page ([9e62b00](https://github.com/vtexdocs/devportal/commit/9e62b003bd954e27b1ad88ea42571528a799cfdb))
* **release-version:** add token to checkout action ([0a1d8c8](https://github.com/vtexdocs/devportal/commit/0a1d8c8615f217055956e8a413d0807b96c6ee31))
* **release-version:** use correct git credentials ([be8391c](https://github.com/vtexdocs/devportal/commit/be8391c19227863e017fe81bdf1953dfa0c488e1))
* **releases:** getReleasesData gets correct error handling ([cbe770b](https://github.com/vtexdocs/devportal/commit/cbe770bb30d63af9c556fd95ab80e2facd623918))
* **replaceHTMLBlocks:** only match HTML tags, not JSX components ([186dea2](https://github.com/vtexdocs/devportal/commit/186dea2d1f558f6d5d25eccdfe9474aee3616f22))
* **scraper script:** get latest chromedriver stable version ([5ebe968](https://github.com/vtexdocs/devportal/commit/5ebe9684e42b727ae1f9c549e021545d5fd6ea3d))
* **scraper:** openapi scraping ([254769a](https://github.com/vtexdocs/devportal/commit/254769aeffe5badd0cf9bfd00d50cd6a9fcae15d))
* **scraper:** openapi scraping ([99ab2a1](https://github.com/vtexdocs/devportal/commit/99ab2a19afbf31f9297212b1efaf2a172de65efc))
* **search navigation:** adds a `/` to the relative path to handle nested navigation ([5dcb148](https://github.com/vtexdocs/devportal/commit/5dcb148cfe9513346b09b22daa781e35f1a77fa3))
* **search-input:** add hits keys ([6278f99](https://github.com/vtexdocs/devportal/commit/6278f9987ed5ad5e09f12363c3421a512397156d))
* **search-input:** change absolute url to relative url ([8a7d30e](https://github.com/vtexdocs/devportal/commit/8a7d30ef62c9efd60a144a2c98626208fef1eaae))
* **search-input:** fix legacyBehavior warning and close box on result click ([3d2c84b](https://github.com/vtexdocs/devportal/commit/3d2c84b8dc83f55aa1ea8c5d22f3698c6aa72e8a))
* **search-input:** index name ([303c017](https://github.com/vtexdocs/devportal/commit/303c017a4ce6440c36753147ffb9c9f8325d7f03))
* **search-input:** index name ([93cbabd](https://github.com/vtexdocs/devportal/commit/93cbabd3b9e2c8361470e267de30700e8ab0c804))
* **search-input:** input size on hover overlapping docs button ([cb11b6d](https://github.com/vtexdocs/devportal/commit/cb11b6dfd8ff2a249a86f5de3b6eb0fae0592b25))
* **search-results:** fix title choice to render, remove search page link and add no results feedback ([057e0c8](https://github.com/vtexdocs/devportal/commit/057e0c8d01df02e4803d0a1baa75f563f629c28f))
* **search:** fix search page sizes ([8e95c59](https://github.com/vtexdocs/devportal/commit/8e95c59a3b6a75c3d2f018c4489126574e36297e))
* **see-also-section:** fix see also section size in last breakpoint ([c8fc394](https://github.com/vtexdocs/devportal/commit/c8fc394c9a9491f734f4a270b4b0a8dd571681a2))
* **see-also-section:** update functions ([e3a31c6](https://github.com/vtexdocs/devportal/commit/e3a31c667e598abb4775a714b04b5b85bdee4a2b))
* **see-also:** fix see also and documentation card components sizes ([913ef16](https://github.com/vtexdocs/devportal/commit/913ef166ac51d222831e0fdddb9cb8f6fc3a2048))
* **server-sitemap:** routes with method not specified ([19ddab8](https://github.com/vtexdocs/devportal/commit/19ddab81b74f37a4cf32f7f6e76add632e06c73d))
* **sidebar-elements:** fix navigation for API guides and reference ([4b34751](https://github.com/vtexdocs/devportal/commit/4b347511db2cf63d9070c3d656094c661e9d5629))
* **sidebar-elements:** update related to changes in the navigation file ([fed661b](https://github.com/vtexdocs/devportal/commit/fed661bb932866c09190f8aa07f4ac07878adfb6))
* **sidebar-elements:** update the route for openapis without method ([7498920](https://github.com/vtexdocs/devportal/commit/74989209294153b4cb7a55b63e3636c86578490c))
* **sidebar-elements:** use href ([ab5d9af](https://github.com/vtexdocs/devportal/commit/ab5d9af8ea7c948c04dc7c95e9a0d077bdf5cb0f))
* **sidebar-elements:** use Link href and update unionTypes ([fc37365](https://github.com/vtexdocs/devportal/commit/fc373659bdeadd806742f10c3b45798b8aacf9a3))
* sidebar-styles ([e7ffc30](https://github.com/vtexdocs/devportal/commit/e7ffc3084028b76ae7c2cbaaab00bc03e7363cbc))
* sidebar-styles ([973e7f6](https://github.com/vtexdocs/devportal/commit/973e7f6d5fc2686e5b3f36f9f7974a39769860a2))
* **sidebar:** change the sidebar behavior ([0164864](https://github.com/vtexdocs/devportal/commit/0164864c7ece6b53e3d2baafc75041626431ebd9))
* **sidebarcontextprovidedr:** update condition for closing section ([5667519](https://github.com/vtexdocs/devportal/commit/5667519c0240c1bfd51ee8d9ee3c0d123f7e4abd))
* **sidebarcontext:** update unused variable name ([eb00dee](https://github.com/vtexdocs/devportal/commit/eb00deecd7e58cdcd275b8f8cb3e82e22b712b82))
* **sidebar:** open links to API references ([61587df](https://github.com/vtexdocs/devportal/commit/61587dfa4e20d9e9b93181f8a0ed4c7b5d70e785))
* **sidebar:** open proper sidebar on refresh ([a78920f](https://github.com/vtexdocs/devportal/commit/a78920f2970ab17d60a157d08127cc1115208e58))
* **sidebar:** sidebar behavior ([faed20f](https://github.com/vtexdocs/devportal/commit/faed20fa887de786624a0f12f723463fb6b14c4c))
* **sidebar:** update API Reference sidebar links ([d25dbaf](https://github.com/vtexdocs/devportal/commit/d25dbafade420b722141382e4f6e74fdf107d475))
* **sitemap:** remove hidden pages from static sitemap and block index search from them ([c09a345](https://github.com/vtexdocs/devportal/commit/c09a3454e627b50b728b46880ae76a228e60394f))
* **slug:** add api header title ([473d9b7](https://github.com/vtexdocs/devportal/commit/473d9b7ab26526b6b20175d239b937808f8e618b))
* **slug:** update header ([2a0daca](https://github.com/vtexdocs/devportal/commit/2a0daca8df041c1a14c26690bcbb761d5c6a5b68))
* **slug:** update header and rapidoc version ([8da647a](https://github.com/vtexdocs/devportal/commit/8da647a77061835d0ac231c1f164a739067a1adc))
* svg errors ([46dafca](https://github.com/vtexdocs/devportal/commit/46dafca008c1cdfc74ee86531154e1ff3caaf10b))
* svg errors ([e87d875](https://github.com/vtexdocs/devportal/commit/e87d875207e5a07f531c9fd192cfc95a67ba0758))
* **table-of-contents:** fix table of content size in last breakpoint ([6567c01](https://github.com/vtexdocs/devportal/commit/6567c0164020894d2241fe367396362dc22ea9ba))
* **table-of-contents:** fix table of contents component sizes ([62c1b67](https://github.com/vtexdocs/devportal/commit/62c1b6784a0d57899de727f58a5bd35418fbbd2a))
* **table-of-contents:** fix warning about use of legacyBehavior in table of contents links ([fb831b4](https://github.com/vtexdocs/devportal/commit/fb831b43592a0a5cb108f096fb5865805100de02))
* **tableo of contents:** use getHeadings plugin to populate the headings array used in the toc ([60d7c26](https://github.com/vtexdocs/devportal/commit/60d7c2671c7af7b9d5ef13f78db0d16389a45cca))
* **tracker:** adds sanitization ([438fdd5](https://github.com/vtexdocs/devportal/commit/438fdd5488038b08110218ced255eb29cba976e0))
* type Guides ([fa4fb8b](https://github.com/vtexdocs/devportal/commit/fa4fb8b8534ef840d86acd2a26a7fc57e67c764f))
* typo ([9ae3b24](https://github.com/vtexdocs/devportal/commit/9ae3b24317a5509ccbf4d1b35f3de98108658939))
* typo ([33d0ba8](https://github.com/vtexdocs/devportal/commit/33d0ba82ab43f4dc647574036b873020f8a414af))
* use readme-docs branch ([b22e3e0](https://github.com/vtexdocs/devportal/commit/b22e3e07ad0ffcf77696de3b4941a3c90d9ce6e2))
* useeffect sidebar ([cacb738](https://github.com/vtexdocs/devportal/commit/cacb73804bff32ed5bd90c77c34b5d8c34fcfc37))
* **utils:** fix getReleaseData to follow the right branch ([0b1cba6](https://github.com/vtexdocs/devportal/commit/0b1cba6cd5aef40943c6b1005775cbf34c15ff8d))
* **utils:** fix getReleaseData to follow the right branch ([7eed0e7](https://github.com/vtexdocs/devportal/commit/7eed0e7ce438906d54d7c683d91544784b7172c1))
* **whats-next-card:** fix what's next card component sizes ([8bb593c](https://github.com/vtexdocs/devportal/commit/8bb593c48a83816fd116e5959847274a57626e48))


### Tests

* **landing-page-tests:** remove conflicting and unnecessary testing ([f27c21f](https://github.com/vtexdocs/devportal/commit/f27c21f8a064e9c1c24fccebb8e3254222b2e8e1))


### Refactoring

* **components:** updates links and images for nextjs@13 ([bd2b17e](https://github.com/vtexdocs/devportal/commit/bd2b17e94e62f28ddf169af6ae3e0490688ec2aa))
* **header:** update the search component ([9596dc8](https://github.com/vtexdocs/devportal/commit/9596dc8e386aa56a094068ec2da9641bcb50f2a0))
* **images:** uses the latest next/image component ([dabf538](https://github.com/vtexdocs/devportal/commit/dabf5381fc299893473ab7f966b91f9c9842d29e))
* **next.config.js:** add image remotePattern for all hosts ([d6ef6e7](https://github.com/vtexdocs/devportal/commit/d6ef6e7606bf6b3208a0c23594d23a5951797567))
* **search-input:** rename variables and remove unnecessary ESLint rule disable ([7de2d02](https://github.com/vtexdocs/devportal/commit/7de2d02c3a666e79478aac901df9e50e056d519f))
* **sidebarelements:** use href instead of onClick ([d9baa51](https://github.com/vtexdocs/devportal/commit/d9baa513fa0e368cb6067d0d8be80f0be9e0a60b))


### CI

* **docsearch-scraper:** change app id to be a secret key ([81ce325](https://github.com/vtexdocs/devportal/commit/81ce32579671451932d77c93964fe85e376cff3a))


### Performance

* **config:** use s3 cdn ([bd4cf57](https://github.com/vtexdocs/devportal/commit/bd4cf57dc2902d36a46242d926ff488a211c9b52))
* **plaiceholder:** less logs from plaiceholder plugin ([bda4dcf](https://github.com/vtexdocs/devportal/commit/bda4dcfb73cd09d66a9f2c43e9d1c5ae0232a7ab))


### Chore

* add magic blocks to an open api example ([c4b2a88](https://github.com/vtexdocs/devportal/commit/c4b2a88fce936413b94b68e79cd5935520e60da5))
* **api-guides:** use guides instead of api-guides ([cabb80b](https://github.com/vtexdocs/devportal/commit/cabb80b3494c98ded9edbdf8bcc415c95141e0ba))
* **docs:** change reference docs names to match those in the navigation.json file ([78acc13](https://github.com/vtexdocs/devportal/commit/78acc13a6cd82f74b01f6172df9fca4aae3604ee))
* **gitignore:** remove docsearch-scraper folder ([0056670](https://github.com/vtexdocs/devportal/commit/00566702c4a754e3761311edbdc2ab59e193973a))
* **gitignore:** remove git tracking from sitemap and robots files ([e8d004e](https://github.com/vtexdocs/devportal/commit/e8d004e2961a8edf95810701295e804eb043ba0b))
* **last-updates-section:** update last release ([cf39793](https://github.com/vtexdocs/devportal/commit/cf39793c7c454ee972d5f2d853db5deb8f222b02))
* **merge:** merge with main ([5f3fe52](https://github.com/vtexdocs/devportal/commit/5f3fe5257e26bf34bf750175f9a5f5ed7ba033f1))
* **navigation.json:** fix conflicts ([128cd6d](https://github.com/vtexdocs/devportal/commit/128cd6dc9a89967f797adde50af12f7cbccf3285))
* **navigation.json:** fix slugs ([d2353ed](https://github.com/vtexdocs/devportal/commit/d2353edb563e4625c20257c7f327ea5bf38c4a26))
* **navigation:** update navigation ([f4dcd31](https://github.com/vtexdocs/devportal/commit/f4dcd31245cbaf2488c4a1211730ad967a70fb9b))
* **navigation:** update navigation.json ([8d60228](https://github.com/vtexdocs/devportal/commit/8d60228fc3fe63bb70faf925d47ae47d34c2651b))
* **navigation:** update redirects and navigation ([dac4c7b](https://github.com/vtexdocs/devportal/commit/dac4c7bc3a44bdb19a78937222d7d4d67cd59354))
* **package.json:** add http-proxy ([00555d2](https://github.com/vtexdocs/devportal/commit/00555d209eb7da7a68e0de42a087278cee0368aa))
* **package.json:** add search dependencies ([b043d96](https://github.com/vtexdocs/devportal/commit/b043d96cee67781df07138c0e3b8f745ba895c99))
* **pages:** add head, fix css and populate hamburger menu ([910e992](https://github.com/vtexdocs/devportal/commit/910e992d52b4f8c4fcdbcf41d173eec40c4916c3))
* **pages:** use main branch from dev-portal-content ([05dd117](https://github.com/vtexdocs/devportal/commit/05dd117aea93e2626dce49db09690e4b935fd914))
* **rapidoc:** update rapidoc version ([bc9c79d](https://github.com/vtexdocs/devportal/commit/bc9c79d88bd2f65c8349a060dbc09fdc7c75f018))
* **rapidoc:** update rapidoc version ([31ac3a5](https://github.com/vtexdocs/devportal/commit/31ac3a5dc0c3358f53365ccd0bbef82c02ccaa09))
* **release:** 0.30.0 ([ada3ad2](https://github.com/vtexdocs/devportal/commit/ada3ad24bb0f28d6ac3fc2f2a7821abe8dc41da2))
* **release:** 0.30.1 ([9d518d2](https://github.com/vtexdocs/devportal/commit/9d518d2ec1ae4ffed9baba9fe67da1fd68f68bec))
* **release:** 0.30.2 ([29a0132](https://github.com/vtexdocs/devportal/commit/29a01329d1622c5c30407253ea304c83052945a3))
* update dependencies ([8abbd1a](https://github.com/vtexdocs/devportal/commit/8abbd1ac2c8a404870a8318b95cf797b266f4606))
* update lockfiles ([8c5a14c](https://github.com/vtexdocs/devportal/commit/8c5a14c6be6535e9b6955b9f109b34e9c71e1dde))
* update nextjs react ([2c1549c](https://github.com/vtexdocs/devportal/commit/2c1549ca8fdcb536d3e67fd4c5956c1dd424a956))


### Style

* **api-guides:** add type annotation to variable ([d844a02](https://github.com/vtexdocs/devportal/commit/d844a0213a5fa35cbe717684e64180bb0fc2eb16))
* **api-guides:** log file path when logging error ([2ceb5ed](https://github.com/vtexdocs/devportal/commit/2ceb5edcccd4cdb670f0a1f9fea3291d784763ed))
* **package.json:** update rapidoc version ([4a3016a](https://github.com/vtexdocs/devportal/commit/4a3016a5424da21f63da4205b2f73cded599df8c))
* **rapidoc:** update rapidoc version ([6736309](https://github.com/vtexdocs/devportal/commit/67363092c103ab20b3ba1367bc5480d20c986662))
* refactor ([ef42d6c](https://github.com/vtexdocs/devportal/commit/ef42d6c966612349835a88500dfb5e576898848f))
* **search-input:** add clickOutSide behavior ([7e82f42](https://github.com/vtexdocs/devportal/commit/7e82f426a3ea7d29198ac038b9629e5746f09faa))
* **server-sitemap:** formatting ([7c70b77](https://github.com/vtexdocs/devportal/commit/7c70b77642ba45470075c78f9bd333f92e74855d))
* **sidebar-elements:** use IconExternalLink for external links ([4100976](https://github.com/vtexdocs/devportal/commit/4100976b82598316da0bc26950f1b501aaf69c33))
* **styles:** fix documentation-page and other styles ([909f41f](https://github.com/vtexdocs/devportal/commit/909f41f1059703f4d793560e70c1e056aa5d6eb6))


### Docs

* adding navigation release note ([f8f2caf](https://github.com/vtexdocs/devportal/commit/f8f2cafd5d33b35a25095205cbfaa9a328ccfcea))
* **navigation:** add get gift list endpoint ([c008f5c](https://github.com/vtexdocs/devportal/commit/c008f5c4a4d7434f90a982c0aeaac132187461b9))
* **next.config.js:** migrating some redirects from readme and adding new ones related to PII docs ([94e21ed](https://github.com/vtexdocs/devportal/commit/94e21ed6517ce44aad17e9e80fd0949c56b655b6))
* **next.config.js:** removing orders pii api redirects ([0053f04](https://github.com/vtexdocs/devportal/commit/0053f044f5452c40adaeddfb7061cd59cba5c1e9))
* **next.config.js:** removing orders pii api redirects again ([3f32fcd](https://github.com/vtexdocs/devportal/commit/3f32fcdf3e04d2d365e6f21e656c685d9eaff004))
* **next.config.js:** returning the orders pii api redirects ([ed5a014](https://github.com/vtexdocs/devportal/commit/ed5a0149f48d9074f287cceb6176e709c6005748))
* **pages/docs/legacy-cms:** add Legacy CMS page ([8b0963c](https://github.com/vtexdocs/devportal/commit/8b0963cfc5b56bfd9760b931e66355d66bbf50a6))
* **public/navigation.json:** adding SafeData release note to navigation ([26214a3](https://github.com/vtexdocs/devportal/commit/26214a3f6f3eef3d18f2c3b995b64a5c34cd2152))
* **releasenotes:** display release type, icon and created date ([d3d5740](https://github.com/vtexdocs/devportal/commit/d3d5740a53ce9ee07c4b4847979372cba579f088))
* **releasepage:** enable Release Notes section ([355c100](https://github.com/vtexdocs/devportal/commit/355c10091d8ba1c686a1c955891aa90e2b1cfdb1))
* **src/pages/api/openapi/[slug].tsx:** updating reference path for Orders API (PII version) ([c5edbd6](https://github.com/vtexdocs/devportal/commit/c5edbd6c82d7f61b5a7bf1d2fec6859f29d95301))
* **src/utils/getreferencepaths.ts:** correcting reference path map for the Orders API (PII version) ([024cc8d](https://github.com/vtexdocs/devportal/commit/024cc8d6869a5d3e01a164f699d89b0b920577e8))


### Build

* **package:** update rapidoc version ([7bd4aae](https://github.com/vtexdocs/devportal/commit/7bd4aae749f4786299a7ba76a0db1cc33c2830d1))
* **package:** update rapidoc version ([df89df0](https://github.com/vtexdocs/devportal/commit/df89df0d2ce7a52e0b2a17705371470c36d658c0))
* **package:** update rapidoc version ([fd36680](https://github.com/vtexdocs/devportal/commit/fd3668071ab5f3deb53cf696ee51d8af5b5d9bde))
* **package:** update rapidoc version ([c8bdf49](https://github.com/vtexdocs/devportal/commit/c8bdf490d03cf3dc3372029e9927fe3e9613549f))
* **package:** update rapidoc version ([c7fda05](https://github.com/vtexdocs/devportal/commit/c7fda05581a8aa700fc087fd9728d0f3e9186c3a))
* **package:** update rapidoc version ([cf3234a](https://github.com/vtexdocs/devportal/commit/cf3234abf1bccf57f3e4cffbd421cc56bdd18700))
* **rapidoc:** update rapidoc version ([8193a81](https://github.com/vtexdocs/devportal/commit/8193a818f5f373b6f9fb28aa41f428cdab5456a2))
* **rapidoc:** update rapidoc version ([eb154d6](https://github.com/vtexdocs/devportal/commit/eb154d6a4f7e6a2d328508b85d305c7435681970))
* **rapidoc:** update rapidoc version ([5aafa7e](https://github.com/vtexdocs/devportal/commit/5aafa7edd6e401b1b8cfcce1c72be2ca47bd3ef8))
* update rapidoc version ([b956b92](https://github.com/vtexdocs/devportal/commit/b956b9266342d39fd6e32b715dd1379583ef8eb0))

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
