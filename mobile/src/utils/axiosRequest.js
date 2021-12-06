import axios from 'axios';

/*
Quando estava utlizando o axios com o endpoint localhost
estava dando CONNECTION_REFUSED,
então alterei o http://localhost:3001
para http://MEU_IP_ATUAL:3001

*/
const axiosRequest = axios.create({
  baseURL: 'http://10.0.0.104:3001',
});

export default axiosRequest;
