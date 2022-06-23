const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
//bringing webpack's methods and properties into the config file. 
const webpack  = require("webpack");


//create the main configuration object within our file. Options within this object tell webpack what to do. 
module.exports = {
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode.

  //The entry point is the root of the bundle and the beginning of the dependency graph
  entry: './assets/js/script.js',

  // entry code will be bundled and output to a folder that we specify.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  //if we want webpack to now use the jQuery package, we need to use a plugin to let webpack know
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    })
  ],
  mode: 'development'
}