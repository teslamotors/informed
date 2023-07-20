import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ExcelSheet({ showItem = true }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Excel Sheet</h1>
      <Info>
        Sometimes you want to build a form thats similar to an excel document
        and gets rendered in an HTML table.
      </Info>
      <Info type="notice">
        Note: In this example every col and row is unique, when you remove that
        col or row it does not take on the role of the next or previous. Also
        please note the use of the <code>key</code> property.
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
