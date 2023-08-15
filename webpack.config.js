const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    publicPath: '/'
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};