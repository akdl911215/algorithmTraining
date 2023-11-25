function solution(friends, gifts) {
  let answer = 0;

  const map = new Map();
  friends.forEach((value) => {
    map.set(value, { give: 0, take: 0, index: 0 });
  });

  gifts.forEach((value) => {
    const [a, b] = value.split(" ");

    const { give: aGive, take: aTake } = map.get(a);
    const aGiveSum = aGive + 1;
    map.set(a, { give: aGiveSum, take: aTake });

    const { give: bGive, take: bTake } = map.get(b);
    const bTakeSum = bTake + 1;
    map.set(b, { give: bGive, take: bTakeSum });
  });

  for (const [key, value] of map) {
    map.set(key, {
      give: value.give,
      take: value.take,
      index: value.give - value.take,
    });
  }

  const checkGift = new Map();
  gifts.forEach((value) => {
    const [a, b] = value.split(" ");
    const ab = `${a}>${b}`;

    checkGift.set(ab, (checkGift.get(ab) || 0) + 1);
  });

  const nextGift = new Map(friends.map((friend) => [friend, 0]));
  const friendList = [];
  for (const friend1 of friends) {
    for (const friend2 of friends) {
      if (friend1 !== friend2) {
        friendList.push([friend1, friend2]);
      }
    }
  }

  for (let [friend1, friend2] of friendList) {
    const { give: aGive, take: aTake, index: aIndex } = map.get(friend1);
    const { give: bGive, take: bTake, index: bIndex } = map.get(friend2);

    const compare1 = checkGift.get(`${friend1}>${friend2}`);
    const compare2 = checkGift.get(`${friend2}>${friend1}`);
    if (compare1 && compare2) {
      if (compare1 > compare2) {
        nextGift.set(friend1, (nextGift.get(friend1) || 0) + 1);
      } else if (compare1 < compare2) {
        nextGift.set(friend2, (nextGift.get(friend2) || 0) + 1);
      }
    } else if ((!compare1 && !compare2) || compare1 === compare2) {
      if (aIndex > bIndex) {
        nextGift.set(friend1, (nextGift.get(friend1) || 0) + 1);
      } else if (aIndex < bIndex) {
        nextGift.set(friend2, (nextGift.get(friend2) || 0) + 1);
      }
    }
  }

  for (const [, value] of nextGift) {
    if (value > answer) {
      answer = value;
    }
  }
  return answer;
}

console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "david alessandro",
      "alessandro david",
    ]
  )
);

// console.log(
//   solution(
//     ["muzi", "ryan", "frodo", "neo"],
//     [
//       "muzi frodo",
//       "muzi frodo",
//       "ryan muzi",
//       "ryan muzi",
//       "ryan muzi",
//       "frodo muzi",
//       "frodo ryan",
//       "neo muzi",
//     ]
//   )
// );
// 2
