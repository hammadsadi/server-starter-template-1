import Joi from 'joi';

// Sub Schema for Name
const userNameSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    'any.required': 'First Name is Required',
  }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base': '{#label} is not Valid',
      'any.required': 'Last Name is Required',
    }),
});

// Sub Schema for Guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father Name is Required!',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father Occupation is Required',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother Name is Required',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother Occupation is Required',
  }),
});

// Main Schema
const studentSchema = Joi.object({
  id: Joi.string().optional(),
  name: userNameSchema.required(),
  email: Joi.string().email().required().messages({
    'string.email': '{#label} is not Valid Email Format',
    'any.required': 'Email is Required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.required': 'Gender is Required',
    'any.only': 'You Can Select Two Types Male or Female',
  }),
  dateOfBirth: Joi.string().optional(),
  contactInfo: Joi.string().optional(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  guardian: guardianSchema.required(),
  isActive: Joi.string().valid('active', 'offline').optional(),
});

export default studentSchema;
