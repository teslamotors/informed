import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={({ values }) =>
            window.alert(JSON.stringify(values, null, 2))
          }>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Input name="color" label="Color:" validate={validate} />
              <Input name="food" label="Food:" validate={validate} />
              <Input name="car" label="Car:" validate={validate} />
              <button type="submit">Submit</button>
            </div>
            <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
              <Debug values errors invalid valid />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withDocs(readme, () => <SimpleValidation />);
