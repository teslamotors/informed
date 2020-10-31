import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import { Form, SchemaFields } from '../src';

describe('Schema', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a form with a text field', () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        }
      }
    };

    const wrapper = mount(
      <Form schema={schema}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );
    expect(wrapper.find('form').length).to.equal(1);
    expect(wrapper.find('input').prop('name')).to.equal('name');
  });

  it('should render a form with all types of fields', () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        age: {
          type: 'number',
          title: 'Age',
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
          'ui:control': 'checkbox'
        },
        color: {
          type: 'array',
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
          default: null
        },
        cars: {
          type: 'array',
          title: 'Cars',
          'ui:control': 'select',
          'input:props': {
            multiple: true
          },
          items: {
            oneOf: [
              { const: 'tesla', title: 'Tesla' },
              { const: 'volvo', title: 'Volvo' },
              { const: 'audi', title: 'Audi' },
              { const: 'jeep', title: 'Jeep' }
            ]
          }
        }
      }
    };

    const wrapper = mount(
      <Form schema={schema}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );
    expect(wrapper.find('form').length).to.equal(1);
    const inputs = wrapper.find('input');
    const textAreas = wrapper.find('textarea');
    const selects = wrapper.find('select');

    expect(inputs.length).to.equal(7);
    expect(textAreas.length).to.equal(1);
    expect(selects.length).to.equal(2);

    // console.log(wrapper.debug());
    expect(textAreas.at(0).prop('name')).to.equal('bio');

    expect(inputs.at(0).prop('name')).to.equal('name');
    expect(inputs.at(0).prop('type')).to.equal(undefined);

    expect(inputs.at(1).prop('name')).to.equal('age');
    expect(inputs.at(1).prop('type')).to.equal('number');

    expect(inputs.at(2).prop('name')).to.equal('authorize');
    expect(inputs.at(2).prop('type')).to.equal('checkbox');

    expect(inputs.at(3).prop('type')).to.equal('radio');
    expect(inputs.at(3).prop('value')).to.equal('ms');

    expect(inputs.at(4).prop('type')).to.equal('radio');
    expect(inputs.at(4).prop('value')).to.equal('m3');

    expect(inputs.at(5).prop('type')).to.equal('radio');
    expect(inputs.at(5).prop('value')).to.equal('mx');

    expect(inputs.at(6).prop('type')).to.equal('radio');
    expect(inputs.at(6).prop('value')).to.equal('my');

    let options = selects.at(0).find('option');
    expect(options.length).to.equal(4);

    expect(options.at(0).prop('value')).to.equal('');
    expect(options.at(0).text()).to.equal('- Select -');

    expect(options.at(1).prop('value')).to.equal('red');
    expect(options.at(1).text()).to.equal('Red');

    expect(options.at(2).prop('value')).to.equal('black');
    expect(options.at(2).text()).to.equal('Black');

    expect(options.at(3).prop('value')).to.equal('white');
    expect(options.at(3).text()).to.equal('White');

    options = selects.at(1).find('option');
    expect(options.length).to.equal(4);

    expect(options.at(0).prop('value')).to.equal('tesla');
    expect(options.at(0).text()).to.equal('Tesla');

    expect(options.at(1).prop('value')).to.equal('volvo');
    expect(options.at(1).text()).to.equal('Volvo');

    expect(options.at(2).prop('value')).to.equal('audi');
    expect(options.at(2).text()).to.equal('Audi');

    expect(options.at(3).prop('value')).to.equal('jeep');
    expect(options.at(3).text()).to.equal('Jeep');

    // expect(selects.at(0).prop('value')).to.equal('radio');
  });
});
