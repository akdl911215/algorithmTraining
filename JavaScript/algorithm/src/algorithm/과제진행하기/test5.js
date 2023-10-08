function solution(planList) {
  const answer = [];

  const plans = planList
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((plan) => {
      const [planName, planStart, planPlayTime] = plan;
      const [planHour, planMinute] = planStart.split(":");
      const planTime = Number(planHour) * 60 + Number(planMinute);

      return [planName, planTime, planPlayTime];
    });
  console.log("plans : ", plans);

  return answer;
}
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
