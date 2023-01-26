function solution2(weights) {
    // 시소는 중심으로부터 2(m), 3(m), 4(m)

    const sortArr = weights.sort((a, b) => b - a);
    let count = 0;

    for (let i = 0; i < sortArr.length - 1; ++i) {
        for (let j = i + 1; j < sortArr.length; ++j) {
            if (sortArr[i] === sortArr[j] || sortArr[i] * 2 === sortArr[j] * 3 || sortArr[i] * 2 === sortArr[j] * 4 || sortArr[i] * 3 === sortArr[j] * 4) {
                count++;
            }
        }
    }

    console.log(count)
    return count;
}

solution2([100,180,360,100,270]);
// 4

//https://school.programmers.co.kr/learn/courses/30/lessons/152996