const productService = require('../services/productService');

async function getProducts(req, res) {
  const products = await productService.getProducts();
  return res.status(200).json(products);
}

async function createProduct(req, res) {
  const { product, description, image } = req.body;
  const insertedProduct = await productService.createProduct(product, description, image);
  if (insertedProduct.error) {
    return res.status(insertedProduct.code).json({ message: insertedProduct.error });
  }
  return res.status(201).json(insertedProduct);
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { product, description, image } = req.body;
  const updatedProduct = await productService.updateProduct(id, product, description, image);
  if (updatedProduct.error) {
    return res.status(updatedProduct.code).json({ message: updatedProduct.error });
  }
  return res.status(200).json(updatedProduct);
}
async function deleteProduct(req, res) {
  const { id } = req.params;
  const deletedProduct = await productService.deleteProduct(id);
  if (deletedProduct.error) {
    return res.status(deletedProduct.code).json({ message: deletedProduct.error });
  }
  return res.status(200).json(deletedProduct);
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
