import User from '../models/User.js';

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const login = async (req, res) => {
  res.send('Login');
};

const updateUser = async (req, res) => {
  res.send('Update User');
};

export { register, login, updateUser };
