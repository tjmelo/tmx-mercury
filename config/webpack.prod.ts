const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
});
