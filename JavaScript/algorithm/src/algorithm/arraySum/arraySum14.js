function solution(sequence, pivot) {
    let sum = 0,start = 0,end = 0,count = 0;
    const checkArr = [start, end];

    while (sequence.length !== count) {
        sum += sequence[end];
        if (sum < pivot) {
            console.log('>')
            console.log(`sum:${sum}, pivot:${pivot}`)
            end += 1;
            if (end === sequence.length) {
                end = start += 1;
                sum = 0;
                count++;
            }
        } else if (sum >= pivot) {
            console.log('>=')
            console.log(`sum:${sum}, pivot:${pivot}`)
            if (sum === pivot) {
                if (end - start < checkArr[1] - checkArr[0]) {
                    checkArr[0] = start;
                    checkArr[1] = end;
                }
            }
            end = start += 1;
            sum = 0;
            count += 1;
        }
    }
    console.log([checkArr[0], checkArr[1]])
    return [checkArr[0], checkArr[1]]
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
