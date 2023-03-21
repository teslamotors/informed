import { Debug, utils } from 'informed';
import { Form, Input, Button } from 'YourComponents';

// Custom format to parts function ( replaces commas with underscores )
const formatToParts = (value, locale, opts) => {
  const formatter = new Intl.NumberFormat(locale, opts);
  const parts = formatter.formatToParts(value);
  parts.forEach(p => {
    if (p.type == 'group') p.value = '_';
  });
  return parts;
};

const Example = () => {
  // Generate formatter & parser from INTL options
  const { formatter, parser } = utils.createIntlNumberFormatter(
    'en-US',
    {
      style: 'currency',
      currency: 'USD'
    },
    { formatToParts }
  );

  return (
    <Form>
      <Input
        field="localeMask"
        label={`Locale Masked Field (USD currency)`}
        formatter={formatter}
        parser={parser}
        initialValue={3000.25}
      />
      <Button type="submit">Submit</Button>
      <Debug values maskedValues />
    </Form>
  );
};

export default Example;
