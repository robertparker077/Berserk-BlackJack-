import userPrompt from './userPrompt'
import Pile from './pile'
import Hand from './hand'
import Player from './player'

const players = userPrompt.buildPlayers()
const dealer = players[players.length-1]
let bets = 0
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
  players[playerIndex].bet = 10
  console.log(`${players[ playerIndex ].toString()} $${players[ playerIndex ].wallet}` )
}
  console.log(`********** ********** ********** ********** **********`)

//Check for Blackjack
for (let playerIndex=0; playerIndex < players.length; playerIndex++) {
  if ( players[ playerIndex ].handValue() === 21 ) {
    console.log(`${players[playerIndex].name} You have 21, please wait...`)
  }
}

// TODO: Write loop, omit the dealer from this loop
for( let playerIndex = 0; playerIndex < players.length; playerIndex++ ) {
  if (players[playerIndex].isDealer() !== true ) {
    console.log(players[ playerIndex ].toString() )
    while( userPrompt.hitOrStay( players[ playerIndex ], pile) && players[ playerIndex ].handValue() < 21 ) {
      console.log(players[ playerIndex ].toString() )
    }
    for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
      if ( players[playerIndex].handValue() > 21 ) {
        players[playerIndex].status = 'BUSTED'
        console.log(`${players[playerIndex].name}, You are over 21, please wait...`)
      }
    }
  } else {
      if (players[playerIndex].isDealer() === true) {
        while ( players[playerIndex].handValue() < 17 ) {
          console.log(`Dealer must hit. Hand = ${players[playerIndex].hand.cardValue}`)
          console.log(players[ playerIndex ].toString())
          console.log(`********** ********** ********** ********** **********`)
          players[playerIndex].receiveCard(pile.drawCard())
        }
      }
    }
}

// TODO: Play for the dealer
const winHand = players => {
  let lostBets = 0
  console.log('Dealer Hand Value',dealer.handValue());
  for( let index = 0; index < players.length; index++ ) {
    const player = players[ index ]
    if (player.isDealer() === false ) {
      if( player.hasNatural21() ) {
        player.win( player.bet * 1.5 + player.bet )
      } else if( player.handValue() <= 21 && player.handValue() > dealer.handValue() || dealer.handValue() > 21 ) {
          player.win( player.bet * 2 )
        }
        else if (player.status === 'BUSTED') {
            lostBets = player.bet
            dealer.wallet += lostBets
        }
        else if (player.handValue() < 21 && dealer.status === 'BUSTED') {
            player.win(player.bet * 2)
        }
        else {
          lostBets = player.bet
          dealer.wallet += lostBets
        }
    }
  }
}

winHand(players)
console.log(`********** ********** ********** ********** **********`)
console.log(`Final Status`);
for (let playerIndex=0; playerIndex < players.length; playerIndex++) {
  console.log(`${players[ playerIndex ].toString()} = ${players[ playerIndex ].wallet}` )
}
