import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function InsanelyHugeForm({ showItem = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Insanely Huge Form!!!!</h1>
      <Info>
        Sometimes you want to build an absurdly huge form! This one has 3k
        fields!!
      </Info>
      <Info type="notice">
        Note: In this example we use "SimpleInput" as its a bare bones html
        input
        <br />
        <br />( does not use a design system whos implementation details might
        be non performant )
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
}
