# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.1.1](https://github.com/Samasource/nestjsx-crud/compare/v6.1.0...v6.1.1) (2026-01-14)

**Note:** Version bump only for package @sama/nestjsx-crud





# [6.1.0](https://github.com/Samasource/nestjsx-crud/compare/v6.0.0...v6.1.0) (2026-01-14)


### Bug Fixes

* **crud:** Fix CrudEx custom decorator (removed CrudOptionsEx) ([1a2df57](https://github.com/Samasource/nestjsx-crud/commit/1a2df578157a7ba2821be7a65f5a0b501b51e8b7))
* **crud-typeorm:** TypeOrmCrudBaseService: Backport additional changes from accounts-backend be ([b46e908](https://github.com/Samasource/nestjsx-crud/commit/b46e9083d672f12dda06b63d1c0356ddcb23ca00))
* **deps:** bump @types/node version ([4016c48](https://github.com/Samasource/nestjsx-crud/commit/4016c48a1ba246dac1677eafd57eecc48d846035))
* **deps:** bump prettier version ([06509c2](https://github.com/Samasource/nestjsx-crud/commit/06509c22871f6cf3c390e6d23aae8be92757183e))
* **deps:** bump typescript version ([2fad519](https://github.com/Samasource/nestjsx-crud/commit/2fad5196ee44d26862e29ec1f00ba844d6a3c179))


### Features

* **crud:** Add CrudEx decorator ([24f26b3](https://github.com/Samasource/nestjsx-crud/commit/24f26b3ac0486ff113107972adcbc7ba95b7879d))
* **crud:** Add CrudOptionsEx + CrudRequestHelper ([525a502](https://github.com/Samasource/nestjsx-crud/commit/525a502c240dc3e21dcffbb1eb67f03b153409f3))
* **crud-typeorm:** Add TypeOrmCrudBaseService that improves TypeOrmCrudService from original repo ([6f350bf](https://github.com/Samasource/nestjsx-crud/commit/6f350bf32b81cb1559d04f55449ae5d1fb057c84))





# 6.0.0 (2026-01-13)


### Bug Fixes

* Spelling error to support NestJS v11+ ([64ec47c](https://github.com/Samasource/nestjsx-crud/commit/64ec47c44a8654da4db5f64bbceafcf4eafcad9f))
* **crud-typeorm:** duplicate column selection ([638c629](https://github.com/Samasource/nestjsx-crud/commit/638c62968ad122c47902c4b120684d04a7d8eed1))
* use `offset` instead of `skip` ([95b61ef](https://github.com/Samasource/nestjsx-crud/commit/95b61efa57f8190a2cbbd96fdb408ca095b55ee8))
* **auth:** fix filter for user in meController ([0d1eed2](https://github.com/Samasource/nestjsx-crud/commit/0d1eed2bca9e1ff766958b2888e7e50264637cdc))
* **cache:** set test cache to 0 ([fbbfcbf](https://github.com/Samasource/nestjsx-crud/commit/fbbfcbfe4a93969b1473a8b8f76616cc3cf0c817))
* **crud:** add cache tests ([3e8c0b5](https://github.com/Samasource/nestjsx-crud/commit/3e8c0b5f513da52171eabf90be279e6e3ff6f5ef))
* **crud:** add description on swagger response ([e1e5f61](https://github.com/Samasource/nestjsx-crud/commit/e1e5f61e40a799affe65da9784ff70e4d0740b57))
* **crud:** add unique operationId ([7cffc1e](https://github.com/Samasource/nestjsx-crud/commit/7cffc1e4434e2ae5a3c420bebad51745e225baba))
* **crud:** allow specifying ApiOperation Swagger meta on overridden methods in the decorators option ([e4e6339](https://github.com/Samasource/nestjsx-crud/commit/e4e63395d451d156c60ad580fb479150556d080e))
* **crud:** Applying route decorators only once ([d905b66](https://github.com/Samasource/nestjsx-crud/commit/d905b663a8bdbec8272494c94c5691c74cd98432))
* **crud:** Do not return pageCount field when alwaysPaginate ([2421b79](https://github.com/Samasource/nestjsx-crud/commit/2421b7988bc771e1f898ae486b13799f3b2b93d6))
* **crud:** Fix import links in tests ([ece8c5a](https://github.com/Samasource/nestjsx-crud/commit/ece8c5a653997d97483bb8c19ebd3c6a08a7fc9a))
* **crud:** Fix tests coverage. Add recover test serizlize. ([1643757](https://github.com/Samasource/nestjsx-crud/commit/1643757886301fc83635201576f182365b847eb0))
* **crud:** fixed custom routes params caused by NestJs v7 breaking changes ([78ac985](https://github.com/Samasource/nestjsx-crud/commit/78ac9859fbac42eb0f31a25d4763af9f55d6aa36)), closes [#443](https://github.com/Samasource/nestjsx-crud/issues/443)
* **crud:** get primary param filed ([583cfbb](https://github.com/Samasource/nestjsx-crud/commit/583cfbba9dc1b70ac981f221b0674a5f410eb598))
* **crud:** imports ([3bcc2ae](https://github.com/Samasource/nestjsx-crud/commit/3bcc2aee28964d4a7cc901d937cfa4d997314995))
* **crud:** missing types on query params sort filter join swagger 3.1.0 ([f9970d2](https://github.com/Samasource/nestjsx-crud/commit/f9970d279b934d5294dce7f09ffb6c1bf6496261))
* **crud:** primary param fix and swagger ([bdfcc55](https://github.com/Samasource/nestjsx-crud/commit/bdfcc55ec04f4af8c666950f9627dcff931fd6c5)), closes [#283](https://github.com/Samasource/nestjsx-crud/issues/283)
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/Samasource/nestjsx-crud/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* **crud:** responses have old swagger version compatibility ([8370eee](https://github.com/Samasource/nestjsx-crud/commit/8370eeeb3b1890d12d4173346efeda3ded885d35))
* **crud:** take into account Swagger meta defined on overridden methods ([feb01a6](https://github.com/Samasource/nestjsx-crud/commit/feb01a6c20347dc9129f2680b6c15da9485f4bd1))
* **crud:** TypeOrm Cache was not working ([4b2ea4d](https://github.com/Samasource/nestjsx-crud/commit/4b2ea4dcee7caa6eb07c8a6e6cca6cbe61ad34e8))
* **crud:** typo fix getMayRouteOptions -> getManyRouteOptions ([3e1e5ca](https://github.com/Samasource/nestjsx-crud/commit/3e1e5ca20479f13a7b7cf60c5a9f665a085e164b))
* **crud:** updated CrudRoutesFactory methods visibility ([0927572](https://github.com/Samasource/nestjsx-crud/commit/09275721b683be4dcc90093e71d2e4d676d22f4e))
* **crud:** updated CrudSerializeInterceptor, swagger response models ([2864081](https://github.com/Samasource/nestjsx-crud/commit/286408100537aea4606fce8ed134e5f42ab94bd6)), closes [#354](https://github.com/Samasource/nestjsx-crud/issues/354)
* **crud:** using metadata to update entities based on primary key instead of "found" ([580c19a](https://github.com/Samasource/nestjsx-crud/commit/580c19a6aa207ac36f9bac23974a399768391411))
* **crud-cache:** Do not use cache for update and deletion of ressources ([84f5370](https://github.com/Samasource/nestjsx-crud/commit/84f5370f9d3d29973cd073da6e6ef9e0be0bbf2d))
* **crud-request:** prevent query bigint casted to number in order to prevent dataloss ([64cc2cb](https://github.com/Samasource/nestjsx-crud/commit/64cc2cb9d3e826a53926c5f05ba237207b392bbd))
* **crud-request:** small fix on type SFields definition to make strict=true typescript builds work ([d641be6](https://github.com/Samasource/nestjsx-crud/commit/d641be6a184625d6b0ba2cd407d56076788362ed))
* **crud-routes:** remove disabled fields from swagger docs ([5c81726](https://github.com/Samasource/nestjsx-crud/commit/5c817266461ab7c631d54fd90e8d136063c0a68d))
* **crud-typeorm:** bug ability to use search and filter features with nested entities ([041f761](https://github.com/Samasource/nestjsx-crud/commit/041f7617ce85dca990eea929d7fea83f1788e62f))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/Samasource/nestjsx-crud/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud-update:** make updateOneBase dto type partial ([e17847f](https://github.com/Samasource/nestjsx-crud/commit/e17847ffaff6d9079f7bc4146b9469fdeb7b580f))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/Samasource/nestjsx-crud/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **deps:** dep name ([155f82e](https://github.com/Samasource/nestjsx-crud/commit/155f82e294afe7fa68b4ebb65e0f2e9fb471bd17))
* **deps:** upgrade all dependencies and added resolutions to resolve vulnerabilities ([6a91f58](https://github.com/Samasource/nestjsx-crud/commit/6a91f58b6c64b469e110455cff39efa23a844a09))
* **example:** typeorm companies entity validation ([350a873](https://github.com/Samasource/nestjsx-crud/commit/350a8730934ceec2fe26f8db034a4384f9cea3ba))
* **example:** typeorm companies entoty validation ([d23893a](https://github.com/Samasource/nestjsx-crud/commit/d23893a7a3aa3a94295d9bde45c09ed79ca77b08))
* **jest:** test ts files without build ([53a0db5](https://github.com/Samasource/nestjsx-crud/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **request:** operators validation ([967922c](https://github.com/Samasource/nestjsx-crud/commit/967922c7f090b9280c8130be9825c700a0fba9e1))
* **request:** parser validation with new operators ([7f5e713](https://github.com/Samasource/nestjsx-crud/commit/7f5e713213ec8597fdb391a3cdfd951593a2fdb8))
* **request:** request validation error code 400 ([f8c5921](https://github.com/Samasource/nestjsx-crud/commit/f8c592168e75ed3a72b199a2bcf286070e82b60c)), closes [#374](https://github.com/Samasource/nestjsx-crud/issues/374) [#247](https://github.com/Samasource/nestjsx-crud/issues/247)
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/Samasource/nestjsx-crud/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/Samasource/nestjsx-crud/issues/77) [#212](https://github.com/Samasource/nestjsx-crud/issues/212)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/Samasource/nestjsx-crud/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/Samasource/nestjsx-crud/issues/79) [#314](https://github.com/Samasource/nestjsx-crud/issues/314)
* **swagger:** fix constant when getting swagger extra models ([0f3fd22](https://github.com/Samasource/nestjsx-crud/commit/0f3fd2205d094e0f50c37b2b7d978bb8f948ec27))
* **typeorm:**  composite key join ([307873b](https://github.com/Samasource/nestjsx-crud/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/Samasource/nestjsx-crud/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/Samasource/nestjsx-crud/issues/55)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/Samasource/nestjsx-crud/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/Samasource/nestjsx-crud/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/Samasource/nestjsx-crud/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/Samasource/nestjsx-crud/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/Samasource/nestjsx-crud/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** query wrong generated ([353e902](https://github.com/Samasource/nestjsx-crud/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/Samasource/nestjsx-crud/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/Samasource/nestjsx-crud/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* **typeorm-crud:** add warning when using disallowed relation ([b5f05c7](https://github.com/Samasource/nestjsx-crud/commit/b5f05c76130876b1fd1aa53dc3a5659885ff0fb9))
* **typeorm-crud:** fix sql injection check looping on the first regex ([91e2bae](https://github.com/Samasource/nestjsx-crud/commit/91e2baec0445e0a360210029bd29c10eb16ec9d8))
* **typeorm-crud): fix(typeorm:** correct quotes for column identifiers when driver is mariadb ([bd28914](https://github.com/Samasource/nestjsx-crud/commit/bd28914b9f5637053958632d7d5bac1c0bca30e6))
* Add missing dependency "pluralize" ([7b6232f](https://github.com/Samasource/nestjsx-crud/commit/7b6232f6e73b4cc27ffc19f806f1663c2e4483b1))
* **#138:** Load embedded entities ([6778ef4](https://github.com/Samasource/nestjsx-crud/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/Samasource/nestjsx-crud/issues/138)
* **compile:** set up references to ts projects ([730ad02](https://github.com/Samasource/nestjsx-crud/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/Samasource/nestjsx-crud/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud:** `CrudRequestInterceptor` path param parsing ([564990a](https://github.com/Samasource/nestjsx-crud/commit/564990a18833bae283f925cd6b1ceea19cc0eeb4))
* **crud:** `TypeOrmCrudService` needs non-null properties ([45ef973](https://github.com/Samasource/nestjsx-crud/commit/45ef973af378d2a5c5cdb26921c6843e699e98e8))
* **crud:** add Entity swagger to `BulkDto#list` ([3e70573](https://github.com/Samasource/nestjsx-crud/commit/3e7057319f508db67aa49c99af3e8ce1326e60ea))
* **crud:** added missing CrudController interface ([f1e97a7](https://github.com/Samasource/nestjsx-crud/commit/f1e97a732e52820ce23a828883e37ebd466eaf71))
* **crud:** detached `CrudRequestInterceptor` ignore path params ([249d345](https://github.com/Samasource/nestjsx-crud/commit/249d345cc877000eae365975e509a541d7382707))
* **crud:** fixed swagger query params metadata ([964f35c](https://github.com/Samasource/nestjsx-crud/commit/964f35c51a26438daa7b9c925338f0ac8331b7ad))
* **crud-controller:** Fix typo ([f00dfed](https://github.com/Samasource/nestjsx-crud/commit/f00dfedf2814c929ed506a665fa003331292baf1))
* **crud-request:** `CondOperator`'s value is wrong ([430666c](https://github.com/Samasource/nestjsx-crud/commit/430666cba9f0dbebbb6b8eaef9a02216a99f3e4a))
* **crud-request:** incorrect parsing of  integer ids when paramter type is string ([e7824b6](https://github.com/Samasource/nestjsx-crud/commit/e7824b6fbc90135c314e8267ed4a52da7b9d5859))
* **crud-request:** updated paramNamesMap ([cf16b68](https://github.com/Samasource/nestjsx-crud/commit/cf16b68a2ed38a9992b2a2ca0ab1c13309da6ec1))
* **deps:** pin dependencies ([ee0ab16](https://github.com/Samasource/nestjsx-crud/commit/ee0ab16bfadd32c8e306b7bb10311300865e8257))
* **deps:** update dependency @nestjs/swagger to v3.1.0 ([2531135](https://github.com/Samasource/nestjsx-crud/commit/2531135a655af6d0cc8ef816d69a02b09aeef0ce))
* **deps:** update dependency @nestjs/typeorm to v6.1.3 ([8657aed](https://github.com/Samasource/nestjsx-crud/commit/8657aedc64a936e0a3197f2b2497cc0f24d8061c))
* **deps:** update dependency @types/jest to v24.0.15 ([49bc0e1](https://github.com/Samasource/nestjsx-crud/commit/49bc0e11eadef7c1bb36f566e5813ad3b51c1587))
* **deps:** update dependency @types/node to v12.0.10 ([08c81c8](https://github.com/Samasource/nestjsx-crud/commit/08c81c833c6e9e7ab19d8017fec202f39af995d5))
* **deps:** update dependency @types/node to v12.6.2 ([232e9b6](https://github.com/Samasource/nestjsx-crud/commit/232e9b67a2d0b6113406416a8543b77d7bfb0110))
* **deps:** update dependency @types/node to v12.6.8 ([4fd809a](https://github.com/Samasource/nestjsx-crud/commit/4fd809afffa0bb5b705aaa07c48510d62b13adc7))
* **deps:** update dependency @types/supertest to v2.0.8 ([180b43c](https://github.com/Samasource/nestjsx-crud/commit/180b43c6e8d0828715af2f7824a04ab78cd092aa))
* **deps:** update dependency commitizen to v3.1.2 ([691f687](https://github.com/Samasource/nestjsx-crud/commit/691f68795e1c2b857c3f5818fe0de2edfd3315bc))
* **deps:** update dependency coveralls to v3.0.5 ([8761769](https://github.com/Samasource/nestjsx-crud/commit/876176924c971d717bef918ed9f9867b944136be))
* **deps:** update dependency husky to v2.5.0 ([21f2997](https://github.com/Samasource/nestjsx-crud/commit/21f2997ee51fdf69bc2bfda8f884cdb49379cd50))
* **deps:** update dependency husky to v2.6.0 ([150aa5a](https://github.com/Samasource/nestjsx-crud/commit/150aa5a683a62e8b59b96086f21234a6affdd10d))
* **deps:** update dependency husky to v2.7.0 ([dd2bef1](https://github.com/Samasource/nestjsx-crud/commit/dd2bef10a8a60f6c3f686d4c5b06581f8ddfedaf))
* **deps:** update dependency lerna to v3.15.0 ([f246dff](https://github.com/Samasource/nestjsx-crud/commit/f246dff9eed31a86b046bcbc6ef5dfa3ed6fe580))
* **deps:** update dependency lerna to v3.16.0 ([3ef603a](https://github.com/Samasource/nestjsx-crud/commit/3ef603a7f97e3bf0a19fe5f935a90ff5a8dd4fc7))
* **deps:** update dependency pretty-quick to v1.11.1 ([69498ce](https://github.com/Samasource/nestjsx-crud/commit/69498ce9306bdb8115c59772aea59ac25d83a55b))
* **deps:** update dependency swagger-ui-express to v4.0.7 ([4e480c9](https://github.com/Samasource/nestjsx-crud/commit/4e480c963e62a93e37428f951ef943ebc7d39b28))
* **deps:** update dependency ts-node to v8.3.0 ([1a1e6d3](https://github.com/Samasource/nestjsx-crud/commit/1a1e6d3728244655085a61d899ac94f7d3caa848))
* **deps:** update dependency tslint to v5.18.0 ([174c9c5](https://github.com/Samasource/nestjsx-crud/commit/174c9c535bb50bad78f0715a114a48268e516d81))
* **deps:** update dependency typeorm to v0.2.18 ([9323049](https://github.com/Samasource/nestjsx-crud/commit/9323049baf7548a76e61f6a6d01c45b2d0d91e5d))
* **deps:** update deps ([4d7e43f](https://github.com/Samasource/nestjsx-crud/commit/4d7e43f319f82f7aa5b0ac6c5b541aa7d7b00998))
* **deps:** update nest monorepo to v6.3.2 ([76ac0a0](https://github.com/Samasource/nestjsx-crud/commit/76ac0a03ae74fd3b9bb8ab4e8fd8d154a600a3c8))
* **deps:** update nest monorepo to v6.4.0 ([0a8f628](https://github.com/Samasource/nestjsx-crud/commit/0a8f62879414a941f1bb6b6fd2b1eccf2e384b76))
* **deps:** update nest monorepo to v6.4.1 ([e917e17](https://github.com/Samasource/nestjsx-crud/commit/e917e171742352a6a7d1de2f5af6419f0f7b07eb))
* **deps:** update nest monorepo to v6.5.2 ([500eaaa](https://github.com/Samasource/nestjsx-crud/commit/500eaaaeeefa9d706b70469795c7af50815f84c1))
* **doc:** typo ([245029f](https://github.com/Samasource/nestjsx-crud/commit/245029f90177019460973eeafc63808cf7b45b61))
* **doc:** typo ([ef041f0](https://github.com/Samasource/nestjsx-crud/commit/ef041f0a69839ead339ea5a40a37f56bc59cbc7f))
* **Pagination:** Fixed pageCount number ([6886fc9](https://github.com/Samasource/nestjsx-crud/commit/6886fc96ff5543fbd4098528b1c80658834949c1))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/Samasource/nestjsx-crud/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **query:** data type in filter value ([b86f56e](https://github.com/Samasource/nestjsx-crud/commit/b86f56e8551ca331cee92baa215a0f4a1a1c2a2a))
* **query:** data type in filter value ([faf85ec](https://github.com/Samasource/nestjsx-crud/commit/faf85ecce343f1802efd827ba9853dbb7bede298))
* **swagger:** Swagger id is always required ([75418c3](https://github.com/Samasource/nestjsx-crud/commit/75418c35d4428d767b507e3237c78a76e7468990)), closes [#92](https://github.com/Samasource/nestjsx-crud/issues/92)
* **swagger.helper.ts:** change query params meta to comply with swagger spec ([fbf780c](https://github.com/Samasource/nestjsx-crud/commit/fbf780cf875840e748065eda942ca1379062f5a6)), closes [#196](https://github.com/Samasource/nestjsx-crud/issues/196)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/Samasource/nestjsx-crud/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/Samasource/nestjsx-crud/issues/59)
* **typeorm:** fixed left join by default ([3307348](https://github.com/Samasource/nestjsx-crud/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/Samasource/nestjsx-crud/issues/31) [#98](https://github.com/Samasource/nestjsx-crud/issues/98)
* **util:** ISO Date string validation ([e34d15d](https://github.com/Samasource/nestjsx-crud/commit/e34d15d64282dc492eedd4e228f4ec1a50683d94))
* always persist only defined primary keys ([0d05f3c](https://github.com/Samasource/nestjsx-crud/commit/0d05f3ca7eb0c43ed15537e70d6dd97fa407bafc))
* define entityPrimaryColumns ([eef53c5](https://github.com/Samasource/nestjsx-crud/commit/eef53c54d9e29258d2120adc56e0f5de118a4a87))
* set decorators after Swagger so metadata can be overwritten ([c3a71e8](https://github.com/Samasource/nestjsx-crud/commit/c3a71e8fd55a7c4cb68e3854134c72a5a6172f76))
* since the `interceptors` are already not support NestJS `5.x`, drop support and fix deprecated warnings ([ac3c1df](https://github.com/Samasource/nestjsx-crud/commit/ac3c1dfa702a61fb03acc3762866d6b2798b7cca))
* since the `interceptors` are already not support NestJS `5.x`, drop support and fix deprecated warnings ([842b91a](https://github.com/Samasource/nestjsx-crud/commit/842b91a22c0f65af6c7b1abd1debb6dfb369e3a3))
* swagger doc format ([9cb3331](https://github.com/Samasource/nestjsx-crud/commit/9cb33319cf64533cbd2e3d3fd957ffa83c4856c2))
* typo and add peers ([afe21e1](https://github.com/Samasource/nestjsx-crud/commit/afe21e1144e87f2f23475a365ee2efcfa702e7d9))
* Update readme ([bec3d9c](https://github.com/Samasource/nestjsx-crud/commit/bec3d9c748a72ddb545abeb8982fbd0f68fdc504))
* webpack properly bundles optional packages ([4c33082](https://github.com/Samasource/nestjsx-crud/commit/4c330827b98252f84fef24b55f7b0c1adc8755a2))
* **swagger:** fixed metadata on method override ([18e750d](https://github.com/Samasource/nestjsx-crud/commit/18e750d6a4d395de34809e12b1f4b59fb455a85f))


### Features

* **changelog:** update changelog ([850e7b1](https://github.com/Samasource/nestjsx-crud/commit/850e7b1e2739500a4f2e582c2bd50668a091637f))
* **changelog:** update changelog ([c6ad90b](https://github.com/Samasource/nestjsx-crud/commit/c6ad90bc25f3ffee4ad4b33caf61eb2e87337808))
* **changelog:** update changelog ([512e0f7](https://github.com/Samasource/nestjsx-crud/commit/512e0f778ca2a8e847cf3cdd0c2626481967c487))
* **changelog:** update changelog ([286f5df](https://github.com/Samasource/nestjsx-crud/commit/286f5dfb0bee59438048986c7ecc6355f7c8340a))
* **crud:** Add enum support to @Crud params ([30f0c69](https://github.com/Samasource/nestjsx-crud/commit/30f0c69f515b9bacf267c90ff4f8bc5d50fe468d))
* **crud:** Add enum support to @Crud params ([b2a6a18](https://github.com/Samasource/nestjsx-crud/commit/b2a6a18675c19ac42c6fac6423f819182d5fb112))
* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/Samasource/nestjsx-crud/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/Samasource/nestjsx-crud/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/Samasource/nestjsx-crud/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/Samasource/nestjsx-crud/issues/229)
* **crud:** added CrudConfigService ([5323eed](https://github.com/Samasource/nestjsx-crud/commit/5323eed2624aac083370c16595781b7fca277404))
* **crud:** added dto options ([c189bab](https://github.com/Samasource/nestjsx-crud/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/Samasource/nestjsx-crud/issues/132)
* **crud:** added simple serialize options and interceptor ([3c5e395](https://github.com/Samasource/nestjsx-crud/commit/3c5e395a4be6c32e71ec1adfb8c432154544b562))
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/Samasource/nestjsx-crud/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** support custom config for `CrudRequestInterceptor` ([672051c](https://github.com/Samasource/nestjsx-crud/commit/672051c2e38b1921c26ddf3da40606340caaba53))
* **crud:** support query options filter function that returns transformed search ([ca2739b](https://github.com/Samasource/nestjsx-crud/commit/ca2739bd59f58f1a33427b8a35c12b832d7909a7))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/Samasource/nestjsx-crud/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **crud-request:** added additional uuid rexex ([9a91566](https://github.com/Samasource/nestjsx-crud/commit/9a9156663cf972cbac252e36d23b5d8ec6b3b0bd))
* **crud-request:** added createFromParams method ([d8b279a](https://github.com/Samasource/nestjsx-crud/commit/d8b279a67e458f29c19fc748188ea490b7b988c3))
* **crud-request:** interceptor can work with non-crud controllers ([f3f7c4f](https://github.com/Samasource/nestjsx-crud/commit/f3f7c4fee150c8b7174ea5096e9eb59d6d7f58ba))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/Samasource/nestjsx-crud/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/Samasource/nestjsx-crud/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/Samasource/nestjsx-crud/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/Samasource/nestjsx-crud/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/Samasource/nestjsx-crud/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/Samasource/nestjsx-crud/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/Samasource/nestjsx-crud/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/Samasource/nestjsx-crud/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **crudglobalconfig:** add option to set serialize to false in the global config ([7e81f9b](https://github.com/Samasource/nestjsx-crud/commit/7e81f9b6fc2ae9e9ae93352c1cfb9f71070fd25b))
* **envs:** migrate repo from nestjsx to rewiko ([6570b66](https://github.com/Samasource/nestjsx-crud/commit/6570b66b2e365a5d5cadab428aca9b3198bd50de))
* **readme:** update readme ([453d438](https://github.com/Samasource/nestjsx-crud/commit/453d438cb16c210b1a98bbcf286fc98b6a36f044))
* **readme:** update readme with release information ([6200908](https://github.com/Samasource/nestjsx-crud/commit/6200908609fe37646edf4bd55199a172f4b2e8bb))
* **readme:** update release readme ([6cc1c28](https://github.com/Samasource/nestjsx-crud/commit/6cc1c28d055e8eeeec66a4edc5db2c779436623f))
* add custom operators ([48d457d](https://github.com/Samasource/nestjsx-crud/commit/48d457dee532d2a7c65a0db429c347fe713f14c6))
* composite primary key ([796b0ce](https://github.com/Samasource/nestjsx-crud/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* Customizeable CrudRoutesFactory ([eb67b69](https://github.com/Samasource/nestjsx-crud/commit/eb67b69e8b172acc84b79deeb2ef3b3b7fecc9cb))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/Samasource/nestjsx-crud/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/Samasource/nestjsx-crud/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/Samasource/nestjsx-crud/issues/104)
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/Samasource/nestjsx-crud/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** added parsing a search param in query parser ([e5e8072](https://github.com/Samasource/nestjsx-crud/commit/e5e80727335b78313ce097ac6ab7067babead41e))
* **request:** added search method to the query builder, refactored, tests not ready ([30631ae](https://github.com/Samasource/nestjsx-crud/commit/30631ae76c35826ceb38eeb0348c5e1b42f2cc08))
* **request:** new search condition api ([06c3fe5](https://github.com/Samasource/nestjsx-crud/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **request-query:** feature ready, tests ready ([7ee6691](https://github.com/Samasource/nestjsx-crud/commit/7ee6691e9dba440ae7957619d96ff2dda6786bc7))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/Samasource/nestjsx-crud/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/Samasource/nestjsx-crud/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/Samasource/nestjsx-crud/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/Samasource/nestjsx-crud/commit/cf06e8271ab4cbe3b579232328315987700a03f9))
* **util:** add more assertions ([475fc36](https://github.com/Samasource/nestjsx-crud/commit/475fc369431336656356f033dcc24b95a75859c0))
* **util:** isFunction ([fc50924](https://github.com/Samasource/nestjsx-crud/commit/fc50924f11e42cb3446e5b70b27894b72de5198a))


### Reverts

* Revert "Update typeorm-crud.service.ts" ([60f5cd0](https://github.com/Samasource/nestjsx-crud/commit/60f5cd08fad608f86c7aebf2966a98f96767ec53))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`





## [5.1.12] - 2022-08-24

### Fix 

*  638c629 - fix(crud-typeorm): duplicate column selection <qpfmtlcp>

## [5.1.9] - 2022-07-17

### Fix 

* c097531 - REVERTED (darkein/patch-4) fix: use offset instead of skip, thanks to [Darkein](https://github.com/Darkein)

## [5.1.4] - 2022-06-22

### Fix 

* c097531 - (darkein/patch-4) fix: use offset instead of skip, thanks to [Darkein](https://github.com/Darkein)

## [5.1.3] - 2022-06-16

### Fix 

* 433b724 - Merge pull request #15 from Darkein/patch-1
    Update typeorm-crud.service.ts, thanks to [Darkein](https://github.com/Darkein)
  
## [5.1.2] - 2022-05-24

### Fix deps

* 0028dba0 - Merge pull request #9 from H4ad/fix/deps
    fix(deps): upgrade all dependencies, thanks to [Vinicius Lourenço](https://github.com/H4ad)
  
## [5.1.1] - 2022-01-11

### Fix 

* 56d49d3 - Merge remote-tracking branch 'dschoeni/fix/117-eager-breaks-update', thanks to [Dschoeni](https://github.com/dschoeni)
  
## [5.1.0] - 2021-12-08

### Features 

* 0692be2 - feat: add custom operators, thanks to [Darkein](https://github.com/Darkein)
  
## [5.0.17] - 2021-11-28

### Bug Fixes

* 041f761 - fix(crud-typeorm): bug ability to use search and filter features with nested entities 
  
## [5.0.16] - 2021-11-28

### Bug Fixes

* bd28914 - fix(typeorm-crud): fix(typeorm): correct quotes for column identifiers when driver is mariadb 
* 91e2bae - fix(typeorm-crud): fix sql injection check looping on the first regex 
* b5f05c7 - fix(typeorm-crud): add warning when using disallowed relation
* e17847f - fix(crud-update): make updateOneBase dto type partial 
* 0d1eed2 - fix(auth): fix filter for user in meController 
* 0f3fd22 - fix(swagger): fix constant when getting swagger extra models
* 3e1e5ca - fix(crud): typo fix getMayRouteOptions -> getManyRouteOptions
* 453d438 - (origin/master) feat(readme): update readme 
* 6cc1c28 - feat(readme): update release readme 
  
## [5.0.15] - 2021-11-28

### Bug Fixes

- **crud** - Fix select boolean type in join option [#4](https://github.com/rewiko/crud/pull/4))

## [5.0.14] - 2021-11-27

### Bug Fixes

- **typeorm** - fixed cache - do not use cache when updating resources [#3](https://github.com/rewiko/crud/pull/3))

## [5.0.13] - 2021-11-27

Update readme to include release steps

## [5.0.12] - 2021-11-27

Migrate repo from nestjsx to rewiko

## [4.6.2] - 2020-05-14

### Bug Fixes

- **typeorm** - fixed selected fields on joins [#510](https://github.com/nestjsx/crud/issues/510)). Kudos to @jbrousseau for finding this bug

## [4.6.1] - 2020-05-08

### Bug Fixes

- **typeorm** - fixed query generation when a column display name differs from its name in db [#401](https://github.com/nestjsx/crud/issues/401)). Kudos to @farhad2161 for finding this bug

## [4.6.0] - 2020-05-07

### Features

- **crud**/**typeorm** - added `select` (boolean) to `join` options which allows to join relation but not select it ([#218](https://github.com/nestjsx/crud/issues/218))

### Bug Fixes

- **typeorm** - fixed column identifier for MySQL ([#401](https://github.com/nestjsx/crud/issues/401))
- **typeorm** - fixed nested relations aliases, filtering, sorting ([#419](https://github.com/nestjsx/crud/issues/419), [#450](https://github.com/nestjsx/crud/issues/450), [#267](https://github.com/nestjsx/crud/issues/267), [#385](https://github.com/nestjsx/crud/issues/385))

## [4.5.0] - 2020-05-01

### Improvements

- **crud** - added enum support for params Swagger. Kudos to @tbrannam

### Bug Fixes

- **crud** - fixed auth property definition. Kudos to @lafeuil
- **typeorm** - fixed request generation with aliases ([#321](https://github.com/nestjsx/crud/issues/321), [#401](https://github.com/nestjsx/crud/issues/401)). Kudos to @joennlae

## [4.4.5] - 2020-04-18

## Deps

- **crud** fixted imports

## [4.4.4] - 2020-04-18

### Deps

- **dev** fixted lerna

## [4.4.3] - 2020-04-18

### Bug Fixes

- **crud** fixed returning `pageCount` in some cases ([#465](https://github.com/nestjsx/crud/pull/465))
- **typeorm** fixed critical bug with possible SQL injections when using query `?sort=` (big kudos to João Maurício)
- **typeorm** fixed filter conditions for LIKE/iLIKE operators ([#395](https://github.com/nestjsx/crud/pull/395))

## [4.4.2] - 2020-03-17

### Bug Fixes

- **crud** fixed custom routes params caused by NestJs v7 breaking changes ([#443](https://github.com/nestjsx/crud/issues/443))

## [4.4.1] - 2019-12-28

### Bug Fixes

- **crud** fixed `CrudRequestInterceptor` validation status code from 500 to 400 ([#374](https://github.com/nestjsx/crud/issues/374), [#247](https://github.com/nestjsx/crud/issues/247))

## [4.4.0] - 2019-12-27

### Features

- **crud** added `serialize` to the global options

## [4.3.0] - 2019-12-21

### Features

- **crud** added `dto` to the `CrudOptions` ([#132](https://github.com/nestjsx/crud/issues/132))
- **crud** added `serialize` to the `CrudOptions`
- **crud** added `search` query param and a new search condition api
- **crud** added new condition operators: `$eqL`, `$neL`, `$startsL`, `$endsL`, `$contL`, `$exclL`, `$inL`, `$notinL` for case insensitive queries ([#77](https://github.com/nestjsx/crud/issues/77))
- **crud** added `@crudAuth()` class decorator for authorized requests

### Improvements

- **crud** `CrudRequestInterceptor` can be used for both crud and non-crud controllers or for custom routes within crud controller
- **crud** support `@nestjs/swagger` major versions: v3 and v4 ([#340](https://github.com/nestjsx/crud/issues/340))
- **crud** added `returnShallow` option to the `CrudOptions.routes` `createOneBase`, `updateOneBase`, `replaceOneBase` methods ([#158](https://github.com/nestjsx/crud/issues/158))
- **crud** added `alias` to the `CrudOptions.join` ([#350](https://github.com/nestjsx/crud/issues/55))
- **crud** added `alwaysPaginate` to the `CrudOptions.query`, can be used globally as well ([#213](https://github.com/nestjsx/crud/issues/213))
- **crud** `CrudOptions.query.filter` can be a function that returns transformed `search` object
- **crud** added `disabled` for an objects withing `CrudOptions.params`
- **request** query builder: now uses [qs](https://www.npmjs.com/package/qs) package
- **request** query builder: `filter` and `or` methods can accept array of filter objects
- **typeorm** changed visibility of all methods ([#226](https://github.com/nestjsx/crud/issues/226))
- **typeorm** use `ILIKE` for PostgreSQL ([#212](https://github.com/nestjsx/crud/issues/212))

### Bug Fixes

- **crud** swagger: fixed response models ([#350](https://github.com/nestjsx/crud/issues/350))
- **crud** swagger: fixed query params ([#196](https://github.com/nestjsx/crud/issues/196))
- **crud** swagger: fixed renamed params ([#283](https://github.com/nestjsx/crud/issues/283))
- **crud** swagger: fixed swagger method decoration on overridden methods
- **crud** query parser: fixed parsing integers when it's a big int
- **typeorm** fixed load embedded entities ([#138](https://github.com/nestjsx/crud/issues/138))
- **typeorm** fixed left join issues ([#31](https://github.com/nestjsx/crud/issues/31), [#98](https://github.com/nestjsx/crud/issues/98))
- **typeorm** fixed composite key joins ([#238](https://github.com/nestjsx/crud/issues/238))
- **typeorm** fixed entity events ([#51](https://github.com/nestjsx/crud/issues/51))
- **typeorm** all methods return entity instances ([#259](https://github.com/nestjsx/crud/issues/259))

## [4.2.0] - 2019-07-26

### Features

- **crud** added support for older versions of `UUID` ([#186])

### Bug Fixes

- **crud** fixed `BulkDto` swagger description ([#159])
- **crud** fixed `CrudRequestInterceptor` request parsing
- **requests** added `@nestjsx/util` as a dependency ([#184])
- **requests** fixed condition operators mapping ([#148])
- **requests** fixed ISO date string validation ([#161])
- **typeorm** fixed filtering and sorting by nested fields ([#105])
- **typeorm** fixed `too many nested levels` exception ([#87])
- **typeorm** fixed pagination `pageCount` ([#179])

### Deps

- **dev** updated deps

## [4.1.0] - 2019-06-27

### Features

- **crud** added `PUT` request handling ([#107])
- **requests** added creating request builder with params ([#131])
- **requests** improved query params naming parsing ([#101])

### Bug Fixes

- **crud** set decorators after Swagger so metadata can be overwritten
- **requests** added support for ISO-8610 date strings

## [4.0.1] - 2019-06-21

### Bug Fixes

- **requests** fixed query parser to properly accept numbers and booleans ([#97])

## [4.0.0] - 2019-06-12

### BREAKING CHANGES

- **crud:** changed `CrudOptions` ([docs](https://github.com/nestjsx/crud/wiki/Controllers#options))
- **crud:** remove decorators: `@ParsedOptions`, `@ParsedParams`, `@ParsedQuery`. Add decorator `@ParsedRequest` instead.
- **crud:** change interfaces
- **services:** remove `RestfulOptions` from services
- **services:** changed base abstract class

### Features

- **repo:** refactor to monorepository
- **docs:** new [documentation](https://github.com/nestjsx/crud/wiki)
- **packages:** totally refactor `@nestjsx/crud` to be service (ORM) agnostic
- **packages:** add `@nestjsx/crud-typeorm` ([docs](https://github.com/nestjsx/crud/wiki/ServiceTypeorm))
- **packages:** add `@nestjsx/crud-request` ([docs](https://github.com/nestjsx/crud/wiki/Requests#description), [#53])
- **crud:** add global options ([docs](https://github.com/nestjsx/crud/wiki/Controllers#global-options), [#64])
- **crud:** add eager relations option ([#54], [#67])

### Bug Fixes

- several fixes

[4.6.2]: https://github.com/nestjsx/crud/compare/v4.6.1...v4.6.2
[4.6.1]: https://github.com/nestjsx/crud/compare/v4.6.0...v4.6.1
[4.6.0]: https://github.com/nestjsx/crud/compare/v4.5.0...v4.6.0
[4.5.0]: https://github.com/nestjsx/crud/compare/v4.4.5...v4.5.0
[4.4.5]: https://github.com/nestjsx/crud/compare/v4.4.4...v4.4.5
[4.4.4]: https://github.com/nestjsx/crud/compare/v4.4.3...v4.4.4
[4.4.3]: https://github.com/nestjsx/crud/compare/v4.4.2...v4.4.3
[4.4.2]: https://github.com/nestjsx/crud/compare/v4.4.1...v4.4.2
[4.4.1]: https://github.com/nestjsx/crud/compare/v4.4.0...v4.4.1
[4.4.0]: https://github.com/nestjsx/crud/compare/v4.3.0...v4.4.0
[4.3.0]: https://github.com/nestjsx/crud/compare/v4.2.0...v4.3.0
[4.2.0]: https://github.com/nestjsx/crud/compare/v4.1.0...v4.2.0
[4.1.0]: https://github.com/nestjsx/crud/compare/v4.0.1...v4.1.0
[4.0.1]: https://github.com/nestjsx/crud/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/nestjsx/crud/compare/v.3.2.0...v4.0.0
[#97]: https://github.com/nestjsx/crud/issues/97
[#53]: https://github.com/nestjsx/crud/issues/53
[#64]: https://github.com/nestjsx/crud/issues/64
[#54]: https://github.com/nestjsx/crud/issues/54
[#67]: https://github.com/nestjsx/crud/issues/67
[#107]: https://github.com/nestjsx/crud/issues/107
[#131]: https://github.com/nestjsx/crud/issues/131
[#101]: https://github.com/nestjsx/crud/issues/101
[#186]: https://github.com/nestjsx/crud/pull/186
[#184]: https://github.com/nestjsx/crud/issues/184
[#148]: https://github.com/nestjsx/crud/issues/148
[#105]: https://github.com/nestjsx/crud/issues/105
[#87]: https://github.com/nestjsx/crud/issues/87
[#159]: https://github.com/nestjsx/crud/issues/159
[#161]: https://github.com/nestjsx/crud/issues/161
[#179]: https://github.com/nestjsx/crud/issues/179
