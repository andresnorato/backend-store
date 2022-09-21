const express = require('express');
const faker = require('faker');


const app = express();
const port = 3001;

//ROUTING EN EXPRESS

app.get('/', (req, res) => {
  res.send('Servidor corriendo ');
});


app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Soy el filter')
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1000
  });
});


app.get('/categories', (req, res) => {
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


app.get('/category/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Electrodomesticos',
  });
});


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros opcionales')
  }

  // res.json([
  //   {
  //     name: 'Andres',
  //     age: 15,
  //     email: 'carnorat@gmail.com',
  //   },
  //   {
  //     name: 'Alejandra',
  //     age: 15,
  //     email: 'carnorat@gmail.com',
  //   },
  //   {
  //     name: 'Camilo',
  //     age: 15,
  //     email: 'carnorat@gmail.com',
  //   }
  // ])
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Andres',
    email: 'carnorat@gmail.com',
    age: 10
  })
})


app.listen(port, () => {
  console.log('Mi port' + port);
});



































// app.get('/categories/:categoryId/products/:id', (req, res) => {
//   const { categoryId, id } = req.params;
//   res.json({
//     categoryId,
//     id,
//     name: 'Product 3',
//     price: 589,
//   })
// })
