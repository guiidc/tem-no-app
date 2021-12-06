import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import axiosRequest from '../utils/axios';

function Home() {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    axiosRequest.get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="title">Produtos</h1>
      <h4 className="subtitle">Clique em algum produto da lista para editar</h4>
      <div className="products-list">
        <span className="list-header">Imagem</span>
        <span className="list-header">Produto</span>
        <span className="list-header">Descrição</span>
      </div>
      { products.map((product) => (
        <Link key={product.id} to={`/products/update/${product.id}`} className="products-list">
          <img src={product.image} alt={product.product} className="product-thumb list-item" />
          <span className="product-name list-item overflow-hidden">{ product.product }</span>
          <span className="product-description list-item overflow-hidden">{ product.description }</span>
        </Link>
      ))}
      <Link to="/add-product" className="add-link">Adicionar produto</Link>
    </div>
  );
}
export default Home;
