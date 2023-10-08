function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [name, time, spend] = plan;
      const [hour, minute] = time.split(":");
      const convertedTime = Number(hour) * 60 + Number(minute);

      return [name, convertedTime, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]);

  console.log(queue);
}
solution([
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
]);
