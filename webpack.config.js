 var path = require('path');
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

 let config = {
     entry: {
	     'app': './index.js'
     },
     output: {
         path: path.resolve(__dirname, 'assets/js/'),
         filename: '[name].js'
     },
     module: {
         loaders: [
         ]
     },
     stats: {
         colors: true
     },
     resolve: {
       alias: {
         'vue$': 'vue/dist/vue.esm.js'
       }
     },
     plugins: [],
     devtool: 'source-map'
 };

 // if(process.env.NODE_ENV == "production") {
 //     config.plugins.push( new UglifyJsPlugin() );
 // }

 // config.plugins.push( new UglifyJsPlugin() );

 module.exports = config;
