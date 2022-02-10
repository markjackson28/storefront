'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.NODE_ENV === 'production'
    // had to add this for heroku could use db
    ? process.env.HEROKU_POSTGRESQL_MAUVE_URL
    : process.env.DATABASE_URL;

// Importing Schema's and Collections
const Collection = require('./lib/collection');
const productSchema = require('./product.schema');

const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

// This turns the schema's into sequelize models  
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const productModel = productSchema(sequelize, DataTypes);

// This turns models into Collections
const productCollection = new Collection(productModel);

module.exports = {
  db: sequelize,
  Product: productCollection,
};

