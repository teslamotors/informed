import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export const ScrollValidation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Scrolling To Errors</h1>
      <Info>
        Informed has the capability to scroll or focus onto the first input that
        has an error.
        <br />
        <br />
        Below is an example form where we pass scrollOnInvalid with some custom
        configuration. Docs for that function can be found{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView">
          here
        </a>
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
