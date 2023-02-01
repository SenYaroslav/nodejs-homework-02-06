const createHttpException = (status, message) => {
  const err = new Error(message);
  err.status = status;
  console.log('err >>>  ', err)
  return err;
};

module.exports = {
  createHttpException,
};
