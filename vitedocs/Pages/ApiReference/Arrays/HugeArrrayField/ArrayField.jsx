import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import ArrayFieldItem from '../ArrayFieldItem/ArrayFieldItem';

export default function ArrayFieldComponent({ showItem = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Huge ArrayField</code>
      </h1>
      <Info>
        Sometimes you need huge performant array fields.
        <br />
        <br />
        <strong>Note:</strong> I use the simple input from informed because its
        much more efficient than the one from adobe!
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      {showItem ? (
        <>
          <hr />
          <ArrayFieldItem />
        </>
      ) : null}
      <br />
      <br />
    </>
  );
}
