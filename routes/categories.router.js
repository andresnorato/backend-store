const express = require('express');


const router = express.Router();


router.get('/', (req, res) => {
  res.json([{
    id: 1,
    name: 'Eletrodomesticos',
  },

  {
    id: 2,
    name: 'Tecnologia'
  },

  {
    id: 3,
    name: 'Cosmeticos'
  }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Electrodomesticos',
  });
});


module.exports =  router;
