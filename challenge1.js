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
let DolphinScore = [97, 112, 101];
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
