class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Queue is empty";
        }

        return this.items.shift();
    }
}

const bfs = (graph, visited, start) => {
    const [N, M] = start;
    let minY = M;
    let maxY = M;
    visited[N][M] = true;

    const queue = new Queue();
    queue.enqueue([N, M]);
    console.log('queue : ', queue);

    let oilSize = 1;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (!!queue) {
        const [qn, qm] = queue.dequeue();

        for (let i = 0; i < 4; ++i) {
            const [x, y] = directions[i];
            const nx = x + qn;
            const ny = y + qm;

            if (0 <= nx && nx < graph.length - 1 && 0 <= ny && nx < graph[0].length - 1 && graph[nx][ny] === 1 && !visited[nx][ny]) {
                queue.enqueue([nx, ny]);
                visited[nx][ny] = true;
                oilSize++;

                if (minY < ny) {
                    minY = ny;
                }

                if (ny < maxY) {
                    maxY = ny;
                }
            }
        }
    }

    return [minY, maxY, oilSize]
}

const solution = (land) => {
    let answer = 0;

    const N = land.length;
    const M = land[0].length;
    const visited = Array.from({length: N}, ()=> Array(M).fill(false));
    const oilSizeList = Array.from({length: N}, () => 0);

    land.forEach((_, i) => {
        land[0].forEach((_, j) => {
            if (land[i][j] === 1 && !visited[i][j] && !visited[i][j]) {
                const [start, end, oilSize] = bfs(land, visited, [i, j]);

                for (let i = start; i < end + 1; ++i) {
                    oilSizeList[i] += oilSize;
                }
            }
        })
    })



    return Math.max(...oilSizeList);
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