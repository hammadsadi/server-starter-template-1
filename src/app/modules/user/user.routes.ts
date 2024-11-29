import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

// Routing
router.post('/create-student', userControllers.createStudent);

// Export User Router
export const userRoutes = router;
