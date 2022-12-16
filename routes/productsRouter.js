const express = require('express');
const ProductsService = require('../services/product.Service');
const validatorHandler = require('../middleware/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const serviceProduct = new ProductsService();

//GET

router.get('/', async (req, res) => {
  const products = await serviceProduct.find();
  res.status(200).json(products);
});


router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await serviceProduct.findOne(id);
    res.status(200).json(product)
  } catch (error) {
    next(error);
  }
});

//POST
router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await serviceProduct.create(body);
    res.json(newProduct);
  } catch (err) {
    res.status(409).json({
      message: err.message
    })
  }
});


// PUT, PATCH
router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await serviceProduct.update(id, body);
    res.status(200).json(product);
  }
  catch (err) {
    next(err);
  }
});


//DELETE
router.delete('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params
    const rta = await serviceProduct.delete(id)
    res.json(rta);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
