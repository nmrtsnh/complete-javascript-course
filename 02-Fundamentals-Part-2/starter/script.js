"use strict";

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const bill = 125;

// const total = bill + tip;

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // console.log(tips);

// const total = bills + tips;
// console.log(bills, tips, total);

//Challenge

// Jonas has 3 friends, and his best friend is called Michael

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(
//   ` ${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `
// );

// Challenge

// Jonas is a 46- year old teacher, and he has a driver's licence

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      jonas.job
    }, and he has ${this.hasDriversLicence ? "a" : "not"} driver's licence`;
  },
};

// console.log(jonas.calcAge());

// console.log(jonas.getSummary());

// Coding Challenge 3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`
//   );
// }

//"John's BMI (28.3) is higher than Mark's (23.9)!"

// Coding Challenge 4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(total));
console.log(calcAverage(tips));
