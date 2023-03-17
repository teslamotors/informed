import Code from '../../../Code';
import { Info } from '../../../Info';
import Example from './Example';
import code from './Example.jsx?raw';
import simple from './SimpleInput.jsx?raw';
import Simple from './SimpleInput';
import { SideBySide } from '../../../SideBySide';
import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';

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

export default function InputExamples() {
  return (
    <>
      <h2>Create Your First Input</h2>
      <Info>
        The first thing you need to do is create your own inputs. You do this
        once and then never have to do it again!
      </Info>
      {/* <Code input1={simple} /> */}
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Simple />}
        right={<Code input1={simple} />}
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
      <h2>Create More Inputs</h2>
      <Info>
        However most of the time you will want to hook up more than just the
        basics. Below shows how you can create your very owned inputs with
        informed.
        <br />
        <br />
        <strong>Note: </strong>
        this is the exact same example that we showed in the intro, but this
        time instead of using adobes inputs it uses the ones we define here!
      </Info>
      {/* <Code input1={code} /> */}
      {/* <Code input1={code} input2={css} language2="css" minWidth2="200px" /> */}
      {/* <hr />
      <h2>Output:</h2>
      <Example /> */}
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={code} />}
      />
    </>
  );
}
