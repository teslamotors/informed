import { Well, Flex } from '@adobe/react-spectrum';
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import InputExample from '../InputExample/InputExample';
// import InputExample from '../InputExample/InputExample';
// import Example from './Example';
import FirstExample from './FirstExample';
import firstExampleCode from './FirstExample.jsx?raw';
// import css from './YourStyles.css?raw';
import InfoOutline from '@spectrum-icons/workflow/InfoOutline';

const onSubmit = ({ values }) => console.log(values);

export default function Intro() {
  return (
    <>
      <h1>Intro</h1>
      <Well>
        <Flex gap="size-100">
          <InfoOutline size="S" color="informative" />
          First lets take a look at whats possible with informed. Below is an
          example where the inputs have wrapped adobes{' '}
          <a href="https://spectrum.adobe.com/">desgin-system</a>
        </Flex>
      </Well>
      <div className="flex">
        <div style={{ width: '100%' }}>
          <FirstExample />
        </div>
        <div>
          <Code input1={firstExampleCode} />
        </div>
      </div>
      <Well>
        <Flex gap="size-100">
          <InfoOutline size="S" color="informative" />
          <div>
            Whats going on here? Basically iformed manages form state for you
            and allows you to easily hook ito its state managemenet with the use
            of its <code>useField</code> hook
          </div>
        </Flex>
      </Well>
      <br />
      <br />
    </>
  );
}
