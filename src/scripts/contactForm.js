const buildContactInputSection = () => {
    const firstNameInputField = document.createElement("input")
    firstNameInputField.id = "firstName"
    const lastNameInputField = document.createElement("input")
    lastNameInputField.id = "lastName"
    const addressInputField = document.createElement("input")
    addressInputField.id = "address"
    const phoneNumberInputField = document.createElement("input")
    phoneNumberInputField.id = "phoneNumber"
    const submitButton = document.createElement("button")
    submitButton.id = "submitButton"
    submitButton.setAttribute("form", "#firstName #lastName #address #phoneNumber")
    submitButton.innerHTML = "Submit Form"
    const mainFragment = document.createDocumentFragment()

   mainFragment.appendChild(firstNameInputField)
   mainFragment.appendChild(lastNameInputField)
   mainFragment.appendChild(addressInputField)
   mainFragment.appendChild(phoneNumberInputField)
   mainFragment.appendChild(submitButton)
   return mainFragment
}

module.exports = buildContactInputSection