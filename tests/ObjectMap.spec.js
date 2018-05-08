import ObjectMap from '../src/ObjectMap';
import { expect } from 'chai';

describe('ObjectMap', () => {

  describe('get', () => {

    it('should get value from very nested obejct', () => {
      const expected = 2;
      const map = {
        foo: {
          bar: {
            baz: [
              {
                taz: {
                  bar: [
                    null, null, null, null, null, null, null, null, null, null,
                    [
                      null, null, null, {
                        bar: {
                          '0': {
                            '5': 2
                          }
                        }
                      }
                    ]
                  ]
                }
              },
              {}
            ]
          }
        }
      }
      const actual = ObjectMap.get(map, 'foo.bar.baz[0].taz.bar[10][3].bar.0.5');
      expect( actual ).to.equal(expected);
    });

    it('should return undefined when get is called with undefined', () => {
      const map = undefined;
      const expected  = undefined;
      const actual = ObjectMap.get(map, 'foo.bar');
      expect( actual ).to.equal(expected);
    });

  });

  describe('parseInt', () => {

    it('should set value in very nested obejct', () => {
      const expected = 3;
      const map = {
        foo: {
          bar: {
            baz: [
              {
                taz: {
                  bar: [
                    null, null, null, null, null, null, null, null, null, null,
                    [
                      null, null, null, {
                        bar: {
                          '0': {
                            '5': 2
                          }
                        }
                      }
                    ]
                  ]
                }
              },
              {}
            ]
          }
        }
      }
      ObjectMap.set(map, 'foo.bar.baz[0].taz.bar[10][3].bar.0.5', 3);
      const actual = ObjectMap.get(map, 'foo.bar.baz[0].taz.bar[10][3].bar.0.5');
      expect( actual ).to.equal(expected);
    });

    it('should throw error if you attempt to call set with undefined', () => {
      expect(()=>ObjectMap.set(undefined, 'foo.bar', 2)).to.throw('Cannot call set with undefined map!');
    });

  });

});
