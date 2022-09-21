const express = require('express');
const routerApi =  require('./routes');

const app = express();
const port = 3000;

//ROUTING EN EXPRESS

app.get('/', (req, res) => {
  res.send('API estructurada por rutas ');
});


routerApi(app);


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
