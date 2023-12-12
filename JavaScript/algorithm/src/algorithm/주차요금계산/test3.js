const fruits = {
  Apple: 4000,
  Banana: 10000,
};

// 객체 -> 배열로 [key, value]
const entries = Object.entries(fruits);
console.log("entries : ", entries);
// [ ['Apple', 4000], ['Banana', 10000] ];

// 1.
const object = Object.fromEntries(entries);
console.log("object : ", object);

// 2.
// const object = array.reduce((acc, value, index) => {
//   return { ...acc, [value[0]]: value[1] };
// }, {});
