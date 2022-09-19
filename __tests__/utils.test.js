import {
  informedFormat,
  getParentPath,
  getSchemaPathFromJsonPath,
  isChild,
  createIntlNumberFormatter
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

    it('siblings[1] ----> properties.siblings.items', () => {
      expect(getSchemaPathFromJsonPath('siblings[1]')).toEqual('properties.siblings.items');
    });

    it('inverter[12].air_filter_ok ----> properties.inverter.items.properties.air_filter_ok', () => {
      expect(getSchemaPathFromJsonPath('inverter[12].air_filter_ok')).toEqual('properties.inverter.items.properties.air_filter_ok');
    });

  });


  describe('isChild', () => {

    it('friends[1] is parent of friends[1].foo', () => {
      const actual = isChild('friends[1]', 'friends[1].foo');
      expect(actual).toEqual(true);
    });

    it('f is NOT a parent of friends[1].foo', () => {
      const actual = isChild('f', 'friends[1].foo');
      expect(actual).toEqual(false);
    });

    it('friends[0] is NOT a parent of friends[1].foo', () => {
      const actual = isChild('friends[0]', 'friends[1].foo');
      expect(actual).toEqual(false);
    });

    it('friendz[1] is NOT a parent of friends[1].foo', () => {
      const actual = isChild('friendz[1]', 'friends[1].foo');
      expect(actual).toEqual(false);
    });

    it('a.b.c is a parent of a.b.c.d', () => {
      const actual = isChild('a.b.c', 'a.b.c.d');
      expect(actual).toEqual(true);
    });

    it('a.b.c.d is NOT a parent of a.b.c', () => {
      const actual = isChild('a.b.c.d', 'a.b.c');
      expect(actual).toEqual(false);
    });

    it('a.b.c is NOT a parent of a.b.c', () => {
      const actual = isChild('a.b.c', 'a.b.c');
      expect(actual).toEqual(false);
    });

    it('abc is NOT a parent of a.b.c', () => {
      const actual = isChild('abc', 'a.b.c');
      expect(actual).toEqual(false);
    });

    it('a.b.c is NOT a parent of abc', () => {
      const actual = isChild('a.b.c', 'abc');
      expect(actual).toEqual(false);
    });

    it('friends[1].foo.friends[1] is NOT a parent of friends[1].foo', () => {
      const actual = isChild('friends[1].foo.friends[1]', 'friends[1].foo');
      expect(actual).toEqual(false);
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
      const { value, offset } = informedFormat('1234567812345678', '####-####-####-####');
      expect(value).toEqual('1234-5678-1234-5678');
      expect(offset).toEqual(3);
    });

    it('"1234-5678-1234-567" ----> "1234-5678-1234-5678" with formatter ####-####-####-####--', () => {
      const { value, offset } = informedFormat('1234-5678-1234-5678', '####-####-####-####--', '1234-5678-1234-567');
      expect(value).toEqual('1234-5678-1234-5678--');
      expect(offset).toEqual(2);
    });

    it('"1234-5678-1234-5678--" ----> "1234-5678-1234-5678-" with formatter ####-####-####-####--', () => {
      const { value, offset } = informedFormat('1234-5678-1234-5678-', '####-####-####-####--', '1234-5678-1234-5678--');
      expect(value).toEqual('1234-5678-1234-5678--');
      expect(offset).toEqual(0);
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
      const { value } = informedFormat({ a: '1234', b: '1' }, {a: fmtr, b: fmtr }, {a: fmtr, b: fmtr });
      expect(value).toEqual({ a: '+1 123-4', b: '+1 1' });
    });

    it('"abcdefg" ----> "AB-CD-EFGH" with function formatter', () => {
      const mask = value => value.toUpperCase();

      const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

      const { value } = informedFormat('abcdefgh', formatter);
      expect(value).toEqual('AB-CD-EFGH');
    });

    it('createIntlNumberMask should format currency', () => {

      const { formatter } = createIntlNumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      const { value } = informedFormat('3000.25', formatter);
      expect(value).toEqual('$3,000.25');
    });

    it('createIntlNumberMask should format negative currency', () => {

      const { formatter } = createIntlNumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      const { value } = informedFormat('-3000.25', formatter);
      expect(value).toEqual('-$3,000.25');
    });

    it('createIntlNumberMask should format currency for "nl-BE" "EUR"', () => {

      const { formatter } = createIntlNumberFormatter('nl-BE', {
        style: 'currency',
        currency: 'EUR'
      });

      const { value } = informedFormat(3000.25, formatter);
      expect(value).toEqual('€ 3.000,25');
    });

    it('createIntlNumberMask should format negative currency for "nl-BE" "EUR"', () => {

      const { formatter } = createIntlNumberFormatter('nl-BE', {
        style: 'currency',
        currency: 'EUR'
      });

      const { value } = informedFormat(-3000.25, formatter);
      expect(value).toEqual('€ -3.000,25');
    });

    it('createIntlNumberMask should format currency when no decimal is specified in format', () => {

      const { formatter } = createIntlNumberFormatter('en-US', {
        style: 'decimal',
        signDisplay: 'never',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      const { value } = informedFormat('3000.25', formatter);
      expect(value).toEqual('3,000');
    });

    it('createIntlNumberMask should format currency for accounting US', () => {

      const { formatter, parser } = createIntlNumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD',
        currencySign: 'accounting'
      });

      const { value } = informedFormat('3000.25', formatter);
      expect(value).toEqual('$3,000.25');
      expect( parser(value)).toEqual(3000.25);
    });

    it('createIntlNumberMask should format negative currency for accounting US', () => {

      const { formatter, parser } = createIntlNumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD',
        currencySign: 'accounting'
      });

      const { value } = informedFormat('-3000.25', formatter);
      expect(value).toEqual('($3,000.25)');
      expect( parser(value)).toEqual(-3000.25);
    });

    it('createIntlNumberMask should format negative currency with () for accounting US', () => {

      const { formatter, parser } = createIntlNumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD',
        currencySign: 'accounting'
      });

      const { value } = informedFormat('($3000.25)', formatter);
      expect(value).toEqual('($3,000.25)');
      expect( parser(value)).toEqual(-3000.25);
    });

    it('createIntlNumberMask should format negative currency for accounting "nl-BE" "EUR"', () => {

      const { formatter, parser } = createIntlNumberFormatter('nl-BE', {
        style: 'currency',
        currency: 'EUR',
        currencySign: 'accounting'
      });

      const { value } = informedFormat(-3000.25, formatter);
      expect(value).toEqual('(€ 3.000,25)');
      expect( parser(value)).toEqual(-3000.25);
    });

    
  });
});
