# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/aliogaili/meronex-icons/compare/v2.1.2...v4.0.0) (2020-08-08)


### ⚠ BREAKING CHANGES

* case sensitive elimination of duplicate files to prevent missing modules error ([9c834ea](https://github.com/aliogaili/meronex-icons/commit/9c834ea4c8f1b1daa8f30cf58d370f85e8fec206))
  
  Some build systems will report an error similar to:
  ```
  ./node_modules/@meronex/icons/gi/index.esm.js
  Cannot find file: 'GiIconName.js' does not match the corresponding name on disk: './node_modules/@meronex/icons/gi/GiIconname.js'.
  ```
  The cause of the error is that some  SVG icons are added twice in the original icon source folder such as icon_name.svg and iconname.svg.
  After the name formatting, GiIconName and GIIconname will be considered duplicate and only one file will be created. This fix will
  prevent the processing of icons with a similar name within an icon pack.


### Bug Fixes

* case sensitive elimination of duplicate files to prevent missing modules error 

## [3.0.0](https://github.com/aliogaili/meronex-icons/compare/v2.0.3...v2.1.0) (2020-08-08)


### Features

* include all Remix icons ([f26241d](https://github.com/aliogaili/meronex-icons/commit/f26241ddc631a9884a582382787bd36c9c790d5e))

### [2.0.2](https://github.com/aliogaili/meronex-icons/compare/v2.0.1...v2.0.2) (2020-08-06)

### DOCS
* update README content 


### [2.0.1](https://github.com/aliogaili/meronex-icons/compare/v2.0.0...v2.0.1) (2020-08-04)

### DOCS
* update README content 

## [2.0.0](https://github.com/aliogaili/meronex-icons/compare/v1.4.1...v2.0.0) (2020-08-04)

### ⚠ BREAKING CHANGES

* remove twitter emoji
* rename ```IosIosIconXXXX``` to ```IosIconeXXXX```. In case that you have been using a 1.x.x release, 
if an icon imports breaks such as (IosIosXXXX) icons then you can find those icons again in the latest preview site (or http://icons-v2.meronex.com) and
re-import them again

### Features

* add crypto and entypo ([6051869](https://github.com/aliogaili/meronex-icons/commit/60518693c6eef39eded12b16ffa3f84e96d6482c))
* add foundation icons 3 ([3bee803](https://github.com/aliogaili/meronex-icons/commit/3bee8033af4dd931f077f4daeac1ab582e94ddee))
* add open iconic icon pack ([2077718](https://github.com/aliogaili/meronex-icons/commit/2077718d9373cd929d9564099ad016ff45cc7f25))
* add system uicons ([36caccc](https://github.com/aliogaili/meronex-icons/commit/36cacccf027dc6aaa7d9e579f2e27bf8642a12e7))
* add zondicons pack set ([c99eb7f](https://github.com/aliogaili/meronex-icons/commit/c99eb7f341d8974403a533ec89e044524ac7c034))
* add evil icons pack set ([e9a0b02](https://github.com/aliogaili/meronex-icons/commit/e9a0b02d74025e1d802d2cc71d48f0c6496f1f2d))


### Bug Fixes

* fix the preview path to point to the correct folder ([9db1772](https://github.com/aliogaili/meronex-icons/commit/9db1772b8c03d462966c2efc68ea8ceaf860c0bc))
* remove twitter emoji ([b9865c3](https://github.com/aliogaili/meronex-icons/commit/b9865c375fdd665f06bd4ec347ac3bebf20d7e4e))
* fix undefined object error ([f5c1700](https://github.com/aliogaili/meronex-icons/commit/f5c1700ea20e016611bb770bead222fbf53bbde2))

### [1.4.1](https://github.com/aliogaili/meronex-icons/compare/v1.4.0...v1.4.1) (2020-07-31)


### Bug Fixes

* adjust the fill attribute based on the value defined in the icon set ([873972f](https://github.com/aliogaili/meronex-icons/commit/873972f0db98227a357f1f332bf1130ba97d55b2))
* parse all boxicons icons not just regular folder and fix typos ([2230756](https://github.com/aliogaili/meronex-icons/commit/223075616e73b3321f2842257384cc2dd0446a32))

## [1.4.0](https://github.com/aliogaili/meronex-icons/compare/v1.3.0...v1.4.0) (2020-07-29)


### Features

* add Boxicons ([535c3fa](https://github.com/aliogaili/meronex-icons/commit/535c3fa62b0c86dc1b26462ae41e280e9870e74d))

## [1.3.0](https://github.com/aliogaili/meronex-icons/compare/v1.2.4...v1.3.0) (2020-07-29)


### Features

* add twemoji svg set ([20305ec](https://github.com/aliogaili/meronex-icons/commit/20305ec5106a70e0c3373d33327586a3d4fc9b14))

### [1.2.4](https://github.com/aliogaili/meronex-icons/compare/v1.2.3...v1.2.4) (2020-07-29)

### Features

* add css.gg icons ([b9a3f51](https://github.com/aliogaili/meronex-icons/commit/b9a3f519206fec93ec771a18f73897fa4785333b))
* add fill for remix icons ([c092a89](https://github.com/aliogaili/meronex-icons/commit/c092a89297adc8148b2320a4968aacc75cafa7d9))
* add flag-icon-css and add logos, fix the fill issue, add a delay for getIcons.ts adn cache it. ([33220fc](https://github.com/aliogaili/meronex-icons/commit/33220fc50b076959a43ca606579a011081a2f1ba))
* add Material Community Icons ([2e7f1cb](https://github.com/aliogaili/meronex-icons/commit/2e7f1cb3d9420d8aff62a065231070e40b5695d9))
* add more icon sets and updated the preview theme ([f7fd43e](https://github.com/aliogaili/meronex-icons/commit/f7fd43e0f4f21eea009102b5f24a0c3f735eb742))
* add support for a stroke based icons ([3d93316](https://github.com/aliogaili/meronex-icons/commit/3d933169968ecd997c9214525d4fbd5a50308602))
* allow absolute import ([0e10a28](https://github.com/aliogaili/meronex-icons/commit/0e10a280b20291ebdcb1a4e74f37a845d33eaa1f))


### Bug Fixes

* **icons:**  adjust the fill color from none to current when specified at the svg tag ([3591511](https://github.com/aliogaili/meronex-icons/commit/3591511c687ab24e6abb44a4a517fd73aaa484dc))
* fix some styling colors ([7b93605](https://github.com/aliogaili/meronex-icons/commit/7b936057fb04e30a49b40890d5a6e0676dfa6402))
* remove pId attribute see https://github.com/react-icons/react-icons/pull/310 ([91352d5](https://github.com/aliogaili/meronex-icons/commit/91352d59cad701bd69d3a83934c0b2019f95cd0d))
*fix undefined error in the preview ([98f474d](https://github.com/aliogaili/meronex-icons/commit/98f474d2e977f5de9553cffb53a55343c00c3acf))
