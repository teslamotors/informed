import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function FormatterFunctions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Formatter Functions</code>
      </h1>
      <Info>
        You can achieve highly custom formatting by passing a function to each 
        location in the formatter array. This allows you to apply custom logic 
        to each character position in the input field.
        <br />
        <br />
        Instead of using regex patterns or string patterns, you can use functions 
        that receive the current value and return the formatted character for that 
        position. This is particularly useful for complex formatting requirements 
        like custom case transformations, conditional formatting, or dynamic 
        character placement.
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
