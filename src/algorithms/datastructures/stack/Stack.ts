export interface Stack<T> {
  size(): number;

  isEmpty(): boolean;

  isFull(): boolean;

  clear(): void;

  push(elem: T): void;

  pop(): T;

  peek(): T;
}
