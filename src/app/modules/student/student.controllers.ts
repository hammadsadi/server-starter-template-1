import { Request, Response } from 'express';
import {
  getAllStudentsFromDatabase,
  getSingleStudentFromDatabase,
  studentDataSavedToDatabase,
} from './student.services';

// Create Student Controller
export const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    // Send Data
    const result = await studentDataSavedToDatabase(student);
    res.status(200).json({
      success: true,
      message: 'Student Created Successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All Students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudentsFromDatabase();
    res.status(200).json({
      success: true,
      message: 'Students Retrieved Successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Single Student
export const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await getSingleStudentFromDatabase(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Student Retrieved Successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
