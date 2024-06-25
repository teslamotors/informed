import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ChangeInitialValuesArrayField() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        <code>Changing initialValues in Array Fields</code>
      </h1>
      <Info>
        Commonly you will have use cases where you want the values to change
        when the users has made a different selection.
        <br />
        Below we have example where there is a profile editor.
        <br />
        Depending on which profile you would like to edit, you want to pre
        populate the profile form with that users profile information.
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
