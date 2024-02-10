import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

// TODO: Need to hook up in examples, observed issue
export default function SchemaComponents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Schema Components</code>
      </h1>
      <Info>
        Informed 5.0 added the ability to add custom components to schema based
        forms, using special property names in the form of ui:[$id].
        <br />
        <br />
        When wanting to render fields as children of your component, you should
        add these inside an allOf[] in the parent of the properties object. The
        entry in allOf[] should have an $id property to be able to reference
        those fields.
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
