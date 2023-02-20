const bcrypt = require("bcrypt");
const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");

const signUp = async (req, res, next) => {
  const unauthorizedMessage = "Email in use";
  const { email, password, subscription } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  const result = await UserModel.create({
    email,
    passwordHash,
    subscription,
  }).catch(() => {
    throw createHttpException(409, unauthorizedMessage);
  });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = {
  signUp,
};
