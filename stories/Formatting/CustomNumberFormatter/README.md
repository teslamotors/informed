# Custom Number Formatter

You can customise the formatter by passing in a custom formatToParts. See below where we use the native one
but replace commas with underscores `$3,000.25 --> $3_000.25`

<!-- STORY -->

```jsx
import { Form, Select, Text, utils } from 'informed';

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
      <Debug values maskedValues />
    </div>
  </Form>
);
```
