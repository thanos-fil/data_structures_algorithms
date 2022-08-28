// COMPLEXITIES:
// Insertion: O(1)
// Removal: O(1)...O(n)
// Random Access: O(n)
// Compared to arrays: Faster insertions (ll are better than arrays, if we do not care about random access).

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return;
    const head = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter ++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    const previous = this.get(index - 1);
    const removed = previous.next;
    previous.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i ++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

// Tests
const testCases = [];

function testPushFunc() {
  const list=  new SinglyLinkedList();
  list.push('HELLO');
  list.push('GOODBYE');
  list.push('!');
  console.log('list', list);
  console.log('Pop1', list.pop());
  console.log('Pop2', list.pop());
  console.log('Pop3', list.pop());
  console.log('list now', list);
}

function testShiftFunc() {
  const list = new SinglyLinkedList();
  list.push('HELLO');
  list.push('GOODBYE');
  list.push('!');
  console.log('list', list);
  console.log('Pop1', list.shift());
  console.log('Pop2', list.shift());
  console.log('Pop3', list.shift());
  console.log('list now', list);
}

testShiftFunc();
for (let test of testCases) {
  console.log('Test', test);
  console.assert(validAnagram(...test.args) === test.output);
}

