const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //   check in controller
  if (!username || !password) {
  }

  res.send('Fake Login/Register/Signup');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 10);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber} `,
  });
};

module.exports = { login, dashboard };
