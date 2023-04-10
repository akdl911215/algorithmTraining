function solution(players, callings) {

    const result = {};
    players.forEach((el, key) => result[el] = key);
    console.log('result : ', result)

    callings.map((el, key) => {
        console.log('callings[key] : ', callings[key])
        const index = result[callings[key]];
        console.log('index : ', index)
        const player = players[index];
        players[index] = players[index - 1];
        players[index - 1] = player;

        const tmp = result[el]
        console.log('tmp : ', tmp)
    })

    // players = Object.keys(result)
    console.log(players);
    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]

// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript