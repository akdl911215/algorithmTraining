const arr = ["119", "97674223", "1195524421"];

for (let i = 0; i < arr.length - 1; ++i) {
  for (let j = i + 1; j < arr.length; ++j) {
    console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}`);
    const bool = arr[i].includes(arr[j]);
    console.log(bool);
  }
}

const a = "119".includes("1195524421");
console.log("a : ", a);

const str = "Hellow, World, Javascript";

console.log('str.includes("Hello") : ', str.includes("Hello"));
if (str.includes("Hello")) {
  console.log("str contains 'Hello'");
} else {
  console.log("str doesn't contain 'Hello'");
}
