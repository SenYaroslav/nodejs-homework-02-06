const bcrypt = require("bcrypt");
const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");
const gravatar = require('gravatar')

const signUp = async (req, res, next) => {
  const unauthorizedMessage = "Email in use";
  const { email, password, subscription } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const avatarURL  = gravatar.url(email)

  const result = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL ,
  }).catch(() => {
    throw createHttpException(409, unauthorizedMessage);
  });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
    },
  });
};

module.exports = {
  signUp,
};
