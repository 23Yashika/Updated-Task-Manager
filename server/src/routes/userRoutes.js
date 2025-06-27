import express from 'express';
import {
  registerUser,
  loginUser,
  getUserById,
} from '../controllers/userCon.js'; // Make sure getUserById is exported

const router = express.Router();


router.post('/register', registerUser);

router.post('/login', loginUser);


router.get('/:id', getUserById); // <-- NEW route to get user by their MongoDB _id

export default router;
