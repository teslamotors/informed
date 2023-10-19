import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import { Link } from '../../../Link';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function FormState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Form State</code>
      </h1>
      <Info>
        Lets see an example of a single input. Note the <code>Debug</code>{' '}
        component and how we can view everything inside of the form state.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <hr />
      <h2>State Attributes</h2>
      <TableView aria-label="Custom data table" overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={180}>
            Attribute
          </Column>
          <Column showDivider width={250}>
            Example
          </Column>
          <Column showDivider>Initial Value</Column>
          <Column showDivider width={600}>
            Description
          </Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>values</code>
            </Cell>
            <Cell>
              <Code>{`{ name: 'Joe' }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is the value
              entered or selected.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>maskedValues</code>
            </Cell>
            <Cell>
              <Code>{`{ name: 'Joe' }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is the value
              entered or selected after formatting has occurred.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>initialValues</code>
            </Cell>
            <Cell>
              <Code>{`{ name: 'Joe' }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is an initial
              value for that field.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>touched</code>
            </Cell>
            <Cell>
              <Code>{`{ name: true }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is true or
              undefined (touched or untouched). Submitting the form will cause
              all fields to be touched.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>errors</code>
            </Cell>
            <Cell>
              <Code>{`{ name: 'Invalid' }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is the error
              associated with that field.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>dirt</code>
            </Cell>
            <Cell>
              <Code>{`{ name: true }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is true or
              undefined (dirty or pristine).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>focused</code>
            </Cell>
            <Cell>
              <Code>{`{ name: true }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pair where key is the form field and value is true or
              undefined (focused or unfocused). PAST TENSE! (true if it was
              focused at one point)
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>modified</code>
            </Cell>
            <Cell>
              <Code>{`{ name: true }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Key value pairs of fields which differ from their initial values
              where key is the form field and value is the current value of the
              field.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>data</code>
            </Cell>
            <Cell>
              <Code>{`{ address: ['foo'] }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              Data returned by inputs' asynchronous gatherData calls (see
              GoogleApi Input).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>memory</code>
            </Cell>
            <Cell>
              <Code>{`{ name: 'Joe' }`}</Code>
            </Cell>
            <Cell>
              <code>{`{}`}</code>
            </Cell>
            <Cell>
              A memory that stores most recent values for an input if{' '}
              <code>remember</code> is passed to a field.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>invalid</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>false</Cell>
            <Cell>
              Boolean that is true when the form is invalid. A form is invalid
              when any of its inputs fails its validation function (if there are
              errors).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>valid</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>true</Cell>
            <Cell>Opposite of invalid.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>pristine</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>true</Cell>
            <Cell>
              Boolean that is true when the form is pristine. A form is pristine
              when no values have changed.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>dirty</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>false</Cell>
            <Cell>Boolean that is true when pristine is false.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>disabled</code>
            </Cell>
            <Cell>
              <Code>false</Code>
            </Cell>
            <Cell>false</Cell>
            <Cell>If the form is disabled.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>submitted</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>false</Cell>
            <Cell>
              Boolean that is true when the form has been successfully
              submitted.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>submitting</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>false</Cell>
            <Cell>
              Boolean that is true when the form is submitting (may happen
              during async validation).
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>validating</code>
            </Cell>
            <Cell>
              <Code>1</Code>
            </Cell>
            <Cell>0</Cell>
            <Cell>
              Integer that represents how many fields are currently
              asynchronously validating.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>gathering</code>
            </Cell>
            <Cell>
              <Code>1</Code>
            </Cell>
            <Cell>0</Cell>
            <Cell>
              Integer that represents how many fields are currently
              asynchronously gathering data{' '}
              <Link href="/examples/google-api">(see GoogleApi Input)</Link>
            </Cell>
          </Row>
        </TableBody>
      </TableView>
      <br />
      <br />
    </>
  );
}
