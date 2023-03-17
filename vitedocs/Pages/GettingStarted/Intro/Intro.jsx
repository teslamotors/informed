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
      <h2>Install</h2>
      <code className="code-block">npm install informed</code>
      <hr />
      <h2>Code:</h2>
      By default informed gives you inputs that have already been "hooked" up.
      All you need to do is style the inputs.
      <Code input1={code} input2={css} language2="css" minWidth2="200px" />
      <hr />
      <h2>Output:</h2>
      <Example />
    </>
  );
}
