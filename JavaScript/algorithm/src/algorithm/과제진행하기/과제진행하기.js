function solution(plans) {
  let answer = [];

  const plansSort = plans
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((plan) => {
      const [name, start, playtime] = plan;
      const [hour, minute] = start.split(":");
      const totalMinute = hour * 60 + minute;

      return [name, totalMinute, playtime];
    });

  const pausedTask = [plansSort.shift()];
  let PTTotalMinute = pausedTask[1];

  while (!!plansSort.length) {
    const task = plansSort.shift();
    const [, PSTotalMinute] = task;

    let timeDifference = PSTotalMinute - PTTotalMinute;
    PTTotalMinute = PSTotalMinute;

    while (!!pausedTask.length && timeDifference > 0) {
      const latestPlan = pausedTask.pop();
      const [LPName, , LPPlaytime] = latestPlan;

      if (LPPlaytime <= timeDifference) {
        answer.push(LPName);
        timeDifference -= LPPlaytime;
      } else {
        latestPlan[2] = LPPlaytime - timeDifference;
        timeDifference = 0;
        pausedTask.push(latestPlan);
      }
    }

    pausedTask.push(task);
  }

  console.log("end pausedTask : ", pausedTask);

  while (!!pausedTask.length) {
    const pop = pausedTask.pop()[0];
    console.log("pop : ", pop);
    answer.push(pop);
  }

  return answer;
}
// console.log(
//   solution([
//     ["korean", "11:40", "30"],
//     ["english", "12:10", "20"],
//     ["math", "12:30", "40"],
//   ])
// );
// ["korean", "english", "math"]

console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
// ["science", "history", "computer", "music"]

// console.log(
//   solution([
//     ["aaa", "12:00", "20"],
//     ["bbb", "12:10", "30"],
//     ["ccc", "12:40", "10"],
//   ])
// );
// ["bbb", "ccc", "aaa"]

// https://school.programmers.co.kr/learn/courses/30/lessons/176962
