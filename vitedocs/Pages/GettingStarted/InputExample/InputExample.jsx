import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
// import css from './Example.css?raw';

export default function InputExample() {
  return (
    <>
      <h2>Uneder The Hood:</h2>
      Under the hood we simply hook up informed to native DOM inputs like so
      <Code input1={exampleCode} />
      <hr />
      <h2>Output:</h2>
      <Example />
    </>
  );
}
