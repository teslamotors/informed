/* globals describe, it*/

import makePathArray from '../../src/utils/makePathArray';
import { expect } from 'chai';

describe('makePathArray', () => {
  it('creates correct path per example case', () => {
    const input = 'foo.bar.baz[0].taz.bar[10][3].bar.0.5';
    const expectedOutput = ['foo', 'bar', 'baz', 0, 'taz', 'bar', 10, 3, 'bar', '0', '5'];
    expect(makePathArray(input)).to.deep.equal(expectedOutput);
  });

  it('checks empty string', () => {
    const input = '';
    const expectedOutput = [''];
    expect(makePathArray(input)).to.deep.equal(expectedOutput);
  });

  it('checks undefined input', () => {
    expect(makePathArray).to.throw(TypeError);
  });

  it('checks only array input', () => {
    const input = '[0][1][2][3][4][5]';
    const expectedOutput = [ '', 0, 1, 2, 3, 4, 5];
    expect(makePathArray(input)).to.deep.equal(expectedOutput);
  });

  it('checks only dot input', () => {
    const input = 'foo.bar.baz.taz';
    const expectedOutput = [ 'foo', 'bar', 'baz', 'taz'];
    expect(makePathArray(input)).to.deep.equal(expectedOutput);
  });

});