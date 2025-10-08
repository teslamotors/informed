import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function RelevanceOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Relevance Optimization</code>
      </h1>
      <Info>
        By default, the relevant function will evaluate on every single form state change.
        This can lead to performance issues in complex forms with many fields.
        <br />
        <br />
        The <code>relevanceWhen</code> prop allows you to optimize relevance evaluation 
        by specifying which fields should trigger the relevance function. This prevents 
        unnecessary re-evaluations when irrelevant fields change.
        <br />
        <br />
        <strong>Instructions:</strong>
        <br />
        1. Click the checkbox to toggle the "Show Info?" field
        <br />
        2. Notice how the first field (with <code>relevanceWhen</code>) only increments 
        by 1, while the second field (without optimization) increments by 5
        <br />
        3. This demonstrates how <code>relevanceWhen</code> prevents unnecessary 
        relevance evaluations
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
