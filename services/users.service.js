const getConnecion =  require('../libs/postgres');



class UsersService {

  constructor() {
    this.users = [
      {
        id: '1',
        name: 'Andres',
        email: 'carnorat@gmail.com',
        age: 10
      },
      {
        id:'2',
        name: 'Andres',
        email: 'carnorat@gmail.com',
        age: 10
      },
      {
        id: '3',
        name: 'Andres',
        email: 'carnorat@gmail.com',
        age: 10
      }]
  }

  async find() {
    const client =  await getConnecion();
    const rta = await client.query('SELECT * FROM task');
    return rta.rows;
  }

  finOne(id){
    return this.users.find(user => user.id === id)
  }
}


module.exports = UsersService;

