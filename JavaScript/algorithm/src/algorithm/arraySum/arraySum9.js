function solution(sequence, pivot) {

    console.log('start !! pivot : ', pivot)
    const checkArr = [];
    let checking = true;
    let ifCheck = true;

    let sum = 0;
    let start = 0;
    let end = 0

    while (checking) {
        // console.log(`start: ${start}, end: ${end}`);

        const endArr = sequence[end];
        end += 1;
        sum += endArr;

        if (sum > pivot) {
            console.log('sum > pivot : ', sum > pivot, sum, ':', pivot);
            start += 1;
            console.log('start : ', start)
            end = start;
            console.log('end : ', end)
            sum = 0;
            console.log('sum : ', sum)
        }

        if (sum === pivot) {

            console.log('sum :::: ', sum)

            // 같으면 값 할당
            if (end - start < checkArr[2]) {
                console.log('first if')
                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;
            }

            if (ifCheck) {
                console.log('second if')
                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;

                ifCheck = false;
            }
        }



        if (start >= sequence.length) {
            console.log('ASDASDSAD')
            checking = false;
        }

    }

    console.log([checkArr[0], checkArr[1]])
    return [checkArr[0], checkArr[1]]
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870