function solution(sequence, pivot) {

    const length = sequence.length;
    const checkArr = []
    let checking = true;
    for (let i = 0; i < length; ++i) {
        let sum = 0;

        for (let j = i; j < length; ++j) {
            sum += sequence[j];
            if (pivot > sum) continue

            if (pivot === sum) {
                if(!checking) {
                    if (j - i < checkArr[2]) {
                        checkArr[0] = i;
                        checkArr[1] = j;
                        checkArr[2] = j - i;
                    }
                    break;
                } else  if(checking) {
                    checkArr[0] = i;
                    checkArr[1] = j;
                    checkArr[2] = j - i;

                    checking = false;
                    break;
                }
            }
        }
    }

    return [checkArr[0], checkArr[1]]
}

solution([1, 2, 3, 4, 5], 7);
// [2, 3]

// solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870