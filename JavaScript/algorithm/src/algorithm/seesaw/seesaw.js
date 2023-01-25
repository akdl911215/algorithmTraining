function solution(weights) {
    // 시소는 중심으로부터 2(m), 3(m), 4(m)

    const sortArr = weights;
    let count = 0;

    for (let i = 0; i < sortArr.length; ++i) {
        for (let j = 0; j < sortArr.length; ++j) {

            if (i !== j) {
                if (sortArr[i] === sortArr[j]) {
                    count++;
                } else {
                    if (sortArr[i] * 2 === sortArr[j] * 3 || sortArr[i] * 2 === sortArr[j] * 4) {
                        count++;
                    }
                }
            }

        }
    }

    console.log(count);
    return count;
}

solution([100,180,360,100,270]);
// 4

//https://school.programmers.co.kr/learn/courses/30/lessons/152996