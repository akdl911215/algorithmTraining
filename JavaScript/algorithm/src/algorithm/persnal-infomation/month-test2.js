var now = new Date("2022.05.19");
console.log('현재 : ', now);

var oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));	// 한달 전
console.log("한달 전 : ", oneMonthAgo);