import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function FormProvider() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>FormProvider</code>
      </h1>
      <Info>
        Sometimes you don't want to render a form element, just fields! The <code>FormProvider</code> 
        component allows you to create form functionality without wrapping your fields in a 
        <code>&lt;form&gt;</code> element.
        <br />
        <br />
        <code>FormProvider</code> provides the same form context and functionality as the regular 
        <code>Form</code> component, but without the HTML form element. This is useful when:
        <br />
        • You want to create custom form layouts without form semantics
        <br />
        • You need to integrate form fields into existing UI components
        <br />
        • You want to avoid form submission behavior and handle it manually
        <br />
        • You're building complex layouts where a form wrapper doesn't make sense
        <br />
        <br />
        You can still access the form API using <code>useFormApi()</code> to programmatically 
        submit the form or perform other form operations.
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
