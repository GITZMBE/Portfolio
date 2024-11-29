const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /.*\.map$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|webp|js|jsx)$/i,
        enforce: 'pre',
        use: [
          'source-map-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ],
        include: [
          path.join(__dirname, '..', 'public'),
        ],
        exclude: [/node_modules\/@prisma\/client/],
      },
    ],
  },
};
