class Node {
  constructor(data = null, tail = null) {
    this.data = data;
    this.tail = tail;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data, index = 0) {
    let findIndex = this.size >= index ? index : null;

    if (this.size === 0) {
      this.head = new Node(data);
      this.size++;
      return;
    }

    if (!findIndex && findIndex !== 0)
      throw new Error("리스트 사이즈 확인이 필요합니다.");

    const newNode = new Node(data);
    let currentNode = this.head;
    let prevNode = null;

    while (findIndex) {
      prevNode = currentNode;
      currentNode = currentNode.tail;
      findIndex--;
    }

    if (!!currentNode) {
      newNode.tail = currentNode.tail;
      currentNode.tail = newNode;
    } else {
      prevNode.tail = newNode;
    }
    this.size++;
  }

  insertHead(data) {
    if (this.size === 0) {
      this.head = new Node(data);
      this.size++;
      return;
    }

    const newNode = new Node(data);
    let currentNode = this.head;
    this.head = newNode;
    newNode.tail = currentNode;
  }

  remove(index) {
    let findIndex = this.size > index ? index : null;
    if (!findIndex) throw new Error("리스트 사이즈 확인이 필요합니다.");

    let currentNode = this.head;
    let prevNode = null;
    while (findIndex) {
      prevNode = currentNode;
      currentNode = currentNode.tail;

      findIndex--;
    }

    prevNode.tail = currentNode.tail;
    this.size--;
  }

  find(index) {
    let findIndex = this.size > index ? index : null;
    if (!findIndex) throw new Error("리스트 사이즈 확인이 필요합니다.");

    let currentNode = this.head;
    while (findIndex > 0) {
      currentNode = currentNode.tail;

      findIndex--;
    }

    console.log(currentNode);
  }
}

const list = new LinkedList();
console.log(list);

list.insert("첫번째");
console.log("list 1 : ", list);
list.insert("두번째", 1);
list.insert("세번째", 2);
console.log("list 2 : ", list);
list.insert("네번째", 3);
list.insert("다섯번째", 4);
console.log("list 3 : ", list);
list.find(3);
list.insertHead("헤드입 데이터 삽");
console.log("list 4: ", list);
