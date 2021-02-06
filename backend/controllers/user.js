const User = require('../models/users');

exports.postInfo = async (req, res, next) => {
  try {
    User.findOne({ email: req.body.email }, async (err, user) => {
      if (user) res.json(user);
      if (!user) {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          dp: req.body.dp,
        });
        await newUser.save();
        res.json(newUser);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getInfo = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.allUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.deleteAccount = async (req, res) => {
  try {
    const { email } = req.body;
    const resp = await User.deleteOne({ email: email });
    res.json(resp);
  } catch (err) {
    console.log(err);
  }
}; 