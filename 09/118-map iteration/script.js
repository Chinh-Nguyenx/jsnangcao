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

const question = new Map([
  ['question','What is the best programing language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct', 3],
  [true,'Correct'],
  [false,'Try again'],
]);
console.log(question);
//Convert objext to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for(const [key,value] of question){
  if(typeof key === 'number') console.log(`Anser ${key}: ${value}`);
}
const answer = Number( prompt('Your Answer'));
console.log(answer);
question.get( question.get('Correct') === answer );

//Convert map to array
console.log(...question);
//console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());