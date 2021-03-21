export class PQueue<T> {
  private readonly heap: Array<T> = null;

  private readonly comparator: Comparator<T> = new class implements Comparator<T> {
    public compare(a: T, b: T): number {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  }();

  constructor(elems: Array<T> = [], comparator?: Comparator<T>) {
    this.comparator = comparator || this.comparator;
    this.heap = [...elems];

    if (this.isEmpty()) return;

    const height = (this.size() >>> 1) + 1;

    for (let i = Math.max(0, height); i >= 0; i--) {
      this.sink(i);
    }
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return !this.size();
  }

  public clear(): void {
    this.heap.length = 0;
  }

  public peek(): T {
    if (this.isEmpty()) return null;

    return this.heap[0];
  }

  public poll(): T {
    return this.removeAt(0);
  }

  public offer(elem: T): number {
    this.heap.push(elem);

    return this.swim(this.size() - 1);
  }

  public remove(elem: T): T {
    let index = 0;

    while(index++ < this.size()) {
      if (this.heap[index] === elem) {
        return this.removeAt(index);
      }
    }

    return null;
  }

  public isMinHeap(index = 0): boolean {
    if (index >= this.size()) return true;

    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < this.size() && !this.isLess(index, left)) return false;
    if (right < this.size() && !this.isLess(index, right)) return false;

    return this.isMinHeap(left) && this.isMinHeap(right);
  }

  public toString(): string {
    return this.heap.toString();
  }

  private removeAt(index: number): T {
    if (this.isEmpty()) return null;

    if (index < 0 || index >= this.size()) throw new Error(`Invalid index ${index}`);

    if (index === this.size() - 1) return this.heap.pop();

    const elem = this.heap[index];
    this.heap[index] = this.heap.pop();

    this.sink(index);

    return elem;
  }

  private swim(index: number): number {
    let pos = index;

    while (pos > 0) {
      const parent = ((pos - 1) >>> 1);

      if (this.isLess(parent, pos)) {
        break;
      }

      this.swap(parent, pos);
      pos = parent;
    }

    return pos;
  }

  private sink(index: number): number {
    let pos = index;

    while (pos < this.size()) {
      const left = 2 * pos + 1;
      const right = 2 * pos + 2;

      let smaller = left;

      if (right < this.size() && this.isLess(right, left)) {
        smaller = right;
      }

      if (left >= this.size() || this.isLess(pos, smaller)) {
        break;
      }

      this.swap(pos, smaller);
      pos = smaller;
    }

    return pos;
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  private isLess(i: number, j: number): boolean {
    return this.comparator.compare(this.heap[i], this.heap[j]) <= 0;
  }
}

export interface Comparator<T> {
  compare(a: T, b: T): number;
}
