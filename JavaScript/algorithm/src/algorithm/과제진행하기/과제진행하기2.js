function solution(planList) {
  const answer = [];

  const plans = planList
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((plan) => {
      const [planHour, planMinute] = plan[1].split(":");

      return [plan[0], Number(planHour) * 60 + Number(planMinute), plan[2]];
    });

  const pauseTask = [plans.shift()];
  let pauseTime = pauseTask[0][1];

  while (!!plans.length) {
    const task = plans.shift();
    const [, taskTime] = task;
    let timeDifference = taskTime - pauseTime;
    pauseTime = taskTime;

    while (!!pauseTask.length && timeDifference > 0) {
      const latestTask = pauseTask.pop();
      const [latestTaskName, , latestTaskPlayTime] = latestTask;

      if (latestTaskPlayTime > timeDifference) {
        latestTask[2] = latestTaskPlayTime - timeDifference;
        timeDifference = 0;
        pauseTask.push(latestTask);
      } else {
        answer.push(latestTaskName);
        timeDifference = timeDifference - latestTaskPlayTime;
      }
    }

    pauseTask.push(task);
  }

  while (!!pauseTask.length) {
    answer.push(pauseTask.pop()[0]);
  }

  return answer;
}
console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
// ["korean", "english", "math"]

// console.log(
//     solution([
//         ["science", "12:40", "50"],
//         ["music", "12:20", "40"],
//         ["history", "14:00", "30"],
//         ["computer", "12:30", "100"],
//     ])
// );
// ["science", "history", "computer", "music"]

// console.log(
//   solution([
//     ["aaa", "12:00", "20"],
//     ["bbb", "12:10", "30"],
//     ["ccc", "12:40", "10"],
//   ])
// );
// ["bbb", "ccc", "aaa"]
