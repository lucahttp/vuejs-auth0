const webpack = require("webpack");

module.exports = {
  devServer: {
    //port: 3000,
    //proxy: "https://apim-flask-stocks.azure-api.net/"
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
