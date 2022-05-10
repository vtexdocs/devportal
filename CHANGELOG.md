# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
