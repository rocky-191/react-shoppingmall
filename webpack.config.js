const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  mode:'development',
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/app.js'
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test:/\.s[ac]ss$/i,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.(png|jpg|gif)$/i,
        use:[{
          loader:'url-loader',
          options:{
            limit:8192,
            name:'assets/image/[name].[ext]'
          }
        }]
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf|svg)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:8192,
            name:'assets/font/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        template:'./src/index.html'
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: '[id].css',
    })
  ]
}