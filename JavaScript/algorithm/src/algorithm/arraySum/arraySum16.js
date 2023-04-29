function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const result = [];

    while (right < sequence.length) {
        if (sum < k) {
            right+= 1;
            sum += sequence[right];
        } else if (sum > k) {
            sum -= sequence[left];
            left+= 1;
        } else {
            result.push([left, right]);
            right += 1;
            sum += sequence[right];
        }
    }

    const a = result.sort(condition)[0];
    console.log(a)
    return a;
}

function condition(a, b) {
    const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
    if (lenDiff !== 0) return lenDiff;
    return a[0] - b[0];
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// solution([1,1,1,1,1,1,1], 7)
// [0, 6]

// solution([7,5,5,1,1,50,50], 100)
// [5, 6]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870
