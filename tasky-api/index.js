import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import tasksRouter from './api/tasks/index.js';
import usersRouter from './api/users/index.js';
import './db/index.js';
import authenticate from './authenticate';



dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);
app.use('/api/tasks', authenticate, tasksRouter);


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
