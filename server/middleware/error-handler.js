import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.message);
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Something went wrong',
  };

  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = err.message;
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `Duplicate field value entered: ${Object.keys(
      err.keyValue
    )}`;
  }

  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorHandlerMiddleware;
