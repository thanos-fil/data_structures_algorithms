const DoublyLinkedList = require('./doubly_linked_list');
const expect = require('chai').expect;

describe('DoublyLinkedLists - push', () => {
  const doublyLinkedList = new DoublyLinkedList();
  it('should push an item in an empty doubly-linked list', () => {
    doublyLinkedList.push(5);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.head.val).to.equal(5);
    expect(doublyLinkedList.tail.val).to.equal(5);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });

  it('should add a second item at the end of the list', () => {
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).to.equal(2);
    expect(doublyLinkedList.head.val).to.equal(5);
    expect(doublyLinkedList.head.next.val).to.equal(10);
    expect(doublyLinkedList.tail.val).to.equal(10);
    expect(doublyLinkedList.head.next.prev.val).to.equal(5);
  });

  it('should add a third item and update prev and next correctly', () => {
    doublyLinkedList.push(15);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.val).to.equal(5);
    expect(doublyLinkedList.tail.val).to.equal(15);
    expect(doublyLinkedList.tail.prev.val).to.equal(10);
    expect(doublyLinkedList.head.next.next.val).to.equal(15);
  })

  it('should remove items from the tail and update validly the list', () => {
    expect(doublyLinkedList.pop().val).to.equal(15);
    expect(doublyLinkedList.length).to.equal(2);
    expect(doublyLinkedList.pop().val).to.equal(10);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.pop().val).to.equal(5);
    expect(doublyLinkedList.length).to.equal(0);
    expect(doublyLinkedList.pop()).to.equal(undefined);
    expect(doublyLinkedList.length).to.equal(0);
  });
});

describe('DoublyLinkedLists - unshift', () => {
  const doublyLinkedList = new DoublyLinkedList();
  it('should add an item into the beginning of the list', () => {
    doublyLinkedList.unshift(5);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.head.val).to.equal(5);
    expect(doublyLinkedList.tail.val).to.equal(5);

  });

  it('should add a second item into the beginning of the list', () => {
    doublyLinkedList.unshift(10);
    expect(doublyLinkedList. length).to.equal(2);
    expect(doublyLinkedList.head. val).to.equal(10);
    expect(doublyLinkedList.head.next.val).to.equal(5);
    expect(doublyLinkedList. tail. val).to.equal(5);
  });

  it('should add a third item into the beginning of the list and update rest', () => {
    doublyLinkedList.unshift(15);
    expect(doublyLinkedList. length).to.equal(3);
    expect(doublyLinkedList.head. val).to.equal(15);
    expect(doublyLinkedList.tail.val).to.equal(5);
    expect(doublyLinkedList.head.next.next.val).to.equal(5);
  });
});
