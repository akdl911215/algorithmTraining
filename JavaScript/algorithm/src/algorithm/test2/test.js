function solution(tickets, roll, shop, money) {
    const ticketPrices = {};
    tickets.forEach(ticket => {
        const [name, price] = ticket.split(' ');
        ticketPrices[name] = parseInt(price);
    });

    let maxGoldenTickets = 0;


    function dfs(shopIndex, currentMoney, ticketCount) {
        if (shopIndex >= shop.length) {

            let goldenTickets = 0;
            for (let ticket in ticketCount) {
                goldenTickets += Math.floor(ticketCount[ticket] / 3);
            }
            maxGoldenTickets = Math.max(maxGoldenTickets, goldenTickets);
            return;
        }


        const currentShop = shop[shopIndex];
        for (let i = 0; i < currentShop.length; i++) {
            const ticket = currentShop[i];
            const price = ticketPrices[ticket];
            if (currentMoney >= price) {
                ticketCount[ticket] = (ticketCount[ticket] || 0) + 1;
                dfs(shopIndex, currentMoney - price, ticketCount);
                ticketCount[ticket]--;
            }
        }


        if (shopIndex < shop.length - 1 && currentMoney >= roll) {
            dfs(shopIndex + 1, currentMoney - roll, ticketCount);
        }


        dfs(shopIndex + 1, currentMoney, ticketCount);
    }

    // 초기 DFS 호출
    dfs(0, money, {});

    return maxGoldenTickets;
}

const tickets = ["A 1", "B 2", "C 5", "D 3"];
const roll = 10;
const shop = [
    ["B", "C", "B", "C"],
    ["A", "A", "A", "B"],
    ["D", "D", "C", "D"]
];
const money = 30;

console.log(solution(tickets, roll, shop, money)); // 2
