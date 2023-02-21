const { current } = require("./current");
const { logout } = require("./logout");
const { signIn } = require("./sign-in");
const { signUp } = require("./sign-up");
const { updateAvatar, upload } = require("./updateAvatar");

module.exports = {
  signUp,
  signIn,
  logout,
  current,
  updateAvatar,
  upload,
};