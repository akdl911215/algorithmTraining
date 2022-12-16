const solution = (number) => {
    console.log('number : ', number)
    let answer = 0;

    const combination = (current, start) => {
        console.log('combination current : ', current, " , start : ", start)
        if (current.length === 3) {
            answer += current.reduce((acc, cur) => {
                console.log(`acc: ${acc}, cur: ${cur}`)
                return acc + cur
            }, 0) === 0 ? 1 : 0;
        }

        for (let i = start; i < number.length; ++i) {
            combination([...current, number[i]], i + 1);
        }
    }

    combination([], 0);
    return answer
}

// const a = [-2, 3, 0, 2, -5]
// result : 2

const a = [-3, -2, -1, 0, 1, 2, 3]
// result : 5

console.log(solution(a))