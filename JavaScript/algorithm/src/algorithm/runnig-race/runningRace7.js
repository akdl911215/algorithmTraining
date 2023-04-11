function solution(players, callings) {

    const map = new Map();
    players.forEach((key, value) => map.set(key, value))

    callings.forEach((el) => {
        const index = map.get(el)
        const moveIndex = index - 1;
        const player = players[moveIndex];

        players[moveIndex] = players[index];
        players[index] = player;

        map.set(el, moveIndex);
        map.set(player, index);

    })

    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript