const fsp = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const { createHttpException } = require("../helpers");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContactList = async (contacts) =>
  await fsp.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contacts = await fsp.readFile(contactsPath);
  const result = JSON.parse(contacts);
  return result;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const foundContact = contacts.find((contact) => contact.id === contactId);
  if (!foundContact) {
    throw createHttpException(404, "The contact is not found");
  }
  return foundContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw createHttpException(404, "The contact is not found");
  }
  contacts.splice(index, 1);

  await updateContactList(contacts);
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(3),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContactList(contacts);

  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw createHttpException(404, "The contact is not found");
  }

  contacts[index] = { id: contactId, name, email, phone };

  await updateContactList(contacts);

  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
