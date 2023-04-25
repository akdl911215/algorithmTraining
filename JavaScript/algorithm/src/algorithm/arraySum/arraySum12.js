function solution(sequence, pivot) {
    let checkObj = {},ifCheck = true,sum = 0,start = 0,end = 0,count = 0;
    while (sequence.length !== count) {
        const endArr = sequence[end];
        sum += endArr;

        if (sum < pivot) {
            end += 1;
            if (end === sequence.length) {
                end = start += 1;
                sum = 0;
                count++;
            }
        } else if (sum >= pivot) {
            if (sum === pivot) {
                if (ifCheck) {
                    checkObj = {
                        start: start,
                        end: end,
                        compare: end -start
                    }
                    ifCheck = false;
                }
                if (end - start < checkObj.compare) {
                    checkObj = {
                        start: start,
                        end: end,
                        compare: end -start
                    }
                }
            }
            end = start += 1;
            sum = 0;
            count += 1;
        }
    }
    console.log([checkObj.start, checkObj.end])
    return [checkObj.start, checkObj.end]
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
