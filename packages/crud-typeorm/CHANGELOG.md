# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.1.0](https://github.com/Samasource/nestjsx-crud/compare/v6.0.0...v6.1.0) (2026-01-14)


### Bug Fixes

* **crud-typeorm:** TypeOrmCrudBaseService: Backport additional changes from accounts-backend be ([b46e908](https://github.com/Samasource/nestjsx-crud/commit/b46e9083d672f12dda06b63d1c0356ddcb23ca00))
* **deps:** bump prettier version ([06509c2](https://github.com/Samasource/nestjsx-crud/commit/06509c22871f6cf3c390e6d23aae8be92757183e))


### Features

* **crud-typeorm:** Add TypeOrmCrudBaseService that improves TypeOrmCrudService from original repo ([6f350bf](https://github.com/Samasource/nestjsx-crud/commit/6f350bf32b81cb1559d04f55449ae5d1fb057c84))





# 6.0.0 (2026-01-13)


### Bug Fixes

* **crud-typeorm:** duplicate column selection ([638c629](https://github.com/Samasource/nestjsx-crud/commit/638c62968ad122c47902c4b120684d04a7d8eed1))
* use `offset` instead of `skip` ([95b61ef](https://github.com/Samasource/nestjsx-crud/commit/95b61efa57f8190a2cbbd96fdb408ca095b55ee8))
* **#138:** Load embedded entities ([6778ef4](https://github.com/Samasource/nestjsx-crud/commit/6778ef49da07b1d4eada12d702945a688d5b60b6)), closes [#138](https://github.com/Samasource/nestjsx-crud/issues/138)
* **cache:** set test cache to 0 ([fbbfcbf](https://github.com/Samasource/nestjsx-crud/commit/fbbfcbfe4a93969b1473a8b8f76616cc3cf0c817))
* **compile:** set up references to ts projects ([730ad02](https://github.com/Samasource/nestjsx-crud/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud:** add cache tests ([3e8c0b5](https://github.com/Samasource/nestjsx-crud/commit/3e8c0b5f513da52171eabf90be279e6e3ff6f5ef))
* **crud:** Remove unnecessary comments. ([bbc24cf](https://github.com/Samasource/nestjsx-crud/commit/bbc24cf532e695dd2b8852523149961d96c26b6c))
* **crud:** TypeOrm Cache was not working ([4b2ea4d](https://github.com/Samasource/nestjsx-crud/commit/4b2ea4dcee7caa6eb07c8a6e6cca6cbe61ad34e8))
* **crud:** using metadata to update entities based on primary key instead of "found" ([580c19a](https://github.com/Samasource/nestjsx-crud/commit/580c19a6aa207ac36f9bac23974a399768391411))
* **crud-cache:** Do not use cache for update and deletion of ressources ([84f5370](https://github.com/Samasource/nestjsx-crud/commit/84f5370f9d3d29973cd073da6e6ef9e0be0bbf2d))
* **crud-typeorm:** bug ability to use search and filter features with nested entities ([041f761](https://github.com/Samasource/nestjsx-crud/commit/041f7617ce85dca990eea929d7fea83f1788e62f))
* **crud-typeorm:** prevent sql injection in order by ([cffac90](https://github.com/Samasource/nestjsx-crud/commit/cffac90b2353c327833b3ed3333114162bf3f978))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/Samasource/nestjsx-crud/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **deps:** upgrade all dependencies and added resolutions to resolve vulnerabilities ([6a91f58](https://github.com/Samasource/nestjsx-crud/commit/6a91f58b6c64b469e110455cff39efa23a844a09))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/Samasource/nestjsx-crud/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/Samasource/nestjsx-crud/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/Samasource/nestjsx-crud/issues/77) [#212](https://github.com/Samasource/nestjsx-crud/issues/212)
* **typeorm:**  composite key join ([307873b](https://github.com/Samasource/nestjsx-crud/commit/307873b7af546a2a4ec690b631c2ccde26531010))
* **typeorm:** added alias to joinOption ([dbf7619](https://github.com/Samasource/nestjsx-crud/commit/dbf76197a47a3334ed30a303ec8a94b48c39c72a)), closes [#55](https://github.com/Samasource/nestjsx-crud/issues/55)
* **typeorm:** added DeepPartial for dto ([f54ea53](https://github.com/Samasource/nestjsx-crud/commit/f54ea53073613b0229e7797c8d8bda809e129d86)), closes [#59](https://github.com/Samasource/nestjsx-crud/issues/59)
* **typeorm:** changed joined propertyName to propertyPath ([511a340](https://github.com/Samasource/nestjsx-crud/commit/511a340e4ae5de91e2a0da19841022805f772f9f))
* **typeorm:** changed methods visibility ([2561bf2](https://github.com/Samasource/nestjsx-crud/commit/2561bf252954a9362620e329ce8c2bf05d6cc9ec))
* **typeorm:** entity events ([799b0c9](https://github.com/Samasource/nestjsx-crud/commit/799b0c9c45bf988eda66eff2e755b3dbff14ecd2)), closes [#51](https://github.com/Samasource/nestjsx-crud/issues/51)
* **typeorm:** fixed join select fields ([b19f50e](https://github.com/Samasource/nestjsx-crud/commit/b19f50e76e4bb35e5eaab64bc591062162da7d46))
* **typeorm:** fixed left join by default ([3307348](https://github.com/Samasource/nestjsx-crud/commit/3307348f7b12c24288a33d00964ef46b79d05fa7)), closes [#31](https://github.com/Samasource/nestjsx-crud/issues/31) [#98](https://github.com/Samasource/nestjsx-crud/issues/98)
* **typeorm:** query wrong generated ([353e902](https://github.com/Samasource/nestjsx-crud/commit/353e9028f331036532a01dc5d791f74d6305f276))
* **typeorm:** updated column name in search query ([35d44c7](https://github.com/Samasource/nestjsx-crud/commit/35d44c74a3658a93f16d166b35bb1360c3c95b7a))
* **typeorm:** updated joining relations and column identifier ([4a85b24](https://github.com/Samasource/nestjsx-crud/commit/4a85b242221efa2e4f55afe876fb51aa76e4e346))
* **typeorm-crud:** add warning when using disallowed relation ([b5f05c7](https://github.com/Samasource/nestjsx-crud/commit/b5f05c76130876b1fd1aa53dc3a5659885ff0fb9))
* **typeorm-crud:** fix sql injection check looping on the first regex ([91e2bae](https://github.com/Samasource/nestjsx-crud/commit/91e2baec0445e0a360210029bd29c10eb16ec9d8))
* **typeorm-crud): fix(typeorm:** correct quotes for column identifiers when driver is mariadb ([bd28914](https://github.com/Samasource/nestjsx-crud/commit/bd28914b9f5637053958632d7d5bac1c0bca30e6))


### Features

* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/Samasource/nestjsx-crud/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **envs:** migrate repo from nestjsx to rewiko ([6570b66](https://github.com/Samasource/nestjsx-crud/commit/6570b66b2e365a5d5cadab428aca9b3198bd50de))
* add custom operators ([48d457d](https://github.com/Samasource/nestjsx-crud/commit/48d457dee532d2a7c65a0db429c347fe713f14c6))
* composite primary key ([796b0ce](https://github.com/Samasource/nestjsx-crud/commit/796b0ce946c44f93e652e97eeb453611a849b692))
* **crud:** added count binding to typeorm crud ([014fa28](https://github.com/Samasource/nestjsx-crud/commit/014fa28e2c6e98a9d8ef7c1dbc71ac833b5209bb))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/Samasource/nestjsx-crud/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/Samasource/nestjsx-crud/issues/229)
* **crud:** added swagger responses, updated response interceptor ([1594948](https://github.com/Samasource/nestjsx-crud/commit/1594948069b272601e3129dd1e3541bca45fb845))
* **crud:** updated CrudResponseInterceptor\ ([8eeab37](https://github.com/Samasource/nestjsx-crud/commit/8eeab37658f260f18696e11902fcaa5243895e91))
* **crud-routes:** Add replaceOne method ([d4e7fac](https://github.com/Samasource/nestjsx-crud/commit/d4e7fac74f3c7a14962c8fdba3cd8b50b5179731)), closes [#107](https://github.com/Samasource/nestjsx-crud/issues/107)
* **crud-typeorm:** Add allowParamsOverride to replaceOne ([dbe4212](https://github.com/Samasource/nestjsx-crud/commit/dbe4212f214162e5bac00443d04135320ebceb73))
* **crud-typeorm:** Adds alwaysPaginate global option and makes pagination default ([27192db](https://github.com/Samasource/nestjsx-crud/commit/27192db563b93be2469ac6069b50c0e017344b2e)), closes [#213](https://github.com/Samasource/nestjsx-crud/issues/213)
* **crud-typeorm:** extract methods ([9f3adc7](https://github.com/Samasource/nestjsx-crud/commit/9f3adc72b7ca10aadeb5d63a333c7307b222351d))
* **crud-typeorm:** sort can use nested fields ([a35ec51](https://github.com/Samasource/nestjsx-crud/commit/a35ec51fb9d7728984c844b976b44990d9282283))
* **crud,typeorm:** added returnShallow option to createOneBase ([4df0f66](https://github.com/Samasource/nestjsx-crud/commit/4df0f660d8483c623b46ec35fe6ea6d7e0e657f9))
* **crud,typeorm:** fixed PR with alwaysPaginate feature ([f0f00b8](https://github.com/Samasource/nestjsx-crud/commit/f0f00b8bdbd0149502973c428fb5a5b3ed50eebc))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/Samasource/nestjsx-crud/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/Samasource/nestjsx-crud/issues/104)
* **request:** new search condition api ([06c3fe5](https://github.com/Samasource/nestjsx-crud/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
* **typeorm:** added returnShallow for updateOne and replaceOne ([2344c24](https://github.com/Samasource/nestjsx-crud/commit/2344c245390f94d310c4f90bc93e4025ab5fe352)), closes [#158](https://github.com/Samasource/nestjsx-crud/issues/158)
* **typeorm:** added set builder contitions when search param ([39ec9f5](https://github.com/Samasource/nestjsx-crud/commit/39ec9f53d4f5a69aaa6122230682daeb1967405f))
* **typeorm:** use search conditions with mandatory filters from options ([cf06e82](https://github.com/Samasource/nestjsx-crud/commit/cf06e8271ab4cbe3b579232328315987700a03f9))


### Reverts

* Revert "Update typeorm-crud.service.ts" ([60f5cd0](https://github.com/Samasource/nestjsx-crud/commit/60f5cd08fad608f86c7aebf2966a98f96767ec53))


### BREAKING CHANGES

* **crud-typeorm:** getManyBase now returns a paginated result by default unless opted out by setting
`alwaysPaginate: false`
