const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src:  path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist')
}

module.exports = {
    context: PATHS.src,
    devtool: 'source-map',
    entry:   './app.js',
    output:  {
        path:     PATHS.dist,
        filename: '[name].bundle.js'
    },
    module:  {
        rules: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                use:     [{
                    loader:  'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'react'
                        ]
                    }
                }]
            },
            {
                test:    /\.scss$/,
                exclude: /node_modules/,
                use:     [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [PATHS.src, 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:    'new project',
            template: './index.html',
            filename: 'index.html',
            inject:   'body',
            hash:     false,
            //   minify:   {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // }
        })
    ]
}


// module.exports = {
//   entry: './src/assets/scripts/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: outputPath
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.js$/, 
//         exclude: /(node_modules|bower_components)/, 
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ['env', 'stage-0'],
//           },
//         },
//       },
//     ]
//   }
// };

