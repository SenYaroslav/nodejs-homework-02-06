const { UserModel } = require("../../db/userModel");
const { createHttpException } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const userInstance = await UserModel.findOne({ verificationToken });
  if (!userInstance) {
    throw createHttpException(404, "User not found");
  }

  await UserModel.findByIdAndUpdate(userInstance._id, {
    isEmailVerified: true,
    verificationToken: null,
  });

  res.status(200).json({message: 'Verification successful'})
};

module.exports = {
  verifyEmail,
};
