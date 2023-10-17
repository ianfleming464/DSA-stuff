// The top of the stack will be the END of the array, the bottom is the START
// stacks are LIFO

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    // push method to add to top of stack
    return this.items.push(item);
  }

  pop() {
    // pop method to remove the last item
    return this.items.pop();
  }

  peek() {
    // to see which elements lives at the top of the stack (i.e. end of the array)
    return this.items[this.length - 1];
  }

  isEmpty() {
    // helper function to check if its empty
    return this.size === 0;
  }

  get size() {
    // getter function, to get the stack size
    return this.items.length;
  }

  clear() {
    // empties the array/ clears the stack
    return (this.items = []);
  }

  print() {
    // returns the entire stack for logging etc.
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
console.log(myStack.isEmpty());
