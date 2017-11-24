import path from 'path';
import webpack from 'webpack';

const ENV = process.env.NODE_ENV;

module.exports = require('./webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],
  rules: [],
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false,
      },
    }),
  ],
  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
});
