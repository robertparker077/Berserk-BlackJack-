import Pile from './pile'

class Hand {
  constructor() {
    this.hand = []
  }

  dealNewCard(card) {
    this.hand.push(card)
  }

  checkForAce(card) {
    if (card.type.name === "Ace") {
    return true
  } else {
      return false
    }
  }
}

export default Hand
