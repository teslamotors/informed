import React from 'react';
import GettingStarted from './GettingStarted';
import FormState from './FormState';
import FormApi from './FormApi';
import WhatElse from './WhatElse';
import UseForm from './UseForm';
import IntroComp from './Intro';
import CustomIntro from './CustomIntro';
import SchemaVsFormat from './SchemaVsFormat';

const Intro = () => (
  <div>
    <IntroComp />
    <hr />
    <CustomIntro />
    <hr />
    <GettingStarted />
    <hr />
    <FormState />
    <hr />
    <FormApi />
    <hr />
    <SchemaVsFormat />
    {/* <UseForm /> */}
    {/* <WhatElse /> */}
  </div>
);

export default Intro;
