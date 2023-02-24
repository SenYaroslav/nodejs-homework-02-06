const express = require("express");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { userSingUpSchema, userSingInSchema } = require("../../helpers/schemas");
const userController = require("../../controllers/auth");
const { authMiddleware } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post(
  "/sign-up",
  validateBody(userSingUpSchema),
  controllerExceptionWrapper(userController.signUp)
);
router.post(
  "/sign-in",
  validateBody(userSingInSchema),
  controllerExceptionWrapper(userController.signIn)
);
router.post(
  "/logout",
  authMiddleware,
  controllerExceptionWrapper(userController.logout)
);
router.get(
  "/current",
  authMiddleware,
  controllerExceptionWrapper(userController.current)
);
router.patch(
  "/avatars",
  authMiddleware,
  userController.upload.single("avatar"),
  controllerExceptionWrapper(userController.updateAvatar)
);
router.get(
  "/email/verify/:verificationToken",
  controllerExceptionWrapper(userController.verifyEmail)
);
router.post(
  "/email/verify",
  controllerExceptionWrapper(userController.verifyUser)
);

module.exports = router;
