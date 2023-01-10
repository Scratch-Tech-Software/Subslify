const errorHandlerMIddleware = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: err.message });
};

export default errorHandlerMIddleware;
