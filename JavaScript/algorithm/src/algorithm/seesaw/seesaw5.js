function solution(weights) {
    let answer = 0;
    const sortArr = weights.sort((a, b) => b - a);
    console.log("sortArr : ", sortArr)

    console.log(answer)
    return answer;
}
solution([100,180,360,100,270]);