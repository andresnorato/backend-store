//Importamos a express recordemos que express es un mini framework que corre en node.js
const express = require('express');

//Creamos la variable y  le damos la instacia de express lo que nos crea la app
const app = express();

//Definimos un puerto por donde vamos a escuchar
const port = 3001;


app.get('/', (req, res) => {
  res.send('Hola mi serve en express');
});


app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy la nueva ruta');
});


app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  });
});


app.get('/categories', (req, res) =>{
  res.json({
    id: 1,
    name: 'Eletrodomesticos',
  })
})


app.listen(port, ()=> {
  console.log('Mi port' + port);
});
