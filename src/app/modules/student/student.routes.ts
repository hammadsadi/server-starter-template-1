import express from 'express';
import {
  createStudent,
  getAllStudents,
  getSingleStudent,
} from './student.controllers';

const router = express.Router();

// Create Student Route
router.get('/', getAllStudents);
router.post('/create-student', createStudent);
router.get('/:studentId', getSingleStudent);

export const studentRoutes = router;
