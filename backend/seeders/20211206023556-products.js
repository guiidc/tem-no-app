'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        product: 'Smart Tv Led 32\'\' Samsung Tizen Hd 32t4300 2020 - Wifi, Hdr Para Brilho E Contraste Com Plataforma Tizen 2 Hdmi 1 Usb - Preta',
        description: 'Acesse suas músicas, filmes, notícias, jogos e redes sociais tudo em uma única tela, com o sistema operacional TIZEN.',
        image: 'https://images-submarino.b2w.io/produtos/01/00/img/1618074/6/1618074634_1GG.jpg'
      },
      {
        product: 'Notebook Samsung Book Np550xda-Kf2br Intel Core I5-1135g7 8gb 256gb Ssd (Intel Iris Xe) Tela 15.6\'\' Windows 10 Fhd - Cinza Chumbo',
        description: 'Experimente a performance de um processador que gerencia tarefas e interliga memórias mais rapidamente com menor consumo de energia. Com maior autonomia de bateria, maior potência, maior velocidade quando comparado aos modelos de 10ª geração Intel Core',
        image: 'https://images-submarino.b2w.io/produtos/01/00/img/3081358/9/3081358919_1GG.jpg'
      },
      {
        product: 'Cyber Punk 2077 XONE',
        description: 'Cyberpunk 2077 é uma história de ação e aventura em mundo aberto que se passa em Night City, uma megalópole obcecada pelo poder, glamour e modificações biológicas. Você controla V, um mercenário fora da lei em busca de um implante sem igual, que carrega o segredo da imortalidade.',
        image: 'https://images-submarino.b2w.io/produtos/01/00/img/1466225/2/1466225210_1SZ.jpg'
      },
      {
        product: 'Smartphone Samsung Galaxy S20 Fe 128gb 4g Wi-Fi Tela 6.5\'\' Dual Chip 6gb Ram Câmera Tripla + Selfie 32mp - Cloud Navy',
        description: 'O Smartphone Samsung Galaxy S20 Fe é completo e perfeito para você que não abre mão de ter um item tecnológico sempre por perto. Com acabamento elegante e design sofisticado, possui display infinito FHD de 6.5 polegadas.',
        image: 'https://images-submarino.b2w.io/produtos/01/00/img/3234381/2/3234381205_1GG.jpg'
      },
      {
        product: 'Fone De Ouvido Bluetooth Jbl Tune 500bt Preto',
        description: 'Descrição jbl tune 500BT Os Fones jbl TUNE500BT permitem-lhe transmitir um som potente e com exelente qualidade durante 16 horas de puro prazer. Fácil de usar e equipado com drivers jbl de 32 mm e som jbl Pure Bass.',
        image: 'https://images-submarino.b2w.io/produtos/51486515/imagens/fone-de-ouvido-bluetooth-jbl-tune-500bt-preto/51486515_1_large.jpg'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('People', null, {});
  }
};
