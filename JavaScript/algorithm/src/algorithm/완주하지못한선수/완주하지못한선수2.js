// var solution = (_, $) =>
//   _.find(
//     (_) => !$[_]--,
//     $.map((_) => ($[_] = ($[_] | 0) + 1))
//   );

// var solution = (participant, completion) =>
//   participant.find(
//     (participant) => !completion[participant]--,
//     completion.map(
//       (participant) =>
//         (completion[participant] = (completion[participant] | 0) + 1)
//     )
//   );

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
