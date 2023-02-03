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
};