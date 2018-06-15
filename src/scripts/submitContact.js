
const submitContact = () => {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const addressField = document.getElementById("address").value
    const phoneNumberField = document.getElementById("phoneNumber").value
    const tempObj = {
        name: `${firstName} ${lastName}`,
        address: `${address}`,
        phone: `${phoneNumberField}`
        }
    return tempObj
    }

module.exports = submitContact

