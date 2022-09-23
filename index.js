const express = require('express');
const routerApi =  require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//middleware de Json
app.use(express.json());
//ROUTING EN EXPRESS

app.get('/', (req, res) => {
  res.send('API estructurada por rutas ');
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

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
