function solution(cap, n, deliveries, pickups) {
    let answer = 0;

    const deliveryStack = [];
    const pickupStack = [];

    for (let i = 0; i < n; ++i) {
        if (deliveries[i] !== 0) {
            deliveryStack.push([i + 1, deliveries[i]]);
        }

        if (pickupStack[i] !== 0) {
            pickupStack.push([i + 1, pickups[i]]);
        }
    }

    while (deliveryStack.length > 0 || pickupStack.length > 0) {
        let deliveryCount = 0;
        let pickupCount = 0;
        let maxDistance = 0;

        function processStack(stack, currentCount) {
            while (stack.length > 0 && currentCount < cap) {
                const [homeLocation, parcels] = stack[stack.length - 1];

                if (currentCount + parcels <= cap) {
                    currentCount += parcels;
                    stack.pop();
                } else {
                    const remainingParcels = parcels - cap - currentCount;
                    currentCount = cap;
                    stack[stack.length - 1][1] = remainingParcels;
                }
                maxDistance = Math.max(maxDistance, homeLocation);
            }

            return currentCount;
        }

        deliveryCount = processStack(deliveryStack, deliveryCount);
        pickupCount = processStack(pickupStack, pickupCount);

        answer += maxDistance * 2;
    }

    return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/150369

// https://chatgpt.com/c/67282491-78cc-8004-ac9a-36b6c5324cc1