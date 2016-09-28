class Player {
  constructor( name, wallet, hand ){
    this.name = name
    this.wallet = wallet
    this.hand = hand
  }

  receiveCard(card) {
    this.hand.dealNewCard(card)
  }
}


export default Player
