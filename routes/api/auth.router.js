const express = require("express");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { userSingUpSchema, userSingInSchema } = require("../../helpers/schemas");
const userController = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/sing-up",
  validateBody(userSingUpSchema),
  controllerExceptionWrapper(userController.signUp)
)
router.post(
  "/sign-in",
  validateBody(userSingInSchema),
  controllerExceptionWrapper(userController.signIn)
)

module.exports = router;
