import { useEffect } from 'react';
import { Link } from '../../../Link';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function NumberFormatter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>NumberFormatter</code>
      </h1>
      <Info>
        Informed comes with a built in number formatter that makes use of the
        INTL spec!
        <br />
        <br />
        <strong>Note:</strong> It will format based on the intl config passed to
        the util.
        <br />
        <strong>Note:</strong> What gets stored in values is an actualy js
        number but whats shown to user is the formatted value itself.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
