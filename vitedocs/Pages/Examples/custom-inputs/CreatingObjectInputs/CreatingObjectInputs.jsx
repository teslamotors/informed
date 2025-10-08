import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function CreatingObjectInputs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Creating Object Inputs</code>
      </h1>
      <Info>
        Sometimes you need to create an input whose value is an object and is made up 
        of more than one physical input element. This is useful for complex data structures 
        like addresses, phone numbers with area codes, or any grouped data.
        <br />
        <br />
        Object inputs allow you to:
        <br />
        • Combine multiple input elements into a single field
        <br />
        • Store complex data structures as form values
        <br />
        • Maintain proper form validation and state management
        <br />
        • Use the same <code>useField</code> hook for consistency
        <br />
        <br />
        This example shows how to create a "Double Input" that stores an object with 
        properties 'a' and 'b' as its value.
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
