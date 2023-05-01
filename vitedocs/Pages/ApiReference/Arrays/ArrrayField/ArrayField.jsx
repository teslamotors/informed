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
        <code>ArrayField</code>
      </h1>
      <Info>
        Sometimes you need highly dynamic forms where the data is represented by
        an array.
        <br />
        <br />
        <strong>Note:</strong> how you can dynamically add or remove fields.
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
