function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  console.log("regexp1 : ", regexp1);
  const regexp2 = /^(aya|ye|woo|ma)+$/;
  console.log("regexp2 : ", regexp2);

  const result = babbling.reduce((ans, word) => {
    console.log("ans : ", ans);
    console.log("word : ", word);
    return !regexp1.test(word) && regexp2.test(word) ? ++ans : ans;
  }, 0);
  console.log("result : ", result);
  return result;
}
const babbling = ["yeyeye", "ye"];
console.log(solution(babbling));
