import { Stack } from './Stack';

export class ArrayStack<T> implements Stack<T> {
  private readonly array = [];
  private readonly capacity = 0;

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

  public clear(): void {
    this.array.length = 0;
  }

  public push(elem: T): void {
    if (this.isFull()) {
      throw new Error('Stack is full');
    }

    this.array.push(elem);
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.array[this.array.length - 1];
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.array.pop();
  }

}
