function solution(tickets, roll, shop, money) {
    const ticketPrices = {};
    tickets.forEach(ticket => {
        const [name, price] = ticket.split(' ');
        ticketPrices[name] = parseInt(price);
    });

    const maxMoney = money + 1;
    const dp = Array.from({ length: shop.length + 1 }, () => Array(maxMoney).fill(-1)); // DP 테이블 초기화


    dp[0][money] = 0;

    for (let shopIndex = 0; shopIndex < shop.length; shopIndex++) {
        for (let currentMoney = 0; currentMoney <= money; currentMoney++) {
            if (dp[shopIndex][currentMoney] === -1) continue;


            let ticketCount = {};
            shop[shopIndex].forEach(ticket => {
                ticketCount[ticket] = 0; // 초기 티켓 수 설정
            });

            for (let ticket of shop[shopIndex]) {
                const price = ticketPrices[ticket];
                if (currentMoney >= price) {
                    ticketCount[ticket]++;
                    const remainingMoney = currentMoney - price;
                    const goldenTicketsFromThis = Math.floor(ticketCount[ticket] / 3);
                    dp[shopIndex][remainingMoney] = Math.max(
                        dp[shopIndex][remainingMoney],
                        dp[shopIndex][currentMoney] + goldenTicketsFromThis
                    );
                }
            }


            if (currentMoney >= roll) {
                dp[shopIndex + 1][currentMoney - roll] = Math.max(
                    dp[shopIndex + 1][currentMoney - roll],
                    dp[shopIndex][currentMoney]
                );
            }


            dp[shopIndex + 1][currentMoney] = Math.max(
                dp[shopIndex + 1][currentMoney],
                dp[shopIndex][currentMoney]
            );
        }
    }


    let maxGoldenTickets = 0;
    for (let currentMoney = 0; currentMoney <= money; currentMoney++) {
        maxGoldenTickets = Math.max(maxGoldenTickets, dp[shop.length][currentMoney]);
    }

    return maxGoldenTickets;
}

// 예시 사용
const tickets = ["A 1", "B 2", "C 5", "D 3"];
const roll = 10;
const shop = [
    ["B", "C", "B", "C"],
    ["A", "A", "A", "B"],
    ["D", "D", "C", "D"]
];
const money = 30;

console.log(solution(tickets, roll, shop, money)); // 2
