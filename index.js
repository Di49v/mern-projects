// document.getElementById("count-el").innerText = 5

let count = 0, countEl = document.getElementById("count-el")

function increment(){
    count++
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

function save(){
    console.log(count)
    saveEl.innerText += count + "-"
}

let username = "div", message = "you have 3 notifications"
messageToUser = `${message}, ${username}`
console.log(messageToUser)

let welcomeEl = document.getElementById("welcome-el")
let names = "Divleen Kaur"
let greeting = `Hello dear ${names}, how are you?`

welcomeEl.innerText = greeting