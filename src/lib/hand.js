import Pile from './pile'

class Hand {
  constructor() {
    this.hand = []
  }

  dealNewCard(card) {
    this.hand.push(card)
  }
}

export default Hand
