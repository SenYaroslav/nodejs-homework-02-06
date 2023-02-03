const { Contact } = require("../db");

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndDelete(contactId);
  if (result) {
    res.status(204).send();
  }
  res.json(result);
};

module.exports = {
  removeContact,
};
