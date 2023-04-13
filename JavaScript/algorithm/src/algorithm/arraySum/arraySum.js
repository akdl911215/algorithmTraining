function solution(sequence, pivot) {
    let answer = [];
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

    console.log('obj : ', obj)
    console.log('obj : ', obj.length)
    let arr = []
    for (const value in obj) {
        arr.push({
            obj: obj[value]
        })
    }
    console.log(arr)


    console.log(answer)
    return answer;
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// [2, 2, 2, 2, 2]	6	[0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870