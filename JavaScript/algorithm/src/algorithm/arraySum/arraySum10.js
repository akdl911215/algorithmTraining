function solution(sequence, pivot) {

    const checkArr = [];
    let ifCheck = true;

    let sum = 0;
    let start = 0;
    let end = 0

    let count = 0;

    while (sequence.length !== count) {

        const endArr = sequence[end];
        sum += endArr;



        if (sum < pivot) {
            console.log('sum < pivot : ',sum < pivot, sum, pivot)
            end += 1;
            console.log('--------------------------------')
        } else if (sum > pivot) {
            console.log('sum > pivot : ', sum > pivot, sum, ':', pivot);
            start += 1;
            console.log('start : ', start)
            end = start;
            console.log('end : ', end)
            sum = 0;
            console.log('sum : ', sum)

            count++;
            console.log('--------------------------------')
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

            start += 1;
            end = start;
            sum = 0;
            count++;
            console.log('--------------------------------')
        }

    }

    if(start + 1 === sequence.length) {
        console.log('ending : ', start + 1)
        count = sequence.length
        console.log('eeeee : ', sequence.length !== count)
    }

    console.log([checkArr[0], checkArr[1]])
    return [checkArr[0], checkArr[1]]
}

solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870
