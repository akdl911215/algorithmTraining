const solution = (s) => {
    const obj = {};
    console.log('obj : ', obj);
    const answer = [];

    for (let i = 0; i < s.length; ++i) {
        // console.log('obj[s[i]] : ', obj[s[i]])
        console.log(`obj[${s}[${i}]]` , obj[s[i]])

        if (obj[s[i]] != null) {
            answer[i] = i - obj[s[i]];
        }
        else {
            answer[i] = -1;
        }

        obj[s[i]] = i;
        console.log('obj[s[i]] : ' , obj[s[i]])
    }

    console.log('--- answer : ', answer)
    return answer;
}

solution('banana')