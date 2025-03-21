const { UserModel } = require("../../db");
const Jimp = require("jimp");
const { createHttpException } = require("../../helpers");
const multer = require("multer");
const path = require("path");

const tempDirAvatar = 'C:/Users/Lenovo123123/Documents/GitHub/nodejs-homework-02-06/temp'
const storeImage = "C:/Users/Lenovo123123/Documents/GitHub/nodejs-homework-02-06/public/avatars";

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDirAvatar);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: multerConfig,
});

const updateAvatar = async (req, res, next) => {
  try {
    const { user } = req;
    const filePath = path.join("avatars", `${user.id}.jpeg`);

    Jimp.read(req.file.path, function (err, image) {
      if (err) throw err;
      image.resize(250, 250).write(path.join(storeImage, `${user.id}.jpeg`));
    });

    await UserModel.findOneAndUpdate({ _id: user.id }, { avatarURL: filePath });
    res.json({ avatarURL: filePath });
  } catch (error) {
    throw createHttpException(401, "Unauthorized");
  }
};

module.exports = { updateAvatar, upload };
