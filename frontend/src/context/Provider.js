import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = {
    products,
    setProducts,
  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
