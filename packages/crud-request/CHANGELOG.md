# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.1.0](https://github.com/Samasource/nestjsx-crud/compare/v6.0.0...v6.1.0) (2026-01-14)

**Note:** Version bump only for package @sama/nestjsx-crud-request





# 6.0.0 (2026-01-13)


### Bug Fixes

* **compile:** set up references to ts projects ([730ad02](https://github.com/Samasource/nestjsx-crud/commit/730ad0264d2d7d1f8dbf7d0c69341d8a4357cb1a))
* **crud:** `CrudRequestInterceptor` parse per request only once ([4dd0d28](https://github.com/Samasource/nestjsx-crud/commit/4dd0d28b250e00159688e5f207a97f709b6ab0e9))
* **crud-request:** `CondOperator`'s value is wrong ([430666c](https://github.com/Samasource/nestjsx-crud/commit/430666cba9f0dbebbb6b8eaef9a02216a99f3e4a))
* **crud-request:** incorrect parsing of  integer ids when paramter type is string ([e7824b6](https://github.com/Samasource/nestjsx-crud/commit/e7824b6fbc90135c314e8267ed4a52da7b9d5859))
* **crud-request:** prevent query bigint casted to number in order to prevent dataloss ([64cc2cb](https://github.com/Samasource/nestjsx-crud/commit/64cc2cb9d3e826a53926c5f05ba237207b392bbd))
* **crud-request:** small fix on type SFields definition to make strict=true typescript builds work ([d641be6](https://github.com/Samasource/nestjsx-crud/commit/d641be6a184625d6b0ba2cd407d56076788362ed))
* **crud-request:** updated paramNamesMap ([cf16b68](https://github.com/Samasource/nestjsx-crud/commit/cf16b68a2ed38a9992b2a2ca0ab1c13309da6ec1))
* **crud,typeorm:** updated CrudInterceptor, TypeormService ([7026039](https://github.com/Samasource/nestjsx-crud/commit/702603917e5e3968ae306881ff099a4907eca57a))
* **deps:** dep name ([155f82e](https://github.com/Samasource/nestjsx-crud/commit/155f82e294afe7fa68b4ebb65e0f2e9fb471bd17))
* **jest:** test ts files without build ([53a0db5](https://github.com/Samasource/nestjsx-crud/commit/53a0db5eba7365276ea65d8a1363b975772b6b8a))
* **parser:** Query parser now accept boolean and number values ([9715a03](https://github.com/Samasource/nestjsx-crud/commit/9715a039e7fd3489b60e791a5a8a1cde675f602a))
* **request:** operators validation ([967922c](https://github.com/Samasource/nestjsx-crud/commit/967922c7f090b9280c8130be9825c700a0fba9e1))
* **request:** parser validation with new operators ([7f5e713](https://github.com/Samasource/nestjsx-crud/commit/7f5e713213ec8597fdb391a3cdfd951593a2fdb8))
* **request,typeorm:** added new query search operators for case-insensitive db queries ([299c0ae](https://github.com/Samasource/nestjsx-crud/commit/299c0ae120eaa726e3b27d719c9373f7bfd05a2b)), closes [#77](https://github.com/Samasource/nestjsx-crud/issues/77) [#212](https://github.com/Samasource/nestjsx-crud/issues/212)
* **swagger:** add compatibility with nest swagger v4 ([af6c635](https://github.com/Samasource/nestjsx-crud/commit/af6c63571bcb18f761f79a616ecb71b9509a1ac3)), closes [#79](https://github.com/Samasource/nestjsx-crud/issues/79) [#314](https://github.com/Samasource/nestjsx-crud/issues/314)


### Features

* **crud:** Add soft delete feature. ([f14ecc9](https://github.com/Samasource/nestjsx-crud/commit/f14ecc9238193993cf2002a3e0737c1259b7f02f))
* **crud:** added CrudAuth decorator ([4dfa298](https://github.com/Samasource/nestjsx-crud/commit/4dfa2987a7e0e78b13facd778ee72aa374ed156f)), closes [#229](https://github.com/Samasource/nestjsx-crud/issues/229)
* **crud:** added dto options ([c189bab](https://github.com/Samasource/nestjsx-crud/commit/c189bab17499256316abb2d37d76f1b14c75409c)), closes [#132](https://github.com/Samasource/nestjsx-crud/issues/132)
* **envs:** migrate repo from nestjsx to rewiko ([6570b66](https://github.com/Samasource/nestjsx-crud/commit/6570b66b2e365a5d5cadab428aca9b3198bd50de))
* add custom operators ([48d457d](https://github.com/Samasource/nestjsx-crud/commit/48d457dee532d2a7c65a0db429c347fe713f14c6))
* **crud-request:** added additional uuid rexex ([9a91566](https://github.com/Samasource/nestjsx-crud/commit/9a9156663cf972cbac252e36d23b5d8ec6b3b0bd))
* **crud-request:** added createFromParams method ([d8b279a](https://github.com/Samasource/nestjsx-crud/commit/d8b279a67e458f29c19fc748188ea490b7b988c3))
* **parser:** add support for ISO-8601 date string ([f580ada](https://github.com/Samasource/nestjsx-crud/commit/f580ada9ba367c18d204d22af0b8a86b484ca16e)), closes [#104](https://github.com/Samasource/nestjsx-crud/issues/104)
* **request:** added array type of params, finished tests ([830ff5d](https://github.com/Samasource/nestjsx-crud/commit/830ff5dfa4ac73e9150b1a70019cca2449d13a09))
* **request:** added parsing a search param in query parser ([e5e8072](https://github.com/Samasource/nestjsx-crud/commit/e5e80727335b78313ce097ac6ab7067babead41e))
* **request:** added search method to the query builder, refactored, tests not ready ([30631ae](https://github.com/Samasource/nestjsx-crud/commit/30631ae76c35826ceb38eeb0348c5e1b42f2cc08))
* **request:** new search condition api ([06c3fe5](https://github.com/Samasource/nestjsx-crud/commit/06c3fe5436b60b436a9b100c264054fb5674dacb))
