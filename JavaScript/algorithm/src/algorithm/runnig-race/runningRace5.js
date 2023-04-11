function solution(players, callings) {

    const object = {};
    players.forEach((key, value) => object[key] = value);

    callings.forEach((el, inx) => {
        const index = object[callings[inx]];
        const player = players[index - 1];
        players[index - 1] = players[index];
        players[index] = player;

        object[player]++
        object[callings[inx]]--
    })

    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript