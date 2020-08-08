# [Meronex Icons](https://icons.meronex.com/) 


[![npm][npm-image]][npm-url]
        
[npm-image]: https://img.shields.io/npm/v/@meronex/icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@meronex/icons

Choose from thousands of popular open source SVG icon packs and add them to your React projects easily with `@meronex/icons`.

Meronex icons is a [react-icons](https://github.com/react-icons/react-icons) fork, [read here](#credits-and-motivation-for-the-fork) for credits and fork motivation.

## DEMO & FEATURES

Preview site at [icons.meronex.com](http://icons.meronex.com)

<img src="https://icons.meronex.com/imgs/preview.png" public width="8000" alt="Meronex Icons">

<br/>
<br/>

Icon Library|License|Version
---|---|---
[Font Awesome](https://fontawesome.com/)|[CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)|5.12.1
[Ionicons](https://ionicons.com/)|[MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)|4.5.6
[Material Design icons](http://google.github.io/material-design-icons/)|[Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)|3.0.1
[Material Design Community icons](https://github.com/templarian/MaterialDesign)|[SIL](https://github.com/google/material-design-icons/blob/master/LICENSE)|52442e9e6ea4424c41fb6489911c6f87fe83a7a8
[Typicons](http://s-ings.com/typicons/)|[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)|2.0.9
[Github Octicons icons](https://octicons.github.com/)|[MIT](https://github.com/primer/octicons/blob/master/LICENSE)|8.5.0
[Feather](https://feathericons.com/)|[MIT](https://github.com/feathericons/feather/blob/master/LICENSE)|4.21.0
[Game Icons](https://game-icons.net/)|[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)|a53463d41d4f055fa71097ae74da4c508c9bb09d
[Weather Icons](https://erikflowers.github.io/weather-icons/)|[SIL OFL 1.1](http://scripts.sil.org/OFL)|2.0.10
[Devicons](https://vorillaz.github.io/devicons/)|[MIT](https://opensource.org/licenses/MIT)|1.8.0
[Ant Design Icons](https://github.com/ant-design/ant-design-icons)|[MIT](https://opensource.org/licenses/MIT)|4.0.0
[Bootstrap Icons](https://github.com/twbs/icons)|[MIT](https://opensource.org/licenses/MIT)|1.0.0-alpha3
[Remix Icon](https://github.com/Remix-Design/RemixIcon)|[Apache License Version 2.0](http://www.apache.org/licenses/)|2.3.0
[Flat Color Icons](https://github.com/icons8/flat-color-icons)|[MIT](https://opensource.org/licenses/MIT)|1.0.2
[Grommet-Icons](https://github.com/grommet/grommet-icons)|[Apache License Version 2.0](http://www.apache.org/licenses/)|4.4.0
[css.gg](https://github.com/astrit/css.gg)|[MIT](https://opensource.org/licenses/MIT)| 2.0.0
[IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)|[CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)|1.0.0
[BoxIcons](https://github.com/atisawd/boxicons)|[CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)| 2.0.5
[VS Code Icons](https://github.com/microsoft/vscode-codicons)|[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)| 0.0.1
[flag-icon-css](https://github.com/lipis/flag-icon-css)|[MIT License](https://github.com/lipis/flag-icon-css/blob/master/LICENSE)| 3.5.0
[Logos](https://github.com/gilbarbara/logos)|[CC0 1.0 Universal](https://github.com/gilbarbara/logos/blob/master/LICENSE.txt)|2018.01
[Simple Icons](https://simpleicons.org/)|[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)| 1.17.1-998-gd4b07ad4
[Heroicons](https://github.com/refactoringui/heroicons)|[MIT](https://opensource.org/licenses/MIT)| v0.3.7
[Foundation-Icons-3](https://zurb.com/playground/foundation-icon-fonts-3)|[MIT](https://opensource.org/licenses/MIT)| v3
[Zondicons](https://github.com/dukestreetstudio/zondicons)|[MIT](https://opensource.org/licenses/MIT)| v0.1.0
[Evil Icons](https://github.com/evil-icons/evil-icons)|[MIT](https://opensource.org/licenses/MIT)| 1.10.1
[Open Iconic](https://github.com/iconic/open-iconic)|[MIT](https://opensource.org/licenses/MIT)| v1.1.1
[System Uicons](https://github.com/CoreyGinnivan/system-uicons)|[The Unlicense](https://github.com/CoreyGinnivan/system-uicons/blob/master/LICENSE)| 53a7811705be2aaa37ddbe01fd255225083eed63

**Features**
- Easily add an SVG icon as React component and modify the size, color, style, etc
- Includes the most popular open source SVG icon sets
- Import each icon independently preventing blowing up the bundle size
- Fast search across all the icon packs
 
 **Principles**
 - Include as many useful and popular icon packs,  we don't want to juggle between multiple libraries
 - Maintain backward compatibility, we don't want to refactor all our icons path due to a release 
 - Do not assume tree shaking and allow both default and named exports, this should be left as choice  
 - Do not bloat the node_modules folder and try to keep it within an acceptable range
 - Keep a reference to documentation site for each major release, we don't want to be forced to update because docs changed 
 - Keep the project alive and ensure longevity, refactoring icons is neither fun nor productive
 
## Roadmap 

Check [here](https://github.com/meronex/meronex-icons/blob/master/Roadmap.md).  
 
## Installation

#### Yarn
```bash
yarn add @meronex/icons
```

#### NPM
```bash
npm install @meronex/icons --save
```

## Usage

Default import (use if you don't have tree shaking)

```jsx
import FaBeer from '@meronex/icons/fa/FaBeer';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```
Named import (use with tree shaking)

```jsx
import { FaBeer } from '@meronex/icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```

[View the documentation](https://icons.meronex.com/) for further usage examples and how to use icons from other packages. *NOTE*: each Icon package has it's own subfolder under `@meronex/icons` you import from.

For example, to use an icon from **Material Design**, your import would be: `import  ICON_NAME  from '@meronex/icons/md/ICON_NAME';`

## Configuration

You can configure react-icons props using [React Context API](https://reactjs.org/docs/context.html).

_Requires **React 16.3** or higher._

```jsx
import { IconContext } from "@meronex/icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>
```

| Key         | Default               | Notes                           |
| ----------- | --------------------- | ------------------------------- |
| `color`     | `undefined` (inherit) |                                 |
| `size`      | `1em`                 |                                 |
| `className` | `undefined`           |                                 |
| `style`     | `undefined`           | Can overwrite size and color    |
| `attr`      | `undefined`           | Overwritten by other attributes |
| `title`     | `undefined`           | Icon description for accessibility |


### Adjustment CSS

From version 3, `vertical-align: middle` is not automatically given. Please use IconContext to specify className or specify an inline style.

#### Global Inline Styling

```tsx
<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
```

#### Global `className` Styling

Component

```tsx
<IconContext.Provider value={{ className: 'react-icons' }}>
```

CSS

```css
.react-icons {
  vertical-align: middle;
}
```

### TypeScript native support

Dependencies on `@types/@meronex/icons` can be deleted.

#### Yarn
```bash
yarn remove @types/@meronex/icons
```

#### NPM
```bash
npm remove @types/@meronex/icons
```

## Contributing

### Development

```bash
yarn
yarn submodule  # fetch icon sources
cd packages/react-icons
yarn build
```
This project uses [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/) for the commit messages.
```text
    "build",
    "chore",
    "ci",
    "docs",
    "feat",
    "fix",
    "improve",
    "perf",
    "refactor",
    "revert",
    "style",
    "test",
 ```       
        
### Preview
The preview site is the [`meronex-icons`](https://icons.meronex.com) website, built in [NextJS](https://nextjs.org/).

```bash
cd packages/react-icons
yarn build

cd ../preview
yarn start
```

### Demo
The demo is a [Create React App](https://create-react-app.dev/) boilerplate with `react-icons` added as a dependency for easy testing.

```bash
cd packages/react-icons
yarn build

cd ../demo
yarn start
```

### How to add an icon set

#### 1. Add new git submodule

From the main directory (where this file is located) run the following command:

```bash
cd packages/react-icons	git submodule add --name <name> <git-repo-url-for-the-new-icon-set> packages/react-icons/src/icons/<name>
yarn build	
```

#### 2. Modify **README.md** (this document)
yarn start	
Add the name, URL, and the license link to the table in the `##Icons` section of this file.
Keep the list in alphabetical order.


#### 3. Modify **packages/react-icons/src/icons/index.js**

Add the object with the following structure:

```JavaScript
{
      id: "xy",                                    // Two-letter id
      name: "e.g. Xenon Yellow Icons",             // The full icon set name
      contents: [
        {
          files: path.resolve(__dirname, "<relative-path-to-git-submodule>/<path-to-svg-icons>/<filter>"),
          formatter: name => `Xy${name}`            // So that all icon names from this set will start with "Xy"
        }
      ],
      // URL of the github repo
      projectUrl: "https://github.com/xy/xy-icons",
      license: "Apache License Version 2.0",        // License type
      licenseUrl: "http://www.apache.org/licenses/" // URL of the license definition
}
```

to the `icons` array.

#### 4. Once everything builds and looks right in the preview, create a pull request

## Why React SVG components instead of fonts?

SVG is [supported by all major browsers](http://caniuse.com/#search=svg). With `react-icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.

## Credits and motivation for the fork

This is a fork of [react-icons](https://github.com/react-icons/react-icons) and was created specifically to resolve the bundling size issue [#154, see here](https://github.com/react-icons/react-icons/issues/154).

It was meant to be used temporary until the fix PR merged upstream however due to the lack of activity at the react-icons repo, I have decided to put publish it as it could perhaps save others the patching time and effort I had to go through.

#### Why did you change the logo/theme for the preview site? 

As I said that was initially meant for internal consumption, the bundle issue was a show stopper for us, I've submitted a PR which is not merged yet and this issue has been open for two plus years.
I don't have time/desire to redo the preview site, so I just shared what I have.

Feel free to fork edit and host else where if you need to as I did.

#### What else did you change?

I've merged some open pull requests, added icons and fixed some performance issue with the preview site, more specifically:

- Added Icon Sets
    - flag-icon-css
    - IcoMoon Free
    - Simple Icons
    - Logos
    - VS Code Icons
    - Remix Icons fill
    - Heroicons
    - BoxIcons
    
- Merged open PRs 
    - Remove pId attribute from AI icons [#310](https://github.com/react-icons/react-ic)
    - Add support for stroke-based icons [#284](https://github.com/react-icons/react-icons/pull/284)
    
- Improved the preview site
    - Show the icon set next to the titles
    - Improve search performance by caching results
    - Copy the entire absolute URL so it can be easily inserted
 
#### Do you plan to keep maintaining it?

I'd rather have the changes merged upstream I don't prefer fragmented react community, however I plan to keep this maintained until
react-icons regains momentum. My view on this that if you publish open source, then you've to be responsible for the longevity of it when others depend on it 
and willing to offer a hand, otherwise don't publish at all.

## Related Projects

- forked from [react-icons](https://github.com/react-icons/react-icons)
- [react-svg-morph](https://github.com/gorangajic/react-svg-morph/)

## Licence

MIT

- Icons are taken from the other projects so please check each project licences accordingly.
