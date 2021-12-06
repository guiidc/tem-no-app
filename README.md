# Prova TEMNOAPPÊ

## Sobre o projeto
Este projeto é um teste para a empresa TEMNOAPPÊ que consiste em uma lista de cadastro de produtos com CRUD básico.

A API foi construida seguindo o padrão Restful com MSC, que serve as informações para um front-end feito em ReactJS onde os adms conseguem cadastrar, atualizar, ler ou excluir os produtos. Há também um App onde os usuários podem ver a lista de produtos e ler os detalhes.

## Tecnologias utilizadas
### Back-End
- NodeJs
- Express
- MySQL
- Sequelize
- DotEnv

### Front-End Web
- ReactJS
- React Router Dom
- Axios

### App Mobile
- ReactNative
- React Navigation
- Axios


### Instruções Back-End
1. Após clonar o repositório rode o comando `npm install` para instalar as dependências necessárias.
2. Crie uma arquivo .env para setar as variaveis de ambiente a seguir
+ DB_USERNAME= usuário do banco de dados
+ DB_PASSWORD= senha do banco de dados
+ DB_HOST= endereço do banco de dados

3. instale o sequelize-cli com o comando `npm install sequelize-cli -D`
4. Após a instalação do sequelize rode os seguintes comandos para criar as tabelas e o DB necessário 
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. A aplicação roda na porta 3001, certifique-se de que a porta em questão não está sendo utilizada no momento por outra aplicação. Para iniciar o servidor basta digitar o o comando `$ npm run dev` no terminal

### Instruções Front-End
1. Após clonar o repositório execute o comando `npm install` para instalar as dependências necessárias.
2. Verifique se o servidor Back-End está online e execute o comando `npm start` para iniciar a aplicação
3. Obs.: A aplicação front roda na porta 3000 e faz a requisção para o back-end que está na porta 3001. Ao executar verifique se alguma dessas portas não estão sendo usadadas por outros serviços.

### Instruções Para o App
1. Após clonar o repositório execute o comando `yarn install` para instalar as dependências necessárias.
2. Verifique se o servidor Back-End está online e execute o comando `yarn start` para iniciar a aplicação


#### Obs1: Não sei se é devido a minha rede, mas o react-native quando rodado com o NPM acaba corrompendo pacotes, então se possivel procure utilizar o Yarn

#### Obs2: No ReactNative o Axios não conseguia fazer a requisição acusando CONNECTION REFUSED, quando o arquivo AxiosRequest que está no diretório ./mobile/src/utils/axiosRequest.js estava configurado para o end point http://localhost:3001 foi preciso colocar o IP diretamente, ficando assim... http://SEUIP:3001.
