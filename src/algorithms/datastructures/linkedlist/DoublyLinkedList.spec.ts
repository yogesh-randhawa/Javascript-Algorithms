import { expect } from 'chai';

import { DoublyLinkedList } from './DoublyLinkedList';

describe('DoublyLinkedList', () => {

  let linkedList: DoublyLinkedList<number>;

  beforeEach(() => {
    linkedList = new DoublyLinkedList<number>();
  })

  it ('should create an empty list', () => {
    expect(linkedList instanceof DoublyLinkedList).to.equal(true);

    expect(linkedList.isEmpty()).to.equal(true);
    expect(linkedList.size()).to.equal(0);
  });

  it('should throw an error on removeFirst from empty list', () => {
    expect(linkedList.removeFirst).to.throw();
  });

  it('should throw an error on removeLast from empty list', () => {
    expect(linkedList.removeLast).to.throw();
  });

  it('should throw an error on peekFirst from empty list', () => {
    expect(linkedList.peekFirst).to.throw();
  });

  it('should throw an error on peekLast from empty list', () => {
    expect(linkedList.peekLast).to.throw();
  });

  it('should allow addFirst', () => {
    linkedList.addFirst(3);
    expect(linkedList.size()).to.equal(1);
    linkedList.addFirst(5);
    expect(linkedList.size()).to.equal(2);
  });

  it('should allow addLast', () => {
    linkedList.addLast(3);
    expect(linkedList.size()).to.equal(1);
    linkedList.addLast(5);
    expect(linkedList.size()).to.equal(2);
  });

  it('should allow addAt', () => {
    linkedList.addAt(0, 1);
    expect(linkedList.size()).to.equal(1);
    linkedList.addAt(1, 2);
    expect(linkedList.size()).to.equal(2);
    linkedList.addAt(1, 3);
    expect(linkedList.size()).to.equal(3);
    linkedList.addAt(2, 4);
    expect(linkedList.size()).to.equal(4);
    linkedList.addAt(1, 8);
    expect(linkedList.size()).to.equal(5);

    expect(linkedList.toString()).to.equal('1 -> 8 -> 3 -> 4 -> 2');
  });

  it('should allow removeFirst', () => {
    linkedList.addFirst(3);
    linkedList.addLast(5);
    expect(linkedList.size()).to.equal(2);

    linkedList.removeFirst();
    expect(linkedList.size()).to.equal(1);
    expect(linkedList.toString()).to.equal('5');

    linkedList.removeFirst();
    expect(linkedList.isEmpty()).to.equal(true);
  });

  it('should allow removeLast', () => {
    linkedList.addFirst(3);
    linkedList.addLast(5);
    expect(linkedList.size()).to.equal(2);

    linkedList.removeLast();
    expect(linkedList.size()).to.equal(1);
    expect(linkedList.toString()).to.equal('3');

    linkedList.removeLast();
    expect(linkedList.isEmpty()).to.equal(true);
  });

});
