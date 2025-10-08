import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function MultistepActions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Multistep Actions</code>
      </h1>
      <Info>
        Sometimes you need to take actions when moving from step A to step B in a multistep form. 
        This is useful for validation, API calls, data processing, or any asynchronous operations 
        that need to complete before proceeding to the next step.
        <br />
        <br />
        The <code>next()</code> function from <code>useMultistepApi()</code> can accept an action 
        function that will be executed before moving to the next step. This action function can:
        <br />
        • Return a Promise for asynchronous operations
        <br />
        • Access current form values
        <br />
        • Prevent step progression if validation fails
        <br />
        • Show loading states and error messages
        <br />
        <br />
        This example demonstrates username validation with loading states and error handling. 
        Try entering names like "joe", "tanner", "billy", or "bob" to see validation errors, 
        or "reject" to simulate a request failure.
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
