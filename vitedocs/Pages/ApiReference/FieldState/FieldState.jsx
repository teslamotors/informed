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

export default function FieldState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Field State</code>
      </h1>
      <Info>
        Field state is simply the state of a specific field.
        <br />
        <strong>Note: </strong> in the following example how when you type in
        one input it does not cause the others to render.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <hr />
      <h2>State Attributes</h2>
      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={180}>
            Attribute
          </Column>
          <Column showDivider>Examples</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>value</code>
            </Cell>
            <Cell>
              <Code>"hello", 3569.25</Code>
            </Cell>
            <Cell>The value of the field.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>maskedValue</code>
            </Cell>
            <Cell>
              <Code>"HELLO", "$3,569.25"</Code>
            </Cell>
            <Cell>The value of the field after formatting has occurred.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>error</code>
            </Cell>
            <Cell>
              <Code>"Invalid input."</Code>{' '}
            </Cell>
            <Cell>The error associated with the field.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>modified</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>True if the field value differs from its initial value.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>touched</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>True if the field has been touched or interacted with.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>pristine</code>
            </Cell>
            <Cell>
              <Code>false</Code>
            </Cell>
            <Cell>
              True if the field value has not changed from its initial value.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>dirty</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>
              True if the field value has changed from its initial value.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>valid</code>
            </Cell>
            <Cell>
              <Code>false</Code>
            </Cell>
            <Cell>True if the field has no validation errors.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>invalid</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>True if the field has validation errors.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>showError</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>True if the field should display its error message.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>validating</code>
            </Cell>
            <Cell>
              <Code>false</Code>
            </Cell>
            <Cell>
              True if the field is currently asynchronously validating.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>focused</code>
            </Cell>
            <Cell>
              <Code>false</Code>
            </Cell>
            <Cell>
              True if the field is currently focused or has been focused at some
              point.
            </Cell>
          </Row>
        </TableBody>
      </TableView>
      <br />
      <br />
    </>
  );
}
