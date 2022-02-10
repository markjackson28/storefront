'use strict';

const Product = (sequelize, DataTypes) => sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  productStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
