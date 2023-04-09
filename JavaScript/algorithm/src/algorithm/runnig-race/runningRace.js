function solution(players, callings) {
    var answer = [];

    let arr = players
    for (let i = 0; i < callings.length; ++i) {
        const call = callings[i];
        const index = arr.indexOf(call);

        arr = arr.filter(el => el !== call)
        arr.splice(index - 1, 0, call)

        answer = arr;
    }
    console.log(answer)
    return answer;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript