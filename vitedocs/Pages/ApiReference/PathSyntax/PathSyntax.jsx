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
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export default function PathSyntax() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Path Syntax</code>
      </h1>
      <Info>
        Every input in informed needs an associated field name. In its simplest
        form, field names are just strings. However, sometimes you may have some
        complex forms that require special ways of organizing your fields, this
        is where the special syntax comes in.
        <br />
        <br />
        Fields can be simple strings, strings that contain
        <code> "."</code>, and strings that contain <code>"[ ]"</code>, much
        like how you access and write to objects and arrays in javascript. Below
        are some examples of field names and what they resolve to in the forms
        values object. This syntax is commonly referred to as Java Script
        Property Access Notation or JSPAN.
      </Info>
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
