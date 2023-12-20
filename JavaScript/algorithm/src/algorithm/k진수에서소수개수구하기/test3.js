const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = arr.filter((el) => {
  console.log(el);
  return 4 > el;
});
console.log(a);
