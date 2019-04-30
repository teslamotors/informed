import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Select, Option } from '../../../src';

describe('Text', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should update value when user selects', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Select field="status">
          <Option value="" disabled>
            Select One...
          </Option>
          <Option value="single">Single</Option>
          <Option value="relationship">Relationship</Option>
          <Option value="complicated">Complicated</Option>
        </Select>
      </Form>
    );
    const input = wrapper.find('select').at(0);
    const option = wrapper.find('option').at(1).instance();
    option.selected = true;
    input.simulate('change');
    expect(savedApi.getState().values).to.deep.equal({ status: 'single' });
  });

  it('should set initial value', () => {
    let savedApi;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Select field="status" initialValue="single">
          <Option value="" disabled>
              Select One...
          </Option>
          <Option value="single">Single</Option>
          <Option value="relationship">Relationship</Option>
          <Option value="complicated">Complicated</Option>
        </Select>
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ status: 'single' });
  });

  describe('Mutiple', () => {
    it('should update value when user selects', () => {
      let savedApi;
      const wrapper = mount(
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          <Select
            field="colors"
            multiple
            style={{ height: '100px', width: '200px' }}>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="purple">Purple</Option>
          </Select>
        </Form>
      );
      const input = wrapper.find('select').at(0);
      const option = wrapper.find('option').at(1).instance();
      option.selected = true;
      input.simulate('change');
      expect(savedApi.getState().values).to.deep.equal({ colors: ['green'] });
    });

    it('should update value when user selects two things', () => {
      let savedApi;
      const wrapper = mount(
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          <Select
            field="colors"
            multiple
            style={{ height: '100px', width: '200px' }}>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="purple">Purple</Option>
          </Select>
        </Form>
      );
      const input = wrapper.find('select').at(0);
      const option1 = wrapper.find('option').at(1).instance();
      option1.selected = true;
      const option2 = wrapper.find('option').at(4).instance();
      option2.selected = true;
      input.simulate('change');
      expect(savedApi.getState().values).to.deep.equal({ colors: ['green', 'orange'] });
    });
  
    it('should set initial value', () => {
      let savedApi;
      mount(
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          <Select
            field="colors"
            initialValue={['red']}
            multiple
            style={{ height: '100px', width: '200px' }}>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="purple">Purple</Option>
          </Select>
        </Form>
      );
      expect(savedApi.getState().values).to.deep.equal({ colors: ['red'] });
    });
  });
  

});
