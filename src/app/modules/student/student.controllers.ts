import { Request, Response } from 'express';

import {
  deleteSingleStudentFromDatabase,
  getAllStudentsFromDatabase,
  getSingleStudentFromDatabase,
} from './student.services';

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

// Delete Single Student
export const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await deleteSingleStudentFromDatabase(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Student Delete Successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

