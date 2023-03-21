import { Debug, utils } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const Example = () => {
  // Generate formatter & parser from INTL options
  const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
    style: 'currency',
    currency: 'USD'
  });

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
