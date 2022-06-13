// import jwt token
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');
const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // mongosse validation
  // joi
  //   check in controller
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  // This is a Demo ID
  const id = new Date().getDate();
  console.log(id);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: `${username} logged in`, token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];
  console.log(token);
  const luckyNumber = Math.floor(Math.random() * 10);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber} `,
  });
};

module.exports = { login, dashboard };
