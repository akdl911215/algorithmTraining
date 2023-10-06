function solution(participant, completion) {
  var answer = "";

  const participantMap = new Map();
  participant.forEach((player) => {
    if (!participantMap.get(player)) {
      participantMap.set(player, 1);
    } else {
      participantMap.set(player, participantMap.get(player) + 1);
    }
  });

  completion.forEach((player) => {
    if (!!participantMap.get(player))
      participantMap.set(player, participantMap.get(player) - 1);
  });

  for (let [key, value] of participantMap) if (value !== 0) answer += key;

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
