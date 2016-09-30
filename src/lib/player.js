class Player {
  constructor( name, wallet, hand ){
    this.name = name
    this.wallet = wallet
    this.hand = hand
    this.bet = 0
    this.status = ''
  }

  playNewHand( hand ) {
    this.hand = hand
    this.bet = 10
  }

  receiveCard(card) {
    this.hand.dealNewCard(card)
  }

  handValue() {
    return this.hand.value()
  }

  makeBet( betAmount ) {
    this.bet = betAmount
    this.wallet -= betAmount
  }

  win( winnings ) {
    this.wallet += winnings
  }

  toString() {
    return `${this.name} \t ${this.hand.toString()} \t\t ${this.status}`
  }

  isDealer() {
    return this.name === 'DEALER'
  }

  hasNatural21() {
    return this.hand.length === 2 && this.handValue() === 21
  }
}


export default Player
