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
      if( this.cardValue + 11 > 21 ) {
        this.cardValue += 1
      } else {
        this.cardValue += 11
      }
    }

    this.hand.push( card )
  }

  checkForAce(card) {
    if (card.type.name === "Ace") {
      return true
    } else {
      return false
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
