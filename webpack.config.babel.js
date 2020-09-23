/* Configuration file for build using webpack */
import webpack from 'webpack';
import argv from 'webpack-nano/argv';

const mode = argv.mode ?? 'production';
const minimize = argv.min ?? mode === 'production';

export default {
  devtool: false,
  entry: './app.js',
  mode,
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  optimization: {
    minimize,
  },
};
