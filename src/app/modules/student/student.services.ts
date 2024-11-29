import { StudentModel } from './student.model';

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

// Delete Single Student From DB
export const deleteSingleStudentFromDatabase = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDelete: true });
  return result;
};
