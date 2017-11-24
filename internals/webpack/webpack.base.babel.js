import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = (options) => ({
  context: path.resolve(process.cwd(), 'src'),
  entry: options.entry,
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '',
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      'node_modules',
    ],
    alias: Object.assign({
      component: path.resolve(process.cwd(), 'src/components'),
      services: path.resolve(process.cwd(), 'src/services'),
    }, options.alias),
  },
  module: {
    rules: options.rules.concat([
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: path.resolve(process.cwd(), 'src'),
        use: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(xml|html|txt|md)$/,
        use: 'raw-loader',
      },
    ]),
  },
  plugins: options.plugins.concat([
    new HtmlWebpackPlugin({
      template: './index.ejs',
      minify: { collapseWhitespace: true },
    }),
  ]),
  devServer: options.devServer,
});
