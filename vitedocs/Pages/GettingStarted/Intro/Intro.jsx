import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';
import Code from '../../../Code';
import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import FirstExample from './FirstExample';
import firstExampleCode from './FirstExample.jsx?raw';

const Hint = () => {
  return (
    <Flex alignItems="center">
      <h3>Example: </h3>
      <ContextualHelp variant="info">
        <Heading>Info</Heading>
        <Content>
          On the left you see the output from the code on the right. Take note
          of the Debug component and how as you play with the form the state
          changes.
          <br />
          <br />
          <strong>Hint:</strong> try to click submit and click on the married
          field to see some of the cool features.
        </Content>
      </ContextualHelp>
    </Flex>
  );
};

export default function Intro() {
  return (
    <>
      <h1>Intro</h1>
      <Info>
        First lets take a look at whats possible with informed. Below is an
        example where the inputs have wrapped adobes{' '}
        <a href="https://spectrum.adobe.com/">desgin-system</a>.{' '}
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
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
