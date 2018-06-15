const buildContactInputSection = () => {
    const nameInputField = document.createElement("input")
    firstNameInputField.id = "Name"
    const addressInputField = document.createElement("input")
    addressInputField.id = "address"
    const phoneNumberInputField = document.createElement("input")
    phoneNumberInputField.id = "phoneNumber"
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