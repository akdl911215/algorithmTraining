function solution(cap, n, deliveries, pickups) {
    let answer = 0;

    const deliveryStack = [];
    const pickupStack = [];

    for (let i = 0; i < n; ++i) {
        const delivery = deliveries[i];
        const pickup = pickups[i];

        if (delivery !== 0) {
            deliveryStack.push([i + 1, delivery]);
        }

        if (pickup !== 0) {
            pickupStack.push([i + 1, pickup]);
        }
    }

    while (deliveryStack.length > 0 || pickupStack.length > 0) {
        let deliveryCount = 0;
        let pickupCount = 0;
        let maxDistance = 0;

        while (deliveryStack.length > 0 && deliveryCount < cap) {
            const [homeLocation, sendParcels] = deliveryStack[deliveryStack.length - 1];

            if (deliveryCount + sendParcels <= cap) {
                deliveryCount += sendParcels;
                deliveryStack.pop();
            } else {
                // sendParcels = send
                deliveryCount = 0;
            }
            maxDistance = Math.max(maxDistance, homeLocation);
        }

        while (pickupStack.length > 0 && pickupCount < cap) {
            const [homeLocation, pickupParcels] = pickupStack.pop();

            pickupCount += pickupParcels;
            maxDistance = Math.max(maxDistance, homeLocation);
        }


    }


    return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/150369

// https://chatgpt.com/c/67282491-78cc-8004-ac9a-36b6c5324cc1