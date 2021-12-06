const routes = require('express').Router();

const productController = require('./src/controllers/productController');

routes.get('/products', productController.getProducts);
routes.post('/products', productController.createProduct);
routes.put('/products/:id', productController.updateProduct);
routes.delete('/products/:id', productController.deleteProduct);

module.exports = routes;
