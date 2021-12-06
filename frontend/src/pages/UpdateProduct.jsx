import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosRequest from '../utils/axios';

function UpdateProduct() {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const handleChange = ({ target }) => {
    if (target.name === 'product') setNameInput(target.value);
    if (target.name === 'image') setImageInput(target.value);
    if (target.name === 'description') setDescriptionInput(target.value);
  };

  const handleRemoveProduct = () => {
    axiosRequest.delete(`/products/${id}`)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axiosRequest.put(
      `/products/${id}`,
      {
        product: e.target.product.value,
        image: e.target.image.value,
        description: e.target.description.value,
      },
    )
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosRequest.get(`/products/${id}`)
      .then((response) => {
        setNameInput(response.data.product);
        setImageInput(response.data.image);
        setDescriptionInput(response.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex-column">
      <h1 className="title">Atualizar Produto</h1>
      <span className="subtitle">{`ID do produto ${id}`}</span>
      <form className="product-form flex-column" onSubmit={handleUpdateProduct}>
        <input type="text" placeholder="Nome do produto" name="product" onChange={handleChange} value={nameInput} required />
        <input type="text" placeholder="URL da imagem" name="image" onChange={handleChange} value={imageInput} required />
        <textarea name="description" placeholder="descrição" onChange={handleChange} value={descriptionInput} required />
        <div className="buttons-container">
          <button type="submit" className="btn bg-green color-white">Salvar</button>
          <div>
            <button className="btn bg-red color-white" type="button" onClick={handleRemoveProduct}>Excluir</button>
            <button className="btn bg-gray" type="button" onClick={() => navigate('/')}>cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
