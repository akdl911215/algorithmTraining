function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliveryIndex = deliveries.length;
  let pickupIndex = pickups.length;

  while (deliveries.length > 0 || pickups.length > 0) {
    let maxDistance = 0;

    let deliveryCapCount = 0;
    while (cap > deliveryCapCount && deliveries.length > 0) {
      const delivery = deliveries[deliveryIndex - 1];
      if (delivery === 0) {
        deliveries.pop();
        deliveryIndex--;
        continue;
      }

      deliveryCapCount += delivery;

      if (deliveryCapCount > cap) {
        deliveries[deliveryIndex - 1] = deliveryCapCount - cap;
      } else {
        maxDistance = Math.max(deliveryIndex--, maxDistance);
        deliveries.pop();
      }
    }

    let pickupCapCount = 0;
    while (cap > pickupCapCount && pickups.length > 0) {
      const pickup = pickups[pickupIndex - 1];
      if (pickup === 0) {
        pickups.pop();
        pickupIndex--;
        continue;
      }
      pickupCapCount += pickup;

      if (pickupCapCount > cap) {
        pickups[pickupIndex - 1] = pickupCapCount - cap;
      } else {
        maxDistance = Math.max(pickupIndex--, maxDistance);
        pickups.pop();
      }
    }

    answer += maxDistance;
  }

  return answer * 2;
}

// console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// 16

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
// 30

// https://school.programmers.co.kr/learn/courses/30/lessons/150369
