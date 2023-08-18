const arr = ["x123"];
for (let i = 0; i < arr.length; ++i) {
  for (let j = 0; j < arr[i].length; ++j) {
    let numberConvert = +arr[i][j];
    console.log("11 : ", numberConvert === "NaN");
    if (numberConvert === NaN) {
      console.log("check");
      numberConvert = undefined;
    }
    console.log(typeof numberConvert);
    console.log("numberConvert : ", numberConvert);
  }
}

console.log("NaN", typeof NaN);
