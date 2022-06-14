// import jwt token
const jwt = require('jsonwebtoken');
const { BadRequest } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // mongosse validation
  // joi
  //   check in controller
  if (!username || !password) {
    throw new BadRequest('Please provide username and password', 400);
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
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber} `,
  });
};

module.exports = { login, dashboard };
