import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ArrayFieldClear({ showItem = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>ArrayField Clear</code>
      </h1>
      <Info>
        Sometimes you need to clear your array field. Its as simple as calling
        clear on that field name, or using the array field api.
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
