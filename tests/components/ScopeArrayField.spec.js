import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, Scope, ScopeArrayField } from '../../src';

describe('ScopeArrayField', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  function getComponent(siblings) {
    return (
      <>
        <ScopeArrayField field="siblings">
          {({ add, fields }) => (
            <React.Fragment>
              <button onClick={() => add()} type="button" id="add">
                Add Sibling
              </button>
              <button onClick={() => add({name: "test"})} type="button" id="add-preset">
                Add-preset
              </button>
              {fields.map( ({ field, key, remove }, i) => (
                <Scope key={key} scope={field}>
                  <label>{field}</label>
                  <Text field="name"/>
                  <Text field="age"/>
                  <button className="remove" onClick={remove}>Remove</button>
                </Scope>
              ))}
            </React.Fragment>
          )}
        </ScopeArrayField>
        <button type="submit">Submit</button>
      </>
    )
  }

  it('should add unigue fields when add is clicked', () => {
    const wrapper = mount(
      <Form
        initialValues={{siblings: []}}
      >
        {getComponent()}
      </Form>
    )

    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(0);

    const add = wrapper.find('#add');
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(4);

    const scopes = wrapper.find('Scope');
    expect(scopes.length).to.equal(2);
    expect(scopes.at(0).key()).to.not.equal(scopes.at(1).key());

    const labels = wrapper.find('label');
    expect(labels.length).to.equal(2);
    expect(labels.at(0).text()).to.not.equal(labels.at(1).text());
  });

  it('should remove correct field when remove is clicked', () => {
    let savedApi;

    const wrapper = mount(
      <Form
        initialValues={{siblings: [{name: "test1"}, {name: "test2"}, {name: "test3"}]}}
        getApi={api => {
          savedApi = api;
        }}>
      >
        {getComponent()}
      </Form>
    )

    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(6);
    inputs.at(0).simulate('change', { target: { value: 'Jeff' } });

    let remove = wrapper.find('.remove').at(1);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(4);
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: "Jeff"}, {name: "test3"}] });

    remove = wrapper.find('.remove').at(0);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: "test3"}] });

    remove = wrapper.find('.remove').at(0);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(0);
    expect(savedApi.getState().values).to.deep.equal({});

    const add = wrapper.find('#add-preset');
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: "test"}] });
    inputs.at(0).simulate('change', { target: { value: 'test 2' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: "test 2"}] });
  });

  it('should update value when user types', () => {
    let savedApi;

    const wrapper = mount(
      <Form
        initialValues={{siblings: []}}
        getApi={api => {
          savedApi = api;
        }}>
      >
        {getComponent()}
      </Form>
    )

    const add = wrapper.find('#add');
    add.simulate('click');
    const inputs = wrapper.find('input');
    inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: 'Jeff'}] });
  })

  it('should throw when no initial value', () => {
    expect(() => {
      mount(<Form>{getComponent()}</Form>)
    }).to.throw(Error, "initialValue required for ScopeArrayField siblings");
  })

  it('should throw when non-array initial value', () => {
    expect(() => {
      mount(<Form initialValues={{siblings: "test"}}>{getComponent()}</Form>)
    }).to.throw(Error, "initialValue should be an array for ScopeArrayField siblings");
  })

  it('should update value when set via formApi', () => {
    let savedApi;

    const wrapper = mount(
      <Form
        initialValues={{siblings: []}}
        getApi={api => {
          savedApi = api;
        }}>
      >
        {getComponent()}
      </Form>
    )

    const add = wrapper.find('#add');
    add.simulate('click');
    const inputs = wrapper.find('input');
    inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: 'Jeff'}] });

    savedApi.setValue("siblings[0].name", "Test")

    expect(savedApi.getState().values).to.deep.equal({ siblings: [{name: 'Test'}] });
  })

});
