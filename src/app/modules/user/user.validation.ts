import { z } from 'zod';
const userSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'Password Cannot Allow More than 20 Character' })
    .min(6, { message: 'Password Must be 6 Character' }),
});

export const userValidation = {
  userSchema,
};
