import Player from './player'

const readlineSync = require('readline-sync');

let users = readlineSync.question('How many Players?: ')

let buildPlayers = () => {
  const players = []

  for (let index = 0; index < users; index++) {
    let playerName = readlineSync.question(`Player ${index+1}, What is your name?: `)
    let playerWallet = readlineSync.question(`${playerName}, How much money do you want to start with?: $`)
    players.push(new Player(playerName, playerWallet))
  }
  players.push(new Player('Dealer', 10000))
  return players
}

let chooseDecks = () => {
  let deckChoice = readlineSync.question(`How many decks would you like to play with?: `)
  return deckChoice
}

module.exports = { buildPlayers, chooseDecks }
