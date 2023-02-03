const { Contact } = require("../db");

const addContact = async (req, res) => {
  const { name, email, phone } = req.body;

  const result = await Contact.create({ name, email, phone });
  res.json(result);
};

module.exports = {
  addContact,
};
