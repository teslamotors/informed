import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function CreatingFormattedObjectInputs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Creating Formatted Object Inputs</code>
      </h1>
      <Info>
        Sometimes you need to create object inputs that also format each field individually. 
        This combines the power of object inputs with formatting capabilities, allowing you 
        to create complex inputs like phone number pairs, address components, or any grouped 
        data that needs formatting.
        <br />
        <br />
        Formatted object inputs allow you to:
        <br />
        • Apply different formatters to each sub-field
        <br />
        • Use parsers to clean up the data when submitted
        <br />
        • Maintain cursor position during formatting
        <br />
        • Store complex formatted data structures
        <br />
        <br />
        This example shows how to create a "Double Phone" input that formats both phone 
        numbers with the same phone number formatter and parser.
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
