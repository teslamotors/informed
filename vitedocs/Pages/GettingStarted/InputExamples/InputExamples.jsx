import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import Example from './Example';
import code from './Example.jsx?raw';
import css from './YourStyles.css?raw';

const onSubmit = ({ values }) => console.log(values);

export default function InputExamples() {
  return (
    <>
      <h1>Getting Started</h1>
      <h2>Install</h2>
      <code className="code-block">npm install informed</code>
      <hr />
      <h2>Code:</h2>
      The first thing you need to do is create your own inputs. You do this once
      and then never have to do it again!
      {/* <Code input1={code} /> */}
      <Code input1={code} input2={css} language2="css" minWidth2="200px" />
      <hr />
      <h2>Output:</h2>
      <Example />
    </>
  );
}
