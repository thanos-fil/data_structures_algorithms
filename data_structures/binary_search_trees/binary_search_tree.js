// COMPLEXITIES:
// Insertion: O(log n) - for not sorted!
// Random Access: O(log n) - for not sorted!

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === val) return this;
      if (current.value > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if (val < current.value) {
        current = current.left;
      } else  if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return current || undefined;
  }

  bfs() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  // Useful for cloning a BST tree.
  dfsPreOrder() {
    const data = [];
    const traverse = (node) => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return data;
  }

  dfsPostOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    };
    traverse(this.root);

    return data;
  }

  // Taking items with physical order
  dfsInOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return data;
  }
}
