function solution(diffs, times, limit) {
  let answer = 0;
  let lowLevel = 1;
  let highLevel = Math.max(...diffs);

  while (lowLevel <= highLevel) {
    const middleLevel = parseInt((lowLevel + highLevel) / 2);
    const count = determineLevel(middleLevel);

    if (count <= limit) {
      answer = middleLevel;
      highLevel = middleLevel - 1;
    } else {
      lowLevel = middleLevel + 1;
    }
  }

  function determineLevel(level) {
    let timePrev = 0;
    let timeTotalCount = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const timeCur = times[i];

      if (diff <= level) {
        timeTotalCount += timeCur;
      } else {
        const mistake = diff - level;
        timeTotalCount += mistake * (timeCur + timePrev) + timeCur;
      }

      timePrev = timeCur;

      if (timeTotalCount >= limit) {
        return timeTotalCount;
      }
    }

    return timeTotalCount;
  }

  return answer;
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));
// 3

// https://school.programmers.co.kr/learn/courses/30/lessons/340212?language=javascript
