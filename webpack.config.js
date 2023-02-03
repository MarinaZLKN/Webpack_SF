// Import required modules and modifying them into variables
//HWPlugin creates the html-file automatically
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ],
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
    plugins: [
        // for plugin we create a new instance with 2 args:
        new HtmlWebpackPlugin({
            // 1st - path to entry point
            template: path.join(__dirname, 'src', 'template.pug'),
            // 2nd - output file
            filename: 'index.html',
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