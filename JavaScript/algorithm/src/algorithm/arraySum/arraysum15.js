function solution(sequence, pivot) {

    let sum = 0, left = 0, right = 0;
    let end = true;
    let arr = [1, 1000];
    while(end) {

        if (left === sequence.length) {
            console.log(`left: ${left}, sequence.length: ${sequence.length}`)
            end = false
        }

        sum += sequence[right];
        if (sum < pivot) {

            console.log(`up pivot:${pivot}, sum:${sum}, left:${left}, right:${right}, arr[0]:${arr[0]}, arr[1]:${arr[1]}`)

            right += 1;
            if (right === sequence.length) {
                console.log(`right:${right}, sequence.length:${sequence.length}`)
                end = false
            }

        } else {

            console.log(`down pivot:${pivot}, sum:${sum}, left:${left}, right:${right}, arr[0]:${arr[0]}, arr[1]:${arr[1]}`)
            console.log('right - left < arr[1] - arr[0] : ',right - left < arr[1] - arr[0])
            if (sum === pivot && right - left < arr[1] - arr[0]) {
                arr[0] = left;
                arr[1] = right;
                console.log('arr ::: ', arr)
            }


            right = left += 1;
            sum = 0;

        }
    }

    console.log(arr)
    return arr;
}

// solution([1, 2, 3, 4, 5], 7);
// [2, 3]

solution([1, 1, 1, 2, 3, 4, 5]	,5);
// [6, 6]

// solution([2, 2, 2, 2, 2], 6)
// [0, 2]

// solution([1,1,1,1,1,1,1], 7)
// [0, 6]

// solution([7,5,5,1,1,50,50], 100)
// [5, 6]

// https://school.programmers.co.kr/learn/courses/30/lessons/178870