import ObjectMap from '../src/ObjectMap';
import { expect } from 'chai';

describe('ObjectMap', () => {

  describe('constructor', () => {

    it('create a map and an object', () => {
      const expectedObj  = {foo:'bar'};
      const expectedMap  = new Map([['foo','bar']]);
      const objectMap = new ObjectMap({foo:'bar'});
      const actualObj = objectMap.object;
      const actualMap = objectMap.map;
      expect( actualObj ).to.deep.equal(expectedObj);
      expect( [...actualMap] ).to.deep.equal([...expectedMap]);
    });

    it('create a nested map and an object', () => {
      const expectedObj = {foo:{bar:{baz:3}}};
      const objectMap = new ObjectMap({foo:{bar:{baz:3}}});
      const actualObj = objectMap.object;
      const actualMap = objectMap.map;
      expect( actualObj ).to.deep.equal(expectedObj);
      expect( actualMap.get('foo').get('bar').get('baz') ).to.deep.equal(3);
    });

  });

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
      const actual = objectMap.get("foo['bar'].baz[0].taz.bar[10][3].bar['0'].5");
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

    it('should set a value', () => {
      const expected = 3;
      const objectMap = new ObjectMap();
      objectMap.set('foo', 3);
      const actual = objectMap.get('foo');
      expect( actual ).to.equal(expected);
    });

    describe('object', () => {

      it('should set a nested value and initialize objects along the way', () => {
        const expected = {foo:{bar:{baz:3}}};
        const objectMap = new ObjectMap();
        objectMap.set('foo.bar.baz', 3);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should set a nested value and initialize arrays along the way', () => {
        const expected = {foo:[,[,3]]};
        const objectMap = new ObjectMap();
        objectMap.set('foo[1][1]',3);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should set a nested value and initialize objects along the way with array object syntax', () => {
        const expected = {foo:{bar:{baz:3}}};
        const objectMap = new ObjectMap();
        objectMap.set("foo['bar'].baz", 3);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should set a nested value and initialize arrays and objects along the way', () => {
        const expected = {foo:[,{bar:[,3]}]}
        const objectMap = new ObjectMap();
        objectMap.set('foo[1].bar[1]',3);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should remove objects when they are empty after setting null', () => {
        const expected = {}
        const objectMap = new ObjectMap({foo:{bar:{baz:3}}});
        objectMap.set('foo.bar.baz', null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should NOT remove objects when they are NOT empty after setting null', () => {
        const expected = {foo:{bar:{boo:4}}}
        const objectMap = new ObjectMap({foo:{bar:{baz:3,boo:4}}});
        objectMap.set('foo.bar.baz', null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should remove array when they are empty after setting null', () => {
        const expected = {};
        const objectMap = new ObjectMap({foo:[,[,3]]});
        objectMap.set('foo[1][1]',null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should NOT remove array when they are NOT empty after setting null', () => {
        const expected = {foo:[null,[null,,4]]};
        const objectMap = new ObjectMap({foo:[,[,3,4]]});
        objectMap.set('foo[1][1]',null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should remove arrays and objects when they are empty after setting null', () => {
        const expected = {};
        const objectMap = new ObjectMap({foo:[,{bar:[,3]}]});
        objectMap.set('foo[1].bar[1]',null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

      it('should NOT remove arrays and objects when they are NOT empty after setting null', () => {
        const expected = {foo:[null,{bar:[null,,4]}]};
        const objectMap = new ObjectMap({foo:[,{bar:[,3,4]}]});
        objectMap.set('foo[1].bar[1]',null);
        const actual = objectMap.object;
        expect( actual ).to.deep.equal(expected);
      });

    });

    describe('delete', () => {

      it('should delete value', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:3}}});
        objectMap.delete('foo.bar.baz');
        expect(objectMap.object).to.deep.equal({});
      });

      it('should delete maps', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:3}}});
        objectMap.delete('foo.bar.baz');
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(false);
      });

      it('should delete value from array', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:[1,2,3]}}});
        objectMap.delete('foo.bar.baz[1]');
        expect(objectMap.object).to.deep.equal({foo:{bar:{baz:[1,3]}}});
      });

      it('should remove array and objects when all values are deleted', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:[1,2,3]}}});
        objectMap.delete('foo.bar.baz[0]');
        objectMap.delete('foo.bar.baz[1]');
        objectMap.delete('foo.bar.baz[2]');
        expect(objectMap.object).to.deep.equal({});
      });

    });

    describe('map', () => {

      it('should set a nested value and initialize maps along the way', () => {
        const objectMap = new ObjectMap();
        objectMap.set('foo.bar.baz', 3);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get('bar') instanceof Map).to.equal(true);
      });

      it('should set a nested value and initialize maps along the way with array object syntax', () => {
        const objectMap = new ObjectMap();
        objectMap.set("foo['bar'].baz", 3);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get('bar') instanceof Map).to.equal(true);
      });

      it('should set a nested value and initialize maps for arrays along the way', () => {
        const objectMap = new ObjectMap();
        objectMap.set('foo[1][1]',3);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get(1) instanceof Map).to.equal(true);
      });

      it('should set a nested value and initialize maps for arrays and maps for objects along the way', () => {
        const objectMap = new ObjectMap();
        objectMap.set('foo[1].bar[1]',3);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get(1) instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get(1).get('bar') instanceof Map).to.equal(true);
      });

      it('should remove maps when they are empty after setting null', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:3}}});
        objectMap.set('foo.bar.baz', null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(false);
      });

      it('should NOT remove maps when they are NOT empty after setting null', () => {
        const objectMap = new ObjectMap({foo:{bar:{baz:3,boo:4}}});
        objectMap.set('foo.bar.baz', null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get('bar') instanceof Map).to.equal(true);
      });

      it('should remove map when arrays are empty after setting null', () => {
        const objectMap = new ObjectMap({foo:[,[,3]]});
        objectMap.set('foo[1][1]',null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(false);
      });

      it('should NOT remove map when arrays are are NOT empty after setting null', () => {
        const objectMap = new ObjectMap({foo:[,[,3,4]]});
        objectMap.set('foo[1][1]',null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get(1) instanceof Map).to.equal(true);
      });

      it('should remove arrays and objects when they are empty after setting null', () => {
        const objectMap = new ObjectMap({foo:[,{bar:[,3]}]});
        objectMap.set('foo[1].bar[1]',null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(false);
      });

      it('should NOT remove arrays and objects when they are NOT empty after setting null', () => {
        const objectMap = new ObjectMap({foo:[,{bar:[,3,4]}]});
        objectMap.set('foo[1].bar[1]',null);
        expect(objectMap.map instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo') instanceof Map).to.equal(true);
        expect(objectMap.map.get('foo').get(1).get('bar') instanceof Map).to.equal(true);
      });

    });

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
