import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export const KeepState = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>keepState</code>
      </h1>
      <Info>
        If you need to remember the form state even when the field dissapears (
        is unmounted ) you can pass <code>keepState</code>
      </Info>
      <Info type="notice">
        There are three props that are relevant here ( pun intended )
        <ol>
          <li>
            <code>keepState</code>
            will remember the state and restore it no matter what
          </li>
          <li>
            <code>keepStateIfRelevant</code>
            will remember the state as long as the field is not irrelevant
          </li>
          <li>
            <code>remember</code>
            will remember the state in informeds <code>memory</code> but must be
            manually restored
          </li>
        </ol>
        The reason for informeds <code>memory</code> is for usecases where you
        dont want the value to be saved and submitted but may want a user to
        recover from an accidental fat finger.
        <br />
        <br />
        <strong>Hint: </strong>
        to test
        <ol>
          <li>
            Type <code>"A", "B", "C",</code> and <code>"D"</code> into the
            fields below
          </li>
          <li>
            Click on the "Hide" button and see whats left in form state.{' '}
            <code>"B"</code> and
            <code>"C"</code> should be left because they are both relevant.
          </li>
          <li>Now click on the "Show" button to show the fields again.</li>
          <li>
            Next click on the "Answer Questions" toggle. Only <code>"B"</code>{' '}
            should remain.
          </li>
          <li>
            Finally click on the restore button next too Question4.
            <code>"D"</code> should be restored from memory.
          </li>
        </ol>
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
};
