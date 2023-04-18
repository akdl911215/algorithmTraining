function solution(sequence, pivot) {

    const length = sequence.length;
    const checkArr = []
    let checking = false;
    sequence.forEach((el,i) => {
        let sum = 0;

        for (let j = i; j < length; ++j) {
            sum += sequence[j];
            if (pivot > sum) continue;

            if (pivot === sum) {
                if(checking) {
                    if (j - i < checkArr[2]) {
                        checkArr[0] = i;
                        checkArr[1] = j;
                        checkArr[2] = j - i;
                    }
                }

                if(!checking){
                    checkArr[0] = i;
                    checkArr[1] = j;
                    checkArr[2] = j - i;

                    checking = true;
                }
            }
        }
    })

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