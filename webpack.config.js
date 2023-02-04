// Import required modules and modifying them into variables
//HWPlugin creates the html-file automatically
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//to extract css from files(will create a main.css file in dist with css code)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    // //entry point
    // entry: path.join(__dirname, 'src', 'index.html'),
    //     // output point
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //         /* [contenthash] - шаблон, в который подставляется хеш, сгенерированный на основе содержимого файла.
    //         Хеширование меняет имя после каждого изменения содержимого файла. Это решает проблему версионирования.
    //         Если хеш изменился, то браузер берет не старый файл из кеша, а загружает измененный с сервера.
    //         Можно сократить 40 знаков хеша до нужного количества символов следующим образом: [contenthash:8].
    //         Хеш будет длиной 8 символов. */
    //     filename: 'index.[contenthash].js',
    // },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    // просим pug-loader расставить отступы и переносы строк
                    pretty: true,
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        // for plugin we create a new instance with 2 args:
        new HtmlWebpackPlugin({
            // 1st - path to entry point
            template: path.join(__dirname, 'src', 'template.pug'),
            // 2nd - output file
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    //Two args for DevServer:
    devServer: {
        /* 1st - 'scr' - the catalouge which is going to be supervised and if it to be changed - server will
        automatically repack the project and refresh the browser */
        watchFiles: path.join(__dirname, 'src'),
        // port for work
        port: 9000,
    },
};