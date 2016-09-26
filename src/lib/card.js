const SUITS = [
  { name: 'Club', symbol: "♣️" },
  { name: 'Diamond', symbol: "♦️" },
  { name: 'Heart', symbol: "♥️" },
  { name: 'Spade', symbol: "♠️" },
]

const RANKS = [
  { name: 'Ace', value: [ 1, 11 ] },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 },
  { name: 'Four', value: 4 },
  { name: 'Five', value: 5 },
  { name: 'Six', value: 6 },
  { name: 'Seven', value: 7 },
  { name: 'Eight', value: 8 },
  { name: 'Nine', value: 9 },
  { name: 'Ten', value: 10 },
  { name: 'Jack', value: 10 },
  { name: 'Queen', value: 10 },
  { name: 'King', value: 10 },
]

class Card {
  constructor( suit, rank ) {
    this.suit = suit
    this.rank = rank
  }

  toString() {
    return `${this.suit.symbol} ${this.displayRank()}`
  }

  displayRank() {
    if( this.rank.name === 'Ace' ) {
      return 'A'
    } else if( this.rank.value === 10 && this.rank.name !== 'Ten' ) {
      return this.rank.name.substring( 0, 1 )
    } else {
      return this.rank.value
    }
  }
}

export { Card as default, SUITS, RANKS }
