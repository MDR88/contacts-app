const getDatabase = require("./queryStorage")
const setData = require("./setStorage")
const inputBuilder = require("./contactForm")
const submitContact = require("./submitContact")
const mainDiv = document.querySelector(".main-div")


console.log("hello world, I'm working")

const localStorageDB = getDatabase
console.log(localStorageDB())


// const inputFields = inputBuilder()
// console.log(inputFields)
// document.appendChild(mainDiv.appendChild(inputFields))
// document.getElementById("submitButton").addEventListener("click", submitContact)