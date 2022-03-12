import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { CodeBlock } from '../../utils/CodeBlock';

let code = `
import { Form, SchemaFields, Debug } from 'informed';
import './style.css';

const onSubmit = ({values}) => {
  window.alert(JSON.stringify(values));
}

const schema = {
  type: 'object',
  required: ['color'],
  properties: {
    name: {
      type: 'string',
      title: 'First Name',
      'ui:control': 'input',
      'ui:props': {
        placeholder: 'Elon'
      }
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        {
          const: '',
          title: '- Select -',
          'ui:props': {
            disabled: true
          }
        },
        { const: 'red', title: 'Red' },
        { const: 'black', title: 'Black' },
        { const: 'white', title: 'White' }
      ]
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'radio',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'ui:props': {
        initialValue: 'm3'
      }
    },
  }
};

export default function App() {
  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <SchemaFields />
      <button type="submit">Submit</button>
    </Form>
  );
};

`;

const Playground = () => {
  return <CodeBlock code={code} />;
};

export default withDocs(readme, Playground);
