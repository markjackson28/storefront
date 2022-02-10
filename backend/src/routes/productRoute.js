'use strict';

const express = require('express');

// Importing Collection 
const  productCollection = require('../models/index').Product;

const router = express.Router();

// Routes
router.get('/product', getProducts);
router.get('/product/:id', getOneProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// Handlers 
async function getProducts(req, res) {
  let allProducts = await productCollection.read();
  res.status(200).json(allProducts);
}

async function getOneProduct(req, res) {
  const id = req.params.id;
  let product = await productCollection.read(id);
  res.status(200).json(product);
}

async function createProduct(req, res) {
  let productObj = req.body;
  let product = await productCollection.create(productObj);
  res.status(200).json(product);
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const productObj = req.body;
  let updatedProduct = await productCollection.update(id, productObj);
  res.status(200).json(updatedProduct);
}

async function deleteProduct(req, res) {
  let id = req.params.id;
  let deletedProduct = await productCollection.delete(id);
  res.status(200).json(deletedProduct);
}

module.exports = router;
