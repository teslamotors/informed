import { Info } from '../../../Info';
import { SideBySide } from '../../../SideBySide';
import Code from '../../../YourComponents/Code';
import ScopeExample from './RelevanceScopedExample';
import scopedCode from './RelevanceScopedExample.jsx?raw';

export const ScopedRelevance = () => {
  return (
    <>
      <h1>Scoped Relevance</h1>
      <Info>
        Relevance's when function gives you access to the scope and the formApi
        so you can easily determine relevance when you are within a scoped
        context.
        <br />
        <strong>Note:</strong> the same example as the basic relevance one but
        this time its scoped to child.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<ScopeExample />}
        right={<Code links input1={scopedCode} />}
      />
    </>
  );
};
