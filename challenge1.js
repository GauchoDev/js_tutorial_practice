const { error } = require("protractor");

Math.round();
/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can  even implement both
versions)
3. Create a Boolean variable' markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Â§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Â§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let markMass = 92;
let markHeight = 1.95;

let markBMI = markMass / markHeight ** 2;

let johnMass = 78;
let johnHeight = 1.69;

let johnBMI = johnMass / johnHeight ** 2;

if (markBMI < johnBMI) {
  console.log(
    `Mark's BMI ${Math.round(markBMI)} is lower than John's ${Math.round(
      johnBMI
    )}`
  );
} else {
  console.log(
    `Mark's BMI ${Math.round(markBMI)} is higher than John's ${Math.round(
      johnBMI
    )}`
  );
}
*/
/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against
each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Include a requirement for a minimum score of 100. With this rule,a
team only wins if it has a higher score than the other team, and the same
time a score of at least 100 points. Hint: Use a logical operator to test
for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95
and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109,
95 and 106 */
/*let DolphinScore = [97, 112, 101];
let KoalaScore = [109, 95, 106];

let dolphinsAverageScore = 0;
let koalasAverageScore = 0;

let dolphinsTotal = 0;
let koalastotal = 0;
let counter1 = 0;

for (let i = 0; i < 3; i++) {
  dolphinsTotal = dolphinsTotal + DolphinScore[i];
  koalastotal = koalastotal + KoalaScore[i];

  counter1++;
}
dolphinsAverageScore = dolphinsTotal / counter1;
koalasAverageScore = koalastotal / counter1;

if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore > 100 &&
  koalasAverageScore > 100
) {
  console.log(
    `There is a Draw: ${dolphinsAverageScore.toFixed(
      2
    )}-${koalasAverageScore.toFixed(2)}`
  );
} else if (dolphinsAverageScore > koalasAverageScore && DolphinScore >= 100) {
  console.log(
    `Dolphins won!!! ${dolphinsAverageScore.toFixed(
      2
    )}-${koalasAverageScore.toFixed(2)}`
  );
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(
    `Koalas won!!! ${koalasAverageScore.toFixed(
      2
    )}-${dolphinsAverageScore.toFixed(2)}`
  );
} else {
  console.log(`No one wins ${dolphinsAverageScore}-${koalasAverageScore}`);
}
*/

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
Apply this to the team's average scores 😉 
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
*/

//Arrays coding challenge
/*
const tipCalc = (bill) => {
  let tip = bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;

  return tip;
};

const bills = [125, 555, 44];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
  tips.push(tipCalc(bills[i]));
}
for (i = 0; i < bills.length; i++) {
  totals.push(tips[i] + bills[i]);
}
console.log(125 * 0.15, 555 * 0.2, 44 * 0.2);
console.log(bills);
console.log(tips);
console.log(totals);
*/

/*
const john = {
  firstName: "john",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const mark = {
  firstName: "mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const markFullName = mark.fullName();
const markBMI = mark.calcBMI();
const johnFullName = john.fullName();
const johnBMI = john.calcBMI();
console.log(markFullName);
console.log(johnFullName);
console.log(markBMI);
console.log(johnBMI);
if (markBMI > johnBMI) {
  console.log(
    `${markFullName}'s BMI ${markBMI.toFixed(
      2
    )} is bigger than ${johnFullName}'s BMI ${johnBMI.toFixed(2)}`
  );
} else {
  console.log(
    `${johnFullName}'s BMI ${johnBMI.toFixed(
      2
    )} is bigger than ${markFullName}'s BMI ${markBMI.toFixed(2)}`
  );
}
*/

// 1) create an array called bills containing all 10 test bill values, including a "Not a number" value
const bills = [22, 295, 178, 440, 37, 105, 10, 1100, 86, 52];

// 2) Create empty arrays for the tips and the totals
const tips = [];
const totals = [];

// 3) Use the calcTip function to calculate the total values (bill + tip) for every bill value in the array.
const calcTip = function (bill) {
  let tip = bill > 50 && bill <= 300 ? 0.15 : 0.2;
  return bill * tip;
};

for (let i = 0; i < bills.length; i++) {
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
  }
}

console.log(tips);
console.log(totals);

// 4) Use a calcAverage function to calculate the average. It takes (arr) as an argument.
const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const averageBill = calcAverage(bills);
const averageTip = calcAverage(tips);
const averageTotal = calcAverage(totals);

console.log(averageBill);
console.log(averageTip);
console.log(averageTotal);
