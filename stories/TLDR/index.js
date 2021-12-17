import React from 'react';
import GettingStarted from './GettingStarted';
import Intro from './Intro';
import SchemaVsFormat from '../Intro/SchemaVsFormat';

const TLDR = () => (
  <div>
    <Intro />
    <SchemaVsFormat />
    <hr />
    <GettingStarted />
  </div>
);

export default TLDR;
