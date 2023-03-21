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
import Example from './RelevanceExample';
import exampleCode from './RelevanceExample.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';
import ScopeExample from './RelevanceScopedExample';
import scopedCode from './RelevanceScopedExample.jsx?raw';
import ArrayExample from './RelevanceArrayExample';
import arrayCode from './RelevanceArrayExample.jsx?raw';

export const Relevance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Relevant</code>
      </h1>
      <Info>
        Relevant allows you to conditionally render fields. Below is a simple
        example the shows or hides a field depending on your age.
        <br />
        <strong>Hint:</strong> Try changing the age to something greater than 20
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <hr />
      <h2>Scoped Relevance</h2>
      <Info>
        Relevance's when function gives you access to the scope and the formApi
        so you can easily determine relevance when you are within a scoped
        context.
        <br />
        <strong>Note:</strong> This is the same example as before but this time
        its scoped to child.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<ScopeExample />}
        right={<Code input1={scopedCode} />}
      />
      <hr />
      <h2>Array Fields</h2>
      <Info>
        Scoped relevance comes especially in handy when using array fields.
        <br />
        <strong>Note:</strong> This is the same example as the first one but
        this time its in an array field.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<ArrayExample />}
        right={<Code input1={arrayCode} />}
      />
      <hr />
      <h2>Api</h2>
      <br />
      <br />
    </>
  );
};
