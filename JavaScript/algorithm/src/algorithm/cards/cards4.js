function solution(cards1, cards2, goal) {

    for (const element of goal) {
        if (element === cards1[0]) {
            cards1.shift()
        } else if (element === cards2[0]) {
            cards2.shift()
        } else {
            return 'No';
        }
    }
    return 'Yes';
}
console.log(solution(["i", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))

// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "love", "hoho", "thank"]));
// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "love", "thank", "hoho" ]));
// console.log(solution(["you", "love", "thank"], ["haha", "hoho", "hehe"], ["haha", "you", "thank", "love", "hoho" ]));

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "drink", "water"] ["want", "to"] ["i", "want", "to", "drink", "water"] "Yes"

// console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// ["i", "water", "drink"] ["want", "to"] ["i", "want", "to", "drink", "water"]	"NO"

// https://school.programmers.co.kr/learn/courses/30/lessons/159994