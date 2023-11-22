function solution(users, emoticons) {
  console.log("users : ", users);
  let answer = [];

  const userList = users.map((value) => {
    let el = value[0];

    if (20 > el && el >= 10) {
      el = 20;
    } else if (30 > el) {
      el = 30;
    } else if (40 > el) {
      el = 40;
    }

    return [el, value[1]];
  });
  console.log("userList : ", userList);

  const [emotionA, emotionB] = emoticons;
  console.log("emotionA : ", emotionA);
  console.log("emotionB : ", emotionB);

  const promotionList = [
    [0.4, 0.4],
    [0.3, 0.4],
    [0.2, 0.4],
    [0.1, 0.4],
    [0.4, 0.3],
    [0.4, 0.2],
    [0.4, 0.1],
    [0.3, 0.3],
    [0.2, 0.2],
    [0.1, 0.1],
  ];

  let number = Infinity;
  const obj = {};
  for (let i = 0; i < promotionList.length; ++i) {
    const [promotionA, promotionB] = promotionList[i];
    const a = emotionA - emotionA * promotionA;
    const b = emotionB - emotionB * promotionB;

    const ab = a + b;

    if (ab >= 10000 && ab < number) {
      number = ab;
      obj["emotionA"] = emotionA;
      obj["emotionB"] = emotionB;
      obj["promotionA"] = promotionA;
      obj["promotionB"] = promotionB;
      obj["price"] = number;
    }
  }
  console.log("obj : ", obj);
  // 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 배열로

  let emotionPlus = 0;
  userList.forEach((value) => {
    console.log("value : ", value);
    const [discountRate, totalAmount] = value;
    let amount = 0;

    const { emotionA, emotionB, promotionA, promotionB, price } = obj;

    const a = emotionA - emotionA * promotionA;
    const b = emotionB - emotionB * promotionB;

    if (promotionA * 100 >= discountRate && promotionB * 100 >= discountRate) {
      if (
        emotionA - emotionA * promotionA + emotionB - emotionB * promotionB >
        10000
      ) {
        //
      } else {
        //
      }
    } else if (obj.promotionA * 100 >= discountRate) {
      amount = a;
      console.log("a amount : ", amount);
    } else if (obj.promotionB * 100 >= discountRate) {
      amount = b;
      console.log("b amount : ", amount);
    }

    console.log("amount : ", amount);
    if (amount === obj.price) {
      answer[0] = ++emotionPlus;
    }
  });
  console.log("emotionPlus : ", emotionPlus);

  // 할인율은 10%, 20%, 30%, 40%
  // 최대한 1만원에서 좀만 넘어가게
  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
// [1, 5400]

// console.log(
//   solution(
//     [
//       [40, 2900],
//       [23, 10000],
//       [11, 5200],
//       [5, 5900],
//       [40, 3100],
//       [27, 9200],
//       [32, 6900],
//     ],
//     [1300, 1500, 1600, 4900]
//   )
// );
// [4, 13860]

// https://school.programmers.co.kr/learn/courses/30/lessons/150368
