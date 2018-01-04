const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host,
    port,
    historyApiFallback: true,
    contentBase: './',
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.babelLoader = () => ({
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, '../src'),
        path.join(__dirname, '../node_modules/redux-subscriptions'),
        path.join(__dirname, '../node_modules/object-difference'),
      ],
    }],
  },
});

exports.cssLoader = () => ({
  module: {
    rules: [{
      use: ['style-loader', 'css-loader'],
      test: /\.css$/,
    }],
  },
})

exports.devTools = () => ({
  devtool: 'eval-source-map',
});

exports.uglifyJsPlugin = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
});

exports.html200 = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '200.html',
    }),
  ],
});

exports.output = (placeholder = 'hash') => ({
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: `[name].[${placeholder}].js`,
    publicPath: '/',
  },
});

exports.extractCSS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: 'styles.[chunkhash].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()],
  },
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include,
        exclude,
        use: [
          {
            loader: 'url-loader',
            options,
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
});

exports.loadFonts = ({include, exclude, options} = {}) => ({
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,
        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
});
