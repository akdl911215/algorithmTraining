class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }
}

const bfs = (graph, visited, start) => {
    const [N, M] = start;
    let minY = M;
    let maxY = M;
    visited[N][M] = true;

    const queue = new Queue();
    queue.enqueue([N, M]);

    let oilSize = 1;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.size() !== 0) {
        const [qn, qm] = queue.dequeue();

        for (let i = 0; i < 4; ++i) {
            const [x, y] = directions[i];
            const nx = x + qn;
            const ny = y + qm;

            const bfsN = graph.length - 1;
            const bfsM = graph[0].length - 1;
            if (0 <= nx && nx <= bfsN && 0 <= ny && ny <= bfsM  && graph[nx][ny] === 1 && !visited[nx][ny]) {
                queue.enqueue([nx, ny]);
                visited[nx][ny] = true;
                oilSize++;

                if (ny < minY) {
                    minY = ny;
                }

                if (maxY < ny) {
                    maxY = ny;
                }
            }
        }
    }

    return [minY, maxY, oilSize]
}

const solution = (land) => {

    const N = land.length;
    const M = land[0].length;
    const visited = Array.from({length: N}, ()=> Array(M).fill(false));
    const oilSizeList = Array.from({length: M}, () => 0);

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < M; ++j) {
            if (land[i][j] === 1 && !visited[i][j] ) {

                const [start, end, oilSize] = bfs(land, visited, [i, j]);

                for (let i = start; i <= end; ++i) {
                    oilSizeList[i] += oilSize;
                }
            }
        }
    }


    return Math.max(...oilSizeList);
}

// console.log(
//     solution(
//     [
//             [0, 0, 0, 1, 1, 1, 0, 0],
//             [0, 0, 0, 0, 1, 1, 0, 0],
//             [1, 1, 0, 0, 0, 1, 1, 0],
//             [1, 1, 1, 0, 0, 0, 0, 0],
//             [1, 1, 1, 0, 0, 0, 1, 1]
//         ]
//
//     )
// )
// # 9

console.log(
    solution(
    [
            [1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1]
        ]
    )
)
// # 16

// https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=python3