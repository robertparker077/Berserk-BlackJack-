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
      return this.pile.shift()
    } else {
      // Add some decks
      console.log( 'Added some new decks to pile')
      throw "No more cards in pile!"
    }
  }

  hasMoreCards() {
    return this.pile.length > 0
  }
}

export default Pile
