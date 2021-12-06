module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      product: DataTypes.STRING,
      description: DataTypes.STRING(500),
      image: DataTypes.STRING,
    },
    {
      tableName: 'products',
    },
  );

  return Products;
};
