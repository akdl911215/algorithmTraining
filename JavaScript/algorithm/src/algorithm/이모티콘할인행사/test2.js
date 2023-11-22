const discount = [10, 20, 30, 40];
const emoticons = [1300, 1500, 1600, 4900];
let result = [];

for (let i = 0; i < discount.length; ++i) {
  const emo = emoticons.slice(1);
  console.log("emo : ", emo);

  console.log("up result : ", result);
  result = [...result, [discount[i], emoticons[0]]];
  console.log("down result : ", result);
}
