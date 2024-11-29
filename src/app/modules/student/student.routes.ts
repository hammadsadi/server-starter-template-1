import express from 'express';
import {
  deleteSingleStudent,
  getAllStudents,
  getSingleStudent,
} from './student.controllers';

const router = express.Router();

// Create Student Route
router.get('/', getAllStudents);
router.get('/:studentId', getSingleStudent);
router.delete('/:studentId', deleteSingleStudent);

export const studentRoutes = router;
