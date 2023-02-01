const { addContact } = require("./addContact");
const { getContactById } = require("./get-by-id");
const { listContacts } = require("./list-contacts");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContact,
};
