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

export default function Formatter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Formmater</code>
      </h1>
      <Info>
        You can provide a pattern for formatting dates, credit cards, etc. To do
        this you can either provide a "Formatter String" or a "Formatter Array",
        where regular expression are used as a placeholder for the user input.
        <br />
        <br />
        As simple credit card pattern could be:
        <Code>const mask = '####-####-####-####';</Code>
        <br />
        OR
        <br />
        <Code>
          const formatter = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,
          /\d/, '-', /\d/, /\d/, /\d/, /\d/ '-', /\d/, /\d/, /\d/, /\d/];
        </Code>
      </Info>
      <h2>Formatter Strings Syntax</h2>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={20}>
            Character
          </Column>
          <Column showDivider width={130}>
            RegEx
          </Column>
          <Column showDivider width={220}>
            Example Formatter String
          </Column>
          <Column showDivider>Derived Formatter Array</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>#</code>
            </Cell>
            <Cell>
              <code>/\d/</code>
            </Cell>
            <Cell>
              <code>###-###</code>
            </Cell>
            <Cell>
              <code>[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]</code>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>*</code>
            </Cell>
            <Cell>
              <code>/[\w]/</code>
            </Cell>
            <Cell>
              <code>**-**</code>
            </Cell>
            <Cell>
              <code>[/[\w]/, /[\w]/, /[\w]/, '-', /[\w]/, /[\w]/, /[\w]/]</code>
            </Cell>
          </Row>
        </TableBody>
      </TableView>

      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
}
