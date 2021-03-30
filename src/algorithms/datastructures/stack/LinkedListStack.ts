import { SinglyLinkedList } from '../linkedlist/SinglyLinkedList';
import { Stack } from './Stack';

export class LinkedListStack<T> implements Stack<T> {
  private readonly list = new SinglyLinkedList<T>();
  private readonly capacity = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public size(): number {
    return this.list.size();
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public isFull(): boolean {
    return this.size() === this.capacity;
  }

  public clear(): void {
    this.list.clear();
  }

  public push(elem: T): void {
    if (this.isFull()) {
      throw new Error('Stack is full');
    }

    this.list.addLast(elem);
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.list.peekLast();
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.list.removeLast();
  }

}
