import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UpdateProduct from './pages/UpdateProduct';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-product" element={<AddProduct />} />
      <Route exact path="/products/update/:id" element={<UpdateProduct />} />
    </Routes>
  );
}

export default App;
