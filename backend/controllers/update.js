const User = require('../models/users');

exports.editProfile = async (req, res) => {
  let updatedUser = {
    name: req.body.name,
    dp: req.file.path,
  };
  updatedUser = { $set: updatedUser };
  try {
    const response = await User.update(
      { email: req.body.email },
      updatedUser
    ).exec();
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};
