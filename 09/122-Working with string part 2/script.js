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

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//fix capiralization in name
const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'helo@jonas.com';
const loginEmail = 'Hello@Jonas.com \n';
const lower = loginEmail.toLowerCase();
const trimmedEmail = lower.trim();
console.log(trimmedEmail);

const normallizedEmail = loginEmail.toLowerCase().trim();
console.log(normallizedEmail);
console.log(email === normallizedEmail);
//replacing
const priceGB = '288,97s';
const priceUS= priceGB.replace('s','$').replace('.','.');
console.log(priceUS);
const anmouncement ='All passengers come to barding door 23. Boaring door 23!';
console.log(anmouncement.replace('door','gate'));

//booleans
const plane = 'Airbus A32neo';
console.log(plane.includes('A230'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Paet of NEW Airbus family');
}

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on broad');
  }
  else{
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');