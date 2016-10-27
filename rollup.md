首先安装babel
```
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-plugin-external-helpers
npm install --save-dev babelrc-rollup
```

然后安装rollup与rollup babel插件
```
$ npm install --save-dev rollup
$ npm install --save-dev rollup-plugin-babel
# Instead of the es2015 preset
$ npm install --save-dev babel-preset-es2015-rollup
```

接着编写rollup配置文件
```js
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
    entry: './src/core/index.js',
    plugins: [babel(babelrc())],
    format: 'umd',
    dest: './dist/ux.js',
    moduleName: 'UX'
};
```