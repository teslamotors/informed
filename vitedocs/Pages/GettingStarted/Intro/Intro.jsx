import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import InputExample from '../InputExample/InputExample';
// import InputExample from '../InputExample/InputExample';
// import Example from './Example';
import FirstExample from './FirstExample';
import firstExampleCode from './FirstExample.jsx?raw';
// import css from './YourStyles.css?raw';

const onSubmit = ({ values }) => console.log(values);

export default function Intro() {
  return (
    <>
      <h1>Getting Started</h1>
      <h2>Install</h2>
      <code className="code-block">npm install informed</code>
      <hr />
      <h2>Example:</h2>
      First lets take a look at whats possible with informed.
      <div className="flex">
        <div style={{ width: '100%' }}>
          <FirstExample />
        </div>
        <div>
          <Code input1={firstExampleCode} />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
