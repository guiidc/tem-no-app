const { Products } = require('../models');

let errors = [];
function validateData(product, description, image) {
  const code = 400;
  errors = [];
  if (!product) errors.push({ code, error: 'product field is required' });
  if (!description) errors.push({ code, error: 'description field is required' });
  if (!image) errors.push({ code, error: 'image field is required' });
}

async function getProducts() {
  const products = await Products.findAll();
  return products;
}

async function createProduct(product, description, image) {
  validateData(product, description, image);
  if (errors.length) {
    const [error] = errors;
    return error;
  }
  const insertedProduct = await Products.create({ product, description, image });
  return insertedProduct;
}
async function updateProduct(id, product, description, image) {
  const productExists = await Products.findOne({ where: { id } });
  console.log(productExists);

  if (!productExists) {
    return { code: 404, error: 'Product not found' };
  }

  validateData(product, description, image);
  if (errors.length) {
    const [error] = errors;
    return error;
  }
  const updatedProduct = await Products.update({ product, description, image }, { where: { id } });
  return updatedProduct;
}

async function deleteProduct(id) {
  const productExists = await Products.findOne({ where: { id } });
  if (!productExists) {
    return { code: 404, error: 'Product not found' };
  }

  const deletedProduct = await Products.destroy({ where: { id } });
  return deletedProduct;
}
async function getProductById(id) {
  const product = await Products.findOne({ where: { id } });
  if (!product) {
    return { code: 404, error: 'Product not found' };
  }

  return product;
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
