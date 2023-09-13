import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ArrayFieldReset({ showItem = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>ArrayField Reset</code>
      </h1>
      <Info>
        Sometimes you need to reset your array field to a new set of values.
      </Info>

      <Info type="notice">
        Note: click the "Update Initial" button and watch how the array fields
        values update
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
