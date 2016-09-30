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
for( let playerIndex = 0; playerIndex < players.length; playerIndex++ ) {
  if (players[playerIndex].isDealer() !== true ) {
    while( userPrompt.hitOrStay( players[ playerIndex ], pile) && players[ playerIndex ].handValue() < 21 ) {
      console.log( players[ playerIndex ].toString() )
    }
    for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
      if ( players[playerIndex].handValue() > 21 ) {
        players[playerIndex].status = 'BUSTED'
      }
      // console.log( players[ playerIndex ].toString() )
      console.log( players[ playerIndex ].toString(), players[playerIndex].hand.cardValue )
    }
  } else {
      if (players[playerIndex].isDealer() === true) {
        while ( players[playerIndex].handValue() < 17 ) {
          console.log(`Dealer must hit. Hand = ${players[playerIndex].hand.cardValue}`)
          players[playerIndex].receiveCard(pile.drawCard())
        }
      }
      console.log( players[ playerIndex ].toString(), players[playerIndex].hand.cardValue )
    }
}




// TODO: Play for the dealer
const winHand = players => {
  // const dealer = players[ players.length - 1 ]

  for( let index = 0; index < players.length; index++ ) {
    const player = players[ index ]
    if (player.isDealer() !== 'DEALER' ) {
      if( player.hasNatural21() ) {
        player.win( player.bet * 1.5 + player.bet )
      } else if( player.handValue() <= 21 && player.handValue() > dealer.handValue() || dealer.handValue() > 21 ) {
          player.win( player.bet * 2 )
        }
    }
  }
}

//userPrompt.endGame( players )
