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

const myFriends = ["Juan", "Emi", "Mono"];
console.log(myFriends);

const friendsAge = new Array(43, 43, 44);
console.log(friendsAge);

console.log(...myFriends[1][1]);
console.log(myFriends[myFriends.length - 1]);
myFriends[2] = "Mati";
console.log(myFriends);
