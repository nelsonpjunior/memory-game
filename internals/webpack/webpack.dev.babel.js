import path from 'path';
import webpack from 'webpack';

module.exports = require('./webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],
  rules: [],
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: path.resolve(process.cwd(), '/'),
    contentBase: path.resolve(process.cwd(), 'src'),
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    hot: true,
    openPage: '',
    open: true,
  },
});
