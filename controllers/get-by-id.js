const { Contact } = require("../db");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  res.json(result);
};

module.exports = {
  getContactById,
};
