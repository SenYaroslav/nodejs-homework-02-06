const { connectMongo } = require("./connection");
const { Contact } = require("./contactModel");
const { UserModel } = require("./userModel");

module.exports = {
  Contact,
  connectMongo,
  UserModel,
};
