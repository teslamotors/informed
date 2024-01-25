import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export const FocusValidation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Focusing Onto Errors</h1>
      <Info>
        Informed has the capability to focus onto the first input that has an
        error.
        <br />
        <br />
        Below is an example form where we pass <code>focusOnInvalid</code>
        <br />
        <br />
        <strong>Note: </strong>
        you can also smooth scroll via scrolling see Scroll To Error section in
        the docs
      </Info>
      <br />
      <br />
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
    </>
  );
};
