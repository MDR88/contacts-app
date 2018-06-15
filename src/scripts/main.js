const getDatabase = require("./queryStorage")
const setData = require("./setStorage")
const inputBuilder = require("./contactForm")
const submitContact = require("./submitContact")
const mainDiv = document.querySelector(".main-div")


console.log("hello world, I'm working")

let localStorageDB = getDatabase()
console.log(localStorageDB)
// localStorageDB[0] = 1
// console.log(localStorageDB)

// const seth = {
//     name: "Seth Dana",
//     address: "2142 Rosemary Lane",
//     phoneNumber: "615-496-6754"
// }
// localStorageDB.push(seth)
// console.log(localStorageDB)

// setData("testDB", localStorageDB)
// setData("localDB", localStorageDB)

// const inputFields = inputBuilder()
// console.log(inputFields)
// document.appendChild(mainDiv.appendChild(inputFields))
// document.getElementById("submitButton").addEventListener("click", submitContact)