import Deck from './deck'

class Pile {
  constructor( deckCount ) {
    this.pile = []

    for( let index = 0; index < deckCount; index++ ) {
      const deck = new Deck()
      this.pile = this.pile.concat( deck.cards() )
    }
  }

  shuffle() {
    for( let index = 0; index < this.pile.length; index++ ) {
      const randomIndex = Math.floor( Math.random() * this.pile.length )

      const temp = this.pile[ randomIndex ]
      this.pile[ randomIndex ] = this.pile[ index ]
      this.pile[ index ] = temp
    }
  }

  drawCard() {
    if( this.hasMoreCards() ) {
      return this.pile.pop()
    } else {
      throw "No more cards in pile!"
    }
  }

  /* We may need to change this functionality depending on when
  to end game based on number of cards */
  hasMoreCards() {
    return this.pile.length > 0
  }
}

const aPileOfCards = new Pile(2)
aPileOfCards.shuffle()

while( aPileOfCards.hasMoreCards() ) {
  console.log( aPileOfCards.drawCard() )
}

export default Pile
