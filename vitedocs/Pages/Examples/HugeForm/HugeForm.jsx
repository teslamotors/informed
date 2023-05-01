import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Code } from 'YourComponents';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export const HugeForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Huge Form</h1>
      <Info>
        Informed is very efficent! Check out this form with 500 fields!
        <br />
        <br />
        <strong>Note:</strong> This uses silly fake example data!
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        leftStyle={{ minWidth: '500px' }}
        style={{ display: 'block' }}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
};
