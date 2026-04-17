import { SchemaFields, Debug } from 'informed';
import { Form, Button } from 'YourComponents';

const evaluate = ({ formState, formApi }) => {
  if (!formState.values.age || formState.values.age < 16) {
    formApi.clearValue('car');
    return { disabled: true };
  }
  return { disabled: false };
};

const schema = {
  type: 'object',
  properties: {
    age: {
      type: 'number',
      title: 'Age',
      'ui:control': 'input',
      'ui:props': {
        type: 'number'
      }
    },
    car: {
      type: 'string',
      title: 'Car',
      'ui:control': 'select',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'ui:props': {
        evaluate,
        evaluateWhen: ['age']
      }
    }
  }
};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <Button type="submit">Submit</Button>
    <Debug />
  </Form>
);

export default Schema;
