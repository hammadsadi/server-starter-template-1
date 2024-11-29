import { Request, Response } from 'express';
import { userServices } from './user.service';

// Create Student Controller
export const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    // Send Data
    const result = await userServices.studentDataSavedToDatabase(
      password,
      student,
    );
    res.status(200).json({
      success: true,
      message: 'Student Created Successful',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const userControllers = {
  createStudent,
};
