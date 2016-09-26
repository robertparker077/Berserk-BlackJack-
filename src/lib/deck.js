import Card, { SUITS, RANKS } from './card'

class Deck {
  constructor() {
    this.deck = this.buildDeck()

    // console.log( this.deck, this.deck.length )
    console.log( this.deck.length )
    this.deck.forEach( card => console.log( card.toString() ))
  }

  suitReducer( memo, suit ) {
    return memo.concat( ...RANKS.map( rank => new Card( suit, rank ) ))
  }

  buildDeck() {
    // let cards = []
    //
    // for( let suitIndex = 0; suitIndex < SUITS.length; suitIndex++ ) {
    //   for( let rankIndex = 0; rankIndex < RANKS.length; rankIndex++ ) {
    //     cards.push( new Card( SUITS[ suitIndex ], RANKS[ rankIndex ] ))
    //   }
    // }
    //
    // return cards

    return SUITS.reduce( this.suitReducer , [] )
  }
}

export default Deck

new Deck()
