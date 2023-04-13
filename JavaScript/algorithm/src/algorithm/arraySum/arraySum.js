function solution(sequence, k) {
    let answer = [];

    const pivot = k;

    const length = sequence.length;
    console.log('length : ', length)

    for (let i = 0; i < length; ++i) {
        // console.log('cehck',i)
        let sum = 0;

        for (let j = i; j < length; ++j) {
            console.log('2222 j : ', j)
            sum = sum + sequence[i];
            console.log('sum : ', sum)

            if (pivot > sum) continue

            if (pivot === sum) {
                answer.push(i)
                answer.push(j)
                break;
            }
        }
    }

    console.log(answer)
    return answer;
}

solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]

// [2, 2, 2, 2, 2]	6	[0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870