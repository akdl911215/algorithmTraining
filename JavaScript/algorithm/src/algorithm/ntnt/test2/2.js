const menu = [
  {
    name: "margherita",
    price_S: 90,
    price_M: 80,
    price_L: 100,
  },
  {
    name: "hawaii",
    price_S: 80,
    price_M: 90,
    price_L: 120,
  },
  {
    name: "caoruccuisa",
    price_S: 50,
    price_M: 70,
    price_L: 130,
  },
  {
    name: "greek",
    price_S: 50,
    price_M: 70,
    price_L: 130,
  },
];

const order = [
  { name: "greek", size: "Small", quantity: 5 },
  { name: "margherita", size: "Small", quantity: 4 },
  { name: "hawaii", size: "Large", quantity: 1 },
  { name: "margherita", size: "Medium", quantity: 2 },
  { name: "caoruccuisa", size: "Small", quantity: 7 },
];

// 주문에 같은 이름의 피자가 최소 5개 이상 포함되어 있으면, 그 중 5개를 100에 구매할 수 있습니다.
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

  // const combined = order.map((el) => {
  //   const pizza = menu.find((pizza) => pizza.name === el.name);
  //   let price = pizza[`price_${el.size[0].toUpperCase()}`];
  //   return {
  //     name: el.name,
  //     size: el.size,
  //     quantity: el.quantity,
  //     price,
  //   };
  // });
  // combined.sort((a, b) => b.price - a.price);
  // console.log(combined);

  return 0;
}
console.log(discount2(menu, order));
