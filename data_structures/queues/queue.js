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

// First In First Out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const first = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return first.value;
  }
}
