function activitySelection(activities) {
  activities.sort((a, b) => a.end - b.end);
  console.log("activities : ", activities);

  let count = 0;
  let lastEndTime = -1;

  for (let activity of activities) {
    if (activity.start >= lastEndTime) {
      count++;
      lastEndTime = activity.end;
    }
  }

  return count;
}

// 활동 리스트 정의
const activities = [
  { name: "A", start: 1, end: 4 },
  { name: "B", start: 3, end: 5 },
  { name: "C", start: 0, end: 6 },
  { name: "D", start: 5, end: 7 },
  { name: "E", start: 8, end: 9 },
  { name: "F", start: 5, end: 9 },
];

// 함수 호출 및 결과 출력
const maxActivities = activitySelection(activities);
console.log(`선택할 수 있는 최대 활동의 수는 ${maxActivities}개입니다.`);
