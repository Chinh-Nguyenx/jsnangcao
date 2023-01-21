"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23. Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ESG enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...othersIngredeient) {
    console.log(mainIngredient);
    console.log(othersIngredeient);
  },
};

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schemdtmann'.split('+'));

const [firstName, lastName] = 'Jonas Schemdtmann'.split(' ');
const newName = ['Mr.', firstName,lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUppercase = [];
  for(const n of names){
    n[0].toUpperCase() + n.slice(1);
  }
  console.log(namesUppercase.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemdtmann');

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25,'+').padEnd(30,'+'));
console.log('Jonas'.padStart(23,'+'));

//repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));
const planesInlines = function (n){
  console.log(`There are ${n} planes in line ${pl.repeat(2)}`)
}
planesInlines(5)