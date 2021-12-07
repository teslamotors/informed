import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import { Form, Input, Select, Debug, Elon } from '../../../src';

const validate = Elon.inspect([
  (value, values) => {
    if (values.country === 'US' && !value) {
      return 'this field should not be empty when in the US';
    }
  },
  (value, values) => {
    if (value && value.length < 2) {
      return 'this field should contain more than 2 characters';
    }
  }
]);

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
              <Select label="Country" name="country" initialValue="US">
                <option value="US">US</option>
                <option value="CA">Canada</option>
              </Select>
              <Input label="Some field" name="some-field" validate={validate} />
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
