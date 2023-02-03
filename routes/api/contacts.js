const express = require("express");
const contactsController = require("../../controllers");
const { controllerExceptionWrapper } = require("../../helpers");
const { validationSchema } = require("../../helpers/schemas");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router
  .get("/", controllerExceptionWrapper(contactsController.listContacts))
  .get(
    "/:contactId",
    controllerExceptionWrapper(contactsController.getContactById)
  )
  .post(
    "/",
    validateBody(validationSchema),
    controllerExceptionWrapper(contactsController.addContact)
  )
  .delete(
    "/:contactId",
    controllerExceptionWrapper(contactsController.removeContact)
  )
  .put(
    "/:contactId",
    validateBody(validationSchema),
    controllerExceptionWrapper(contactsController.updateContact)
  )
  .patch(
    "/:contactId/favorite",
    controllerExceptionWrapper(contactsController.updateStatusContact)
  );

module.exports = router;
