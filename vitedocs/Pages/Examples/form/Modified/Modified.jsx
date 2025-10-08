import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function Modified() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Modified</code>
      </h1>
      <Info>
        Sometimes you want to know what fields have been changed from their initial values. 
        Informed provides a <code>modified</code> object that tracks which fields have been 
        modified since the form was initialized.
        <br />
        <br />
        The <code>modified</code> object contains:
        <br />
        • <code>true</code> for fields that have been changed
        <br />
        • <code>false</code> for fields that remain unchanged
        <br />
        • <code>undefined</code> for fields that don't exist in initialValues
        <br />
        <br />
        This is useful for:
        <br />
        • Optimizing API calls by only sending changed data
        <br />
        • Showing visual indicators for modified fields
        <br />
        • Implementing "unsaved changes" warnings
        <br />
        • Conditional form submission logic
        <br />
        <br />
        Try changing the values in the form below and see how the modified object updates 
        in the Debug component.
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
