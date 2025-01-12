const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {

      const deps = require('./package.json').dependencies

      webpackConfig.output.publicPath = "auto" 

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'TmxMercury',
          filename: 'remoteEntry.js',
          exposes: {
            './TmxMercury': './src/App.tsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
            bootstrap: {
              singleton: true,
              requiredVersion: deps.bootstrap,
            }
          },
        })
      );

      return webpackConfig;
    },
  },
};
