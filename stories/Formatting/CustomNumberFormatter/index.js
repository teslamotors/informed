import React, { useMemo } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Select, Input, utils, Debug } from '../../../src';

const FormattedField = () => {
  // Generate the formatter and parser
  const { formatter, parser } = useMemo(() => {
    // Custom format to parts function ( replaces commas with underscores )
    const formatToParts = (value, locale, opts) => {
      const formatter = new Intl.NumberFormat(locale, opts);
      const parts = formatter.formatToParts(value);
      parts.forEach(p => {
        if (p.type == 'group') p.value = '_';
      });
      return parts;
    };

    return utils.createIntlNumberFormatter(
      'en-US',
      {
        style: 'currency',
        currency: 'USD'
      },
      {
        formatToParts
      }
    );
  });

  return (
    <Input
      field="localeMask"
      label={`Locale Masked Field USD currency)`}
      formatter={formatter}
      parser={parser}
      initialValue={3000.25}
    />
  );
};

const FormatParse = () => (
  <Form>
    <div>
      <FormattedField />
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
