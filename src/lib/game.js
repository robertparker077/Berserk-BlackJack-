import buildPlayers from './userPrompt'
import chooseDecks from './userPrompt'
import Pile from './pile'
import Hand from './hand'

// Create players from user input
const usePlayers = buildPlayers.buildPlayers()

// Create pile of cards from user chosen decks
const usePile = new Pile(chooseDecks.chooseDecks())
// Shuffle the pile of cards/decks
usePile.shuffle()

// Deal cards to each player (including dealer)
for (let origDeal=1; origDeal < 3; origDeal++) {
  for (let plIndex=0; plIndex < usePlayers.length; plIndex++) {
    usePlayers[plIndex].receiveCard(usePile.drawCard())
  }
}

// Display original hands
for (let plIndex=0; plIndex < usePlayers.length; plIndex++) {
  console.log(`${usePlayers[plIndex].name} \t ${usePlayers[plIndex].hand.hand.toString().replace(/,/g," ")}`)
}
// console.log(`${usePlayers[plIndex].name} \t ${usePlayers[plIndex].hand.hand.toString().replace(/,/g," ")}`)

//Check for Blackjack
for (let plIndex=0; plIndex < usePlayers.length; plIndex++) {
    if (usePlayers[plIndex].hand.hand[0].type.name === "Ace" && usePlayers[plIndex].hand.hand[1].type.value === 10) {
      // END GAME
      } else if (usePlayers[plIndex].hand.hand[1].type.name === "Ace" && usePlayers[plIndex].hand.hand[0].type.value === 10) {
        // END GAME
        } else {
          // BREAK
          }
}
// PROMPT USER FOR HIT OR STAY
