import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import Code from '../../../Code';
import { Info } from '../../../Info';
import Example from './Example';
import code from './Example.jsx?raw';
import css from './YourStyles.css?raw';
import simple from './SimpleInput.jsx?raw';
import Simple from './SimpleInput';
import { SideBySide } from '../../../SideBySide';

export default function InputExamples() {
  return (
    <>
      <h2>Create Your Inputs</h2>
      <Info>
        The first thing you need to do is create your own inputs. You do this
        once and then never have to do it again!
      </Info>
      {/* <Code input1={simple} /> */}
      <SideBySide
        leftHeader={<h3>Example:</h3>}
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
      <Info>
        However most of the time you will want to hook up more than just the
        basics. Below shows how you can create your very owned inputs with
        informed.
        <br />
        <br />
        <strong>Note: </strong>
        this is the exact same example that we showed in the intro, but this
        time instead of using adobes inputs it uses ours!
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
