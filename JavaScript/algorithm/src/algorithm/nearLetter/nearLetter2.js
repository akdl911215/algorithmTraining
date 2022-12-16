const solution = (s) => {
    const obj = {};
    console.log('obj : ', obj);
    const answer = [];

    console.log('-----------------------')
    console.log(obj[s])
    console.log('-----------------------')

    for (let i = 0; i < s.length; ++i) {
        // console.log('obj[s[i]] : ', obj[s[i]])
        console.log(`obj[${s}[${i}]]` , obj[s[i]])

        console.log(obj[s[i]] == null)

        if (obj[s[i]] != null) {
            console.log('1')
            answer[i] = i - obj[s[i]];
        }
        else {
            console.log('2')
            answer[i] = -1;
        }

        obj[s[i]] = i;
        console.log('obj[s[i]] : ' , obj[s[i]])
    }

    console.log('--- answer : ', answer)
    return answer;
}

solution('banana')