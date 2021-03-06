const buildContactInputSection = () => {
    const nameInputField = document.createElement("input")
    nameInputField.id = "name"
    nameInputField.class = "inputField"
    nameInputField.value = "Name"
    nameInputField.setAttribute("onfocus", "this.value=''")
    const addressInputField = document.createElement("input")
    addressInputField.id = "address"
    addressInputField.class = "inputField"
    addressInputField.value = "Address"
    addressInputField.setAttribute("onfocus", "this.value=''")
    const phoneNumberInputField = document.createElement("input")
    phoneNumberInputField.id = "phoneNumber"
    phoneNumberInputField.class = "inputField"
    phoneNumberInputField.value = "Phone Number"
    phoneNumberInputField.setAttribute("onfocus", "this.value=''")
    const submitButton = document.createElement("button")
    submitButton.id = "submitButton"
    submitButton.setAttribute("form", "#firstName #lastName #address #phoneNumber")
    submitButton.innerHTML = "Submit Form"
    const mainFragment = document.createDocumentFragment()

   mainFragment.appendChild(nameInputField)
   mainFragment.appendChild(addressInputField)
   mainFragment.appendChild(phoneNumberInputField)
   mainFragment.appendChild(submitButton)
   return mainFragment
}

module.exports = buildContactInputSection