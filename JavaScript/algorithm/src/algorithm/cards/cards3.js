function solution(cards1, cards2, goal) {
    let answer = "No";

    let count = 0;
    for (let i = 0; i < goal.length; ++i) {
        if (cards1.length === 0 && cards2.length === 0) {
            break
        }
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

    console.log('goal.length : ', goal.length, ' count : ', count)
    if (count === goal.length) {
        answer = "Yes"
    }
    return answer;
}
console.log(solution(["i", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))

// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "love", "hoho", "thank"]));
// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "love", "thank", "hoho" ]));
// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "thank", "love", "hoho" ]));

// console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "drink", "water"] ["want", "to"] ["i", "want", "to", "drink", "water"] "Yes"

// console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "water", "drink"] ["want", "to"] ["i", "want", "to", "drink", "water"]	"NO"

// https://school.programmers.co.kr/learn/courses/30/lessons/159994