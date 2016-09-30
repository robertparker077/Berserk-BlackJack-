import Hand from '../lib/hand'
import Card from '../lib/card'
import Chai from 'chai'
const expect = Chai.expect

describe('Hand', () => {
  describe('.value()', () => {
    it('should handle aces', () => {
      const AceOfClubs = new Card(
        { name: 'Club', symbol: "♣️" },
        { name: 'Ace', value: 11 }
      )
      const KingOfClubs = new Card(
        { name: 'Club', symbol: "♣️" },
        { name: 'King', value: 10 }
      )
      const AceOfHearts = new Card(
        { name: 'Heart', symbol: "♥️" },
        { name: 'Ace', value: 11 }
      )
      const AceOfDiamonds = new Card(
        { name: 'Diamond', symbol: "♦️" },
        { name: 'Ace', value: 11 }
      )

      const hand = new Hand
      expect(hand).to.be.an.instanceof(Hand)
      expect(hand.value()).to.eql(0)

      hand.dealNewCard(AceOfClubs)
      expect(hand.value()).to.eql(11)

      hand.dealNewCard(KingOfClubs)
      expect(hand.value()).to.eql(21)

      hand.dealNewCard(AceOfHearts)
      expect(hand.value()).to.eql(12)

      hand.dealNewCard(AceOfDiamonds)
      expect(hand.value()).to.eql(13)
    })
  })
})
