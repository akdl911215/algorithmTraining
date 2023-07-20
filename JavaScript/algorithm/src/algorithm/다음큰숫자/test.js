const number = 78;

const compare = number & 1;
console.log("compare : ", compare);
const compare2 = number | 1;
console.log("compare2 : ", compare2);

const hex = number.toString(2);
console.log("hex : ", hex);

const number2 = number >> 1;
console.log("number2 : ", number2);
const hex2 = number2.toString(2);
console.log("hex2 : ", hex2);

for (let i = 0; false; ++i) {
  console.log("check!!");
  if (i > 10) break;
}

const number3 = 39;
const hex3 = number3.toString(2);
console.log(hex3 & 1);

console.log(5);
