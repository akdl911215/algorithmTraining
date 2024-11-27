function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliveryPointer = n - 1;
  let pickupPointer = n - 1;

  while (deliveryPointer >= 0 || pickupPointer >= 0) {
    // Find the farthest house to visit in this trip
    while (deliveryPointer >= 0 && deliveries[deliveryPointer] === 0)
      deliveryPointer--;
    while (pickupPointer >= 0 && pickups[pickupPointer] === 0) pickupPointer--;

    if (deliveryPointer < 0 && pickupPointer < 0) break;

    const currentMax = Math.max(deliveryPointer, pickupPointer) + 1;
    answer += currentMax * 2;

    // Deliveries
    let capRemaining = cap;
    while (deliveryPointer >= 0 && capRemaining > 0) {
      if (deliveries[deliveryPointer] > capRemaining) {
        deliveries[deliveryPointer] -= capRemaining;
        capRemaining = 0;
      } else {
        capRemaining -= deliveries[deliveryPointer];
        deliveries[deliveryPointer] = 0;
        deliveryPointer--;
      }
    }

    // Pickups
    capRemaining = cap;
    while (pickupPointer >= 0 && capRemaining > 0) {
      if (pickups[pickupPointer] > capRemaining) {
        pickups[pickupPointer] -= capRemaining;
        capRemaining = 0;
      } else {
        capRemaining -= pickups[pickupPointer];
        pickups[pickupPointer] = 0;
        pickupPointer--;
      }
    }
  }

  return answer;
}
