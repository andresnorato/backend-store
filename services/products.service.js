const faker = require('faker');
const boom = require('@hapi/boom');
const pool =  require('../libs/postgres.pool');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
    this.pool =  pool;
    this.pool.on('error', (err) => console.log(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),

        typeImg: faker.image.image(),
        identificacion: faker.datatype.number(),

        // edad: faker.commerce.productDescription(),
        id_producto: faker.datatype.uuid(),
        // email: faker.internet.email(),
        // isBlock: faker.datatype.boolean()
        // edad: faker.datatype.number(100) // 52
        producto:faker.commerce.product()
      });
    }
  }


  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query  =  'SELECT *  FROM task';
    const rta =  await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('product is block')
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id }
  }
}



module.exports = ProductsService;
