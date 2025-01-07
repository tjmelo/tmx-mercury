
import { merge } from 'webpack-merge'
import path from 'path';
import { fileURLToPath } from 'url';
import commonConfig from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
});

export default devConfig;