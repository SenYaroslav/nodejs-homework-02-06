const contactsRepository = require("../models/contacts");

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  const result = await contactsRepository.addContact({ name, email, phone });
  res.json(result);
};

module.exports = {
  addContact,
};
