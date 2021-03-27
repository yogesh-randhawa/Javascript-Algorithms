import { Queue } from './Queue';

export class ArrayQueue<T> implements Queue<T> {
  private readonly capacity = 0;
  private array = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public size(): number {
    return this.array.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public isFull(): boolean {
    return this.size() === this.capacity;
  }

  public offer(elem: T): void {
    if (this.array.length === this.capacity) {
      throw new Error('Queue at capacity');
    }

    this.array.push(elem);
  }

  public peek(): T {
    if (this.isEmpty()) throw new Error('Queue is empty');

    return this.array[0];
  }

  public poll(): T {
    if (this.isEmpty()) throw new Error('Queue is empty');

    return this.array.shift();
  }

  public clear(): void {
    this.array.length = 0;
  }

}
