import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const formatter = '+1 ###-###-####';

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

const FormatParse = () => (
  <Form>
    <div>
      <Input
        name="phone"
        label="Phone Number:"
        formatter={formatter}
        parser={parser}
        initialValue="1231231234"
      />
      <Input
        name="maskedField"
        label="Word Formatting"
        formatter="$***-**(**)***"
        initialValue="HelloWorld"
      />
      <button type="submit">Submit</button>
      <Debug values maskedValues />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
