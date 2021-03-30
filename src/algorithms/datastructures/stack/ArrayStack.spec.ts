import { expect } from 'chai';
import { ArrayStack } from './ArrayStack';

describe('ArrayStack', () => {

  let stack: ArrayStack<number>;

  beforeEach(() => {
    stack = new ArrayStack<number>(3);
  })

  it('should create an empty stack', () => {
    expect(stack instanceof ArrayStack).to.equal(true);

    expect(stack.isEmpty()).to.be.true;
    expect(stack.size()).to.equal(0);
  });

  it('should throw error on peek from empty stack', () => {
    expect(stack.peek).to.throw;
  });

  it('should throw error on pop from empty stack', () => {
    expect(stack.pop).to.throw;
  });

  it('should allow push', () => {
    stack.push(3);
    expect(stack.size()).to.equal(1);
    stack.push(5);
    expect(stack.size()).to.equal(2);
  });

  it('should allow isFull', () => {
    stack.push(5);
    stack.push(3);

    expect(stack.isFull()).to.be.false;

    stack.push(1);

    expect(stack.isFull()).to.be.true;
  });

  it('should throw on push if full', () => {
    stack.push(5);
    stack.push(3);
    stack.push(1);

    expect(stack.push.bind(stack,1)).to.throw;
  });

  it('should allow clear', () => {
    stack.push(3);
    stack.push(5);

    stack.clear();

    expect(stack.isEmpty()).to.be.true;
  });

  it('should allow peek at non empty stack', () => {
    stack.push(5);
    stack.push(3);

    expect(stack.peek()).to.equal(3);
  });

  it('should allow pop at non empty stack', () => {
    stack.push(5);
    stack.push(3);
    stack.push(1);

    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.equal(3);
  });

});
