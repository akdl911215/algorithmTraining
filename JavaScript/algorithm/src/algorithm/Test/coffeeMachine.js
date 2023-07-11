class CoffeeMachine {
  waterAmount = 0; // 물통에 차 있는 물의 양

  constructor(power) {
    this.power = power;
    console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
  }
}

// coffee machine create
const coffeeMachine = new CoffeeMachine(100);

// water add
coffeeMachine.waterAmount = 200;
