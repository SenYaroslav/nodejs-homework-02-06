const { globalErrorHandler } = require("./globalErrorHandler ");
const { validateBody } = require("./validate-body-middleware");

module.exports = {
  globalErrorHandler,
  validateBody,
};
