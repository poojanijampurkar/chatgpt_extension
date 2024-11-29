const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = 'dist';
const entryPoints = {
  'service-worker': path.resolve(__dirname, 'src', 'service-worker.ts'),
  content: path.resolve(__dirname, 'src', 'scripts', 'content.ts'),
  styles: path.resolve(__dirname, 'src', 'styles.css'),
};

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '.',
          to: '.',
          context: 'public',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
