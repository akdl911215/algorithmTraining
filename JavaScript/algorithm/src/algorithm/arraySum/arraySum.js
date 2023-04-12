function solution(sequence, k) {
    var answer = [];

    const pivot = k;

    const length = sequence.length;

    for (let i = 0; i < length; ++i) {
        let sum = 0;

        for (let j = 0; j < length; ++j) {
            sum += sequence[i];

            if (pivot === sum) {
                break;
            }
        }
    }

    return answer;
}

solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]

// [2, 2, 2, 2, 2]	6	[0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870