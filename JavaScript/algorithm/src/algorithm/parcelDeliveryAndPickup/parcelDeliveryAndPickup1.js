function solution(cap, n, deliveries, pickups) {

    let deliveryMaximumDistance = n;
    const newDeliveries = new Set();

    let pickupMaximumDistance = n;
    const newPickups = new Set();

    let delivery = 0;
    let pickup = 0;
    for (let i = n - 1; 0 < i; --i) {

        delivery += deliveries[i];
        if (cap >= delivery) {
            newDeliveries.add(deliveryMaximumDistance);
        } else {
            delivery = deliveries[i];
            if (cap >= delivery) {
                deliveryMaximumDistance = delivery;
                newDeliveries.add(deliveryMaximumDistance);
            }
        }

        pickup += pickups[i];
        if (cap >= pickup) {
            newPickups.add(pickupMaximumDistance);
        } else {
            pickup = pickups[i];
            if (cap > pickup) {
                pickupMaximumDistance = pickup;
                newPickups.add(pickupMaximumDistance);
            }
        }
    }

    console.log('newDeliveries : ', newDeliveries)
    console.log('newPickups : ', newPickups)

    return [...Array.from(newDeliveries), ...Array.from(newPickups)].reduce((acc, val) => acc + val, 0);
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

//https://school.programmers.co.kr/learn/courses/30/lessons/150369