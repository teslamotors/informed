import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function Parse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Parse</code>
      </h1>
      <Info>
        Sometimes you just want to parse the value that is stored and show what
        user typed.
        <br />
        <strong>Note:</strong> when doing this you may need to pass an
        initialization function, see example below.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
