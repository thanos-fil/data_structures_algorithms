// COMPLEXITIES:
// Insertion: O(1)
// Removal: O(1)
// Random Access: O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Last In First Out
class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.first;
    this.first = newNode;

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const first = this.first;
    this.first = this.first.next;
    this.size--;

    return first.value;
  }
}
