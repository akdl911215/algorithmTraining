const 오백만원 = 5000000;
const 일백만원 = 1000000;
const 오십만원 = 500000;

const 칠프로 = 0.07;
const 사쩜오프로 = 0.045;
const 삼쩜오프로 = 0.035;

// 1백만 이하 4.5% 5백만 이하 3.5%
const a = 일백만원 * 사쩜오프로 + (오백만원 - 일백만원) * 삼쩜오프로;
console.log("a : ", a);
const b = a / 오백만원;
console.log("b : ", b);

// 50만 이하 7.5% 초과 3.5%
const c = 오십만원 * 칠프로 + (오백만원 - 오십만원) * 삼쩜오프로;
console.log("c : ", c);
const d = c / 오백만원;
console.log("d : ", d);
