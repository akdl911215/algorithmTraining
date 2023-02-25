function solution(cards1, cards2, goal) {
    let answer = "No";

    let count = 0;
    for (let i = 0; i < goal.length; ++i) {
        count++;

        if (goal[i] === cards1[0]) {
            cards1.shift()
            continue;
        }

        if (goal[i] === cards2[0]) {
            cards2.shift()
            continue;
        }

        break;
    }

    if (count === goal.length) {
        answer = "Yes"
    }
    return answer;
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "drink", "water"] ["want", "to"] ["i", "want", "to", "drink", "water"] "Yes"

console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "water", "drink"] ["want", "to"] ["i", "want", "to", "drink", "water"]	"NO"

// https://school.programmers.co.kr/learn/courses/30/lessons/159994