const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlwebpack = new HtmlWebPackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html' 
})

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlwebpack],
    module: {
        rules: [
          {
            test: /\.(scss)$/,
            use: [
              {
                // Inyecta CSS al DOM con la etiqueta <style>
                loader: 'style-loader'
              },
              {
                // Interpreta @import y url() como import/require()
                loader: 'css-loader'
              },
              {
                // Loader de Webpack para procesar CSS con PostCSS
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              },
              {
                // Carga un archivo Sass/Scss y lo compila a CSS
                loader: 'sass-loader'
              }
            ]
          }
        ]
      }
}