const express = require('express');
const routersApi =  require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middleware/error.handler');


const app = express();
const port = process.env.PORT || 3000;

// middleware nativo de Json para recibir informacion
app.use(express.json());
// Soluicion de problemas de cors

app.use(cors());
//ROUTING EN EXPRESS
app.get('/', (req, res) => {
  res.send('API desarrollada por Andres Norato ✌️💻');
});

// function de rutas modularizacion
routersApi(app);

// meiddlerware se deben hacer despues de definir el routing
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);







// const whiteList = [ 'http://localhos:8000', 'http://myapp.co',]
// const options = {
//   origin: (origin, callback)=>{
//     if(whiteList.includes(origin) || !origin ){
//       callback(null, true);
//     }else {
//       callback(new Error('no permitido'))
//     }
//   }
// }



// app.use(cors());
// routerApi(app);

// app.use(logErrors);
// app.use(boomErrorHandler);
// app.use(errorHandler);

app.listen(port, () => {
  console.log('app corriendo en: http://localhost:3000/')
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
