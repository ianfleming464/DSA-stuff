// The front of the queue is the start of the array, the back of the queue is the end
// queues are FIFO

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    // item to the back of the queue
    this.items.push(item);
  }

  dequeue() {
    // remove item from front of the queue
    return this.items.shift();
  }

  front() {
    // return the item at the front
    return this.items[0];
  }

  isEmpty() {
    // check if the queue is empty
    return this.size === 0;
  }

  get size() {
    // getter function to check the length of the queue
    return this.items.length;
  }
  print() {
    return this.items;
  }
}

const myQueue = new Queue();

myQueue.enqueue(100);
myQueue.enqueue(101);
myQueue.enqueue(102);
console.log(myQueue.print());
console.log(myQueue.size);
console.log(myQueue.front());
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.isEmpty());
