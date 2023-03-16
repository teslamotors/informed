import React from 'react';
import Unauthorized from '../unauthorized.svg';

export const NotAuthorized = () => {
  return (
    <div className="doge">
      <img src={Unauthorized} alt="Unauthorized logo" />
    </div>
  );
};
