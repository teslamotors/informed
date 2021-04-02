import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import * as Informed from '../../../src';
import dracula from 'prism-react-renderer/themes/dracula';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const imports = {
  informed: Informed,
  react: React
};

const scope = { imports };

let code = `
const { Form, SchemaFields, FormState } = imports['informed'];

const onSubmit = (values) => {
  window.alert(JSON.stringify(values));
}

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'First Name',
      'ui:control': 'input',
      'input:props': {
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
          'input:props': {
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
      'informed:props': {
        initialValue: 'm3'
      }
    },
  }
};

const Component = () => {
  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <SchemaFields />
      <button type="submit">Submit</button>
      <FormState />
    </Form>
  );
};

render( <Component /> );
`;

const Playground = () => {
  return (
    <LiveProvider code={code} scope={scope} noInline={true} theme={dracula}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '2rem', flex: 2 }}>
          <LiveEditor />
        </div>
        <div style={{ marginRight: '2rem', flex: 1 }}>
          <LiveError className="language-none" />
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
};

export default withDocs(readme, Playground);
