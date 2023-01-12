import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, CustomAPIError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    throw new BadRequestError('Please provide a name');
  }
  if (!email || !password) {
    throw new CustomAPIError('Email and password are required');
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('Login');
};

const updateUser = async (req, res) => {
  res.send('Update User');
};

export { register, login, updateUser };
