const bfs = () => {
    //
}

const solution = (land) => {
    let answer = 0;

    const N = land.length;
    const M = land[0].length;
    const visited = Array.from({length: N}, ()=> Array(M).fill(false))

    land.forEach((_, i) => {
        land[0].forEach((_, j) => {
            if (land[i][j] === 1 && !visited[i][j]) {
                //
            }
        })
    })



    return answer;
}

console.log(
    solution(
        [
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 1, 0],
            [1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 1, 1]
        ]
    )
)
// # 9

// print(
//     solution(
//         [
//             [1, 0, 1, 0, 1, 1],
//             [1, 0, 1, 0, 0, 0],
//             [1, 0, 1, 0, 0, 1],
//             [1, 0, 0, 1, 0, 0],
//             [1, 0, 0, 1, 0, 1],
//             [1, 0, 0, 0, 0, 0],
//             [1, 1, 1, 1, 1, 1]
//         ]
//     )
// )
// # 16

// https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=python3