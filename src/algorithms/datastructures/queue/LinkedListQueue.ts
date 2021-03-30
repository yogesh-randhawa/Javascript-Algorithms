import { LinkedList } from '../linkedlist/LinkedList';
import { SinglyLinkedList } from '../linkedlist/SinglyLinkedList';
import { Queue } from './Queue';

export class LinkedListQueue<T> implements Queue<T> {
  private readonly capacity = 0;
  private list: LinkedList<T> = new SinglyLinkedList<T>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public size(): number {
    return this.list.size();
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public isFull(): boolean {
    return this.list.size() === this.capacity;
  }

  public clear(): void {
    this.list.clear()
  }

  public offer(elem: T): void {
    if (this.isFull()) {
      throw new Error ('Queue is full');
    }

    this.list.addLast(elem);
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.list.peekFirst();
  }

  public poll(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.list.removeFirst();
  }

}
