// Node.js require:
const Ajv = require('ajv');
// const ajv = new Ajv({ allErrors: true, jsonPointers: true });
// require('ajv-errors')(ajv);
const ajv = new Ajv({ allErrors: true });

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input',
      maxLength: 5
    },
    brother: {
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        bar: {
          type: 'number',
          title: 'First name',
          'ui:control': 'input',
          'input:props': {
            type: 'number'
          }
        }
      }
    },
    age: {
      type: 'number',
      title: 'First name',
      'ui:control': 'input',
      'input:props': {
        type: 'number'
      }
    },
    bio: {
      type: 'string',
      title: 'Bio',
      'ui:control': 'textarea'
    },
    authorize: {
      type: 'string',
      title: 'Authorize',
      'ui:control': 'checkbox',
      errorMessage: {
        type: 'Invalid format'
      }
    },
    color: {
      type: 'string',
      title: 'Color',
      'ui:control': 'select',
      oneOf: [
        {
          const: '',
          title: '- Select -',
          'input:props': {
            disabled: true
          }
        },
        { const: 'red', title: 'Red' },
        { const: 'black', title: 'Black' },
        { const: 'white', title: 'White' }
      ]
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'radio',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      default: null,
      'informed:props': {
        initialValue: 'm3'
      }
    },
    cars: {
      type: 'array',
      title: 'Cars',
      'ui:control': 'select',
      'input:props': {
        multiple: true,
        style: { height: '100px', width: '200px' }
      },
      items: {
        oneOf: [
          { const: 'tesla', title: 'Tesla' },
          { const: 'volvo', title: 'Volvo' },
          { const: 'audi', title: 'Audi' },
          { const: 'jeep', title: 'Jeep' }
        ]
      },
      'informed:props': {
        initialValue: ['jeep', 'tesla']
      }
    }
  }
};

const data = {
  model: 'm3',
  cars: ['jeep', 'tesla'],
  // name: 'Joe Puzzo',
  age: 26,
  bio: 'Hello',
  authorize: true,
  color: 'red'
};

const validate = ajv.compile(schema);
const valid = validate(data);

console.log(validate.errors);

console.log('KEYS', Object.keys(schema.properties));
