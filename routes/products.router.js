const express = require('express');
const ProductsService = require('./../services/products.service');


const router = express.Router();
const service = new ProductsService();

//GET

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});



router.get('/filter', (req, res) => {
  res.send('Soy el filter')
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);
});



//POST
router.post('/', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct
  });
});

//PUT
// router.put('/:id', (req, res) => {
//   const body = req.body;
//   const { id } = req.params;

//   res.json({
//     message: 'Update',
//     data: body,
//     id
//   });
// });

//PATCH
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
