function solution(today, terms, privacies) {
    console.log('today : ', today);
    let answer = [];

    // const todayDate = `${today[0]}${today[1]}${today[2]}${today[3]}-${today[5]}${today[6]}-${today[8]}${today[9]}`;

    const year = Number(`${today[0]}${today[1]}${today[2]}${today[3]}`);
    const month = Number(`${today[5]}${today[6]}`);
    const day = Number(`${today[8]}${today[9]}`);
    console.log(`${year}-${month}-${day}`);
    console.log('typeof ',typeof year)

    const todayDate = new Date(year, month, day);
    const todayDate2 = new Date(today);
    console.log("todayDate : ", todayDate)
    console.log("todayDate2 : ", todayDate2)
    console.log('------------------------')

    let termsObject = {};
    let termsObjectArr = [];
    for (let i = 0; i < terms.length; ++i) {
        const stringSplit = terms[i].split(" ");
        // console.log("stringSplit : ", stringSplit);
        // console.log('typeof stringSplit[1] : ', typeof stringSplit[1]);

        const monthDate = new Date(todayDate.setMonth(todayDate.getMonth() + Number(stringSplit[1])))
        console.log('monthDate : ', monthDate)

        termsObject = {
            termsType: stringSplit[0],
            date: monthDate
        }

        termsObjectArr.push(termsObject);
    }
    console.log("termsObjectArr : ", termsObjectArr)


    return answer;
}

solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]);
// result: [1, 3]

// solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]);
// result: [1, 4, 5]




// https://school.programmers.co.kr/learn/courses/30/lessons/150370
