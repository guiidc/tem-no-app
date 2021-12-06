import axios from 'axios';

/*
Quando estava utlizando o axios com o endpoint localhost
estava dando CONNECTION_REFUSED,
então alterei o http://localhost:3001
para http://MEU_IP_ATUAL:3001 e não obtive mais problemas,
caso aconteça na rede local ai também é só alterar para o IP como no exemplo acima,
estarei a disposição para qualquer dúvidas... Agradeço pela atenção

*/
const axiosRequest = axios.create({
  baseURL: 'http://localhost:3001',
});

export default axiosRequest;
