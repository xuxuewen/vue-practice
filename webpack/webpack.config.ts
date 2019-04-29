import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

import {VueLoaderPlugin} from 'vue-loader/lib';

/** 配置函数入参声明 */
interface Env {
  mode:'dev'|'prod'
}

/** webpack config */
const config:webpack.Configuration = {
  entry:path.resolve(__dirname,'../src/main.js'),
  module:{
    rules:[
      /** vue component resolve */
      {
        test:/\.vue$/,
        exclude:/node_modules/,
        use:{
          loader:'vue-loader',
          options:{}
        }
      },
      /** js loader */
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              ["@babel/preset-env",{

              }]
            ]
          }
        }
      },
      /** less loader */
      {
        test:/\.less$/,
        use:[
          {
            loader:'style-loader',
            options:{}
          },
          {
            loader:'css-loader',
            options:{
              modules:true,
              localIdentName: '[path][name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader:'less-loader',
            options:{}
          }
        ]
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader',
            options:{}
          },
          {
            loader:'css-loader',
            // options:{
            //   modules:true,
            //   localIdentName: '[path][name]_[local]_[hash:base64:5]'
            // }
          },
          // {
          //   loader:'less-loader',
          //   options:{}
          // }
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options:{
          limit:1024
        }
      },
    ]
  },
  // plugin
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../src/index.html')
    })
  ],
  // devServer
  devServer:{
    port: 3000
  }
}

export default function(env:Env){
  config.mode = env.mode=='dev'?'development':'production';
  return config
}