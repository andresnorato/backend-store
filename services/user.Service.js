const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');



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
    const rta = await models.User.findAll();
    return rta;


  }

  async findOne(id) {
   const user = await  models.User.findByPk(id);
   if(!user){
     throw boom.notFound('user not  found');
   }
   return user
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {
      message: 'delete successfully',
      id
    }
  }
}

module.exports = UsersService;

