const auth = async ({ headers: { authorization } }, res, next) => {
  console.log({ authorization });
  next();
};

export default auth;
