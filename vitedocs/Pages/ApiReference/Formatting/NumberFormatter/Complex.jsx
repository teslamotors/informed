import { Debug, utils } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const Example = () => {
  const usFormatter = utils.createIntlNumberFormatter('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    style: 'decimal'
  });

  const egFormatter = utils.createIntlNumberFormatter('ar-EG', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  const nlFormatter = utils.createIntlNumberFormatter('nl-BE', {
    style: 'decimal',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  });

  return (
    <Form>
      <Input
        field="en-US"
        label={`Locale Masked Field with decimal (en-US)`}
        formatter={usFormatter.formatter}
        parser={usFormatter.parser}
        initialValue={3000.25}
      />
      <Input
        field="ar-EG"
        label={`Locale Masked Field with decimal (ar-EG)`}
        formatter={egFormatter.formatter}
        parser={egFormatter.parser}
        initialValue={3000.25}
      />
      <Input
        field="nl-BE"
        label={`Locale Masked Field with decimal (nl-BE)`}
        formatter={nlFormatter.formatter}
        parser={nlFormatter.parser}
        initialValue={3000.25}
      />
      <Button type="submit">Submit</Button>
      <Debug values maskedValues />
    </Form>
  );
};

export default Example;
