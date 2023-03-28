import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import Code from '../../../YourComponents/Code';
import Example from './RelevanceSchemaExample';
import exampleCode from './RelevanceSchemaExample.jsx?raw';

export const RelevanceSchema = () => {
  return (
    <>
      <h1>
        <code>Schema Relevance</code>
      </h1>
      <Info>
        You can use pure JSON schema to hide or show fields.
        <br />
        <br />
        <strong>Hint:</strong> Try changing the age to something greater than 20
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
    </>
  );
};
