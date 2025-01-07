
import { merge } from 'webpack-merge'
import commonConfig from './webpack.common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 3000,
    static: {
      directory: '../build',
    },
  },
});

export default devConfig;