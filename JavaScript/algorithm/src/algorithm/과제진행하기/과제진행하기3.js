function solution(planList) {
  const answer = [];

  const plans = planList
    .sort((a, b) => {
      const [aHour, aMinute] = a[1].split(":");
      const [bHour, bMinute] = b[1].split(":");

      const aTime = Number(aHour) * 60 + Number(aMinute);
      const bTime = Number(bHour) * 60 + Number(bMinute);

      if (aTime > bTime) {
        return 1;
      }

      if (aTime < bTime) {
        return -1;
      }

      if (aTime === bTime) {
        return 0;
      }
    })
    .map((plan) => {
      const [hour, minute] = plan[1].split(":");
      const time = Number(hour) * 60 + Number(minute);

      return [plan[0], time, plan[2]];
    });

  const pauseTask = [plans.shift()];
  let pauseTime = pauseTask[0][1];

  while (!!plans.length) {
    const task = plans.shift();
    const [, taskTime] = task;

    let differenceTime = taskTime - pauseTime;
    pauseTime = taskTime;

    while (!!pauseTask.length && differenceTime > 0) {
      const latestTask = pauseTask.pop();
      const [latestTaskName, , latestTaskPlayTime] = latestTask;

      if (latestTaskPlayTime > differenceTime) {
        latestTask[2] = latestTaskPlayTime - differenceTime;
        differenceTime = 0;
        pauseTask.push(latestTask);
      } else {
        answer.push(latestTaskName);
        differenceTime = differenceTime - latestTaskPlayTime;
      }
    }

    pauseTask.push(task);
  }

  while (!!pauseTask.length) {
    answer.push(pauseTask.pop()[0]);
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

// console.log(
//   solution([
//     ["science", "12:40", "50"],
//     ["music", "12:20", "40"],
//     ["history", "14:00", "30"],
//     ["computer", "12:30", "100"],
//   ])
// );
// ["science", "history", "computer", "music"]

console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
// ["bbb", "ccc", "aaa"]
