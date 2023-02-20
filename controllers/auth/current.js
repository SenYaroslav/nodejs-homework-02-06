const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");

const current = async (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const [tokenType, token] = req.headers.authorization.split(" ");
  const { id } = req.user;

  const currentUser = await UserModel.findById(id);
  if (currentUser.token !== token) {
    throw createHttpException(401, "Not authorized");
  }
  res
    .status(200)
    .json({ email: currentUser.email, subscription: currentUser.subscription });
};

module.exports = { current };
