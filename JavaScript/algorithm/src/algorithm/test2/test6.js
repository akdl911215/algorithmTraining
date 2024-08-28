function solution(tickets, roll, shop, money) {
    const ticketPrices = {}; // 티켓 이름과 가격을 저장할 객체
    for (let  i = 0; i < tickets.length; i++) {
        const [name, price] = tickets[i].split(' ');
        ticketPrices[name] = parseInt(price);
    }

    const ticketCount = {}; // 티켓별 개수를 저장할 객체
    let currentMoney = money; // 현재 남은 자금

    // 모든 상점 순회
    for (let shopIndex = 0; shopIndex < shop.length; shopIndex++) {
        const currentShop = shop[shopIndex];

        // 현재 상점의 티켓을 종류별로 카운트
        const shopTicketCount = {};
        for (let ticket of currentShop) {
            shopTicketCount[ticket] = (shopTicketCount[ticket] || 0) + 1;
        }

        // 각 티켓을 가능한 만큼 구매
        for (let ticket in shopTicketCount) {
            const price = ticketPrices[ticket];

            const a =  Math.floor(currentMoney / price);
            const b = Number(shopTicketCount[ticket]);
            const maxBuy = Math.min(a, b);

            // ticketCount[ticket] = (ticketCount[ticket] || 0) + maxBuy;
            // currentMoney -= maxBuy * price;
            if (maxBuy > 0 && currentMoney >= maxBuy * price) {
                ticketCount[ticket] = (ticketCount[ticket] || 0) + maxBuy;
                currentMoney -= maxBuy * price;
            }
        }

        // 필요한 경우 새로고침
        if (shopIndex < shop.length - 1 && currentMoney >= roll) {
            currentMoney -= roll;
        }
    }

    // 황금 티켓 계산
    let total = 0;
    for (let ticket in ticketCount) {
        total += ticketCount[ticket];
    }

    let goldenTickets = Math.floor(total / 3);
    // for (let ticket in ticketCount) {
    //     goldenTickets += Math.floor(ticketCount[ticket] / 3);
    // }
    //
    return goldenTickets;
}

// 예시 사용
// const tickets = ["A 1", "B 2", "C 5", "D 3"];
// const roll = 10;
// const shop = [
//     ["B", "C", "B", "C"],
//     ["A", "A", "A", "B"],
//     ["D", "D", "C", "D"]
// ];
// const money = 30;
//
// console.log(solution(tickets, roll, shop, money)); // 2

// const tickets2 = ["A 1", "B 2", "C 5", "D 3"];
// const roll2 = 10;
// const shop2 = [
//     ["B", "C", "B", "C"],
//     ["A", "A", "A", "B"],
//     ["D", "D", "C", "D"]
// ];
// const money2 = 100;
//
// console.log(solution(tickets2, roll2, shop2, money2)); // 4
//
// const tickets3 = ["A 2", "B 1"];
// const roll3 = 1;
// const shop3 = [
//     ["A", "A", "A"],
//     ["A", "B", "B"],
//     ["A", "B", "B"],
//     ["A", "B", "B"]
// ];
// const money3 = 9;
//
// console.log(solution(tickets3, roll3, shop3, money3)); // 2
//
const tickets4 = ["A 2", "B 1"];
const roll4 = 5;
const shop4 = [
    ["A", "A", "A"],
    ["A", "B", "B"],
    ["A", "B", "B"],
    ["A", "B", "B"]
];
const money4 = 19;

console.log(solution(tickets4, roll4, shop4, money4)); // 2

