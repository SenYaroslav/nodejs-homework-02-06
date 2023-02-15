const { connectMongo } = require("./connection");
const { Contact } = require("./contactModel");

module.exports = {
  Contact,
  connectMongo,
};
