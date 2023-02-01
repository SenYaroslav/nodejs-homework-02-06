const contactsRepository = require("../models/contacts");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;

  const result = await contactsRepository.updateContact(contactId, {
    name,
    email,
    phone,
  });
  res.json(result);
};

module.exports = {
  updateContact,
};
