let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
   name: "Jack Master",
   chips: 145,
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1;

   if (randomNumber == 1) {
      return 11;
   } else if (randomNumber > 10) {
      return 10;
   } else {
      return randomNumber;
   }
}

function startGame() {
   isAlive = true
   hasBlackJack = false
   let firstCard = getRandomCard(), secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = cards[0] + cards[1]
   renderGame()
}

function renderGame() {
   cardsEl.textContent = "Cards:"
   for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += `${cards[i]} `
   }
   sumEl.textContent = "Sum: " + sum

   if (sum < 21) {
      message = "Do you want to draw a new card? 🙂"
   } else if (sum === 21)  {
      message = "Yohoo! You've got a BlackJack! 🥳"
      hasBlackJack = true
   } else {
      message = "You're out of the game! 😭"
      isAlive = false
   }

   messageEl.textContent = message
}

function newCard() {
   if (isAlive && !hasBlackJack) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
   }
}
