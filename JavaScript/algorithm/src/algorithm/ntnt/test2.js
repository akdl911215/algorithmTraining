const menu = [
  {
    name: "greek",
    price_S: 7,
    price_M: 5,
    price_L: 10,
  },
  {
    name: "texas",
    price_S: 8,
    price_M: 9,
    price_L: 13,
  },
  {
    name: "european",
    price_S: 5,
    price_M: 10,
    price_L: 13,
  },
];

const order = [
  { name: "texas", size: "Medium", quantity: 1 },
  { name: "european", size: "Small", quantity: 2 },
];

function solution(menu, order) {
  return Math.min(
    discount1(menu, order),
    discount2(menu, order),
    discount3(menu, order),
    discount4(menu, order),
    cornerCase(menu, order),
  );
}
function discount1(menu, order) {
  const totalQuan = order.reduce((total, el) => total + el.quantity, 0);
  if (totalQuan < 3) {
    return Infinity;
  }

  const orderList = order.flatMap((el) => {
    const currentSize =
      el.size === "Medium"
        ? "price_M"
        : el.size === "Large"
          ? "price_L"
          : "price_S";

    const menuItem = menu.find((el2) => el2.name === el.name);
    const price = menuItem[currentSize];

    return Array.from({ length: el.quantity }, () => ({
      name: el.name,
      size: currentSize,
      price,
    }));
  });
  const minPrice = Math.min(...orderList.map((el) => el.price));
  const minPriceIndex = orderList.findIndex((el) => el.price === minPrice);
  orderList.splice(minPriceIndex, 1);

  return orderList.reduce((total, el) => total + el.price, 0);
}

function discount2(menu, order) {
  let discountCheck = true;
  order.forEach((el) => {
    if (el.quantity >= 5) {
      discountCheck = false;
    }
  });
  if (discountCheck) return Infinity;

  const pizzaCounts = {};
  order.forEach((el) => {
    if (!pizzaCounts[el.name]) {
      pizzaCounts[el.name] = 0;
      pizzaCounts[el.name] += el.quantity;
    }
  });

  const pizzas = Object.entries(pizzaCounts).filter(
    ([name, count]) => count >= 5,
  );
  let maxName = null;
  let maxSum = 0;

  pizzas.forEach(([name]) => {
    const el = order.filter((el) => el.name === name);

    const prices = [];
    el.forEach((item) => {
      const pizzaInfo = menu.find((m) => m.name === item.name);
      const unitPrice =
        item.size === "Small"
          ? pizzaInfo.price_S
          : item.size === "Medium"
            ? pizzaInfo.price_M
            : pizzaInfo.price_L;

      for (let i = 0; i < item.quantity; i++) {
        prices.push(unitPrice);
      }
    });

    prices.sort((a, b) => b - a);
    const topFiveSum = prices.slice(0, 5).reduce((acc, cur) => acc + cur, 0);

    if (topFiveSum > maxSum) {
      maxName = name;
      maxSum = topFiveSum;
    }
  });

  return Infinity;
}
function discount3(menu, order) {
  return Infinity;
}
function discount4(menu, order) {
  return Infinity;
}
function cornerCase(menu, order) {
  return Infinity;
}

console.log(solution(menu, order));
