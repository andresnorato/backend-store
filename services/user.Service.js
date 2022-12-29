const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');



class UsersService {
  constructor() {
    this.users = [{
      id: '1',
      name: 'Juan Camilo',
      email: 'carnorat@gmail.com',
      telefono: 132121,
      password: '121231231'
    },
    {
      id: '2',
      name: 'Emily Suarez',
      email: 'carnorat@gmail.com',
      telefono: 132121,
      password: '121231231'
    }];
    this.pool = pool;
    this.pool.on('Error en la conexion', (err) => console.log(err));


  }

  async find() {
    const query = 'SELECT *  FROM task';
    const rta =  await this.pool.query(query);
    return rta.rows;


  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw boom.notFound('Ups  user not found');
    }
    return user
  }

  async create(data) {
    const newUser = {
      id: '3',
      ...data,
    }
    this.users.push(newUser);
    return newUser
  }

  async update(id, changes) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw boom.notFound('Ups  user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw boom.notFound('Ups  user not found');
    }
    this.users.slice(index, 1);
    return {
      id,
      message: 'user deleted succesfull'
    }
  }

}

module.exports = UsersService;

