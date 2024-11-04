function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let deliveryStack = [];
    let pickupStack = [];

    // 배달 및 수거 작업이 필요한 집들을 스택에 저장합니다.
    for (let i = 0; i < n; i++) {
        if (deliveries[i] > 0) {
            deliveryStack.push([i + 1, deliveries[i]]);
        }
        if (pickups[i] > 0) {
            pickupStack.push([i + 1, pickups[i]]);
        }
    }

    while (deliveryStack.length > 0 || pickupStack.length > 0) {
        let deliverCap = 0;
        let pickupCap = 0;
        let maxDistance = 0;

        // 배달 작업을 처리합니다.
        while (deliveryStack.length > 0 && deliverCap < cap) {
            let [pos, cnt] = deliveryStack[deliveryStack.length - 1];
            let canDeliver = Math.min(cap - deliverCap, cnt);
            deliverCap += canDeliver;
            cnt -= canDeliver;

            if (cnt === 0) {
                deliveryStack.pop();
            } else {
                deliveryStack[deliveryStack.length - 1][1] = cnt;
            }
            maxDistance = Math.max(maxDistance, pos);
        }

        // 수거 작업을 처리합니다.
        while (pickupStack.length > 0 && pickupCap < cap) {
            let [pos, cnt] = pickupStack[pickupStack.length - 1];
            let canPickup = Math.min(cap - pickupCap, cnt);
            pickupCap += canPickup;
            cnt -= canPickup;

            if (cnt === 0) {
                pickupStack.pop();
            } else {
                pickupStack[pickupStack.length - 1][1] = cnt;
            }
            maxDistance = Math.max(maxDistance, pos);
        }

        // 이동 거리를 누적합니다.
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