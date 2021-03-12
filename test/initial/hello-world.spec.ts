import 'mocha';

import { expect } from 'chai';

const HELLO_WORLD = `hElLo wOrLd!?!?!`;

describe('Hello World', () => {
  it('Should be equal to hElLo wOrLd!?!?!', () => {
    expect(HELLO_WORLD).to.equal('hElLo wOrLd!?!?!');
    expect(HELLO_WORLD.slice(0, HELLO_WORLD.length - 4).toLocaleLowerCase()).to.equal('hello world!');
  });
});