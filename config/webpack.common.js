
import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
        name: 'TmxMercury',
        filename: 'remoteEntry.js',
        exposes: {
          './Mercury': './src/index',
        },
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: './public/favicon.png' }
      ]
    })
  ],
};

export default commonConfig;