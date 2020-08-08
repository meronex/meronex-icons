# Roadmap

**Project Principles & Philosophy**
- Include as many useful and popular icon packs,  we don't want to juggle between multiple libraries
- Maintain backward compatibility, we don't want to refactor all our icons path due to a release 
- Do not assume tree shaking and allow both default and named exports, this should be left as choice  
- Do not bloat the node_modules folder and try to keep it within an acceptable range
- Keep a reference to documentation site for each major release, we don't want to be forced to update because docs changed 
- Keep the project alive and ensure longevity, refactoring icons is neither fun nor productive

**LTS & Release Management**

- Latest preview site: https://icons.meronex.com
- v3.x.x: https://icons-v3.meronex.com
- v2.x.x: https://icons-v2.meronex.com

The aim is to keep the version specific site up as a reference even after a major release for those who want to hold
on updating to latest.

What results in a major release?

1. Icon(s) added
2. Icon(s) removed
3. Icon(s) changed 

A major release implies one or more icons have been changed thus requiring a new version of the preview site. 

**vNext** 

- feat(icons): add [spectrum icons](https://lachlanjc.com/spectrum-icons/)
- feat(preview): implement analyze on the copied icons, how many copied per pack, so we can get an idea of 
which packs are we using the most and then optimize 
- feat(preview): make the copy code string configurable depending on the icons being imported
- feat: better typescript support
- perf: allow adding individual packs such as ```@meronex/icons-fa``` this will allow for lighters 
node_modules
- refactor: remove references for react_icons npm from the demo and preview site
- refactor: remove references netlify since surged is used instead
 

