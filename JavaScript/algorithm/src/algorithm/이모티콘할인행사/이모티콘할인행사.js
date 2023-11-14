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
  let count = 0;
  for (let i = 0; i < promotionList.length; ++i) {
    const [promotionA, promotionB] = promotionList[i];
    const a = emotionA - emotionA * promotionA;
    const b = emotionB - emotionB * promotionB;

    const ab = a + b;
    if (ab >= 10000 && number > ab) {
      number = ab;
    }
  }
  // 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 배열로

  emoticons.forEach((value) => {
    //
  });

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
