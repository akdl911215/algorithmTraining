import React from 'react';

const PhoneNumber = () => {
    // 사용자가 left right 로 String 값으로 준다
    // 전화번호는 0~9사이 숫자 배열로 주어진다.

    const solution = (numbers, hand) => {
        let arrNumbers = [];
        let handPust = '';
        console.log('arrNumbers ::: ', arrNumbers);
        console.log('handPust :::: ', handPust);

        let answer = '';

        return answer;
    };

    let answer1 = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
    console.log(answer1);
    // 출력 값:  LRLLRRLLLRR

    let answer2 = solution([4, 1, 8, 7, 0, 2, 7, 3, 7, 1, 9], 'right');
    console.log(answer2);
    // 출력 값:  LLRLRRLRLLR

    let answer3 = solution([8, 2, 0, 4, 2, 7, 6, 3, 5, 8, 2], 'left');
    console.log(answer3);
    // 출력 값:  LLRLLLRRLLR

    return <></>;
};
export default PhoneNumber;
