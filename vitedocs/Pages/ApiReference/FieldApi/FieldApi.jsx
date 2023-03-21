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

export default function FieldApi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Field Api</code>
      </h1>
      <Info>Field Api allows you to control a specific field.</Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <hr />
      <h2>Api</h2>
      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Attribute
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>getValue</code>
            </Cell>
            <Cell>
              <Code>{`getValue() // => "Hello"`}</Code>
            </Cell>
            <Cell>Function that returns the field value.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValue</code>
            </Cell>
            <Cell>
              <Code>
                <Code>{`setValue("Hello")`}</Code>
              </Code>
            </Cell>
            <Cell>
              Function that sets the field value and optionally accepts an
              event.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValueQuietly</code>
            </Cell>
            <Cell>
              <Code>{`setValueQuietly("Hello")`}</Code>
            </Cell>
            <Cell>
              Function that sets the field value without triggering any event
              handlers.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getTouched</code>
            </Cell>
            <Cell>
              <Code>{`getTouched() // => true`}</Code>
            </Cell>
            <Cell>
              Function that returns whether the field has been touched.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setTouched</code>
            </Cell>
            <Cell>
              <Code>{`setTouched(true, event)`}</Code>
            </Cell>
            <Cell>
              Function that sets the touched state of the field and optionally
              accepts an event.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getError</code>
            </Cell>
            <Cell>
              <Code>{`getError() // => "Invalid Input"`}</Code>
            </Cell>
            <Cell>Function that returns the field error.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>setError</code>
            </Cell>
            <Cell>
              <Code>{`setError("Invalid Input", event)`}</Code>
            </Cell>
            <Cell>
              Function that sets the field error and optionally accepts an
              event.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>getFocused</code>
            </Cell>
            <Cell>
              <Code>{`getFocused() // => false`}</Code>
            </Cell>
            <Cell>
              Function that returns whether the field is currently focused.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>setFocused</code>
            </Cell>
            <Cell>
              <Code>{`setFocused(true, event)`}</Code>
            </Cell>
            <Cell>
              Function that sets the focused state of the field and optionally
              accepts an event.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>reset</code>
            </Cell>
            <Cell>
              <Code>{`reset()`}</Code>
            </Cell>
            <Cell>
              Function that resets the field state and optionally accepts reset
              options.
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>validate</code>
            </Cell>
            <Cell>
              <Code>{`validate()`}</Code>
            </Cell>
            <Cell>Function that triggers the field validation.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>getDirty</code>
            </Cell>
            <Cell>
              <Code>{`getDirty() // => true`}</Code>
            </Cell>
            <Cell>Function that returns whether the field is dirty.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>getPristine</code>
            </Cell>
            <Cell>
              <Code>{`getPristine() // => true`}</Code>
            </Cell>
            <Cell>Function that returns whether the field is pristine.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>getMaskedValue</code>
            </Cell>
            <Cell>
              <Code>{`getMaskedValue() // => "$3,169.25"`}</Code>
            </Cell>
            <Cell>Function that returns the field's masked value.</Cell>
          </Row>
        </TableBody>
      </TableView>
      <br />
      <br />
    </>
  );
}
