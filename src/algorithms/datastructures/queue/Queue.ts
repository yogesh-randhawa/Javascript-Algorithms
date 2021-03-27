export interface Queue<T> {
  size(): number;

  isEmpty(): boolean;

  isFull(): boolean;

  offer(elem: T): void;

  peek(): T;

  poll(): T;

  clear(): void;
}
