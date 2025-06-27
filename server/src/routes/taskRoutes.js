import express from 'express';
import {
  createTask,
  getUserTasks,
  updateTask,
  deleteTask,
  completeTask, 
} from '../controllers/taskCon.js';

const router = express.Router();

router.post('/', createTask);
router.get('/:userId', getUserTasks);
router.put('/:id', updateTask);
router.patch('/:id', completeTask); 
router.delete('/:id', deleteTask);

export default router;
