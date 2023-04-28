function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const result = [];

    while (right < sequence.length) {
        if (sum < k) {
            // k보다 작으면 오른쪽 포인터 이동
            right+= 1;
            sum += sequence[right];
        } else if (sum > k) {
            // k보다 크면 왼쪽 포인터 이동
            sum -= sequence[left];
            left+= 1;
        } else {
            // k와 같으면 result에 push
            result.push([left, right]);
            right += 1; // 다른 값을 구하기 위해 포인터 이동
            sum += sequence[right];
        }
    }
    console.log('result : ', result)

    const a = result.sort(condition)[0];
    console.log(a)
    return a;
}

function condition(a, b) {
    console.log(`a:${a}, b:${b}`)
    console.log(`a[0] - a[1]: ${a[0] - a[1]}, b[0] - b[1]: ${b[0] - b[1]}`)
    console.log(`Math.abs(a[0] - a[1]): ${Math.abs(a[0] - a[1])}, Math.abs(b[0] - b[1]: ${Math.abs(b[0] - b[1])}`)
    const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
    console.log('lenDiff : ', lenDiff)
    if (lenDiff !== 0) return lenDiff; // 길이에 따라 정렬
    return a[0] - b[0]; // 그 외는 0번째 원소 index가 낮은 순서로 정렬
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
