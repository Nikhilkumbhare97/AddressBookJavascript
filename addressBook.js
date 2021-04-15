const usrInput = require("readline-sync");
const fields = ["firstName", "lastName", "area", "city", "state", "zip", "phoneNumber", "email"];

class Contact {
    constructor(contactDetails) {
        this.contactDetails = contactDetails;
    }
}

let contactDetails = new Array()
for (var i = 0; i <= fields.length - 1; i++) {
    contactDetails[i] = usrInput.question(`Enter ${fields[i]} : `);
}

let contact = new Contact(contactDetails)

console.log(contact);