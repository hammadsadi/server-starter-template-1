import { model, Schema } from 'mongoose';
import { Guardian, Student, UserName } from './studentInterface';

// Sub Schema for Name
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// Sub Schema for Guardian
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});
// Main Schema
const studentSchema = new Schema<Student>({
  id: String,
  name: userNameSchema,
  email: String,
  gender: ['male', 'female'],
  dateOfBirth: String,
  contactInfo: String,
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  guardian: guardianSchema,
  isActive: ['active', 'offline'],
});

export const StudentModel = model<Student>('Student', studentSchema);
