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
            end += 1;
        } else if (sum >= pivot) {

            // console.log(`start:${start}, end:${end}`)
            console.log('sum : ', sum)

            if (ifCheck) {
                console.log('ifCheck true if')
                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;

                ifCheck = false;
                console.log('checkArr : ',checkArr,', ifCheck : ', ifCheck)

                start += 1;
                end = start;
                sum = 0;

                count++;
                console.log('--------------------------------')
            }

            if (end - start < checkArr[2]) {
                console.log('second if : ', end - start,'<' ,checkArr[2])
                console.log(`start: ${start}, end: ${end}`)

                checkArr[0] = start;
                checkArr[1] = end;
                checkArr[2] = end - start;
                console.log('checkArr : ', checkArr)

                start += 1;
                end = start;
                sum = 0;

                count++;
                console.log('--------------------------------')
            } else if (end - start > checkArr[2]) {
                end += 1;
            }

        }

    }

    // if(start + 1 === sequence.length) {
    //     console.log('ending : ', start + 1)
    //     count = sequence.length
    //     console.log('eeeee : ', sequence.length !== count)
    // }

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
