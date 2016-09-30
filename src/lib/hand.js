import Pile from './pile'

class Hand {
  constructor() {
    this.hand = []
    this.cardValue = 0
  }

  dealNewCard( card ) {
    this.hand.push( card )

    this.cardValue = this.hand.map(card => card.value).reduce((a, b) => a + b)
    let numberOfAces = this.hand.filter(card => card.name === 'Ace').length
    while (this.cardValue > 21 && numberOfAces > 0) {
      this.cardValue -= 10
      numberOfAces--
    }
  }

  value() {
    return this.cardValue
  }

  toString() {
    return this.hand.map( card => card.toString() ).join( " " )
  }
}

export default Hand
