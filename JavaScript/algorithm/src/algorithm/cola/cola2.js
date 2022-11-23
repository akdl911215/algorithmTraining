function solution(a, b, n) {
    let answer = 0;

    while (n / a >= 1) {
        let bottle = Math.floor(n/a) * b
        answer += bottle;
        n = n % a;
        n += bottle
    }

    console.log(answer)
    return answer;
}
const a = 5;
const b = 3;
const n = 10;
// result : 9

solution(a,b,n)