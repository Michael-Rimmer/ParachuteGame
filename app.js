class Deck {
  constructor() {
    // initialises arrays for cards
    this.availableCards = [];
    this.cutCards = [];
    this.spentCards = [];
    // initialises default number of players
    this.players = 5;
  }
}

class Dealer {
  constructor() {
    this.cards = [];
    this.turn = false;
    this.cardBalance = 17;
  }

  // Change [0, 2] to A ♦
  display(card) {
    var prefix = '0x0001F0', suit = '', cardVal, temp;

    var suits = {'0': 'A', '1': 'B', '2': 'C', '3': 'D'},
        colour = {'0': 'black', '1': '#ff1103', '2': '#ff1103', '3': 'black'};

    // takes the first value, finds the remainder it has with 4 and casts it to
    // a string
    var value = (card[0] % 4).toString();
    // select which suit by passing the raw value into the object, which returns
    // the unicode suit value
    suit = suits[value];
    // adds one to the card value and converts it into hexadecimal
    cardVal = (card[1] + 1).toString(16);
    // concatenates the suit and the card value
    temp = prefix.concat(suit, cardVal);
    // 1. returns a string from the unicode code point
    // 2. returns the colour by passing in the suit value  which returns the
    // respective colour
    return [String.fromCodePoint(temp), colour[value]];
  }
}

class VirtualHand extends Dealer {
  constructor() {
    super();
    this.bank = 5000;
    this.wager = 50;
    this.wagerBalance = 0;
  }

  wagerBalanceCalc() {
    // chooses a random number between 0 and 2
    this.wagerBalance = Math.floor(Math.random() * 3);
    // selects the relevant wager
    switch (this.wagerBalance) {
      case 0:
        this.wager = 10;
        break;
      case 1:
        this.wager = 50;
        break;
      case 2:
        this.wager = 100;
        break;
    }
  }

  cardBalanceCalc() {
    // to get a normal (bell curve) distribution I'm adding two random numbers
    // not a statistically sound method but it should do the trick
    var max = 9;
    var min = 7;
    // standard formula to select a random number in a range
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    var y = Math.floor(Math.random() * (max - min + 1) + min);
    this.cardBalance = x + y;
  }

  store(i) {
    localStorage.setItem(i + 'cards', this.cards);
    localStorage.setItem(i + 'turn', this.turn);
    localStorage.setItem(i + 'cardBalance', this.cardBalance);
    localStorage.setItem(i + 'wagerBalance', this.wagerBalance);
    localStorage.setItem(i + 'bank', this.bank);
    localStorage.setItem(i + 'wager', this.wager);
  }
}

class PlayerHand extends Dealer {
  constructor() {
    super();
    this.bank = 5000;
    this.wager = 50;
    this.splitCards = [];
    this.handle = '';
    this.rounds = 0;
  }

  hit() {
    this.cards.push(deck.hit());
    if (this.evaluate() > 21) settlement(true, true);
    getID('double').className = 'hidden';
  }

  stand() {
    settlement(true, true);
  }

  returnCards() {
    // for all cards
    for (let i = this.cards.length; i > 0; i--) {
      // .pop() removes the last index and returns it. Then returns the index to
      // deck
      deck.returnCards(this.cards.pop());
    }
    // if there are split cards, remove them
    if (this.splitCards.length) {
      for (let j = this.splitCards.length; j > 0; j--) {
        // .pop() removes the last index and returns it. Then returns the index
        // to deck
        deck.returnCards(this.splitCards.pop());
      }
    }
  }

  splitCardsCheck() {
    // if the cards have the same value
    if (this.cards[0][1] === this.cards[1][1]) {
      return true;
      // or if they are both valued above 9
    } else if (this.cards[0][1] > 8 && this.cards[1][1] > 8) {
      return true;
    } else {
      return false;
    }
  }

  splitTheCards() {
    // create two seperate hands
    this.splitCards.push(this.cards.pop());
    // hit to player hand
    this.hit();
    // hit to splitCards
    this.hit();
    this.splitCards.push(this.cards.pop());
  }

  store(i) {
    localStorage.setItem(i + 'cards', this.cards);
    localStorage.setItem(i + 'turn', this.turn);
    localStorage.setItem(i + 'cardBalance', this.cardBalance);
    localStorage.setItem(i + 'bank', this.bank);
    localStorage.setItem(i + 'wager', this.wager);
    localStorage.setItem(i + 'splitCards', this.splitCards);
    localStorage.setItem(i + 'handle', this.handle);
    localStorage.setItem(i + 'rounds', this.rounds);
  }
}

////////////////////// MAIN FUNCTION //////////////////////
var deck = new Deck(), Players, PLAYING = false;

// helper function to make code easier to read
function getID(x) {
  return document.getElementById(x);
}

// helper function to make code easier to read
function styleID(x) {
  return document.getElementById(x).style;
}

// helper function so I don't have to write
// Players[Players.length - 1] to access the user
Array.prototype.last = function() {
  return this[this.length - 1];
};
