import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Debug } from '../../../src';

const Example = () => (
  <Form>
    <Input name="username" label="username:" />
    <Input name="friends[0]" label="friend[0]:" />
    <Input name="siblings.1" label="siblings.1:" />
    <Input name="parents[0].name" label="parents[0].name" />
    <Input name="foo.bar[0].baz[1]" label="foo.bar[0].baz[1]" />
    <button type="submit">submit</button>
    <Debug values />
  </Form>
);

// const schema = {
//   properties: {
//     bio: {
//       type: 'string',
//       title: 'Enter bio:',
//       'ui:control': 'textarea',
//     },
//   },
// };

// const TextAreaExample = () => <Form schema={schema} />;

export default withDocs(readme, Example);
