class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0]; // 항상 최상위 노드가 peek 가 된다.

  insert = (key, value) => {
    // 우선순위를 비교하기 위해서 key, value 로 받는다.
    const node = { key, value }; // 객체로 node 를 만들고
    this.heap.push(node); // push 한다
    this.heapifyUp(); // 배열 가장 끝에 넣고, 다시 mip heap 의 형태를 갖추도록 한다.
  };
}

// https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9
