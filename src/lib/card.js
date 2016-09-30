const SUITS = [
  { name: 'Club', symbol: "♣️" },
  { name: 'Diamond', symbol: "♦️" },
  { name: 'Heart', symbol: "♥️" },
  { name: 'Spade', symbol: "♠️" },
]

const TYPES = [
  { name: 'Ace', value: 11 },
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
  constructor( suit, type ) {
    this.suit = suit
    this.type = type
    this.value = type.value
    this.name = type.name
  }

  toString() {
    return `${this.suit.symbol} ${this.displayType()}`
  }

  displayType() {
    if( this.type.name === 'Ace' ) {
      return 'A'
    } else if( this.type.value === 10 && this.type.name !== 'Ten' ) {
      return this.type.name.substring( 0, 1 )
    } else {
      return this.type.value
    }
  }
}

export { Card as default, SUITS, TYPES }
