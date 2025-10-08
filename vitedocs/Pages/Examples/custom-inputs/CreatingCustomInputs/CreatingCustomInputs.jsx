import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function CreatingCustomInputs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Creating Custom Inputs</code>
      </h1>
      <Info>
        Sometimes the inputs that Informed provides are not sufficient for your needs. 
        Informed makes it very easy to create your own custom input components using 
        the <code>useField</code> hook.
        <br />
        <br />
        The <code>useField</code> hook provides you with:
        <br />
        • <code>fieldState</code> - Current state of the field (value, error, touched, etc.)
        <br />
        • <code>fieldApi</code> - Methods to control the field (setValue, setTouched, etc.)
        <br />
        • <code>render</code> - Function to render your component with proper form integration
        <br />
        • <code>ref</code> - Ref for the input element
        <br />
        • <code>userProps</code> - Props passed to your component
        <br />
        <br />
        This example shows how to create a custom text input with error styling and validation.
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
