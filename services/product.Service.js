const faker = require('faker');
const boom = require('@hapi/boom');




class ProductsService {

  constructor() {
    this.products = [];
    this.generete();
  }


  generete() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
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
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find(items => items.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(items => items.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index]
    }
  }

  async delete(id) {
    const index = this.products.findIndex(items => items.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    } else {
      this.products.slice(index, 1);
      return { id }
    }
  }

}
module.exports = ProductsService;
