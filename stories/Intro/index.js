import React from 'react';
import GettingStarted from './GettingStarted';
import FormState from './FormState';
import FormApi from './FormApi';
import WhatElse from './WhatElse';

const Intro = () => (
  <div>
    <GettingStarted />
    <FormState />
    <FormApi />
    <WhatElse />
  </div>
);

export default Intro;