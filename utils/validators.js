const Joi = require("joi");

// Validation for user registration
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(data);
};

// Validation for user login
const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

// Validation for adding/updating a book
const bookValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedDate: Joi.date().required(),
    genre: Joi.string().required(),
    copiesAvailable: Joi.number().min(0).required(),
  });
  return schema.validate(data);
};

// Validation for adding/updating an author
c;
