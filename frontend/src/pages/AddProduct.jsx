import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosRequest from '../utils/axios';

function AddProduct() {
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    axiosRequest.post(
      'products',
      {
        product: e.target.product.value,
        image: e.target.image.value,
        description: e.target.description.value,
      },
    )
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-column">
      <h1 className="title">Adicionar Produto</h1>
      <form className="product-form flex-column" onSubmit={handleAddProduct}>
        <input type="text" placeholder="Nome do produto" name="product" required />
        <input type="text" placeholder="URL da imagem" name="image" required />
        <textarea name="description" placeholder="descrição" required />
        <div className="buttons-container">
          <button type="submit" className="btn bg-green color-white">Salvar</button>
          <div>
            <button className="btn bg-gray" type="button" onClick={() => navigate('/')}>cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
