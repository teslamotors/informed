import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import Code from '../../../YourComponents/Code';
import ArrayExample from './RelevanceArrayExample';
import arrayCode from './RelevanceArrayExample.jsx?raw';

export const ArrayFieldRelevance = () => {
  return (
    <>
      <h1>Relevance Inside ArrayFields</h1>
      <Info>
        Scoped relevance comes especially in handy when using array fields.
        <br />
        <strong>Note:</strong> This is the same example as the basic relevance
        one but this time its in an array field.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<ArrayExample />}
        right={<Code links input1={arrayCode} />}
      />
    </>
  );
};
