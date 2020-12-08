import React, { memo } from 'react';
import { expect } from 'chai';

import { getChildDisplayName, informedFormat } from '../src/utils';

// prettier-ignore
describe('Utils', () => {
  describe('getChildDisplayName', () => {
    it('should correctly retrieve the child components display name', () => {
      const Cmp = () => <div>test</div>;

      expect(getChildDisplayName(Cmp)).to.be.eq('Cmp');
    });

    it('should correctly retrieve the child components display name if it is memoized', () => {
      const Cmp = () => <div>test</div>;

      expect(getChildDisplayName(memo(Cmp))).to.be.eq('Cmp');
    });
  });

  describe('informedFormat', () => {

    const fmtr = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    it('undefiend  ----> undefined', () => {
      const { value } = informedFormat(undefined, fmtr);
      expect(value).to.equal(undefined);
    });

    it('1231231234 ----> +1 123-123-1234', () => {
      const { value } = informedFormat('1231231234', fmtr);
      expect(value).to.equal('+1 123-123-1234');
    });

    it('"+"   ----> +', () => {
      const { value } = informedFormat('+', fmtr);
      expect(value).to.equal('+');
    });

    it('"+1"  ----> +1', () => {
      const { value } = informedFormat('+1', fmtr);
      expect(value).to.equal('+1');
    });

    it('"+11" ----> "+1 1"', () => {
      const { value } = informedFormat('+11', fmtr);
      expect(value).to.equal('+1 1');
    });

    it(' "+2" ----> "+1 2"', () => {
      const { value } = informedFormat('+2', fmtr);
      expect(value).to.equal('+1 2');
    });

    it(' "1"  ----> "+1 1"', () => {
      const { value } = informedFormat('1', fmtr);
      expect(value).to.equal('+1 1');
    });

    it('"1234" ----> "+1 123-4"', () => {
      const { value } = informedFormat('1234', fmtr);
      expect(value).to.equal('+1 123-4');
    });

    it('"+1 123-456"    ----> "+1 123-456"', () => {
      const { value } = informedFormat('+1 123-456', fmtr);
      expect(value).to.equal('+1 123-456');
    });

    it('"+1 123-456-"   ----> "+1 123-456-"', () => {
      const { value } = informedFormat('+1 123-456-', fmtr);
      expect(value).to.equal('+1 123-456-');
    });

    it('"123-456-"      ----> "+1 123-456-"', () => {
      const { value } = informedFormat('123-456-', fmtr);
      expect(value).to.equal('+1 123-456-');
    });

    it('"123a"          ----> "+1 123-"', () => {
      const { value } = informedFormat('123a', fmtr);
      expect(value).to.equal('+1 123-');
    });

    it('"123a456B78"    ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123a456B78', fmtr);
      expect(value).to.equal('+1 123-456-78');
    });

    it('"123abc456B78"  ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123abc456B78', fmtr);
      expect(value).to.equal('+1 123-456-78');
    });

    it('"123abc456B78"  ----> "+1 123-456-78"', () => {
      const { value } = informedFormat('123abc456B78', fmtr);
      expect(value).to.equal('+1 123-456-78');
    });

    it('"+1 123-a"      ----> "+1 123-"', () => {
      const { value } = informedFormat('+1 123-a', fmtr);
      expect(value).to.equal('+1 123-');
    });

    it('"123-a"         ----> "+1 123-"', () => {
      const { value } = informedFormat('123-a', fmtr);
      expect(value).to.equal('+1 123-');
    });

    it('"1234567812345678" ----> "1234-5678-1234-5678" with formatter ####-####-####-####', () => {
      const { value } = informedFormat('1234567812345678', '####-####-####-####');
      expect(value).to.equal('1234-5678-1234-5678');
    });

    it('"3000" ----> "$3,000.00&" with formatter $#,###.00&', () => {
      const { value } = informedFormat('3000', '$#,###.00&');
      expect(value).to.equal('$3,000.00&');
    });
    
  });
});
