About Vue CLI - https://cli.vuejs.org/ru/guide/

About SASS - https://sass-lang.com/guide

You can install other pre or post css processors - https://cli.vuejs.org/ru/guide/css.html

Google JavaScript Style Guide - https://google.github.io/styleguide/jsguide.html

Какие существуют возможности для документирования кода - https://jsdoc.app/

##### Project setup
```text
npm install
```

##### Compiles and hot-reloads for development
```text
npm run serve
```

##### Compiles and minifies for qa
```text
npm run build:qa
```

##### Compiles and minifies for production
```text
npm run build:prod
```

##### Lints and fixes files
```text
npm run lint
```

##### Customize configuration (vue.config.js)
See [Configuration Reference](https://cli.vuejs.org/config/).

##### How update npm packages
https://www.hostingadvice.com/how-to/update-npm-packages/
```text
npm install -g npm-check-updates
npm outdated

ncu -u
npm install
```

##### Environment Variables in VS
Для того что бы Environment Variables применились в VS необходимо остановить node.js
```text
taskkill /f /im node.exe
```