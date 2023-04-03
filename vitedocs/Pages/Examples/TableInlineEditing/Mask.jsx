import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { Code } from 'YourComponents';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export const TableInlineEditing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Table Inline Editing</code>
      </h1>
      <Info>
        Sometimes you need very complex forms where fields depend on each-other
        much like formulas in Excel. Criteria:
        <ol>
          <li>Recalculate price when margin or cost change</li>
          <li>Recalculate margin when the price changes</li>
          <li>Recalculate demand when the price changes</li>
        </ol>
      </Info>
      <Info type="notice">
        Issues:
        <ol>
          <li>
            When you change the margin, it will affect the price, which in turn
            affects the margin. (Prevent this loop)
          </li>
          <li>
            When you change the margin, it should affect the price, which in
            turn affects the demand. (Allow this transitive change)
          </li>
        </ol>
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        leftStyle={{ minWidth: '500px' }}
        style={{ display: 'block' }}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
};
