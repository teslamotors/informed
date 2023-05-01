import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export const PairedValidation = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <h1>
        <code>Paried Validation</code>
      </h1>
      <Info>
        Sometimes when validating you may need to revalidate when a sibling
        field changes.
        <br />
        <br />A great example of this is when you have a password and confirm
        password field, and when one changes you want the other to validate as
        well.
      </Info>
      <Info>
        To achieve this, informed allows you to pass validateWhen to an input
        with an array of field names that will re-trigger validation on the
        field.
      </Info>
      <Info type="notice">Try typing in two passwords until they match.</Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
    </>
  );
};
