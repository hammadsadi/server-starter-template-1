import { StudentModel } from './student.model';
import { Student } from './studentInterface';

// Student Data Save to DB
export const studentDataSavedToDatabase = async (students: Student) => {
  const result = await StudentModel.create(students);
  return result;
};

// Get All Students From DB
export const getAllStudentsFromDatabase = async () => {
  const result = await StudentModel.find();
  return result;
};

// Get Single Student From DB
export const getSingleStudentFromDatabase = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
