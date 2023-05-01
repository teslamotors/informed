import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import SchemaExample from './SchemaExample';
import schemaCode from './SchemaExample.jsx?raw';

export const ValidationMessages = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <h1>
        <code>Validation Messages</code>
      </h1>
      <Info>
        Most of the time you want to display a customized error message for the
        built-in validation.
        <br />
        <br />
        <strong>Note:</strong> When you provide a string to the errorMessage
        prop, that will be used as the default for all built-in validation
        rules. The same can be achieved by adding a property with the key _
        (underscore).
      </Info>
      <Info type="notice">Click submit and look at the errors object.</Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <hr />
      <h2>Schema Error Messages</h2>
      <Info>The same thing can be achieved with schema rendering.</Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<SchemaExample />}
        right={<Code links input1={schemaCode} />}
      />
      <br />
      <br />
    </>
  );
};
