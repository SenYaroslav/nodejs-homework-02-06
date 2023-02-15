const { Contact } = require("../db");

const listContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

module.exports = {
  listContacts,
};
