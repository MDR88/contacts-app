const getStorage = require("./queryStorage")
const clearList = require("./clearContactsList")
const mainFragment = document.createDocumentFragment()
const contactsDiv = document.getElementById("contact-list")

const listContacts = () => {
    clearList()
    const currentList = getStorage()
    currentList.forEach((value, index) => {
        const ulElement = document.createElement("ul")
        for (let key in currentList[index]){
            let liEl = document.createElement("li")
            liEl.innerHTML = `${key}: ${currentList[index][key]}`
            ulElement.appendChild(liEl)
        }
        mainFragment.appendChild(ulElement)
    })
    contactsDiv.appendChild(mainFragment)
}

module.exports = listContacts