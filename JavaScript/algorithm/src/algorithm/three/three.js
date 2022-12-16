const solution = (number) => {
    let answer = 0;
    console.log('arr : ', number)

    for (let i = 0; i < number.length - 2; ++i) {
        for (let j = i + 1; j < number.length - 1; ++j) {
            for (let k = j + 1; k < number.length; ++k) {
                console.log(`i : ${i}, j : ${j}, k : ${k}`)
                console.log('check', `${number[i]} + ${number[j]} + ${number[k]} === 0 , `, number[i] + number[j] + number[k])
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }
    console.log(answer)

    return answer;
}
// const a = [-2, 3, 0, 2, -5]
// result : 2

const a = [-3, -2, -1, 0, 1, 2, 3]
// result : 5

console.log(solution(a))