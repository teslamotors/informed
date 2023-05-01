import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';
import Code from '../../../YourComponents/Code';
import { Link } from '../../../Link';

export const UseForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>useForm</code>
      </h1>
      <Info>
        The useForm hook will allow you create your own form components.
      </Info>
      <Info type="notice">
        You do this once and then never have to do it agian.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <hr />
      <h2 id="useForm-parameters">Parameters:</h2>
      <Info>
        Here are all the parameters that this hook can take.
        <br />
        <br />
        Note: these parameters will mainly be seen the following format, as this
        hook is called inside your component definition.
        <Code>{`// Typical usage
<Form parameter={value} /> 

// Inside of Form Component
useForm({ parameter: value })`}</Code>
      </Info>

      <TableView aria-label="Form props table" overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={220}>
            Name
          </Column>
          <Column showDivider width={450}>
            Example
          </Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>children</code>
            </Cell>
            <Cell>
              <Code>{`<Form>...children...</Form>`}</Code>
            </Cell>
            <Cell>
              A function that is given the form api and form state as props
              parameter FAAC ( Function As A Child ). Or normal JSX children
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>onSubmit</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ onSubmit: ({ values }) => {} })`}</Code>
            </Cell>
            <Cell>
              A function that gets called when form is submitted successfully.
              The function receives the formState as a parameter
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>initialValues</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ initialValues: { name: 'Joe' } })`}</Code>
            </Cell>
            <Cell>
              Use this if you want to populate the form with initial values.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>onChange</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ onChange: ({ values }) => {} })`}</Code>
            </Cell>
            <Cell>
              Function that gets called when form updates. Function receives the
              formState as a parameter.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>onValueChange</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ onValueChange: ({ values }) => {} })`}</Code>
            </Cell>
            <Cell>
              Function that gets called when a fields value updates. Function
              receives the formState as a parameter.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>dontPreventDefault</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ dontPreventDefault: true })`}</Code>
            </Cell>
            <Cell>
              The default is to always "preventDefault" when a form submits.
              Pass this to disable "preventingDefault". You would, for example,
              pass this in when you want to use a good old form submission using
              action="/foo.php" on your form.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>onSubmitFailure</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ onSubmitFailure: ({ errors }) => {} })`}</Code>
            </Cell>
            <Cell>
              Function that gets called when submission fails due to errors.
              Function will receive the formState.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>validate</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ validate: (values) => 'Ahh!!' })`}</Code>
            </Cell>
            <Cell>
              Function that gets called when form is attempting to submit.
              Function accepts the values as a parameter and must return either
              an error or undefined.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>validateFields</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ validateFields: (values) => ({ name: 'Ahh!!' }) })`}</Code>
            </Cell>
            <Cell>
              Function that gets called when form is attempting to submit.
              Function accepts the values as a parameter and must return an
              object where the key is the field and the value is an error or
              undefined
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>validationSchema</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ yupSchema: YupSchema })`}</Code>
            </Cell>
            <Cell>A yup schema to perform validation</Cell>
          </Row>
          <Row>
            <Cell>
              <code>allowEmptyStrings</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ allowEmptyStrings: true })`}</Code>
            </Cell>
            <Cell>
              Enable empty strings in the form values ( by default when you
              backspace everything in a text field it will remove the value from
              the values )
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>preventEnter</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ preventEnter: true })`}</Code>
            </Cell>
            <Cell>Prevents the enter key from submitting the form</Cell>
          </Row>
          <Row>
            <Cell>
              <code>onReset</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ onReset: ({ values }) => {} })`}</Code>
            </Cell>
            <Cell>Function that gets called when form is reset.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>schema</code>
            </Cell>
            <Cell>
              <Code>{`// See schema docs `}</Code>
            </Cell>
            <Cell>A valid JSON Schema used for validation OR Rendering</Cell>
          </Row>
          <Row>
            <Cell>
              <code>ajv</code>
            </Cell>
            <Cell>
              <Code>{`// See schema docs `}</Code>
            </Cell>
            <Cell>Instance of AJV for informed to use to validate</Cell>
          </Row>
          <Row>
            <Cell>
              <code>focusOnInvalid</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ focusOnInvalid: true })`}</Code>
            </Cell>
            <Cell>
              Will put focus on the first invalid field when form is submitted
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>disabled</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ disabled: true })`}</Code>
            </Cell>
            <Cell>Will disable the entire form</Cell>
          </Row>
          <Row>
            <Cell>
              <code>validateOnMount</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ validateOnMount: true })`}</Code>
            </Cell>
            <Cell>Will perform validation when the form mounts</Cell>
          </Row>
          <Row>
            <Cell>
              <code>validateModified</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ validateModified: true })`}</Code>
            </Cell>
            <Cell>Will perform validation only on modified fields</Cell>
          </Row>
          <Row>
            <Cell>
              <code>keepState</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ keepState: true })`}</Code>
            </Cell>
            <Cell>Whether to keep the field state when it gets unmounted.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>keepStateIfRelevant</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ keepStateIfRelevant: true })`}</Code>
            </Cell>
            <Cell>Whether to keep the field state if it's still relevant.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>validateOn</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ validateOn: 'change' })`}</Code>
            </Cell>
            <Cell>
              Will perform validation accoring to these{' '}
              <Link href="/api-reference/validation-control">Docs</Link> Note:
              field level <code>validateOn</code> will override form level
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>errorMessage</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ errorMessage: { required: 'Required!' } })`}</Code>
            </Cell>
            <Cell>
              Will override the default error messages for this error type see
              these <Link href="/api-reference/validation-messages">Docs</Link>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>formApiRef</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ formApiRef: ref })`}</Code>
            </Cell>
            <Cell>Allows you to access the formApi via a react ref</Cell>
          </Row>
          <Row>
            <Cell>
              <code>adapter</code>
            </Cell>
            <Cell>
              <Code>{`useForm({ adapter: { 'string': Input } })`}</Code>
            </Cell>
            <Cell>Allows you to set what gets rendered from JSON schema</Cell>
          </Row>
        </TableBody>
      </TableView>
    </>
  );
};
