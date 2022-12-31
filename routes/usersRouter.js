const express = require('express');
const UsersService = require('../services/user.Service');
const validatorHandler = require('../middleware/validator.handler');
const { createUserSchema, updateUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const serviceUsers = new UsersService();


router.get('/', async (req, res) => {
  const users = await serviceUsers.find();
  res.json(users);
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await serviceUsers.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await serviceUsers.create(body);
      res.status(201).json({
        newUser,
        message: 'User created successfully'
      });
    } catch (error) {
      next(error)
    }
  });

router.patch('/:id',
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateUser = await serviceUsers.update(id, body);
      res.status(200).json({
        updateUser,
        message: 'User update successfully'
      });
    } catch (err) {
      next(err);
    }
  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await serviceUsers.delete(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
