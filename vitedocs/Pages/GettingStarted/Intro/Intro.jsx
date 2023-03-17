import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
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
      <h1>Intro</h1>
      <Info>
        First lets take a look at whats possible with informed. Below is an
        example where the inputs have wrapped adobes{' '}
        <a href="https://spectrum.adobe.com/">desgin-system</a>
      </Info>
      <SideBySide
        left={<FirstExample />}
        right={<Code input1={firstExampleCode} />}
      />
      <Info>
        Whats going on here? Basically iformed manages form state for you, and
        allows you to easily hook ito its state managemenet with the use of its{' '}
        <code>useField</code> hook.
        <br />
        <br />
        Above, we imported inputs that were already wrapped and simply rendered
        them on the page. This is the way, you should most of the time not even
        realize you are using a form library 😁
      </Info>
      <br />
      <br />
    </>
  );
}
