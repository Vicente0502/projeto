const path = require('path');

module.exports = {
  entry: {
    main: './src/script.js', // Arquivo de entrada principal
    swiper: './src/swiper-bundle.min.js' // Arquivo de entrada do swiper
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: '[name].bundle.js' // Nome do arquivo de saída
  },
};
