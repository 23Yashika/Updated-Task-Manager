// import Usermodel from "../models/Usermodel.js";

// export const registerUser = async (req, res) => {
//   const { fullName, username } = req.body;
//   try {
//     const userExists = await Usermodel.findOne({ username });
//     if (userExists) return res.status(400).json({ message: 'Username already exists' });

//     const newUser = await Usermodel.create({ fullName, username });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error });
//   }
// };

// export const loginUser = async (req, res) => {
//   const { username } = req.body;
//   try {
//     const user = await Usermodel.findOne({ username });
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error });
//   }
// };



import Usermodel from '../models/Usermodel.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { fullName, username } = req.body;
  try {
    const userExists = await Usermodel.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = await Usermodel.create({ fullName, username });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Login user with username
export const loginUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await Usermodel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Fetch user by userId (MongoDB ObjectId)
export const getUserById = async (req, res) => {
  try {
    const user = await Usermodel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({
      username: user.username,
      fullName: user.fullName,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

