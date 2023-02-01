const contactsRepository = require("../models/contacts");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;

  await contactsRepository.removeContact(contactId);
  res.status(204).send();
};

module.exports = {
  removeContact,
};
