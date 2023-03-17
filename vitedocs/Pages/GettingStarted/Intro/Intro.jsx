import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import Example from './Example';
import code from './Example.jsx?raw';
import css from './Intro.css?raw';

const onSubmit = ({ values }) => console.log(values);

export default function Intro() {
  return (
    <>
      <h1>Getting Started</h1>
      Install with npm
      <code className="code-block">npm install --save informed</code>
      <Code input1={code} input2={css} language2="css" minWidth2="200px" />
      <Example />
    </>
  );
}
