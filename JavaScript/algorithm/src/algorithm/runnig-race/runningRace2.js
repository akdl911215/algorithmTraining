function solution(players, callings) {
    callings.map(el => {
        const index = players.indexOf(el);
        const tmp = players[index];
        players[index] = players[index - 1];
        players[index - 1] = tmp;
    })

    console.log(players);
    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript