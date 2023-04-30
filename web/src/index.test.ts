import { addOne } from './index.js';

describe('addOne', () => {
  it('adds one', () => {
    const input = 0;
    const output = addOne(input);
    expect(output).toEqual(1);
  });
});
