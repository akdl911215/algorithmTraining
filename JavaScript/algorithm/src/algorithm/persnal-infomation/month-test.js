var now = new Date();
console.log('현재 : ', now);

var oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));	// 한달 전
console.log("한달 전 : ", oneMonthAgo);

console.log("---------------------------------")

var now = new Date();	// 현재 날짜 및 시간
console.log("현재 : ", now);
var oneMonthLater = new Date(now.setMonth(now.getMonth() + 1));	// 한달 후
console.log("한달 후 : ", oneMonthLater);

console.log("---------------------------------")

var now = new Date();	// 현재 날짜 및 시간
console.log("현재 : ", now);
var oneMonthLater = new Date(now.setMonth(now.getMonth() - 12));	// 12달 전
console.log("한달 후 : ", oneMonthLater);