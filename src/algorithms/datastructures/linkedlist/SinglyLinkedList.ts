import { INode, LinkedList } from './LinkedList';

export class SinglyLinkedList<T> implements LinkedList<T>{
  private sz: number = 0;
  private head: Node<T> = null;
  private tail: Node<T> = null;

  constructor() {
  }

  public size(): number {
    return this.sz;
  }

  public isEmpty(): boolean {
    return !this.size();
  }

  public add(elem: T): void {
    this.addLast(elem);
  }

  public clear(): void {
    if (this.isEmpty()) return;

    let trav = this.head;

    while (trav.next) {
      let node = trav.next;
      node.data = null;
      node.next = null;

      node = null;

      trav = trav.next;
    }

    trav = null;
    this.head = null;
    this.tail = null;
    this.sz = 0;
  }

  public addFirst(elem: T): void {
    const node = new Node<T>(elem, this.head);
    this.addNode(node, null, this.head);
    this.head = node;
  }

  public addLast(elem: T): void {
    const node = new Node<T>(elem);
    this.addNode(node, this.tail);
    this.tail = node;
  }

  public addAt(index: number, elem: T): void {
    if (index < 0 || index > this.sz) throw new Error(`Invalid index ${index}`);

    if (index === 0) return this.addFirst(elem);
    if (index === this.sz) return this.addLast(elem);

    let trav = this.head;

    for (let i = 0; i < this.sz; i++) {
      if (i === index - 1) {
        break;
      }
      trav = trav.next;
    }

    const node = new Node(elem, trav.next)
    this.addNode(node, trav, trav.next);
  }

  public remove(elem: T): T {
    if (this.head && this.head.data === elem) {
      return this.removeFirst();
    }

    const prev = this.getPrevious(elem);
    const node = prev && prev.next;

    if (!node) {
      return;
    }

    return this.removeNode(node, prev, node.next);
  }

  public removeFirst(): T {
    return this.removeNode(this.head, null, this.head.next);
  }

  public removeLast(): T {
    return this.remove(this.tail.data);
  }

  public peekFirst(): T {
    if (this.isEmpty()) throw new Error('List is empty');

    return this.head.data;
  }

  public peekLast(): T {
    if (this.isEmpty()) throw new Error('List is empty');

    return this.tail.data;
  }

  public indexOf(elem: T): number {
    let trav = this.head;

    let i = 0;

    while (i++ < this.sz) {
      if (trav.data === elem) {
        break;
      }
      trav = trav.next;
    }

    return !!trav ? i : -1;
  }

  public contains(elem: T): boolean {
    return this.indexOf(elem) !== -1;
  }

  public toString(): string {
    let trav = this.head;
    const values = [];

    while (!!trav) {
      values.push(trav.data);
      trav = trav.next;
    }

    return values.length && values.join(' -> ') || 'Empty list';
  }

  [Symbol.iterator]() {
    let trav = this.head;

    return {
      next: (): T => {
        if (trav) {
          const data: T = trav.data
          trav = trav.next;
          return data;
        }
        return null;
      },
      hasNext: (): boolean => {
        return !!trav;
      }
    }
  }

  // get the node before the one with value elem or null
  private getPrevious(elem: T): Node<T> {
    if (this.size() <= 1) {
      return null;
    }

    let trav = this.head;
    let node;

    while (!!trav && !!trav.next) {
      if (trav.next.data === elem) {
        node = trav;
        break;
      }
      trav = trav.next;
    }

    return node;
  }

  private addNode(node: Node<T>, prev: Node<T> = null, next: Node<T> = null): void {
    if (prev) {
      prev.next = node;
    } else {
      this.head = node;
    }
    if (next) {
      node.next = next;
    } else {
      this.tail = node;
    }
    this.sz++;
  }

  private removeNode(node: Node<T>, prev: Node<T>, next: Node<T>): T {
    if (this.isEmpty()) throw new Error('List is empty');

    if (!node) return null;

    // if node to remove found
    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }
    if (!next) {
      this.tail = prev;
    }

    const data: T = node.data;

    node.data = null;
    node.next = null;

    this.sz--;

    return data;
  }

}

class Node<T> implements INode<T> {
  data: T = null;
  next: Node<T> = null;

  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}
