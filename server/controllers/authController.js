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

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const newUser = await User.create({ name, email, password });
  const token = newUser.createJWT();
  const user = { name: newUser.name, email: newUser.email };
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  res.send('Login');
};

const updateUser = async (req, res) => {
  res.send('Update User');
};

export { register, login, updateUser };
