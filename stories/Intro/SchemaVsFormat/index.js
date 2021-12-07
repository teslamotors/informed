import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { SchemaFields, Form, Input, Select } from '../../../src';

const codeHeight = '1250px';

const onSubmit = ({ values }) => console.log(data);

const schema = {
  type: 'object',
  required: ['age'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      'ui:props': {
        placeholder: 'Elon'
      }
    },
    age: {
      type: 'number',
      title: 'Age',
      errorMessage: {
        required: 'Age Required'
      }
    },
    phone: {
      type: 'string',
      title: 'Phone',
      'ui:props': {
        formatter: '+1 (###)-###-####'
      }
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        { const: 'md', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      'ui:props': {
        initialValue: 'ms'
      }
    }
  }
};

const GettingStarted = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '1', marginRight: '1rem', maxWidth: '500px' }}>
      <h4>Format Based (JSX)</h4>
      <Form onSubmit={onSubmit} autocomplete="off">
        <Input name="name" label="Name" placeholder="Elon" />
        <Input name="age" type="number" label="Age" required="Age Required" />
        <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Select name="car" label="Car" initialValue="ms">
          <option value="ms">Model S</option>
          <option value="m3">Model 3</option>
          <option value="mx">Model X</option>
          <option value="my">Model Y</option>
        </Select>
        <button type="submit">Submit</button>
      </Form>
      <pre style={{ height: codeHeight }}>
        <code className="language-jsx">
          {`
import { SchemaFields, Form, Input, Select } from 'informed';

const onSubmit = ({values}) => console.log(values);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input name="name" label="Name" placeholder="Elon" />
    <Input name="age" type="number" label="Age" required="Age Required" />
    <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select name="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
`}
        </code>
      </pre>
    </div>
    <div style={{ flex: '1', maxWidth: '500px' }}>
      <h4>Schema Based</h4>
      <Form schema={schema} onSubmit={onSubmit}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
      <pre style={{ height: codeHeight }}>
        <code className="language-jsx">
          {`
import { Form } from 'informed';

const onSubmit = ({values}) => console.log(values);

const schema = {
  type: 'object',
  required: ['age'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      'ui:props': {
        placeholder: 'Elon'
      },
    },
    age: {
      type: 'number',
      title: 'Age',
      errorMessage: {
        required: 'Age Required'
      }
    },
    phone: {
      type: 'string',
      title: 'Phone',
      'ui:props': {
        formatter: "+1 (###)-###-####"
      },
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        { const: 'md', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' },
      ],
      'ui:props': {
        initialValue: "ms"
      },
    },
  }
};

const ExampleForm = () => {
  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <SchemaFields />
      <button type="submit">Submit</button>
    </Form>
  )
}
`}
        </code>
      </pre>
    </div>
  </div>
);

export default withDocs(readme, GettingStarted);
