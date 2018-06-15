const getDatabase = require("./queryStorage")
const setData = require("./setStorage")
const inputBuilder = require("./contactForm")
const submitContact = require("./submitContact")
const inputSection = document.querySelector(".input-fields-section")
const listContacts = require("./listContacts")

console.log("hello world, I'm working")
listContacts()

let localStorageDB = getDatabase()
console.log(localStorageDB)
const inputFields = inputBuilder()
document.appendChild(inputSection.appendChild(inputFields))
document.getElementById("submitButton").addEventListener("click", () => {localStorageDB.push(submitContact()); console.log(localStorageDB); setData("contactsDB", localStorageDB); listContacts()})