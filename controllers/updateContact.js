const { Contact } = require("../db");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;

  const filter = { _id: contactId };
  const update = { name, email, phone };

  await Contact.findOneAndUpdate(filter, update);
  const result = await Contact.findOne(filter);
  res.json(result);
};

module.exports = {
  updateContact,
};
