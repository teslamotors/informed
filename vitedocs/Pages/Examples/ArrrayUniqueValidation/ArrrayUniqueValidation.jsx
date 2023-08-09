import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function ArrayFieldComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>ArrayField Unique Validation</code>
      </h1>
      <Info>
        Sometimes you need to validate that all fields in an array are unique.
        <br />
        <br />
        <strong>Note:</strong> how we pass validateWhen as a function instead of
        an array.
        <br />
        <br />
        <strong>Note:</strong> To test, type Matt in the second name field :)
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
