import Pile from './pile'

class Hand {
  constructor() {
    this.hand = []
    this.cardValue = 0
  }

  dealNewCard( card ) {
    if( card.name !== 'Ace' ) {
      this.cardValue += card.value
    } else {
    this.cardValue = this.hand.map(card => card.cardValue).reduce((a, b) => a + b)
      let numberOfAces = this.hand.filter(card => card.name === 'Ace').length
      while (this.cardValue > 21 && numberOfAces > 0) {
        this.cardValue -= 10
        numberOfAces--
    }
  }
  this.hand.push( card )
}
    //   if( this.cardValue + 11 > 21 ) {
    //     this.cardValue += 1
    //   } else {
    //     this.cardValue += 11
    //   }
  // }

  value() {
    return this.cardValue
  }

  toString() {
    return this.hand.map( card => card.toString() ).join( " " )
  }
}

export default Hand
