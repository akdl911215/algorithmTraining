const Hangul = require("hangul-js");

let count = 0;
const arr = [
  "고구마",
  "바다",
  "김치",
  "강아지",
  "망아지",
  "나비",
  "개냥이",
  "소",
];
arr.forEach((el) =>
  Hangul.disassemble(el[0]).forEach((el) => {
    if (el[0] === "ㄱ") count++;
  })
);
console.log("count : ", count);
