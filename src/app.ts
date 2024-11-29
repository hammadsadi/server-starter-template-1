import express from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.routes';
import { userRoutes } from './app/modules/user/user.routes';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Aolication Routes
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/users', userRoutes);

export default app;
