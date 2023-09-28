//- Implement a EnQueue & DeQueue Method (Google to know about it) & Allow upto 10 elements in a queue only
// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue() {
//     if(this.isEmpty()){
//           return "underflow"
//     }
//     return this.items.shift()

//   }
//   isEmpty(){
//           return this.items.length===0
//   }
// }

//////////////////////////
// let queue = [];
// function enqueue(val) {
//   let currentSize = queue.length;
//   let maxSize = 10;

//   if (currentSize < maxSize) {
//     queue.push(val);
//     currentSize = queue.length;
//   } else {
//     console.log("queue is full");
//   }
//   return queue;
// }
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));
// console.log(enqueue(1));

//////////////
let queue = [1, 5, 9, 8];
function dequeue() {
  let currentSize = queue.length;

  if (currentSize === 0) {
    console.log("cant  remove its empty");
  } else {
    queue.shift();
    currentSize = queue.length;
  }
  return queue;
}
console.log(dequeue());
console.log(dequeue());
