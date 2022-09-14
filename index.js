//Importamos a express recordemos que express es un mini framework que corre en node.js
const express = require('express');

//Creamos la variable y  le damos la instacia de express lo que nos crea la app
const app = express();

//Definimos un puerto por donde vamos a escuchar
const port = 3001;


// app.get('/', (req, res) => {
//   res.send('Hola mi serve en express');
// });


// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola soy la nueva ruta');
// });


app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
      descripcion: 'bla bla bla'
    },
    {
      name: 'Product 2',
      price: 500,
      descripcion: 'bla bla bla'
    },
    {
      name: 'Product 3',
      price: 500,
      descripcion: 'bla bla bla'
    },

  ]);
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
  const { id} = req.params;
  res.json({
    id,
    name: 'Electrodomesticos',
  });
});



app.get('/users', (req, res) => {
  res.json([
    {
      name: 'Andres',
      age: 15,
      email: 'carnorat@gmail.com',
    },
    {
      name: 'Alejandra',
      age: 15,
      email: 'carnorat@gmail.com',
    },
    {
      name: 'Camilo',
      age: 15,
      email: 'carnorat@gmail.com',
    }
  ])
});

app.get('/users/:id', (req, res)=>{
  const { id } =  req.params;
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
