function solution(sequence, pivot) {
    let left = 0, right = 0;
    let sum = sequence[0];
    const arr = [1, 999];

    while (sequence.length > right) {
        if (sum < pivot) {
            sum += sequence[++right];
        } else if (sum > pivot) {
            sum -= sequence[left++];
        } else {
            if (right - left < arr[1] - arr[0]) {
                arr[0] = left;
                arr[1] = right;
            }
            sum += sequence[++right];
        }
    }

    return arr;
}



solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

solution([2, 2, 2, 2, 2], 6)
// [0, 2]

solution([1,1,1,1,1,1,1], 7)
// [0, 6]

solution([7,5,5,1,1,50,50], 100)
// [5, 6]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870
