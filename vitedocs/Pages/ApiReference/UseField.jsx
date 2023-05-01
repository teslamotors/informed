import { ContextualHelp, Heading, Flex, Content } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import Code from '../../YourComponents/Code';
import { Info } from '../../Info';
import { SideBySide } from '../../SideBySide';
import Simple from '../GettingStarted/InputExamples/SimpleInput';
import simpleCode from '../GettingStarted/InputExamples/SimpleInput?raw';
import Verbose from '../GettingStarted/InputExamples/VerboseInput';
import verboseCode from '../GettingStarted/InputExamples/VerboseInput?raw';
import ErrorInput from '../GettingStarted/InputExamples/ErrorInput';
import errorInputCode from '../GettingStarted/InputExamples/ErrorInput?raw';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import { Link } from '../../Link';

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

const FieldProps = () => {
  return (
    <TableView aria-label="FieldProps table" overflowMode="wrap">
      <TableHeader>
        <Column showDivider width={200}>
          Name
        </Column>
        <Column showDivider>Example</Column>
        <Column showDivider width={400}>
          Description
        </Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <code>name</code>
          </Cell>
          <Cell>
            <Code>{`useField({ name: "name" })`}</Code>
          </Cell>
          <Cell>The unique name for the field.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>type</code>
          </Cell>
          <Cell>
            <Code>{`useField({ type: "text" })`}</Code>
          </Cell>
          <Cell>The type of the input element.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>initialValue</code>
          </Cell>
          <Cell>
            <Code>{`useField({ initialValue: "Joe" })`}</Code>
          </Cell>
          <Cell>The initial value of the field.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>defaultValue</code>
          </Cell>
          <Cell>
            <Code>{`useField({  defaultValue: "Joe" })`}</Code>
          </Cell>
          <Cell>The default value of the field.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>validate</code>
          </Cell>
          <Cell>
            <Code>{`useField({ validate: (value, values) => "Error!!" })`}</Code>
          </Cell>
          <Cell>A function to validate the field value.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>relevant</code>
          </Cell>
          <Cell>
            <Code>{`useField({ relevant: ({ formState }) => {} })`}</Code>
          </Cell>
          <Cell>A function to determine if the field is relevant.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>onNativeChange</code>
          </Cell>
          <Cell>
            <Code>{`useField({ onNativeChange: (fieldState, e) => {} })`}</Code>
          </Cell>
          <Cell>A callback function for handling native change events.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>onChange</code>
          </Cell>
          <Cell>
            <Code>{`useField({ onChange: (fieldState, e) => {} })`}</Code>
          </Cell>
          <Cell>A callback function for handling all change events.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>onBlur</code>
          </Cell>
          <Cell>
            <Code>{`useField({ onBlur: (fieldState, e) => {} })`}</Code>
          </Cell>
          <Cell>A callback function for handling blur events.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>onFocus</code>
          </Cell>
          <Cell>
            <Code>{`useField({ onFocus: (fieldState, e) => {} })`}</Code>
          </Cell>
          <Cell>A callback function for handling focus events.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>validateOn</code>
          </Cell>
          <Cell>
            <Code>{`useField({ validateOn: "change-blur" })`}</Code>
          </Cell>
          <Cell>
            Specifies when to run validation.{' '}
            <Link href="/api-reference/validation-control">Docs</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <code>validateWhen</code>
          </Cell>
          <Cell>
            <Code>{`useField({ validateWhen: ["confirmPassword"] })`}</Code>
          </Cell>
          <Cell>
            An array of field names for triggering validation.{' '}
            <Link href="/api-reference/validation-control">Docs</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <code>validateModified</code>
          </Cell>
          <Cell>
            <Code>{`useField({ validateModified: true })`}</Code>
          </Cell>
          <Cell>Will run validation only on modified values.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>validateOnMount</code>
          </Cell>
          <Cell>
            <Code>{`useField({ validateOnMount: true })`}</Code>
          </Cell>
          <Cell>Whether to run validation when the component mounts.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>keepState</code>
          </Cell>
          <Cell>
            <Code>{`useField({ keepState: true })`}</Code>
          </Cell>
          <Cell>Whether to keep the field state when it gets unmounted.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>keepStateIfRelevant</code>
          </Cell>
          <Cell>
            <Code>{`useField({ keepStateIfRelevant: true })`}</Code>
          </Cell>
          <Cell>Whether to keep the field state if it's still relevant.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>allowEmptyString</code>
          </Cell>
          <Cell>
            <Code>{`useField({ allowEmptyString: true })`}</Code>
          </Cell>
          <Cell>Whether to allow an empty string as a valid value.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>inputRef</code>
          </Cell>
          <Cell>
            <Code>{`useField({ inputRef: someRef })`}</Code>
          </Cell>
          <Cell>A reference to the input element.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>showErrorIfError</code>
          </Cell>
          <Cell>
            <Code>{`useField({ showErrorIfError: true })`}</Code>
          </Cell>
          <Cell>Whether to show an error if there's a validation error.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>showErrorIfTouched</code>
          </Cell>
          <Cell>
            <Code>{`useField({ showErrorIfTouched: true })`}</Code>
          </Cell>
          <Cell>Whether to show an error if the field has been touched.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>showErrorIfDirty</code>
          </Cell>
          <Cell>
            <Code>{`useField({ showErrorIfDirty: true })`}</Code>
          </Cell>
          <Cell>Whether to show an error if the field is dirty.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>relevanceWhen</code>
          </Cell>
          <Cell>
            <Code>{`useField({ relevanceWhen: [ "married" ] })`}</Code>
          </Cell>
          <Cell>An array of field names for triggering field relevance.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>relevanceDeps</code>
          </Cell>
          <Cell>
            <Code>{`useField({ relevanceDeps: [ some, stuff ] })`}</Code>
          </Cell>
          <Cell>An array of dependencies for field relevance.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>required</code>
          </Cell>
          <Cell>
            <Code>{`useField({ required: true })`}</Code>
          </Cell>
          <Cell>A string or boolean indicating if the field is required.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>parser</code>
          </Cell>
          <Cell>
            <Code>{`useField({ parser: (value) => {} })`}</Code>
          </Cell>
          <Cell>A function to parse the field value.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>formatter</code>
          </Cell>
          <Cell>
            <Code>{`useField({ formatter: (value) => {} })
// OR
useField({ formatter: "+1 (###)-###-####" })`}</Code>
          </Cell>
          <Cell>A formatter for the field value. </Cell>
        </Row>
      </TableBody>
    </TableView>
  );
};

