const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//middleware de Json
app.use(express.json());
//ROUTING EN EXPRESS

app.get('/', (req, res) => {
  res.send('API estructurada por rutas ');
});


const whiteList = [ 'http://localhos:8000', 'http://myapp.co',]
const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin) || !origin ){
      callback(null, true);
    }else {
      callback(new Error('no permitido'))
    }
  }
}



app.use(cors(options));
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
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
