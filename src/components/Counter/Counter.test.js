import {expect} from 'chai';
import {sum} from './Counter';

describe('updateCounter', () => {
  it('Should add two numbers', () => {
    const result = sum(5, -10);
    expect(result).is.equals(-5);
  });
});
