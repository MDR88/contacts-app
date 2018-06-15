const getDatabase = require("./queryStorage")
const setData = require("./setStorage")
const inputBuilder = require("./contactForm")
const submitContact = require("./submitContact")
const mainDiv = document.querySelector(".main-div")


console.log("hello world, I'm working")

let localStorageDB = getDatabase()
console.log(localStorageDB)
const inputFields = inputBuilder()
document.appendChild(mainDiv.appendChild(inputFields))
document.getElementById("submitButton").addEventListener("click", () => {localStorageDB.push(submitContact()); console.log(localStorageDB); setData("contactsDB", localStorageDB)})
