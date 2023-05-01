import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function ArrayFieldItem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>ArrayField.Item</code>
      </h1>
      <Info>
        Informed gives you access to two components for array fields:
        <Code>{`<ArrayField>
<ArrayField.Item>`}</Code>
        <br />
        There are many cool features these give you:
      </Info>

      {/* ------------------ Array Field Api ---------------- */}
      <h1>
        <code>ArrayFieldApi</code>
      </h1>

      <Code>
        {`<ArrayField name="friends">
  {({ add, reset, swap, addWithInitialValue }) => <></>}
</ArrayField>
        `}
      </Code>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={220}>
            Function
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>add</code>
            </Cell>
            <Cell>
              <Code>add()</Code>
            </Cell>
            <Cell>Adds a new item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>remove</code>
            </Cell>
            <Cell>
              <Code>remove(1)</Code>
            </Cell>
            <Cell>Removes item at index</Cell>
          </Row>
          <Row>
            <Cell>
              <code>reset</code>
            </Cell>
            <Cell>
              <Code>reset()</Code>
            </Cell>
            <Cell>Resets the array field</Cell>
          </Row>
          <Row>
            <Cell>
              <code>swap</code>
            </Cell>
            <Cell>
              <Code>swap(1,2)</Code>
            </Cell>
            <Cell>Swaps two array fields</Cell>
          </Row>
          <Row>
            <Cell>
              <code>addWithInitialValue</code>
            </Cell>
            <Cell>
              <Code>{`addWithInitialValue({ name: 'test' })`}</Code>
            </Cell>
            <Cell>Adds a new item with an initial value</Cell>
          </Row>
        </TableBody>
      </TableView>

      {/* ------------------ Array Field Item Api ---------------- */}
      <h1>
        <code>ArrayFieldItemApi</code>
      </h1>
      <Code>
        {`<ArrayField.Items>{({ remove, reset, setValue }) => <></>}</ArrayField.Items>`}
      </Code>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Function
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>remove</code>
            </Cell>
            <Cell>
              <Code>remove()</Code>
            </Cell>
            <Cell>removes this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>reset</code>
            </Cell>
            <Cell>
              <Code>reset()</Code>
            </Cell>
            <Cell>Resets all field within this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>setValue</code>
            </Cell>
            <Cell>
              <Code>setValue('name', 'Joe')</Code>
            </Cell>
            <Cell>Sets the value for the field within this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>resetField</code>
            </Cell>
            <Cell>
              <Code>resetField('name')</Code>
            </Cell>
            <Cell>Resets the given field within this item</Cell>
          </Row>
        </TableBody>
      </TableView>
      {/* ------------------ Array Field Item Into ---------------- */}
      <h1>
        <code>ArrayFieldItemInfo</code>
      </h1>
      <Code>
        {`<ArrayField.Items>{({ name, index }) => <></>}</ArrayField.Items>`}
      </Code>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Name
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>name</code>
            </Cell>
            <Cell>
              <Code>"friends[0]"</Code>
            </Cell>
            <Cell>the field name for this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>index</code>
            </Cell>
            <Cell>
              <Code>0</Code>
            </Cell>
            <Cell>the index for this item</Cell>
          </Row>
        </TableBody>
      </TableView>

      {/* ------------------ Array Field Item State ---------------- */}
      <h1>
        <code>ArrayFieldItemState</code>
      </h1>
      <Code>
        {`const {
  key,
  name,
  index,
  parent,
  values,
  errors,
  touched,
  initialValue
} = useArrayFieldItemState();`}
      </Code>

      <h3>Example:</h3>
      <Code>
        {`{
  "key": "d9f97dee-7c39-4bce-a348-a404e75417a6",
  "name": "friends[0]",
  "index": 0,
  "parent": "friends",
  "values": {
    "age": 27
  },
  "errors": {
    "name": "This field is required"
  },
  "touched": true,
  "initialValue": {
    "name": "Joe",
    "age": 27
  }
}`}
      </Code>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Name
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>name</code>
            </Cell>
            <Cell>
              <Code>"friends[0]"</Code>
            </Cell>
            <Cell>the field name for this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>index</code>
            </Cell>
            <Cell>
              <Code>0</Code>
            </Cell>
            <Cell>the index for this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>key</code>
            </Cell>
            <Cell>
              <Code>"d9f97dee..."</Code>
            </Cell>
            <Cell>
              a unique identifier for this field (used mostly internally)
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>parent</code>
            </Cell>
            <Cell>
              <Code>"friends"</Code>
            </Cell>
            <Cell>parent name "friends[0]" parent is "friends"</Cell>
          </Row>
          <Row>
            <Cell>
              <code>values</code>
            </Cell>
            <Cell>
              <Code>{`{ age: 27 }`}</Code>
            </Cell>
            <Cell>the values within this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>errors</code>
            </Cell>
            <Cell>
              <Code>{`{ name: "Required Field" }`}</Code>
            </Cell>
            <Cell>the errors within this item</Cell>
          </Row>
          <Row>
            <Cell>
              <code>touched</code>
            </Cell>
            <Cell>
              <Code>true</Code>
            </Cell>
            <Cell>if a field within this item has been touched</Cell>
          </Row>
          <Row>
            <Cell>
              <code>initialValue</code>
            </Cell>
            <Cell>
              <Code>{`{ name: "Joe", age: 27}`}</Code>
            </Cell>
            <Cell>the initial value for this item</Cell>
          </Row>
        </TableBody>
      </TableView>

      {/* ------------------ Array Field Item State Example ---------------- */}

      <h2>Example:</h2>

      <Info>
        For each feature a visualization will be shown based on this example
        array:
        <Code>{`[ { a, b }, { a, b }, { a, b } ]`}</Code>
        <br />
        An example state for this array looks like
        <Code>
          {`[{ a: 'Hello', b: 'World' }, { a: 'Hi', b: 'US' }, { a: 'Yoo', b: 'Bro' }];`}
        </Code>
      </Info>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={420}>
            Scenario
          </Column>
          <Column showDivider width={260}>
            Visualization
          </Column>
          <Column showDivider>How</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              I want to reset the <strong>b</strong> field for the second item
            </Cell>
            <Cell>
              {`[ { a, b }, { a, `}
              <strong>b</strong>
              {` }, { a, b } ]`}
            </Cell>
            <Cell>
              <Code>arrayFieldItemApi.resetField('b')</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>
              I want to set the <strong>a</strong> field's value for the second
              item to "Yo"
            </Cell>
            <Cell>
              {`[ { a, b }, { `}
              <strong>a</strong>
              {`, b }, { a, b } ]`}
            </Cell>
            <Cell>
              <Code>arrayFieldItemApi.setValue('a', 'Yo')</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>I want to remove the second item</Cell>
            <Cell>
              {`[ { a, b }, `}
              <strong>{`{ a, b }`}</strong>
              {`, { a, b } ]`}
            </Cell>
            <Cell>
              <Code>arrayFieldItemApi.remove()</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>I want to reset the second item</Cell>
            <Cell>
              {`[ { a, b }, `}
              <strong>{`{ a, b }`}</strong>
              {`, { a, b } ]`}
            </Cell>
            <Cell>
              <Code>arrayFieldItemApi.reset()</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>I want to add a new item</Cell>
            <Cell>
              {`[ { a, b }, { a, b }, { a, b }, `}
              <strong>{`{ a, b }`}</strong>
              {` ]`}
            </Cell>
            <Cell>
              <Code>arrayFieldApi.add()</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>I want to add a new item with the name "Foo"</Cell>
            <Cell>
              {`[ { a, b }, { a, b }, { a, b }, `}
              <strong>{`{ a, b }`}</strong>
              {` ]`}
            </Cell>
            <Cell>
              <Code>{`arrayFieldApi.addWithInitialValue({..})`}</Code>
            </Cell>
          </Row>
          <Row>
            <Cell>I want to reset the whole array field</Cell>
            <Cell>
              <strong>{`[ { a, b }, { a, b }, { a, b } ]`}</strong>
            </Cell>
            <Cell>
              <Code>arrayFieldApi.reset()</Code>
            </Cell>
          </Row>
        </TableBody>
      </TableView>

      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
