import React, { memo } from 'react';
import { expect } from 'chai';

import { getChildDisplayName } from '../src/utils';

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
});
