const contactsListDiv = document.getElementById("contact-list")

const clearList = () => {
    while(contactsListDiv.firstChild){
        contactsListDiv.innerHTML = ""
    }
}

module.exports = clearList