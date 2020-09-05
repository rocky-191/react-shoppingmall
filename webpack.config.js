const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  mode:'development',
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'app.js'
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
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template:'./src/index.html'
      }
    )
  ]
}