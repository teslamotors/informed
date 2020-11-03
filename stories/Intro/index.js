import React from 'react';
import GettingStarted from './GettingStarted';
import FormState from './FormState';
import FormApi from './FormApi';
import WhatElse from './WhatElse';
import UseForm from './UseForm';

const Intro = () => (
  <div>
    <GettingStarted />
    <FormState />
    <FormApi />
    <UseForm />
    <WhatElse />
  </div>
);

export default Intro;
