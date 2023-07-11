class CoffeeMachine {
  _waterAmount = 0; // 물통에 차 있는 물의 양

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this.power = power;
    console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
  }
}

// coffee machine create
const coffeeMachine = new CoffeeMachine(100);

// water add
coffeeMachine.waterAmount = -10;

// https://ko.javascript.info/private-protected-properties-methods
