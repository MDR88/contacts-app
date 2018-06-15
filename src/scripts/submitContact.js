const getStorage = require("./queryStorage")
const listContacts = require("./listContacts")
const clearList = require("./clearContactsList")

const submitContact = () => {
    const fullName = document.getElementById("name").value
    const addressField = document.getElementById("address").value
    const phoneNumberField = document.getElementById("phoneNumber").value
    let counterVar = getStorage().length
    const tempObj = {
        name: fullName,
        address: `${addressField}`,
        phone: `${phoneNumberField}`,
        id: counterVar++
        }
        return tempObj
    }
module.exports = submitContact

