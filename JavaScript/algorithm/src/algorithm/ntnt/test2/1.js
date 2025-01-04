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

console.log(discount1(menu, order));
