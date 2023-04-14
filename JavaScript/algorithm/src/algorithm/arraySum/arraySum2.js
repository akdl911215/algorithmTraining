function solution(sequence, pivot) {

    const length = sequence.length;

    let obj = {}
    let count = 0;
    for (let i = 0; i < length; ++i) {
        let sum = 0;

        for (let j = i; j < length; ++j) {
            sum += sequence[j];
            if (pivot > sum) continue

            if (pivot === sum) {
                obj[count++] = {
                    start: i,
                    end: j,
                    length: j - i,
                }
                break;
            }
        }
    }

    let arr = [obj[0].start, obj[0].end];
    let check = obj[0].length;
    for (let i = 1; i < count; ++i) {
        if (check > obj[i].length) {
            arr[0] = obj[i].start;
            arr[1] = obj[i].end;
        }
    }

    console.log(arr)
    return arr;
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870