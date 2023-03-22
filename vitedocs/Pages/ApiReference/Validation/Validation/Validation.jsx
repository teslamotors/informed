import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import { ValidationControl } from '../ValidationControl/Validation';
import { AsyncValidation } from '../AsyncValidation/AsyncValidation';

export const Validation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Validation</code>
      </h1>
      <Info>
        Validation can be achieved by passing a validation function to the
        input. Or with default props.
        <br />
        <br />
        Below is an example form that has a function.
        <Code>
          {`// Function will return an error when the input does not conatin an "!"
const validate = value => {
  if (value && !value.includes('!')) return 'Field must contain a "!"';
};`}
        </Code>
        <br />
        <br />
        We pass this validation function to an input and validation will occur
        on submission and blur by default.
        <Code>
          {`<Input label="Name:" name="name" required validate={validate} />`}
        </Code>
        <br />
        <strong>Note:</strong> we use the built in <code>required</code> prop in
        addition to our custom function.
      </Info>
      <br />
      <br />

      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <hr />
      <AsyncValidation />
      <hr />
      <ValidationControl />
      <br />
      <br />
    </>
  );
};
