const register = (req, res) => {
  res.send('Register');
};

const login = (req, res) => {
  res.send('Login');
};

const updateUser = (req, res) => {
  res.send('Update User');
};

export { register, login, updateUser };
