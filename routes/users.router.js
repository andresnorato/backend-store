const express = require('express');
const  UsersService =  require('./../services/users.service');

const router = express.Router();
const service =  new UsersService();

router.get('/', (req, res) => {
   const users = service.find();
    res.json(users);
});




router.get('/:id', (req, res) => {
  const { id } = req.params;
 const user =  service.finOne(id);
 res.status(200).json(user);
});


module.exports = router;
