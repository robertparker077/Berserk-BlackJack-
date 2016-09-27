import Card, { SUITS, TYPES } from './card'

class Deck {
  constructor() {
    this.deck = this.buildDeck()

    /* Different ways to test out of the created deck */
    // console.log( this.deck, this.deck.length )
    // console.log( this.deck.length )
    // console.log(this.deck)
    // this.deck.forEach( card => console.log( card.toString() ))
  }

  suitReducer( memo, suit ) {
    return memo.concat( ...TYPES.map( type => new Card( suit, type ) ))
  }

  buildDeck() {
    /* Classic way to create deck */
    // let cards = []
    //
    // for( let suitIndex = 0; suitIndex < SUITS.length; suitIndex++ ) {
    //   for( let typeIndex = 0; typeIndex < TYPES.length; typeIndex++ ) {
    //     cards.push( new Card( SUITS[ suitIndex ], TYPES[ typeIndex ] ))
    //   }
    // }
    // return cards

    /* ES6 Syntax compared to classic for loop above */
    return SUITS.reduce( this.suitReducer , [] )
  }

  cards() {
    return this.deck
  }
}

export default Deck
