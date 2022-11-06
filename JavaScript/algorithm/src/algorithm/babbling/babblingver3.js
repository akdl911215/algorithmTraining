function solution(babbling) {
  let result = 0;
  const babblings = ["aya", "ye", "woo", "ma"];

  const division = (babble) => {
    console.log("check");
    let newBabble = babble;
    console.log("newBabble : ", newBabble);
    babblings.forEach((el, index) => {
      console.log("el : ", el);
      newBabble = newBabble.replaceAll(el, index + 1);
      console.log("newBabble : ", newBabble);
    });

    for (let i = 0; i < newBabble.length; i++) {
      console.log("!+newBabble[i] : ", !+newBabble[i]);
      if (!+newBabble[i]) return 0;

      console.log(
        "newBabble[i] === newBabble[i + 1] : ",
        newBabble[i] === newBabble[i + 1]
      );
      if (newBabble[i] === newBabble[i + 1]) return 0;
    }
    return 1;
  };
  console.log("division : ", division);

  console.log("check2");
  console.log("babbling : ", babbling);
  babbling.forEach((el) => {
    return (result += division(el));
  });
  console.log("result : ", result);
  return result;
}
const babbling = ["maye", "back"];
solution(babbling);
