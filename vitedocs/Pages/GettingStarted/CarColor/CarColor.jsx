import Code from '../../../Code';
import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';
import { SideBySide } from '../../../SideBySide';
import Example from './Example';
import code from './Example.jsx?raw';
import { Info } from '../../../Info';

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
          <strong>Hints:</strong>
        </Content>
      </ContextualHelp>
    </Flex>
  );
};

export default function CarColor() {
  return (
    <>
      <h2>Field State</h2>
      <Info>
        You can gain access to any fields state via the `useFieldState` hook.
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={code} />}
      />
    </>
  );
}
