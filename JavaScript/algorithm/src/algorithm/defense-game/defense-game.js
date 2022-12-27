function solution(n, k, enemy) {
    // n : 병사의 수, k : 무적권, enemy : 적의 숫자가 담긴 배열
    let answer = k;

    enemy.sort((a, b) => b - a).splice(0, k);
    if(enemy.length === 0) return answer;
    console.log('enemy : ', enemy) // 5, 10, 30 제외 출력

    // k 보다 작거나 같은거 배열에 담고 제일 큰 수를 반환 전략으로 변경
    let checkingBox = [];
    for (let i = 0; i < enemy.length - 1; i++) {
        let count = enemy[i];
        answer++;
        for (let j = i + 1; j < enemy.length; j++) {
            count += enemy[j];
            answer++;
            if (count <= k) {
                console.log('!!')
                checkingBox.push(answer)
            }
        }
        answer = k;
    }

    console.log('checking : ', checkingBox)

    return checkingBox.sort((a, b) => a + b).pop();
}

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1, 10, 30, 1 , 2];
// result:

// const n = 7;
// const k = 3;
// const enemy = [4, 2, 4, 5, 3, 3, 1];
// result: 5

// const n = 2;
// const k = 4;
// const enemy = [3, 3, 3, 3];
// result: 4

console.log(solution(n, k, enemy))

// https://school.programmers.co.kr/learn/courses/30/lessons/142085