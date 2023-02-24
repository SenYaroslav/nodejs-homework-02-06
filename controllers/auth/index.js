const { current } = require("./current");
const { logout } = require("./logout");
const { signIn } = require("./sign-in");
const { signUp } = require("./sign-up");
const { updateAvatar, upload } = require("./updateAvatar");
const { verifyUser } = require("./user-verify");
const { verifyEmail } = require("./verify-email");

module.exports = {
  signUp,
  signIn,
  logout,
  current,
  updateAvatar,
  upload,
  verifyEmail,
  verifyUser,
};