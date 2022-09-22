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

  find() {
    return this.users;
  }

  finOne(id){
    return this.users.find(user => user.id === id)
  }
}


module.exports = UsersService;

