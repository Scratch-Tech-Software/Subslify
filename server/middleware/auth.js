import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

const auth = async (req, _res, next) => {
  const authHeaders = req.headers?.authorization;
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication invalid');
  }

  const token = authHeaders.substring(authHeaders.indexOf(' ') + 1);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { userId: payload.userId };
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  next();
};

export default auth;
