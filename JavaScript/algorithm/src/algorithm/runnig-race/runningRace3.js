function solution(players, callings) {

    const result = {};
    callings.forEach(el => {
        if (result[el]) {
            result[el] = result[el] + 1;
        } else {
            result[el] = 1;
        }
    });

    for (const property in result) {
            const index = players.indexOf(property);
            const moveIndex = result[property];

            const tmp = players[index];
            players[index] = players[index - moveIndex];
            players[index - moveIndex] = tmp;
    }
    console.log(players);
    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript