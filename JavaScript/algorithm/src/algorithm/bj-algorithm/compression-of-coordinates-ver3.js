const arr = [2, 4, -10, 4, -9];
const copyArr = arr.map((el) => el);
let tmp;

for (let i = 0; i < copyArr.length; i++) {
  for (let j = 0; j < copyArr.length - (i + 1); j++) {
    if (copyArr[j] > copyArr[j + 1]) {
      if (copyArr[j] === copyArr[j + 1]) continue;

      tmp = copyArr[j];
      copyArr[j] = copyArr[j + 1];
      copyArr[j + 1] = tmp;
    }
  }
}

console.log("copyArr  : ", copyArr);

const myMap = new Map();

[...copyArr].forEach((el, index) => {
  myMap.set(el, index);
});
console.log("myMap : ", myMap);

let answer = "";
arr.forEach((el) => console.log("el : ", el));

arr.forEach((el, index) => {
  answer += myMap.get(el) + " ";
});
console.log("answer : ", answer);
