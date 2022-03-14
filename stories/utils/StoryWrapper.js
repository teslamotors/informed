// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// import logo from '../../src/assets/logo_torch.svg';

export default story => (
  <div className="informed-container">
    {/* <img
      alt={'Torch UI'}
      src={logo}
      style={{ width: '150', marginBottom: '1rem' }}
    /> */}
    {story()}
  </div>
);
