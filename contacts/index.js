const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById")
const addContact = require("./addContact");
const updateById = require("./updateById")

const removeContactById = require("./updateContactById");


module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    updateById,
    removeContactById
}