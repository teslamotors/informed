import {
  informedFormat,
  getParentPath,
  getSchemaPathFromJsonPath
} from '../src/utils';

// prettier-ignore
describe('Utils', () => {

  describe('getParentPath', () => {

    // Example friends >>>> friends
    // Example father.name >>>> father
    // Example friends[0] >>>> friends
    // Example friends[0].father.name >>>> friends[0].father
    // Example friends[0].father.siblings[1].name >>>> friends[0].father.siblings[1]

    it('should return correct path for "friends"', () => {
      const value = getParentPath('friends');
      expect(value).toEqual('friends');
    });

    it('should return correct path for "father.name"', () => {
      const value = getParentPath('father.name');
      expect(value).toEqual('father');
    });

    it('should return correct path for "friends[0].father.name"', () => {
      const value = getParentPath('friends[0].father.name');
      expect(value).toEqual('friends[0].father');
    });

    it('should return correct path for "friends[0].father.name"', () => {
      const value = getParentPath('friends[0].father.name');
      expect(value).toEqual('friends[0].father');
    });

    it('should return correct path for "friends[0].father.siblings[1].name"', () => {
      const value = getParentPath('friends[0].father.siblings[1].name');
      expect(value).toEqual('friends[0].father.siblings[1]');
    });

  });

  describe('getSchemaPathFromJsonPath', () => {
    it('brother.siblings[1].friend.name ----> properties.brother.properties.siblings.items.properties.friend.properties.name', () => {
      expect(getSchemaPathFromJsonPath('brother.siblings[1].friend.name')).toEqual('properties.brother.properties.siblings.items.properties.friend.properties.name');
    });

    it('brother.siblings[1].friend ----> properties.brother.properties.siblings.items.properties.friend', () => {
      expect(getSchemaPathFromJsonPath('brother.siblings[1].friend')).toEqual('properties.brother.properties.siblings.items.properties.friend');
    });

    it('brother.siblings[1] ----> properties.brother.properties.siblings.items', () => {
      expect(getSchemaPathFromJsonPath('brother.siblings[1]')).toEqual('properties.brother.properties.siblings.items');
    });

    it('brother ----> properties.brother', () => {
      expect(getSchemaPathFromJsonPath('brother')).toEqual('properties.brother');
    });
  });
 
  describe('informedFormat', () => {

    const fmtr = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    it('undefiend  ----> undefined', () => {
      const { value } = informedFormat(undefined, fmtr);
      expect(value).toEqual(undefined);
    });

    it('1231231234 ----> +1 123-123-1234', () => {
      const { value } = informedFormat('1231231234', fmtr);
      expect(value).toEqual('+1 123-123-1234');
    });

    it('"+"   ----> +', () => {
      const { value } = informedFormat('+', fmtr);
      expect(value).toEqual('+');
    });

    it('"+1"  ----> +1', () => {
      const { value } = informedFormat('+1', fmtr);
      expect(value).toEqual('+1');
    });

    it('"+11" ----> "+1 1"', () => {
      const { value } = informedFormat('+11', fmtr);
      expect(value).toEqual('+1 1');
    });

    it(' "+2" ----> "+1 2"', () => {
      const { value } = informedFormat('+2', fmtr);
      expect(value).toEqual('+1 2');
    });

    it(' "1"  ----> "+1 1"', () => {
      const { value } = informedFormat('1', fmtr);
      expect(value).toEqual('+1 1');
    });

    it('"1234" ----> "+1 123-4"', () => {
      const { value } = informedFormat('1234', fmtr);
      expect(value).toEqual('+1 123-4');
    });

    it('"+1 123-456"    ----> "+1 123-456"', () => {
      const { value } = informedFormat('+1 123-456', fmtr);
      expect(value).toEqual('+1 123-456');
    });

    it('"+1 123-456-"   ----> "+1 123-456-"', () => {
      const { value } = informedFormat('+1 123-456-', fmtr);
      expect(value).toEqual('+1 123-456-');
    });

    it('"123-456-"      ----> "+1 123-456-"', () => {
      const { value } = informedFormat('123-456-', fmtr);
      expect(value).toEqual('+1 123-456-');
    });

    it('"123a"          ----> "+1 123-"', () => {
      const { value } = informedFormat('123a', fmtr);
      expect(value).toEqual('+1 123-');
    });

    it('"123a456B78"    ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123a456B78', fmtr);
      expect(value).toEqual('+1 123-456-78');
    });

    it('"123abc456B78"  ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123abc456B78', fmtr);
      expect(value).toEqual('+1 123-456-78');
    });

    it('"123abc456B78"  ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123abc456B78', fmtr);
      expect(value).toEqual('+1 123-456-78');
    });

    it('"+1 123-a"      ----> "+1 123-"', () => {
      const { value } = informedFormat('+1 123-a', fmtr);
      expect(value).toEqual('+1 123-');
    });

    it('"123-a"         ----> "+1 123-"', () => {
      const { value } = informedFormat('123-a', fmtr);
      expect(value).toEqual('+1 123-');
    });

    it('"1234567812345678" ----> "1234-5678-1234-5678" with formatter ####-####-####-####', () => {
      const { value } = informedFormat('1234567812345678', '####-####-####-####');
      expect(value).toEqual('1234-5678-1234-5678');
    });

    it('"3000" ----> "$3,000.00&" with formatter $#,###.00&', () => {
      const { value } = informedFormat('3000', '$#,###.00&');
      expect(value).toEqual('$3,000.00&');
    });

    it('{}  ----> {}', () => {
      const { value } = informedFormat({}, {a: fmtr, b: fmtr });
      expect(value).toEqual({});
    });


    it('{ a: "1234", b: "1" }  ----> { a: "+1 123-4", b: "+1 1" }', () => {
      const { value } = informedFormat({ a: '1234', b: '1' }, {a: fmtr, b: fmtr });
      expect(value).toEqual({ a: '+1 123-4', b: '+1 1' });
    });

    it('"abcdefg" ----> "AB-CD-EFGH" with function formatter', () => {
      const mask = value => value.toUpperCase();

      const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

      const { value } = informedFormat('abcdefgh', formatter);
      expect(value).toEqual('AB-CD-EFGH');
    });
    
  });
});
