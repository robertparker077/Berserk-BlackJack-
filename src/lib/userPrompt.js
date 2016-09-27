import Player from './player'

const readlineSync = require('readline-sync');

let users = readlineSync.question('How many Players?: ')
let players = []

for ( let index = 0; index < users; index++) {
  let playerName = readlineSync.question('What is your name?: ')
  let playerWallet = readlineSync.question('How much money do you want to start with?: $')
  players.push(new Player(playerName, playerWallet))
}
console.log(players)
