function solution(n, k, enemy) {
    // n : 병사의 수, k : 무적권, enemy : 적의 숫자가 담긴 배열
    let answer = k;


    for (let i = 0; i < k; ++i) {
        const maxValue = Math.max(...enemy);
        for (let j = 0; j < enemy.length; ++j) {
            if(enemy[j] === maxValue) {
                enemy.splice(j, 1);
                break;
            }
        }
    }

    for (let i = 0; i < enemy.length; ++i) {
        if (n < enemy[i]) {
            break;
        }
        n -= enemy[i];
        answer++;
    }

    return answer;
}

// const n = 7;
// const k = 3;
// const enemy = [4, 2, 4, 5, 3, 3, 1, 10, 30, 1 , 2];
// result:

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
// result: 5

// const n = 2;
// const k = 4;
// const enemy = [3, 3, 3, 3];
// result: 4

console.log(solution(n, k, enemy))

// https://school.programmers.co.kr/learn/courses/30/lessons/142085