import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function SubSchema() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Sub Schema</code>
      </h1>
      <Info>
        Sometimes you want to render separate schemas within the same form.
        This is useful when you have different sections of a form that should
        be managed independently but still be part of the same form submission.
        <br />
        <br />
        You can use multiple <code>FormFields</code> components with different
        schemas to achieve this. Each <code>FormFields</code> component will
        render its own set of fields based on its schema.
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
