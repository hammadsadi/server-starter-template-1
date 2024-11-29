import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { Guardian, Student, Student_Model, UserName } from './studentInterface';
import config from '../../config';
// Sub Schema for Name
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    // minlength: [8, '{VALUE} Minimum Length 8 is Required'],
    required: [true, 'First Name is Required'],
    trim: true,
    validate: {
      validator: function (value) {
        const firstNameValue = value.charAt(0).toUpperCase() + value.slice(1);
        if (value !== firstNameValue) {
          return false;
        }
        return true;
      },
      message: '{VALUE} is not Capitilize Format',
    },
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
    required: [true, 'Brother First Name is Required!'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is Required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is Required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is Required'],
  },
});
// Main Schema
const studentSchema = new Schema<Student, Student_Model>({
  id: String,
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id is Required'],
    ref: 'User',
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'You Can Select Tow Types Male or Female',
    },
    required: true,
  },
  dateOfBirth: String,
  contactInfo: String,
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
    default: null,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

// Static Method
studentSchema.statics.isExistsStudent = async function (id: string) {
  const result = await StudentModel.findOne({ id });
  return result;
};

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

export const StudentModel = model<Student, Student_Model>(
  'Student',
  studentSchema,
);
