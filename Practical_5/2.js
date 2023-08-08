const Joi = require('joi');
const validationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    // Add more fields and validation rules as needed
  });
  const dataToValidate = {
    username: 'mohitmungra',
    email: 'mohitmungra2003@gmail.com',
    password: 'securePassword123',
    // Add other data fields here
  };
  
  const validationResult = validationSchema.validate(dataToValidate);
  
  if (validationResult.error) {
    // Data is invalid, handle the error
    console.error('Validation error:', validationResult.error.details);
  } else {
    // Data is valid, proceed with processing the data
    console.log('Data is valid:', validationResult.value);
  }
    