function calculateFee(time, fees) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  if (time <= basicTime) return basicFee;
  return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function solution(fees, records) {
  const parkingTime = {};
  const carNumbers = new Set();

  records.forEach((record) => {
    const [time, carNumber, status] = record.split(" ");
    carNumbers.add(carNumber);

    if (status === "IN") {
      parkingTime[carNumber] =
        (parkingTime[carNumber] || 0) - timeToMinutes(time);
    } else {
      parkingTime[carNumber] += timeToMinutes(time);
    }
  });

  // 처리되지 않은 출차 기록 처리
  Object.keys(parkingTime).forEach((carNumber) => {
    if (parkingTime[carNumber] < 0) {
      parkingTime[carNumber] += timeToMinutes("23:59");
    }
  });

  console.log(carNumbers);
  const arr = [...carNumbers];
  console.log("arr : ", arr);
  const arr2 = arr.sort();
  console.log("arr2 : ", arr2);

  const arr3 = arr2.map((carNumber) =>
    calculateFee(parkingTime[carNumber], fees)
  );
  console.log("arr3 : ", arr3);

  return arr3;
  // return Array.from(carNumbers)
  //   .sort()
  //   .map((carNumber) => calculateFee(parkingTime[carNumber], fees));
}

// 예시 사용
const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees, records));
