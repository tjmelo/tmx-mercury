const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'TmxMercury',
          filename: 'remoteEntry.js',
          exposes: {
            './TmxMercury': './src/index',
          },
          shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true },
          },
        })
      );

      return webpackConfig;
    },
  },
};
