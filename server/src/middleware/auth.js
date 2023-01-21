import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, _res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new UnAuthenticatedError('Authentication invalid');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { userId: payload.userId };
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
  next();
};

export default auth;
