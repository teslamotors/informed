import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Code } from 'YourComponents';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function Mask() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Mask</code>
      </h1>
      <Info>
        Masking values is made simple with the use of the mask function. Please
        note, in addition to mask you sometimes want to pair it with a parser
        function see example below:
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
