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
    if (index > this.size) {
      throw new Error("리스트 사이즈를 초과");
    }

    const newNode = new Node(data);
    let currentNode = this.head;
    let prevNode = null;

    // 맨 앞에 삽힙하는 경우
    if (index === 0) {
      newNode.tail = this.head;
      this.head = newNode;
    } else {
      // 주어진 인덱스까지 이동
      for (let i = 0; i < index - 1; ++i) {
        currentNode = currentNode.tail;
      }
      // 노드 삽입
      newNode.tail = currentNode.tail;
      currentNode.tail = newNode;
    }
    this.size++;
  }

  // 맨 앞에 데이터 삽입
  insertHead(data) {
    this.insert(data, 0);
  }

  // 리스트의 특정 인덱스 데이터 제거
  remove(index) {
    if (index >= this.size) {
      throw new Error("리스트 사이즈 초과");
    }

    let currentNode = this.head;
    let prevNode = null;

    // 맨 앞의 노드를 제거하는 경우
    if (index === 0) {
      this.head = currentNode.tail;
    } else {
      // 주어진 인덱스까지 이동
      for (let i = 0; i < index - 1; ++i) {
        currentNode = currentNode.tail;
      }
      currentNode.tail = currentNode.tail.tail;
    }
    this.size--;
  }

  // 리스트의 특정 인덱스 데이터 찾기
  find(index) {
    if (index >= this.size) {
      throw new Error("리스트 사이즈를 초과");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; ++i) {
      currentNode = currentNode.tail;
    }

    console.log(currentNode);
  }
}
const linkedList = new LinkedList(1);

linkedList.insertHead(1);
linkedList.insert(2);
console.log("linkedList : ", linkedList);

linkedList.insert(3, 1);
console.log("linkedList : ", linkedList);

linkedList.find(1);
