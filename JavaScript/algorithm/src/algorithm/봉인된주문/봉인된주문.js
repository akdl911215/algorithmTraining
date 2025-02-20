function solution(n, bans) {
    var answer = '';

    // 삭제된 주문을 Set으로 저장 (빠른 검색을 위해)
    const banned = new Set(bans)

    // n번째 주문을 찾는 함수
    function findNth(n) {
        let low = 0;
        let high = Math.pow(26, 11); // 최대 11글자 주문까지 고려

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midStr = getStringFromOrder(mid); // mid번째 주문을 문자열로 변환
            const order = getOrder(midStr); // midStr의 순서 계산

            // midStr이 삭제된 주문인지 확인
            if (banned.has(midStr)) {
                // 삭제된 주문이라면, midStr보다 작은 주문 수를 조정
                if (order < n) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                // 삭제되지 않은 주문이라면, n과 비교
                if (order < n) {
                    low = mid + 1;
                } else if (order > n) {
                    high = mid - 1;
                } else {
                    return midStr; // n번째 주문을 찾음
                }
            }
        }
        return ""; // 찾지 못한 경우 (문제 조건상 발생하지 않음)
    }

    // 주문서에서 order번째 주문을 문자열로 변환하는 함수
    function getStringFromOrder(order) {
        let result = '';
        order--; // 0-based로 변환
        let lenth = 1;
        while (order >= Math.pow(26, lenth)) {
            order -= Math.pow(26, lenth);
            length++;
        }
        for (let i = 0; i < length; i++) {
            const charCode = Math.floor(order / Math.pow(26, length - i - 1)) + 'a'.charCodeAt(0);
            result += String.fromCharCode(charCode);
            order %= Math.pow(26, length - i - 1);
        }
        return result;
    }

    // 주문의 순서를 계산하는 함수
    function getOrder(s) {
        let order = 0;

        // 1글자부터 s.length - 1글자까지의 모든 주문 수를 더함
        for (let length = 1; length < s.length; ++length) {
            order += Math.pow(26, length);
        }

        // s와 같은 길이의 주문 중 s보다 작은 주문 수를 계산
        for (let i = 0; i < s.length; ++i) {
            for (let c = 'a'.charCodeAt(0); c < s.charCodeAt(i); ++c) {
                order += Math.pow(26, s.length - i - 1);
            }
        }

        return order + 1 ; // 1-based index
    }


    return answer;
}

// 주문서 구조
// 1글자 주문: "a", "b", ..., "z" (총 26개)
// 2글자 주문: "aa", "ab", ..., "zz" (총 26^2 = 676개)
// 3글자 주문: "aaa", "aab", ..., "zzz" (총 26^3 = 17,576개)
// ...
// 11글자 주문: "aaaa...a", "aaaa...b", ..., "zzzz...z" (총 26^11개)

console.log(solution(30, ["d", "e", "bb", "aa", "ae"]));
// "ah"

console.log(solution(7388, ["gqk", "kdn", "jxj", "jxi", "fug", "jxg", "ewq", "len", "bhc"]));
// "jxk"

// https://school.programmers.co.kr/learn/courses/30/lessons/389481
// https://chat.deepseek.com/a/chat/s/135af8d6-9628-4678-9dc3-710abe8fc4a8