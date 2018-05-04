import React from 'react';
import Code from '../utils/Code';
import { withDocs }  from 'storybook-readme';
import readme from './README.md';

const Intro = () => (
  <div>
    Hello World!
  </div>
);

export default withDocs( readme, Intro );
