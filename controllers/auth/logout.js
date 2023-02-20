const { UserModel } = require("../../db");
const { createHttpException } = require("../../helpers");

const logout = async (req, res, next) => {
  const string = req.headers.authorization;
  // eslint-disable-next-line no-unused-vars
  const [tokenType, token] = string.split(" ");
  const { id } = req.user;

  const currentUser = await UserModel.findById(id);
  if (currentUser.token !== token) {
    throw createHttpException(401, "Not authorized");
  }

  await UserModel.findByIdAndUpdate(id, { token: null });
  res.status(204).send();
};

module.exports = {
  logout,
};
