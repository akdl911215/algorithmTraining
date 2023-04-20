function solution(sequence, pivot) {

    const checkArr = [];
    let checking = true;
    let ifCheck = true;

    let sum = 0;
    let start = 0;
    let end = 0

    let count = 1;
    while (checking) {
        // console.log(`start: ${start}, end: ${end}`);

        const endArr = sequence[end];
        sum += endArr;

        if (start === sequence.length - 1  && end === sequence.length - 1) {
            console.log(`ending start:${start}, end:${end}`)
            checking = false;
        }

        if (sum > pivot) {
            console.log('sum > pivot : ', sum > pivot, sum, ':', pivot);
            start += 1;
            console.log('start : ', start)
            end = start;
            console.log('end : ', end)
            sum = 0;
            console.log('sum : ', sum)
        } else if (sum < pivot) {
            console.log('sum < pivot : ',sum < pivot, sum, pivot)
            end += 1;
        } else if (sum === pivot) {

            console.log('sum :::: ', sum)
            console.log(`else if start: ${start}, end: ${end}`)
            console.log('checkArr[2] : ' , checkArr[2])
            // 같으면 값 할당
            if (end - start < checkArr[2]) {
                console.log('first if : ', end - start,'<' ,checkArr[2])

                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;
                console.log('checkArr : ', checkArr)
            }

            if (ifCheck) {
                console.log('second if')
                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;

                ifCheck = false;
                console.log('checkArr : ',checkArr,', ifCheck : ', ifCheck)
            }

            end += 1;
        }





    }

    console.log([checkArr[0], checkArr[1]])
    return [checkArr[0], checkArr[1]]
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870