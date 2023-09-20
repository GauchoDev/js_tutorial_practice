"use strict";
/*
//function declaration

let age1 = calcAge1(1979);
console.log(`age1: ${age1}`);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

//function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

let age2 = calcAge2(1979);
console.log(`age2: ${age2}`);

//Arrow function

let calcAge3 = (birthYear) => 2023 - birthYear;
let age3 = calcAge3(1979);
console.log(`age3: ${age3}`);

const retirementCalculator = (birthYear, name) => {
  const age = 2023 - birthYear;
  const yearsToretire = 65 - age;
  return `${name} has ${yearsToretire} years left to retire`;
};

const text = retirementCalculator(1979, "Esteban");
console.log(text);

const fruiCut = function (fruit) {
  return fruit * 2;
};

const fruitProcessor = function (apple, orange) {
  const applePieces = fruiCut(apple);
  const orangesPieces = fruiCut(orange);

  return `Juice made with ${applePieces} pieces of apple and ${orangesPieces}  pieces of orange`;
};

const juice = fruitProcessor(2, 3);
console.log(juice);

const ageCalculator = function (birthYear) {
  const age = 2023 - birthYear;
  const yearsToretire = 65 - age;
  if (yearsToretire < 0) {
    return -1;
  } else {
    return yearsToretire;
  }
};

const retCalculator = function (birthYear, name) {
  const yearsToretire = ageCalculator(birthYear);
  const text =
    yearsToretire === -1
      ? `${name} has already retire`
      : `${name} has ${yearsToretire} years left to retire`;
  console.log(Boolean(yearsToretire), yearsToretire);
  return text;
};

console.log(retirementCalculator(1979, "Esteban"));
console.log(retirementCalculator(1999, "John"));
console.log(retCalculator(1980, "Emiliano"));
*/

//Arrays

/*
const myFriends = ["Juan", "Emi", "Mono"];
console.log(myFriends);

const friendsAge = new Array(43, 43, 44);
console.log(friendsAge);

console.log(...myFriends[1][1]);
console.log(myFriends[myFriends.length - 1]);
myFriends[2] = "Mati";
console.log(myFriends);
const firstName = "Esteban";
const age = 2023 - 1979;
const myInfo = [firstName, age, myFriends];
console.log(myInfo);
console.log(
  `my name is ${myInfo[0]}, I am ${myInfo[1]} years old, my friends are ${myInfo[2]}`
);
console.log(...myFriends[1]);

const newFriend = myFriends.push("Mono"); //Gives me the position of the new item
console.log(newFriend);

const firstFriendAdded = myFriends.unshift("Tubu");
console.log(firstFriendAdded);
console.log(myFriends);
const popfrind = myFriends.pop();
console.log(popfrind);
console.log(myFriends);

const firstRemoved = myFriends.shift();
console.log(firstRemoved);
console.log(myFriends);
console.log(myFriends.indexOf("Emi"));
console.log(myFriends.includes("Mati"));
console.log(myFriends.includes("Mono"));
*/

//object
/*
const esteban = {
  firstName: "Esteban",
  lastName: "Negrete",
  birtday: 1979,
  job: "programmer",
  friends: ["Juan", "Emi", "Mono"],
  hasDriverLicense: false,
  //Method when function is in an object
  // calcAge: function () {
  //   return 2023 - this.birtday;
  // },

  calcAge: function () {
    this.age = 2023 - this.birtday;
    return this.age;
  },

  summary: function () {
    const text = this.hasDriverLicense
      ? "has a driver's license"
      : "does not have a driver's licens";
    const mySummary = `${this.firstName} is a ${this.age} years old ${this.job} and he ${text}`;
    return mySummary;
  },
};

esteban.location = "Chivilcoy";

console.log(esteban["summary"]());
const myInfo = esteban.summary();
console.log(myInfo);
console.log(
  `${esteban.firstName} has 3 friends and his best friend is ${esteban["friends"][1]}`
);

console.log(
  `${esteban["firstName"]} has 3 friends and his best friend is ${esteban.friends[1]}`
);

const namekey = "Name";
console.log(esteban.lastName);
console.log(esteban["lastName"]);
console.log(esteban["last" + namekey]);
let interestesIn = prompt(
  "What are you interested in? Choose between firstName, lastName, age, job, friends"
);

if (esteban[interestesIn]) {
  console.log(Boolean(interestesIn));
  console.log(esteban[interestesIn]);
} else {
  console.log(Boolean(interestesIn));
  alert("wrong option");
  console.log(esteban[interestesIn]);
  interestesIn = prompt(
    "What are you interested in? Choose between firstName, lastName, age, job, friends"
  );
  console.log(esteban[interestesIn]);
}
*/

// loops
// let i = 0;

// while (i < 9) {
//   i++;
//   console.log(i);
// }

// console.log("\ndo while\n");
// let j = 0;

// do {
//   j++;
//   console.log(j);
// } while (j < 9);

// const esteban = [
//   "Esteban",
//   "Negrete",
//   1979,
//   "programmer",
//   ["Juan", "Emi", "Mono"],
//   false,
// ];

// const types = [];

// for (let i = 0; i < esteban.length; i++) {
//   console.log(esteban[i]);
//   types.push(typeof esteban[i]);
// }
// console.log(types);

// const years = [1979, 1980, 1981, 1982, 1990];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < esteban.length; i++) {
//   if (typeof esteban[i] !== "string") continue; /*only logs strings */
//   console.log(esteban[i]);
// }
// console.log("\n\n");
// for (let i = esteban.length - 1; i >= 0; i--) {
//   console.log(`${i})${esteban[i]}`);
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end....");
}
