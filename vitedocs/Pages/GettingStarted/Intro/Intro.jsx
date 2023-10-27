import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import Code from '../../../YourComponents/Code';
import { Info } from '../../../Info';
import { Link } from '../../../Link';
import { SideBySide } from '../../../SideBySide';
import Showoff from '../Showoff/Showoff';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Intro</h1>
      {/* <h2>
        Say hello to the best react form library you have ever used! Informed is
        an extensive, simple, and efficient solution for creating basic to
        complex forms in react.
      </h2> */}
      <Info>
        First lets take a look at whats possible with informed. Below is an
        example where we wrapped informed around Adobe's{' '}
        <a href="https://react-spectrum.adobe.com/react-spectrum/index.html">
          desgin-system
        </a>
        .
      </Info>
      <Info type="notice">
        Those components got defined once inside `YourComponents` directory. You
        will see how this was done later inside the{' '}
        <Link href="/getting-started/setup">setup</Link> docs.
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<FirstExample />}
        right={<Code links input1={firstExampleCode} />}
      />
      <Info>
        Whats going on here? Basically informed manages form state for you, and
        allows you to easily hook ito its state managemenet with the use of
        <code>useField</code>
        <br />
        <br />
        Above, we imported inputs that were already wrapped and simply rendered
        them on the page.
        <br />
        <br />
        <strong>This is the way!</strong> You should most of the time not even
        realize you are using a form library 😁
      </Info>
      <hr />
      <h1>Capabilities</h1>
      <Info>
        Informed is cabable of A LOT of cool things! The below example shows off
        many of those cababilites in one form.
        <br />
        <br />
        <ul>
          <li>
            Arrays: ability to render dynamic arrays of fields{' '}
            <code>[ 'a', 'b' ]</code> or{' '}
            <code>
              {"[ { name: 'Joe', age: 29 }, { name: 'Hope', age: 24 }]"}
            </code>
          </li>
          <li>
            Relevance: ability to render fields conditionally depending on the
            state of other parts of the form
          </li>
          <li>
            JSPAN: ability to easily and intuitively manipulate form state
          </li>
          <li>
            Formatting: ability to perform display formatting, where the format
            shown to user can differ from the state of the values stored
          </li>
          <li>
            Validation: ability to perform both synchronous and asynchronous
            validation in a controlled manner
          </li>
          <li>
            Api: ability to manipulate the form state both inside and outside
            the context of the form
          </li>
          <li>State: ability to access field and form data</li>
          <li>Multistep: ability to create dynamic multistep forms</li>
          <li>Scope: ability to scope ( group ) fields</li>
          <li>Schema: ability to render forms based on pure JSON schema</li>
          <li>
            Dynaic: ability to hide and show fields ( render and unrender ) and
            either cleanup or maintain state of unmounted fields
          </li>
          <li>
            Debugging: ability to easily debug users state as well as internals
            of the library
          </li>
          <li>
            Nesting: ability to have highly nested value structure{' '}
            <code>state.values.friends[1].brother.parents.cars[0].model</code>
          </li>
        </ul>
      </Info>

      <Showoff />
      <hr />
      <h1>How do I start!?</h1>
      <Info>
        In order to use informed all you need to do is wrap your own inputs with
        informed via a `useField` hook.
      </Info>
      {/* <Code>{` const { fieldApi, fieldState } = useField(props);
<Input name="name" label="Name" required />`}</Code> */}

      <Info type="notice">
        You do this one time and then can use your form inputs as normal JSX or
        via schema! Lets go get <Link href="/getting-started/setup">SETUP</Link>
      </Info>
      <br />
      <br />
    </>
  );
}
