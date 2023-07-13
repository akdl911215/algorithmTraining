// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
//
//   size() {
//     let count = 0;
//     let node = this.head;
//
//     while (node) {
//       count++;
//       node = node.next;
//     }
//
//     return count;
//   }
//
//   clear() {
//     this.head = null;
//     console.log("this.head : ", this.head);
//   }
//
//   getLast() {
//     let lastNode = this.head;
//
//     if (lastNode) {
//       while (lastNode.next) {
//         lastNode = lastNode.next;
//       }
//     }
//   }
//
//   getFirst() {
//     return this.head;
//   }
// }
//
// class LinkedList2 {
//   constructor(head = null) {
//     this.head = head;
//   }
// }
// const node1 = new ListNode(2);
// const node2 = new ListNode(5);
// node1.next = node2;
// const list = new LinkedList2(node1);
// console.log(list);
//
// list.head.clear();
// console.log(list);
