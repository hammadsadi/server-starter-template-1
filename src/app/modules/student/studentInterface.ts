import { Model, Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Student = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  email: string;
  profileImg: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactInfo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: Guardian;
  isDelete: boolean;
};

// Static Method
export interface Student_Model extends Model<Student> {
  isExistsStudent(id: string): Promise<Student | null>;
}

// Custom Instance Method

// export type Student_Method = {
//   isExistStudent(id: string): Promise<Student | null>;
// };

// Custom Instance Model

// export type Student_Model = Model<
//   Student,
//   Record<string, never>,
//   Student_Method
// >;
