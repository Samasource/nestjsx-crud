# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.0.0 (2026-01-13)


### Bug Fixes

* Spelling error to support NestJS v11+ ([64ec47c](https://github.com/Samasource/nestjsx-crud/commit/64ec47c44a8654da4db5f64bbceafcf4eafcad9f))
* **compile:** set up references to ts projects ([730ad02](https://github.com/Samasource/nestjsx-crud/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/Samasource/nestjsx-crud/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/Samasource/nestjsx-crud/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/Samasource/nestjsx-crud/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/Samasource/nestjsx-crud/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/Samasource/nestjsx-crud/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** add unique operationId ([7cffc1e](https://github.com/Samasource/nestjsx-crud/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/Samasource/nestjsx-crud/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/Samasource/nestjsx-crud/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/Samasource/nestjsx-crud/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/Samasource/nestjsx-crud/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/Samasource/nestjsx-crud/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/Samasource/nestjsx-crud/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/Samasource/nestjsx-crud/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/Samasource/nestjsx-crud/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/Samasource/nestjsx-crud/issues/443)
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/Samasource/nestjsx-crud/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud:** get primary param filed ([583cfbb](https://github.com/Samasource/nestjsx-crud/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/Samasource/nestjsx-crud/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/Samasource/nestjsx-crud/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/Samasource/nestjsx-crud/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/Samasource/nestjsx-crud/issues/283)
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/Samasource/nestjsx-crud/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/Samasource/nestjsx-crud/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** typo fix getMayRouteOptions -> getManyRouteOptions ([3e1e5ca](https://github.com/Samasource/nestjsx-crud/commit/3e1e5ca20479f13a7b7cf60c5a9f665a085e164b))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/Samasource/nestjsx-crud/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/Samasource/nestjsx-crud/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/Samasource/nestjsx-crud/issues/354)
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/Samasource/nestjsx-crud/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud-update:** make updateOneBase dto type partial ([e17847f](https://github.com/Samasource/nestjsx-crud/commit/e17847ffaff6d9079f7bc4146b9469fdeb7b580f))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/Samasource/nestjsx-crud/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **deps:** upgrade all dependencies and added resolutions to resolve vulnerabilities ([6a91f58](https://github.com/Samasource/nestjsx-crud/commit/6a91f58b6c64b469e110455cff39efa23a844a09))
* **swagger:** fix constant when getting swagger extra models ([0f3fd22](https://github.com/Samasource/nestjsx-crud/commit/0f3fd2205d094e0f50c37b2b7d978bb8f948ec27))
* Add missing dependency "pluralize" ([7b6232f](https://github.com/Samasource/nestjsx-crud/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/Samasource/nestjsx-crud/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* webpack properly bundles optional packages ([4c33082](https://github.com/Samasource/nestjsx-crud/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/Samasource/nestjsx-crud/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **jest:** test ts files without build ([53a0db5](https://github.com/Samasource/nestjsx-crud/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/Samasource/nestjsx-crud/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **request:** request validation error code 400 ([f8c5921](https://github.com/Samasource/nestjsx-crud/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/Samasource/nestjsx-crud/issues/374) [#247](https://github.com/Samasource/nestjsx-crud/issues/247)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/Samasource/nestjsx-crud/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/Samasource/nestjsx-crud/issues/79) [#314](https://github.com/Samasource/nestjsx-crud/issues/314)
* **swagger:** Swagger id is always required ([75418c3](https://github.com/Samasource/nestjsx-crud/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/Samasource/nestjsx-crud/issues/92)
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/Samasource/nestjsx-crud/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/Samasource/nestjsx-crud/issues/196)
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/Samasource/nestjsx-crud/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/Samasource/nestjsx-crud/issues/55)
* **typeorm:** fixed left join by default ([3307348](https://github.com/Samasource/nestjsx-crud/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/Samasource/nestjsx-crud/issues/31) [#98](https://github.com/Samasource/nestjsx-crud/issues/98)
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/Samasource/nestjsx-crud/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))


### Features

* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/Samasource/nestjsx-crud/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **envs:** migrate repo from nestjsx to rewiko ([6570b66](https://github.com/Samasource/nestjsx-crud/commit/6570b66b2e365a5d5cadab428aca9b3198bd50de))
* add custom operators ([48d457d](https://github.com/Samasource/nestjsx-crud/commit/48d457dee532d2a7c65a0db429c347fe713f14c6))
* composite primary key ([796b0ce](https://github.com/Samasource/nestjsx-crud/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/Samasource/nestjsx-crud/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/Samasource/nestjsx-crud/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/Samasource/nestjsx-crud/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/Samasource/nestjsx-crud/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/Samasource/nestjsx-crud/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/Samasource/nestjsx-crud/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/Samasource/nestjsx-crud/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/Samasource/nestjsx-crud/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/Samasource/nestjsx-crud/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/Samasource/nestjsx-crud/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/Samasource/nestjsx-crud/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/Samasource/nestjsx-crud/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/Samasource/nestjsx-crud/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/Samasource/nestjsx-crud/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/Samasource/nestjsx-crud/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/Samasource/nestjsx-crud/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/Samasource/nestjsx-crud/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/Samasource/nestjsx-crud/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/Samasource/nestjsx-crud/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/Samasource/nestjsx-crud/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/Samasource/nestjsx-crud/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/Samasource/nestjsx-crud/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/Samasource/nestjsx-crud/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** new search condition api ([06c3fe5](https://github.com/Samasource/nestjsx-crud/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/Samasource/nestjsx-crud/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/Samasource/nestjsx-crud/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/Samasource/nestjsx-crud/issues/158)
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/Samasource/nestjsx-crud/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`
