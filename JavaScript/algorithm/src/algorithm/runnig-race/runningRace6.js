function solution(players, callings) {
    let obj = {};
    players.forEach((v, idx) => obj[v] = idx);
    for(let i = 0; i < callings.length; i++){
        let idx = obj[callings[i]];
        let player = players[idx-1];
        players[idx-1] = callings[i];
        players[idx] = player;
        obj[callings[i]]--;
        obj[player]++;
    }

    console.log(players)
    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// ["mumu", "kai", "mine", "soe", "poe"]
