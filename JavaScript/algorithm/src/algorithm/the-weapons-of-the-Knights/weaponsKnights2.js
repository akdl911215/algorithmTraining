const getDivisors = (num) => {
    const divisors = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(num)); ++i) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i !== i) {
                divisors.push(num / i)
            };
        }
    }
    // divisors.sor((a,b) => a - b);
    return divisors
}

function solution(number, limit, power) {
    let arr = []
    for (let i = 1; i <= number; ++i) {
        const divisorsLength = getDivisors(i).length > limit ? power : getDivisors(i).length
        arr.push(divisorsLength)
    }

    return arr.reduce((a, b) => (a + b));
}

// const number = 5;
// const limit = 3;
// const power = 2;
// resunlt : 10

const number = 10;
const limit = 3;
const power = 2;
// result : 21

solution(number,limit, power)