const ReturnValues = () => {
  return (
    <TableView aria-label="Custom type table" overflowMode="wrap">
      <TableHeader>
        <Column showDivider width={200}>
          Name
        </Column>
        <Column showDivider>Type</Column>
        <Column showDivider>Description</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <code>fieldState</code>
          </Cell>
          <Cell>
            <Code>{`const { fieldState } = useField({ name: "name" })
const { value, error, touched } = fieldState;`}</Code>
          </Cell>
          <Cell>
            The state of the field.{' '}
            <Link href="/api-reference/fieldState">Docs</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <code>fieldApi</code>
          </Cell>
          <Cell>
            <Code>{`const { fieldState } = useField({ name: "name" })
const { setValue, setTouched } = fieldApi;`}</Code>
          </Cell>
          <Cell>
            The API for interacting with the field.{' '}
            <Link href="/api-reference/fieldApi">Docs</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <code>userProps</code>
          </Cell>
          <Cell>
            <Code>{`const { userProps } = useField({ name: "name" })
const { label, color } = userProps;`}</Code>
          </Cell>
          <Cell>User-defined props for the field.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>informed</code>
          </Cell>
          <Cell>
            <Code>{`const { informed } = useField({ name: "name" })`}</Code>
          </Cell>
          <Cell>An object containing event handlers and value.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>render</code>
          </Cell>
          <Cell>
            <Code>{`const { render } = useField({ name: "name" })`}</Code>
          </Cell>
          <Cell>A function to render the children.</Cell>
        </Row>
        <Row>
          <Cell>
            <code>ref</code>
          </Cell>
          <Cell>
            <Code>{`const { ref } = useField({ name: "name" })`}</Code>
          </Cell>
          <Cell>A reference to the field component.</Cell>
        </Row>
      </TableBody>
    </TableView>
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
      <Info>useField allows you to create your very own inputs.</Info>
      <Info type="notice">
        You do this once and then never have to do it agian.
      </Info>
      <SideBySide
        leftHeader={<Hint />}
        rightHeader={<h3>Code:</h3>}
        left={<Simple />}
        right={<Code links input1={simpleCode} />}
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
        right={<Code links input1={verboseCode} />}
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
        left={<ErrorInput />}
        right={<Code links input1={errorInputCode} />}
      />
      <hr />
      <h2 id="useField-parameters">Parameters:</h2>
      <Info>
        Here are all the parameters that this hook can take.
        <br />
        <br />
        Note: these parameters will mainly be seen the following format, as this
        hook is called inside your component definitions.
        <Code>{`// Typical usage
<Input parameter={value} /> 

// Inside of Input Component
useField({ parameter: value })`}</Code>
      </Info>
      <FieldProps />
      <hr />
      <h2 id="useField-return">Return Values:</h2>
      <Info>Here are all the values this hook returns.</Info>
      <ReturnValues />
      <br />
      <br />
    </>
  );
}
