function solution(weights) {
    let answer = 0;
    // 시소는 중심으로부터 2(m), 3(m), 4(m)

    const sortArr = weights;
    console.log(sortArr)

    let count = 0;
    for (let i = 0; i < sortArr.length; ++i) {
        for (let j = 0; j < sortArr.length; ++j) {
            console.log(`${sortArr[i]} === ${sortArr[j]}`)
            // console.log(`${i} === ${j}`)

            if (i === j) {
                    console.log('check!!')
            } else {
                if (sortArr[i] === sortArr[j]) {
                    count++;

                    console.log('if : ', count)
                } else {
                    if (sortArr[i] * 2 === sortArr[j] * 3) {
                        count++;
                        console.log('else ; ', count)
                    } else if (sortArr[i] * 2 === sortArr[j] * 4 ) {
                        count++;
                        console.log('else2 ; ', count)
                    } else if (sortArr[i] * 3 === sortArr[j] * 2) {
                        count++;
                        console.log('else3 ; ', count)
                    } else if (sortArr[i] * 3 === sortArr[j] * 4) {
                        count++;
                        console.log('else4 ; ', count)
                    } else if (sortArr[i] * 4 === sortArr[j] * 2) {
                        count++;
                        console.log('else5 ; ', count);
                    } else if (sortArr[i] * 4 === sortArr[j] * 3) {
                        count++;
                        console.log('else6 ; ', count)
                    }
                }
            }
        }
    }

    // for (let i = 0; i  < 1; ++i) {
    //     for (let j = 0; j < sortArr.length - 2; ++j) {
    //         if (sortArr[sortArr.length - 1] === sortArr[j]) {
    //             count++;
    //         }
    //     }
    // }

    console.log(count)
    return count;
}

solution([100,180,360,100,270]);
// 4