import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Text } from '../../../src';
import ComplexForm from '../../Form/Complex';
import DynamicArrays from '../../Arrays/DynamicArrays';
// import CustomInputs from './CustomInputs';

const WhatElse = () => (
  <>
    <ComplexForm />
    <br />
    <DynamicArrays />
    <br />
    {/* <CustomInputs /> */}
  </>
);

export default withDocs(readme, WhatElse);
