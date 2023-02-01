const contactsRepository = require("../models/contacts");

const listContacts = async (req, res, next) => {
  const result = await contactsRepository.listContacts();
  res.json(result);
};

module.exports = {
  listContacts,
};
