const Joi =  require('joi');

const id = Joi.number().integer;
const email =  Joi.string().email();
const password =  Joi.string().min(8).max(15);
// const telefono =  Joi.number().integer().min(10).max(10);
const role =  Joi.string().min(5)


const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});



const updateUserSchema = Joi.object({
  email: email,
  // role: role
})

module.exports = {createUserSchema, updateUserSchema  }
