function solution(numbers) {
    const numberList = [];

    for (const number of numbers) {
        if (number % 2 === 0) {
            numberList.push(number + 1);
        } else {
            const binaryList = [...'0' + number.toString(2)];
            const index = binaryList.lastIndexOf('0');

            binaryList[index] = '1';
            binaryList[index + 1] = '0';
            const binary = binaryList.join('');

            numberList.push(parseInt(binary, 2));
        }
    }
    return numberList;
}

console.log(solution([2, 7]));
// # [3, 11]

// # https://school.programmers.co.kr/learn/courses/30/lessons/77885