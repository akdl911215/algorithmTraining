function solution(weights) {
    let answer = 0;
    const store = {}; //key-value
    const cal = [1, 3/2, 2, 4/3]; //경우의 수 (1,1), (2,3), (2,4), (3,4)

    const sortArr = weights.sort((a,b)=> b - a)
    console.log('sortArr : ', sortArr)
    sortArr.forEach((w) => { //내림차순 정렬 후, 전체 돌면서
        let s;
        console.log('w : ', w)
        cal.forEach((i)=>{
            console.log('i : ', i)
            if(store[s = w * i]){ //해당 비율을 곱한 값이 store에 존재할 경우

                answer += store[s];
                console.log(answer, 'answer', s, store[s])
            }
        });
        console.log('-----')
        if (!store[w]) {
            store[w] = 1
        }
        else {
            console.log('end else : ', store[w]++)
        };
    });
    console.log(answer)
    return answer;
}
solution([100,180,360,100,270, 100, 100, 100]);