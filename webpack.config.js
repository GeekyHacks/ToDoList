const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { mode: 'development',
  entry: { bundle: path.resolve(__dirname, 'src/index.js') },
  output: { path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]' },
  devtool: 'source-map',
  devServer: { static: { directory: path.resolve(__dirname, 'dist') },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true },
  module: { rules: [
    { test: /\.(sass|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] } } },
    // this will load all images
    { test: /\.(png|svg|jpg|jpeg|gif)$/i,
      use: [
        { loader: 'file-loader',
          options: { name: '[name].[ext]',
            outputPath: 'assets/',
            publicPath: '/' } },
      ] },
  ] },
  // this will build the dist html file based on the template file
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html' }),
    // new BundleAnalyzerPlugin(),
  ] };
