import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function KeepStateIfRelevant() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Keep State If Relevant</code>
      </h1>
      <Info>
        Sometimes you need to keep the state of a field even when it gets unmounted 
        (no longer rendered on screen), but only if the field is still relevant. 
        This is useful when you have conditional fields that may be hidden and shown 
        based on other form values.
        <br />
        <br />
        The <code>keepStateIfRelevant</code> prop ensures that a field's state is 
        preserved when it's unmounted, but only if the field would still be relevant 
        according to its relevance conditions. If the field becomes irrelevant, its 
        state will be removed.
        <br />
        <br />
        <strong>Instructions:</strong>
        <br />
        1. Fill in both name fields
        <br />
        2. Click "Hide" to unmount the fields - notice how name1's state is removed but name2's is kept
        <br />
        3. Click "Show" to remount the fields - name2's value returns
        <br />
        4. Uncheck the "Show" checkbox - notice how name2's state is removed because it's now irrelevant
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
