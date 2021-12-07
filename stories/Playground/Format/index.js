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
const { Form, Text, Select, RadioGroup, Radio, Debug } = imports['informed'];

const onSubmit = ({values}) => {
  window.alert(JSON.stringify(values));
}

const Component = () => {
  return (
    <Form onSubmit={onSubmit}>
      <Text field="name" label="First Name" placeholder="Elon"/>
      <Select field="color" label="Color">
          <option value="" disabled>
            - Select -
          </option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
      </Select>
      <RadioGroup field="model" label="Model" initialValue="m3">
          <label>Model S <Radio value="ms" /></label>
          <label>Model 3 <Radio value="m3" /></label>
          <label>Model X <Radio value="mx" /></label>
          <label>Model Y <Radio value="my" /></label>
      </RadioGroup>
      <button type="submit">
        Submit
      </button>
      <Debug/>
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
