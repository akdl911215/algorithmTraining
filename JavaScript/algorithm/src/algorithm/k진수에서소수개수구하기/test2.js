const num = 1000000;
const OKOneDayInterest = (num * 0.035) / 365;
console.log("OKOneDayInterest : ", OKOneDayInterest);

// OK
const monthInterest = OKOneDayInterest * 30;
console.log("monthInterest : ", monthInterest);
const OK = num + monthInterest;
console.log("OK : ", OK);

// Meritz
let Meritz = num;
for (let i = 0; i < 30; ++i) {
  const MeritzOneDayInterest = (Meritz * 0.0315) / 365;
  Meritz += MeritzOneDayInterest;
}
console.log("Meritz : ", Meritz);
