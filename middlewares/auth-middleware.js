const jwt = require("jsonwebtoken");
const { UserModel } = require("../db");
const { createHttpException } = require("../helpers");

const authMiddleware = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (!token || tokenType !== "Bearer") {
      next(createHttpException(401, "Not authorized"));
    }
    const SECRET = process.env.JWT_SECRET;
    const decodedToken = jwt.decode(token, SECRET);
    const user = await UserModel.findById(decodedToken.id);

    if (!user || !user.token) {
      next(createHttpException(401, "Not authorized"));
    }
    req.token = token;
    req.user = decodedToken;
    next();
  } catch (error) {
    next(createHttpException(401, "Invalid token"));
  }
};

module.exports = {
  authMiddleware,
};
