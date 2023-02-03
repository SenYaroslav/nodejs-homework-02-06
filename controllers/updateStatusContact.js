const { Contact } = require("../db");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  if (!favorite) {
    res.json({ message: "missing field favorite" });
  }

  const filter = { _id: contactId };
  const update = { favorite };

  await Contact.findOneAndUpdate(filter, update);
  const result = await Contact.findOne(filter);
  res.json(result);
};

module.exports = {
  updateStatusContact,
};
