import buildPlayers from './userPrompt'
import chooseDecks from './userPrompt'
import Pile from './pile'
import Hand from './hand'

const usePlayers = buildPlayers.buildPlayers()
const usePile = new Pile(chooseDecks.chooseDecks())
usePile.shuffle()

for (let index=0; index < usePlayers.length; index++) {
  usePlayers[index].receiveCard(usePile.drawCard())
  console.log(usePlayers[index].name, usePlayers[index].hand.hand)
}
