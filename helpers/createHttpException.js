const createHttpException = (statusIn, message) => {
  const err = new Error(message);
  err.status = statusIn;
  console.log('err >>>  ', err)
  return err;
};

module.exports = {
  createHttpException,
};
