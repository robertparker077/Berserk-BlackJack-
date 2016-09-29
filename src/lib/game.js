import userPrompt from './userPrompt'
import Pile from './pile'
import Hand from './hand'

const players = userPrompt.buildPlayers()

const pile = new Pile( userPrompt.chooseDecks() )
pile.shuffle()

// Get bets from each player
// TODO: Implement betting

// Deal cards to each player (including dealer)
for( let origDeal=1; origDeal < 3; origDeal++) {
  for( let playerIndex=0; playerIndex < players.length; playerIndex++) {
    players[playerIndex].receiveCard(pile.drawCard())
  }
}

// Display original hands
for (let playerIndex=0; playerIndex < players.length; playerIndex++) {
  console.log( players[ playerIndex ].toString() )
}

//Check for Blackjack
for (let playerIndex=0; playerIndex < players.length; playerIndex++) {
  if ( players[ playerIndex ].handValue() === 21 ) {
    // END GAME
  }
}

// TODO: Write loop, omit the dealer from this loop
for( let playerIndex = 0; playerIndex < players.length - 1; playerIndex++ ) {
  while( userPrompt.hitOrStay( players[ playerIndex ], pile) && players[ playerIndex ].handValue() < 21 ) {
    console.log( players[ playerIndex ].toString() )
  }

  console.log( players[ playerIndex ].toString() )
}

// TODO: Play for the dealer

userPrompt.endGame( players )
