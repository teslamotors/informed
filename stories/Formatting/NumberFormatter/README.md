# Format and Parse

<!-- STORY -->

```jsx
import { Form, Select, Text, utils, useFieldState } from 'informed';

const localeOptions = [const localeOptions = [
  { value: 'af-NA', label: 'Afrikaans (Namibia)' },
  { value: 'af-ZA', label: 'Afrikaans (South Africa)' },
  { value: 'af', label: 'Afrikaans' },
  // ...rest, shortened for readability
];

const currencyOptions = [
  {
    value: 'EUR',
    label: 'EUR',
  },
  {
    value: 'AED',
    label: 'AED',
  },
  // ...rest, shortened for readability
]

const FormattedField = () => {
  const { value: locale } = useFieldState('locale');
  const { value: currency } = useFieldState('currency');

  // Generate mask from locale and currency
  const { formatter, parser } = useMemo(
    () => {
      if (locale && currency) {
        return utils.createIntlNumberFormatter(locale, {
          style: 'currency',
          currency
        });
      }
      return {};
    },
    [currency, locale]
  );

  return (
    <Text
      field="localeMask"
      label={`Locale Masked Field (${currency} currency)`}
      formatter={formatter}
      parser={parser}
      formatterDependencies={[locale, currency]}
      initialValue={3000.25}
    />
  );
};

const FormatParse = () => (
  <Form>
    <div>
      <Select
        label="Locale"
        field="locale"
        options={localeOptions}
        initialValue="en-US"
      />
      <Select
        label="Currency"
        field="currency"
        options={currencyOptions}
        initialValue="USD"
      />
      <FormattedField />
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);
```
