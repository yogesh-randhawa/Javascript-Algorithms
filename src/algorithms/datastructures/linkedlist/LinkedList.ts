export interface LinkedList<T> {
  size(): number;

  isEmpty(): boolean;

  add(elem: T): void;

  addFirst(elem: T): void;

  addLast(elem: T): void

  addAt(index: number, elem: T): void;

  remove(elem: T): T;

  removeFirst(): T;

  removeLast(): T;

  peekFirst(): T;

  peekLast(): T;

  indexOf(elem: T): number;

  contains(elem: T): boolean;

  toString(): string;
}

export interface INode<T> {
  data: T;
  next: INode<T>;
}
