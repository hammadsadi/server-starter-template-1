import express from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.routes';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Aolication Routes
app.use('/api/v1/student', studentRoutes);

export default app;
