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
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function MultistepState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Multistep State</code>
      </h1>
      <h2>State Attributes</h2>
      <TableView
        aria-label="Example table for prop description and default"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider>Name</Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>current</Cell>
            <Cell>
              <code>"step2"</code>
            </Cell>
            <Cell>The current step we are on</Cell>
          </Row>
          <Row>
            <Cell>nextStep</Cell>
            <Cell>
              <code>"step3"</code>
            </Cell>
            <Cell>The next step</Cell>
          </Row>
          <Row>
            <Cell>previousStep</Cell>
            <Cell>
              <code>"step1"</code>
            </Cell>
            <Cell>The previous step</Cell>
          </Row>
        </TableBody>
      </TableView>
      <hr />
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
