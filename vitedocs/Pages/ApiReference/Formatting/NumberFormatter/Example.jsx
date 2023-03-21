import { Debug, useFieldState, utils } from 'informed';
import { useMemo } from 'react';
import { Form, Button, Select, Input } from 'YourComponents';
import { currencyOptions, localeOptions } from './LocaleData';

// const localeOptions = [const localeOptions = [
//   { value: 'af-NA', label: 'Afrikaans (Namibia)' },
//   { value: 'af-ZA', label: 'Afrikaans (South Africa)' },
//   { value: 'af', label: 'Afrikaans' },
//   ...rest, shortened for readability
// ];

// const currencyOptions = [
//   {
//     value: 'EUR',
//     label: 'EUR',
//   },
//   {
//     value: 'AED',
//     label: 'AED',
//   },
//   ...rest, shortened for readability
// ]

const FormattedField = () => {
  const { value: locale } = useFieldState('locale');
  const { value: currency } = useFieldState('currency');

  // Generate mask from locale and currency
  const { formatter, parser } = useMemo(
    () =>
      utils.createIntlNumberFormatter(locale, {
        style: 'currency',
        currency
      }),
    [currency, locale]
  );

  return (
    <Input
      field="localeMask"
      label={`Locale Masked Field (${currency} currency)`}
      formatter={formatter}
      parser={parser}
      formatterDependencies={[locale, currency]}
      initialValue={3000.25}
    />
  );
};

const Example = () => (
  <Form>
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
    <Button type="submit">Submit</Button>
    <Debug values maskedValues />
  </Form>
);

export default Example;
