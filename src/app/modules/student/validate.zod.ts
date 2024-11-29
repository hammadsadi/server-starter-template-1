import { z } from 'zod';

// Sub Schema for Name
const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name is Required' })
    .trim()
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: '{VALUE} is not Capitalized Format',
      },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name is Required' })
    .regex(/^[a-zA-Z]+$/, { message: '{VALUE} is not valid' }),
});

// Sub Schema for Guardian
const guardianSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father First Name is Required!' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is Required' }),
  motherName: z.string().min(1, { message: 'Mother Name is Required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is Required' }),
});

// Main Schema for Student
const studentSchema = z.object({
  id: z.string().optional(),
  name: userNameSchema,
  email: z
    .string()
    .email({ message: '{VALUE} is not a valid email format' })
    .optional(), // Assuming it's optional, but you can adjust this as needed
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'You Can Select Two Types: Male or Female' }),
  }),
  dateOfBirth: z.string().optional(),
  contactInfo: z.string().optional(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  guardian: guardianSchema,
  isActive: z.enum(['active', 'offline']).optional(),
});

export { studentSchema };
