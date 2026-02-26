import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

const CheckboxGroupInput = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        <code>Checkbox Group</code>
      </h1>
      <Info>
        Below is an example of how to create a checkbox group with informed.
        This example uses the React Spectrum CheckboxGroup, but you can use any
        checkbox group you want.
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
};

export { CheckboxGroupInput };
