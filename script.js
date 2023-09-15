"use strict";

// //function declaration
// let age1 = calcAge1(1979);
// console.log(`age1: ${age1}`);

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// let age2 = calcAge2(1979);
// console.log(`age2: ${age2}`);

// //Arrow function

// let calcAge3 = (birthYear) => 2023 - birthYear;
// let age3 = calcAge3(1979);
// console.log(`age3: ${age3}`);

// const retirementCalculator = (birthYear, name) => {
//   const age = 2023 - birthYear;
//   const yearsToretire = 65 - age;
//   return `${name} has ${yearsToretire} years left to retire`;
// };

// const text = retirementCalculator(1979, "Esteban");
// console.log(text);

// const fruiCut = function (fruit) {
//   return fruit * 2;
// };

// const fruitProcessor = function (apple, orange) {
//   const applePieces = fruiCut(apple);
//   const orangesPieces = fruiCut(orange);

//   return `Juice made with ${applePieces} pieces of apple and ${orangesPieces}  pieces of orange`;
// };

// const juice = fruitProcessor(2, 3);
// console.log(juice);

// const ageCalculator = function (birthYear) {
//   const age = 2023 - birthYear;
//   const yearsToretire = 65 - age;
//   if (yearsToretire < 0) {
//     return -1;
//   } else {
//     return yearsToretire;
//   }
// };

// const retirementCalculator = function (birthYear, name) {
//   const yearsToretire = ageCalculator(birthYear);
//   const text =
//     yearsToretire === -1
//       ? `${name} has already retire`
//       : `${name} has ${yearsToretire} years left to
//       retire`;
//   console.log(Boolean(yearsToretire));
//   return text;
// };

// console.log(retirementCalculator(1979, "Esteban"));
// console.log(retirementCalculator(1999, "John"));
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics
discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'function to determine the winner for both Data 1 and Data 2
5. Ignored raws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 §
 Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 */
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// 2. Use the function to calculate the average for both teams
let averageDolphins = calcAverage(85, 54, 41);
let averageKoalas = calcAverage(23, 34, 27);
// 3. Create a function 'checkWinner' that takes the average score of each team
const checkWinner = function (dolphinAverage, koalaAverage) {
  if (dolphinAverage >= 2 * koalaAverage) {
    console.log(`Dolphin win!!! ${dolphinAverage}-${koalaAverage}`);
  } else if (koalaAverage >= 2 * dolphinAverage) {
    console.log(`Koala win!!! ${koalaAverage}-${dolphinAverage}`);
  } else {
    console.log(`No one wins ${dolphinAverage}-${koalaAverage}`);
  }
};
checkWinner(averageDolphins, averageKoalas);
// console.log(`The average score for Dolphins is ${averageDolphins}`);
// console.log(`The average score for Koalas is ${averageKoalas}`);
