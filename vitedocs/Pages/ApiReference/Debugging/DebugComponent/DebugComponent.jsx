import { useEffect } from 'react';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import { Link } from '../../../../Link';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function DebugComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Debug Component</code>
      </h1>
      <Info>
        Sometimes you just want to see whats going on with the form state. This
        can easily be achieved by rendering Debug components.
      </Info>
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
