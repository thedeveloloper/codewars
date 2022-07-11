const config = {
  display: { useSuitChar: true, useClearSuitChar: false },
  game: {
    numberOfPlayers: 4,
    startingCards: 5,
    numberOfDecks: 1,
    acesHigh: false,
  },
  deck: {
    suits: ["spade", "diamond", "club", "heart"],
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "X", "J", "Q", "K"],
  },
};

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  getSuitChar(suit) {
    switch (suit) {
      case "spade":
        if (config.display.useSuitChar) {
          if (config.display.useClearSuitChar) {
            return "\u2664";
          } else {
            return "\u2660";
          }
        } else {
          return "S";
        }
      case "diamond":
        if (config.display.useSuitChar) {
          if (config.display.useClearSuitChar) {
            return "\u2662";
          } else {
            return "\u2666";
          }
        } else {
          return "D";
        }
      case "club":
        if (config.display.useSuitChar) {
          if (config.display.useClearSuitChar) {
            return "\u2667";
          } else {
            return "\u2663";
          }
        } else {
          return "C";
        }
      case "heart":
        if (config.display.useSuitChar) {
          if (config.display.useClearSuitChar) {
            return "\u2661";
          } else {
            return "\u2665";
          }
        } else {
          return "H";
        }
    }
  }

  printCard() {
    console.log(`
    ┌─────────┐
    │       ${this.value} │
    │         │
    │    ${this.getSuitChar(this.suit)}    │
    │         │
    │ ${this.value}       │
    └─────────┘`);
  }
}

class Deck {
  constructor() {
    this.cards = [];
    for (let suit of config.deck.suits.values()) {
      for (let value of config.deck.values.values()) {
        this.cards.push(new Card(suit, value));
      }
    }
  }

  shuffleDeck() {
    this.cards = [...this.cards.sort(() => Math.random() - 0.5)];
  }

  printDeck() {
    this.cards.forEach((card) => console.log(card));
  }
}

function playGame() {
  const deck = new Deck();
  deck.shuffleDeck();
  deck.printDeck();
  for (let i = 0; i < 10; i++) {
    deck.cards[i].printCard();
  }
  return deck;
}

playGame();
