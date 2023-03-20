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
import code from './Example.jsx?raw';
import Code from '../../../Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function FormState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Form Api</code>
      </h1>
      <Info>
        You can gain access to the forms api via `useFormApi` or `formApiRef`.
        Below we create some buttons to randomly set the color of our car using
        `formApi.setValue`
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={code} />}
      />
      <hr />
      <h2>Api</h2>

      <br />
      <br />
    </>
  );
}
