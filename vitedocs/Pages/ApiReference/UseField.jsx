import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import Code from '../../Code';
import { Info } from '../../Info';
import { SideBySide } from '../../SideBySide';
import Simple from '../GettingStarted/InputExamples/SimpleInput';
import simpleCode from '../GettingStarted/InputExamples/SimpleInput?raw';
import Verbose from '../GettingStarted/InputExamples/VerboseInput';
import verboseCode from '../GettingStarted/InputExamples/VerboseInput?raw';

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
        </Content>
      </ContextualHelp>
    </Flex>
  );
};

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>useField</code>
      </h1>
      <Info>
        useField allows you to create your very own inputs. You do this once and
        then never have to do it agian.
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Simple />}
        right={<Code input1={simpleCode} />}
      />
      <Info>
        Above is the most simplicitc informed input. You simply:
        <ol>
          <li>Call useField hook</li>
          <li>Spread informed onto the native input.</li>
          <li>Return the result of render</li>
        </ol>
        And walla! You have an informed input.
      </Info>
      <hr />
      <h2>Do It yourself</h2>
      <Info>
        That was pretty simple but whats happening under the hood? To understand
        this lets re-write the previous example in a more verbose way!
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Verbose />}
        right={<Code input1={verboseCode} />}
      />
      <hr />
      <h2>What Does It Give Me?</h2>
      <Info>
        Ok now that you are a bit more familiar with the hook lets take a look
        at the full API. And a more complete example.
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Verbose />}
        right={<Code input1={verboseCode} />}
      />
      <br />
      <br />
    </>
  );
}
