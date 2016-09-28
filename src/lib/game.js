import buildPlayers from './userPrompt'
import chooseDecks from './userPrompt'
import Pile from './pile'

const usePlayers = buildPlayers.buildPlayers()

const usePile = new Pile(chooseDecks.chooseDecks())
usePile.shuffle()


 console.log(usePlayers, usePile.pile)
