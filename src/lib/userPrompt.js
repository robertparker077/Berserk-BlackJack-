import Player from './player'
import Hand from './hand'

const readlineSync = require('readline-sync');

const users = readlineSync.question('How many Players?: ')

const buildPlayers = () => {
  const players = []

  for (let index = 0; index < users; index++) {
    let playerName = readlineSync.question(`Player ${index+1}, What is your name?: `)
    let playerWallet = readlineSync.question(`${playerName}, How much money do you want to start with?: $`)
    players.push(new Player(playerName, playerWallet, new Hand()))
  }
  players.push(new Player('Dealer', 10000, new Hand()))
  return players
}

const chooseDecks = () => {
  let deckChoice = readlineSync.question(`How many decks would you like to play with?: `)
  return deckChoice
}

const hitOrStay = (playerIndex, pile) => {
  if (readlineSync.keyInYN(`${playerIndex.name}, Would you like to hit?: `)) {
    playerIndex.receiveCard(pile.drawCard())
    console.log("you get cards!")
    return true
  } else {
    console.log("looks like you're good to go")
    return false
  }
}

const endGame = players => {
  const dealer = players[ players.length - 1 ]

  for( let index = 0; index < players.length - 1; index++ ) {
    const player = players[ index ]

    if( player.hasNatural21() ) {
      player.win( player.bet * 1.5 + player.bet )
    } else if( player.handValue() > dealer.handValue() || dealer.handValue() > 21 ) {
      player.win( player.bet * 2 )
    }
  }
}

export default { buildPlayers, chooseDecks, hitOrStay, endGame }
