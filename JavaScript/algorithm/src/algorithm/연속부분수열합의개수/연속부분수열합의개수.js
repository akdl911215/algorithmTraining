function solution(elements) {
  let answer = 0;
  const totalSet = new Set();

  // let index = 0;
  let start = 0;
  let end = 1;

  const arr = [];
  for (let i = 0; i < elements.length; ++i) {
    while (true) {
      if (start < elements.length) {
        let el = 0;
        while (start !== end) {
          el += elements[start];
          console.log("el : ", el);
          //
        }
        arr.push(el);
        // totalSet.add(el);
      } else {
        start = 0;
        // index++;
        break;
      }
    }

    end++;
  }

  return answer;
}

console.log(solution([7, 9, 1, 1, 4]));
// 18

// https://school.programmers.co.kr/learn/courses/30/lessons/131701
