const { addContact } = require("./addContact");
const { getContactById } = require("./get-by-id");
const { listContacts } = require("./list-contacts");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContact,
  updateStatusContact,
};
