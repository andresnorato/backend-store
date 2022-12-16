const Joi =  require('joi');

const name = Joi.string().min(3).max(15);
const email =  Joi.string().email();
const telefono =  Joi.number().integer().min(10).max(10);
const password =  Joi.string().min(8).max(15);


const createUser = Joi.object({
  name: name.required(),
  email: email.required(),
  telefono: telefono.require(),
  password: password.required()
});

module.exports = {createUser}
