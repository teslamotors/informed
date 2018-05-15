import ObjectMap from '../src/ObjectMap';
import { expect } from 'chai';

describe('ObjectMap', () => {

  describe('get', () => {

    it('should get value from very nested obejct', () => {
      const expected = 2;
      const object = {
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
      const objectMap = new ObjectMap( object );
      const actual = objectMap.get('foo.bar.baz[0].taz.bar[10][3].bar.0.5');
      expect( actual ).to.equal(expected);
    });

    it('should return undefined when get is called with field that does not exist', () => {
      const map = undefined;
      const expected  = undefined;
      const objectMap = new ObjectMap();
      const actual = objectMap.get( 'foo.bar');
      expect( actual ).to.equal(expected);
    });

  });

  describe('set', () => {

    it('should set value in very nested obejct', () => {
      const expected = 3;
      const object = {
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
      const objectMap = new ObjectMap( object );
      objectMap.set('foo.bar.baz[0].taz.bar[10][3].bar.0.5', 3);
      const actual = objectMap.get('foo.bar.baz[0].taz.bar[10][3].bar.0.5');
      expect( actual ).to.equal(expected);
    });

  });

});
