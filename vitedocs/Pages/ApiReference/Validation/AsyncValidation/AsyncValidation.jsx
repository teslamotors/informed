import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export const AsyncValidation = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <h1>
        <code>Async Validation</code>
      </h1>
      <Info>
        Async validation can be achieved by passing an asyncValidation function
        to an input. This must be a function that returns a promise.
      </Info>
      {/* <Info>
        Below is an example form that has synchronous and asynchronous
        validation.
        <br />
        <br />
        The synchronous validation <code>required</code> will return an error
        when the input is empty.
        <br />
        <br />
        The asynchronous validation function defined will, after two seconds,
        resolve an error or nothing depending on what is typed.
      </Info> */}
      <Info type="notice">
        Try clicking the submit button WITH AN EMPTY FIELD! and see what
        happens:
      </Info>
      <Info>
        When you clicked on the submit button the synchronous validation
        function was triggered.
        <br />
        <br />
        Because the field was empty, it failed synchronous validation, and
        therefore did not run the async validation or actually submit the form.
      </Info>
      <Info type="notice">
        Now try typing <code>"billy"</code> and click submit
      </Info>
      <Info>
        This time, it passed synchronous validation and went on to check async.
        If you typed <code>"billy"</code> it will fail because that username is
        already taken.
      </Info>
      <Info type="notice">
        Now try typing <code>"reject"</code> and click submit
      </Info>
      <Info>This time, it failed due to a promise rejection.</Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
    </>
  );
};
