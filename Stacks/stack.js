// The top of the stack will be the END of the array, the bottom is the START
// stacks are LIFO

class Stack {
  constructor() {
    this.items = [];
  }
  // push method to add to top of stack
  push(item) {
    return this.items.push(item);
  }
  // pop method to remove the last item
  pop() {
    return this.items.pop();
  }
  // to see which elements lives at the top of the stack (i.e. end of the array)
  peek() {
    return this.items[this.length - 1];
  }
  // helper function to check if its empty
  isEmpty() {
    return this.length === 0;
  }
  // getter function, to get the stack size
  get size() {
    return this.items.length;
  }
  // empties the array/ clears the stack
  clear() {
    return (this.items = []);
  }
  print() {
    return this.items;
  }
}

const myStack = new Stack();

myStack.push(100);
myStack.push(101);
myStack.push(102);
console.log(myStack.print());

myStack.clear();

console.log(myStack.print());
