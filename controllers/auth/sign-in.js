const bcrypt = require("bcrypt");
const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");
const jwt = require("jsonwebtoken");

const signIn = async (req, res, next) => {
  const unauthorizedMessage = "Email or password is wrong";
  const { email, password } = req.body;
  
  const userInstanceOrNull = await UserModel.findOne({ email });
  if (userInstanceOrNull === null) {
    throw createHttpException(401, unauthorizedMessage);
  }

  const isValidPassword = await bcrypt.compare(
    password,
    userInstanceOrNull.passwordHash
  );
  if (!isValidPassword) {
    throw createHttpException(401, unauthorizedMessage);
  }

  const payload = {
    id: userInstanceOrNull._id.toString(),
    username: userInstanceOrNull.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  await UserModel.findByIdAndUpdate(userInstanceOrNull._id.toString(), {
    token,
  });

  res.json({token,
    user: {
      email: userInstanceOrNull.email,
      subscription: userInstanceOrNull.subscription,
    },
  });
};

module.exports = {
  signIn,
};
