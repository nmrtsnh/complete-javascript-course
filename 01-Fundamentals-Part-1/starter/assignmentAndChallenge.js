var country = "Germany";
var continent = "Europe";
var population = 83.2;

// console.log(country, continent, population);

/*
// Coding Challenge 1

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = true;

console.log(markBMI < johnBMI);

const markWeight1 = 95;
const markHeight1 = 1.88;

const johnWeight1 = 85;
const johnHeight1 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
console.log(markBMI);

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

let markHigherBMI1 = true;

console.log(markBMI1 < johnBMI1);

*/

/*

// Coding Challenge 2

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

*/

//Coding Challenge 3

// const avgScoreDolphins = (96 + 108 + 89) / 3;
// console.log(avgScoreDolphins);

// const avgScoreKoalas = (88, 91, 110) / 3;

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphins wins");
// } else if (avgScoreKoalas > avgScoreDolphins) {
//   console.log("Koalas wins");
// } else if (avgScoreDolphins === avgScoreKoalas){
//   console.log("Match is draw");
// }

// const avgScoreDolphins = (97 + 112 + 101) / 3;

// const avgScoreKoalas = (109, 95, 123) / 3;

// let minScore = 100;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore) {
//   console.log("Dolphins wins");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= minScore) {
//   console.log("Koalas wins");
// } else if (avgScoreDolphins === avgScoreKoalas) {
//   console.log("Match is draw");
// }

// const avgScoreDolphins = (97 + 112 + 80) / 3;

// const avgScoreKoalas = (109, 95, 106) / 3;

// let minScore = 100;
// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore) {
//   console.log("Dolphins wins");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= minScore) {
//   console.log("Koalas wins");
// } else if (
//   avgScoreDolphins === avgScoreKoalas &&
//   avgScoreDolphins >= minScore &&
//   avgScoreKoalas >= minScore
// ) {
//   console.log("both wins trophy");
// } else console.log("no one wins the trophy");

// Coding Challenge 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
