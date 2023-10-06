function solution(participantList, completionList) {
  let answer = "";
  const map = new Map();

  for (let i = 0; i < participantList.length; ++i) {
    const participant = participantList[i];
    const completion = completionList[i];

    map.set(participant, (map.get(participant) || 0) + 1);
    map.set(completion, (map.get(completion) || 0) - 1);
  }

  for (let [key, value] of map) if (value > 0) answer += key;

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
