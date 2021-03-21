import { expect } from 'chai';
import { PQueue } from './PQueue';

describe('PQueue', () => {

  let pQueue: PQueue<number>;

  beforeEach(() => {
    pQueue = new PQueue<number>();
  })

  it('should create an empty pq', () => {
    expect(pQueue instanceof PQueue).to.equal(true);

    expect(pQueue.isEmpty()).to.be.true;
    expect(pQueue.size()).to.equal(0);
  });

  it('should return null on peek from empty pq', () => {
    expect(pQueue.peek()).to.be.null;
  });

  it('should return null on poll from empty pq', () => {
    expect(pQueue.poll()).to.be.null;
  });

  it('should allow offer', () => {
    pQueue.offer(3);
    expect(pQueue.size()).to.equal(1);
    pQueue.offer(5);
    expect(pQueue.size()).to.equal(2);
    expect(pQueue.toString()).to.equal('3,5');
  });

  it('should allow clear', () => {
    pQueue.offer(3);
    pQueue.offer(5);

    pQueue.clear();

    expect(pQueue.isEmpty()).to.be.true;
  });

  it('should allow peek at non empty pq', () => {
    pQueue.offer(5);
    expect(pQueue.size()).to.equal(1);
    expect(pQueue.peek()).to.equal(5);

    pQueue.offer(3);
    expect(pQueue.size()).to.equal(2);
    expect(pQueue.peek()).to.equal(3);
  });

  it('should allow poll at non empty pq', () => {
    pQueue.offer(2);
    pQueue.offer(5);

    expect(pQueue.poll()).to.equal(2);
    expect(pQueue.size()).to.equal(1);

    pQueue.offer(3);
    expect(pQueue.poll()).to.equal(3);
    expect(pQueue.size()).to.equal(1);
  });

  it('should allow remove', () => {
    pQueue.offer(3);
    pQueue.offer(5);
    pQueue.offer(2);

    expect(pQueue.remove(3)).to.equal(3);
    expect(pQueue.size()).to.equal(2);
    expect(pQueue.toString()).to.equal('2,5');

    pQueue.offer(7);
    expect(pQueue.remove(5)).to.equal(5);
    expect(pQueue.size()).to.equal(2);
    expect(pQueue.toString()).to.equal('2,7');
  });

  it('should allow isMinHeap', () => {
    pQueue = new PQueue<number>([5, 4, 3, 2, 1]);

    expect(pQueue.toString()).to.equal('1,2,3,5,4');
    expect(pQueue.isMinHeap()).to.be.true;
  });

});
