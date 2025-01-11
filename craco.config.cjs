const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      
      webpackConfig.output.publicPath =
        env === "production"
          ? "https://tjmelo.github.io/tmx-mercury/" // Production CDN URL
          : "http://localhost:3000/tmx-mercury/"; 

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'TmxMercury',
          filename: 'remoteEntry.js',
          exposes: {
            './index': './src/index.tsx',
          },
          shared: {
            react: {
              singleton: true,
            },
            'react-dom': {
              singleton: true,
            },
          },
        })
      );

      return webpackConfig;
    },
  },
};
