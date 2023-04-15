function solution(sequence, pivot) {

    const length = sequence.length;
    const checkArr = []
    for (let i = 0; i < length; ++i) {
        let sum = 0;

        for (let j = i; j < length; ++j) {
            sum += sequence[j];
            if (pivot > sum) continue

            if (pivot === sum) {
                checkArr.push({
                    start: i,
                    end: j,
                    length: j - i
                })
            }
            break;
        }
    }

    const returnArr = [];
    for (let i = 0; i < checkArr.length; ++i) {
        if (i === 0) {
            returnArr[0] = checkArr[0].start;
            returnArr[1] = checkArr[0].end;
        } else if (checkArr[i - 1].length > checkArr[i].length) {
            returnArr[0] = checkArr[i].start;
            returnArr[1] = checkArr[i].end;
        }
    }

    console.log(returnArr)
    return returnArr;
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870