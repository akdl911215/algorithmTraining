function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  const deliveriesStack = [];
  const pickupsStack = [];

  for (let i = 0; i < deliveries.length; ++i) {
    const delivery = deliveries[i];
    const pickup = pickups[i];
    const location = i + 1;

    if (delivery !== 0) {
      deliveriesStack.push([location, delivery]);
    }

    if (pickup !== 0) {
      pickupsStack.push([location, pickup]);
    }
  }

  while (deliveriesStack.length > 0 || pickupsStack.length > 0) {
    let maxDistance = 0;
    let truckDeliveryCapCount = 0;
    let truckPickupCapCount = 0;

    while (deliveriesStack.length > 0 && truckDeliveryCapCount < cap) {
      const [deliveryLocation, deliveryCount] =
        deliveriesStack[deliveriesStack.length - 1];

      const availableCapacity = cap - truckDeliveryCapCount;
      if (deliveryCount <= availableCapacity) {
        truckDeliveryCapCount += deliveryCount;
        deliveriesStack.pop();
      } else {
        truckDeliveryCapCount += availableCapacity;
        deliveriesStack[deliveriesStack.length - 1][1] -= availableCapacity;
      }

      maxDistance = Math.max(maxDistance, deliveryLocation);
    }

    while (pickupsStack.length > 0 && truckPickupCapCount < cap) {
      const [pickupLocation, pickupCount] =
        pickupsStack[pickupsStack.length - 1];

      const availableCapacity = cap - truckPickupCapCount;
      if (pickupCount <= availableCapacity) {
        truckPickupCapCount += pickupCount;
        pickupsStack.pop();
      } else {
        truckPickupCapCount += availableCapacity;
        pickupsStack[pickupsStack.length - 1][1] -= availableCapacity;
      }

      maxDistance = Math.max(maxDistance, pickupLocation);
    }

    answer += maxDistance;
  }

  return answer * 2;
}
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/150369
