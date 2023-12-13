const arr = [1, 2, 3, 4];
arr.forEach((a, b, c) => {
  console.log("a : ", a);
  console.log("b : ", b);
  console.log("c : ", c);
  const arr2 = [...c.slice(0, b), ...c.slice(b + 1)];
  console.log(arr2);
  console.log("--------------------");
});
