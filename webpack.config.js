const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'index_bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8081',
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node-modules',
      },
      {
        test: /\.module\.scss$/,
        sideEffects: true,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {},
          },
          'url-loader',
        ],
      },

      {
        test: /\.png$/i,
        issuer: /\.[jt]sx?$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '#components': path.resolve(process.cwd(), './src/components'),
      '#assets': path.resolve(process.cwd(), './src/assets'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './public/favicon.ico',
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}

module.exports = config
