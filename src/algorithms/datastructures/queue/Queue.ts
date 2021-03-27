export interface Queue<T> {
  size(): number;

  isEmpty(): boolean;

  offer(elem: T): void;

  peek(): T;

  poll(): T;

  clear(): void;
}
