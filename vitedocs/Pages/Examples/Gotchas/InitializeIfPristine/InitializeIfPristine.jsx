import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function InitializeIfPristine() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        <code>Initialize Value If Pristine</code>
      </h1>
      <Info>
        Sometimes you need to conditionally show or hide things based on the
        values in your form.
        <br />
        This can easily be achieved with `Relevant`.
        <br />
        However you may have initial values that you only want to use when the
        form fields were rendered on form load ( i.e ) `$pristine` state. To
        achieve this you can optionally pass `initializeValueIfPristine` to a
        field.
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
