const bcrypt = require("bcrypt");
const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendVerificationLetter } = require("../../services/email");

const signUp = async (req, res, next) => {
  const unauthorizedMessage = "Email in use";
  const { email, password, subscription } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid(30);
  const isEmailVerified = false;

  const result = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL,
    isEmailVerified,
    verificationToken,
  }).catch(() => {
    throw createHttpException(409, unauthorizedMessage);
  });
  
  await sendVerificationLetter(email, verificationToken);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
      isEmailVerified: result.isEmailVerified,
      verificationToken: result.verificationToken,
    },
  });
};

module.exports = {
  signUp,
};
