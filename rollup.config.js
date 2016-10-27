import babel from 'rollup-plugin-babel';
import es2015Rollup from 'babel-preset-es2015-rollup';
import babelrc from 'babelrc-rollup';
export default {
    entry: './src/core/index.js',
    plugins: [babel(babelrc())],
    format: 'umd',
    dest: './dist/ux.js',
    moduleName: 'UX'
};