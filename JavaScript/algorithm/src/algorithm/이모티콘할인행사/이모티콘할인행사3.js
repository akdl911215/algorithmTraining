function solution(users, emoticons) {
  const discountRates = [0.9, 0.8, 0.7, 0.6];

  let maxSubscribers = 0;
  let maxSales = 0;

  // dfs 를 사용하여 모든 할인 조합을 탐색
  function dfs(index, discounts) {
    if (index === emoticons.length) {
      // 모든 이모티콘에 대한 할인율이 설정되면 결과 계산
      const result = calculateOutcome(discounts);
    }
  }

  // 사용자의 반응에 따라 결과를 계산하는 함수
  function calculateOutcome(discounts) {
    let subscribers = 0;
    let sales = 0;

    users.forEach((user) => {
      let userSpent = 0;
      let cancel = false;

      emoticons.forEach((price, i) => {
        const discountedPrice = price * discounts[i];
        if (discounts[i] <= 1 - user[0] / 100) {
          userSpent += discountedPrice;
        }
      });

      if (userSpent >= user[1]) {
        subscribers += 1;
        cancel = true;
      }

      if (!cancel) {
        sales += userSpent;
      }
    });

    return { subscribers, sales };
  }

  dfs(0, new Array(emoticons.length).fill(1));

  return [];
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
