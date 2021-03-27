import { expect } from 'chai';
import { ArrayQueue } from './ArrayQueue';

describe('ArrayQueue', () => {

  let queue: ArrayQueue<number>;

  beforeEach(() => {
    queue = new ArrayQueue<number>(3);
  })

  it('should create an empty queue', () => {
    expect(queue instanceof ArrayQueue).to.equal(true);

    expect(queue.isEmpty()).to.be.true;
    expect(queue.size()).to.equal(0);
  });

  it('should throw error on peek from empty queue', () => {
    expect(queue.peek).to.throw;
  });

  it('should return null on poll from empty queue', () => {
    expect(queue.poll).to.throw;
  });

  it('should allow offer', () => {
    queue.offer(3);
    expect(queue.size()).to.equal(1);
    queue.offer(5);
    expect(queue.size()).to.equal(2);
  });

  it('should allow isFull', () => {
    queue.offer(5);
    queue.offer(3);

    expect(queue.isFull()).to.be.false;

    queue.offer(1);

    expect(queue.isFull()).to.be.true;
  });

  it('should throw on offer if full', () => {
    queue.offer(5);
    queue.offer(3);
    queue.offer(1);

    expect(queue.offer.bind(queue,1)).to.throw;
  });

  it('should allow clear', () => {
    queue.offer(3);
    queue.offer(5);

    queue.clear();

    expect(queue.isEmpty()).to.be.true;
  });

  it('should allow peek at non empty queue', () => {
    queue.offer(5);
    queue.offer(3);

    expect(queue.peek()).to.equal(5);
  });

  it('should allow poll at non empty queue', () => {
    queue.offer(5);
    queue.offer(3);
    queue.offer(1);

    expect(queue.poll()).to.equal(5);
    expect(queue.poll()).to.equal(3);
  });

});
