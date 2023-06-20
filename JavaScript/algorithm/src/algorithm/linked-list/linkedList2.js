class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 처음에 데이터가 없으면 head === null
    this.size = 0; // 리시트 크기, default === 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // head 에 새로운 node 가 들어가고 기존의 헤드는 next 로 밀려난다.
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        // this.head 가 null 이 아니면
        current = current.next; // current 는 current.next
      }

      current.next = node; // current.next 은 새로운 node 할당
    }

    this.size++; // size 1 증가
  }

  // Insert at index - 중간 삽입
  insertAt(data, index) {
    // 인덱스가 size 범위 넘어서면 아무것도 리턴 하지 않는다.
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current first
    current = this.head;

    let count = 0;
    // login 수정중..
    while (count < index) {
      count++;

      if (count === index) {
        if (index === 1) {
          previous = this.head;

          current = current.next;
        } else {
          current = previous.next; // node after index
        }
      } else {
        previous = this.head.next;

        current = previous.next;
      }
    }

    node.next = current;
    previous.next = node;
    console.log("previous !! : ", previous);

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      // 해당 data 의 값을 가져오기 위해 index 와 값이 같아질때까지 loop
      if (count === index) {
        console.log(current.data);
      }

      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head; // current 는 현재 첫번째 노드
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      // loop 를 통해 해당 index 의 연결고리를 끊는다.
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list / 메모리 자체에는 데이터가 남아있겠지만 보여주기 위해 func 만듬
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data ~ data 값만 따로
  printListData() {
    console.log("printListData: ", this.head);
    let current = this.head; // 현재 노드를 나타낸다.

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
console.log("linkedList : ", linkedList);
console.log("------------------------------------------");

linkedList.insertFirst(100);
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

linkedList.insertFirst(200);
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

linkedList.insertFirst(300);
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

linkedList.insertLast(250);
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

linkedList.insertAt(500, 3);
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

// linkedList.removeAt(2);
// console.log("linkedList : ", linkedList);
// console.log("linkedList.head.next", linkedList.head.next);
// console.log("------------------------------------------");

linkedList.printListData();
console.log("linkedList : ", linkedList);
console.log("linkedList.head.next", linkedList.head.next);
console.log("------------------------------------------");

// linkedList.getAt(2);
// console.log("linkedList : ", linkedList);
// console.log("linkedList.head.next", linkedList.head.next);
// console.log("------------------------------------------");
