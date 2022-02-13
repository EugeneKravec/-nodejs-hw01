const contactsOperations = require("./contacts")

/* 
    1. contactsOperations.getAllContacts
    2. contactsOperations.getContactById
    3. contactsOperations.removeContact
    4. contactsOperations.addContact
*/

const invokeAction = async ({ action, id, data }) => {
    switch (action) {
        case "getAllContacts":
            const contacts = await contactsOperations.getAllContacts();
            console.log(contacts[0]);
            break;
        case "getContactById":
            const contact = await contactsOperations.getContactById(id);
            if (!contact) {
                throw new Error(`Contact with id=${id} not found`);
            }
            console.log(contact);
            break;
        case "addContact":
            const newContact = await contactsOperations.addContact(data);
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contactsOperations.updateById(id, data);
            if (!updateContact) {
                throw new Error(`Contact with id=${id} not found`);
            }
            console.log(updateContact);
            break;
        case "removeContactById":
            const removeContact = await contactsOperations.removeContactById(id);
            console.log(removeContact);
            break;
        default:
            console.log("Unknown action");

    }
}

// invokeAction({ action: "getAllContacts" })

// const id = "2";

// const newData = {
//     name: "Eugene Kravec",
//     email: "eugenekravec@Mail.com",
//     phone: "(555) 444-3333"
// }

// invokeAction({ action: "addContact", data: newData })


// const updateData = {
//     name: "Eugene Kravec Updated",
//     email: "eugenekravec@gmail.com",
//     phone: "(666) 555-4444"
// }
// invokeAction({ action: "updateById", id: updateId, data: updateData })
const updateId = "ff7edabd-1c14-49f6-b646-7eec8228959b"
invokeAction({ action: "removeContactById", id: updateId })

