import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';
import Code from '../../../YourComponents/Code';

export const UseForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>useForm</code>
      </h1>
      <Info>
        The useForm hook will allow you create your own form components.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
    </>
  );
};
