// Import required modules and modifying them into variables
//HWPlugin creates the html-file automatically
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        // for plugin we create a new instance with 2 args:
        new HtmlWebpackPlugin({
            // 1st - path to entry point
            template: path.join(__dirname, 'src', 'template.html'),
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