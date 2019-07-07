import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, ArrayField, Scope } from '../../src';

describe('ArrayField', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should add unigue fields when add is clicked', () => {
    const wrapper = mount(
      <Form>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:<Text field={field} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );
    const add = wrapper.find('#add');
    add.simulate('click');
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    const labels = wrapper.find('label');
    expect(labels.length).to.equal(2);
    expect(labels.at(0).key()).to.not.equal(labels.at(1).key());
  });

  it('should remove correct field when remove is clicked', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:<Text field={field} />
                  <button type="button" onClick={remove} id="remove">
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );
    const add = wrapper.find('#add');
    add.simulate('click');
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(4);
    inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: ['Jeff'] });
    inputs.at(1).simulate('change', { target: { value: 'Joe' } });
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Jeff', 'Joe']
    });
    inputs.at(2).simulate('change', { target: { value: 'Bob' } });
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Jeff', 'Joe', 'Bob']
    });
    inputs.at(3).simulate('change', { target: { value: 'Bill' } });
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Jeff', 'Joe', 'Bob', 'Bill']
    });
    let remove = wrapper.find('#remove').at(1);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Jeff', 'Bob', 'Bill']
    });
    remove = wrapper.find('#remove').at(0);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Bob', 'Bill']
    });
    remove = wrapper.find('#remove').at(1);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(savedApi.getState().values).to.deep.equal({ siblings: ['Bob'] });
    remove = wrapper.find('#remove').at(0);
    remove.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(0);
    expect(savedApi.getState().values).to.deep.equal({});
  });

  it('should update value when user types', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:<Text field={field} id={i} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );
    const add = wrapper.find('#add');
    add.simulate('click');
    const inputs = wrapper.find('input');
    inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: ['Jeff'] });
  });

  it('should update values, adding fields when required', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:<Text field={field} id={i} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );

    savedApi.setValue('siblings', ['Michael', 'Joe', 'Bob']);
    const add = wrapper.find('#add');
    add.simulate('click');
    const inputs = wrapper.find('input');
    expect(inputs.length).to.equal(4);
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Michael', 'Joe', 'Bob']
    });
    inputs.at(3).simulate('change', { target: { value: 'abcd' } });
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Michael', 'Joe', 'Bob', 'abcd']
    });
  });

  it('should update values, removing fields when required', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ArrayField field="siblings">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:<Text field={field} id={i} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );

    savedApi.setValue('siblings', ['Michael', 'Joe', 'Bob']);
    const add = wrapper.find('#add');
    add.simulate('click');
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(4);
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Michael', 'Joe', 'Bob']
    });
    savedApi.setValue('siblings', ['Michael2']);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(savedApi.getState().values).to.deep.equal({
      siblings: ['Michael2']
    });
    savedApi.setValue('siblings', []);
    add.simulate('click');
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(savedApi.getState().values).to.deep.equal({});
    inputs.at(0).simulate('change', { target: { value: 'abcd' } });
    expect(savedApi.getState().values).to.deep.equal({ siblings: ['abcd'] });
  });

  it('should validate on submit with array level validation', () => {
    const validate = (values, length) => {
      if (length < 3) {
        return 'You must have at least three friends.';
      }
    };

    const validateLength = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ArrayField field="siblings" validate={validate}>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button" id="add">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:<Text field={field} validate={validateLength} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    );

    const button = wrapper.find('button').at(1);
    button.simulate('submit');
    expect(savedApi.getState().errors).to.eql({
      siblings: 'You must have at least three friends.'
    });
    const add = wrapper.find('#add');
    add.simulate('click');
    add.simulate('click');
    add.simulate('click');
    const inputs = wrapper.find('input');
    inputs.at(0).simulate('change', { target: { value: 'asdf' } });
    inputs.at(1).simulate('change', { target: { value: 'asdg' } });
    inputs.at(2).simulate('change', { target: { value: 'asdh' } });
    button.simulate('submit');
    expect(savedApi.getState().errors).to.eql({
      siblings: [
        'Field must be at least five characters',
        'Field must be at least five characters',
        'Field must be at least five characters'
      ]
    });
    inputs.at(0).simulate('change', { target: { value: 'asdfj' } });
    inputs.at(1).simulate('change', { target: { value: 'asdgj' } });
    inputs.at(2).simulate('change', { target: { value: 'asdhj' } });
    button.simulate('submit');
    expect(savedApi.getState().errors).to.eql({});
  });

  describe('More ArrayField tests', () => {
    const sandbox = sinon.createSandbox();

    beforeEach(() => {
      sandbox.restore();
    });

    function getComponent() {
      return (
        <>
          <ArrayField field="siblings">
            {({ add, fields, addWithInitialValue }) => (
              <React.Fragment>
                <button onClick={() => add()} type="button" id="add">
                  Add Sibling
                </button>
                <button
                  onClick={() => addWithInitialValue({ name: 'test' })}
                  type="button"
                  id="add-preset">
                  Add-preset
                </button>
                {fields.map(({ field, key, remove, initialValue }) => (
                  <label key={key}>
                    <h5>{field}</h5>
                    <Text
                      field={`${field}.name`}
                      initialValue={initialValue && initialValue.name}
                    />
                    <Text field={`${field}.age`} />
                    <button className="remove" onClick={remove}>
                      Remove
                    </button>
                  </label>
                ))}
              </React.Fragment>
            )}
          </ArrayField>
          <button type="submit">Submit</button>
        </>
      );
    }

    it('should add unigue fields when add is clicked', () => {
      const wrapper = mount(
        <Form initialValues={{ siblings: [] }}>{getComponent()}</Form>
      );

      let inputs = wrapper.find('input');
      expect(inputs.length).to.equal(0);

      const add = wrapper.find('#add');
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(4);

      const labels = wrapper.find('label');
      expect(labels.length).to.equal(2);
      expect(labels.at(0).text()).to.not.equal(labels.at(1).text());
    });

    it('should remove correct field when remove is clicked', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{
            siblings: [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }]
          }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      let inputs = wrapper.find('input');
      expect(inputs.length).to.equal(6);
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });

      let remove = wrapper.find('.remove').at(1);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(4);
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'Jeff' }, { name: 'test3' }]
      });

      remove = wrapper.find('.remove').at(0);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'test3' }]
      });

      remove = wrapper.find('.remove').at(0);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(0);
      expect(savedApi.getState().values).to.deep.equal({});

      const add = wrapper.find('#add-preset');
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'test' }]
      });
      inputs.at(0).simulate('change', { target: { value: 'test 2' } });
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'test 2' }]
      });
    });

    it('should update value when user types', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{ siblings: [] }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      const add = wrapper.find('#add');
      add.simulate('click');
      const inputs = wrapper.find('input');
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'Jeff' }]
      });
    });

    it('should update value when set via formApi', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{ siblings: [] }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      const add = wrapper.find('#add');
      add.simulate('click');
      const inputs = wrapper.find('input');
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'Jeff' }]
      });

      savedApi.setValue('siblings[0].name', 'Test');

      expect(savedApi.getState().values).to.deep.equal({
        siblings: [{ name: 'Test' }]
      });
    });
  });

  describe('Scoped ArrayField', () => {
    const sandbox = sinon.createSandbox();

    beforeEach(() => {
      sandbox.restore();
    });

    function getComponent() {
      return (
        <Scope scope="foo">
          <ArrayField field="siblings">
            {({ add, fields, addWithInitialValue }) => (
              <React.Fragment>
                <button onClick={() => add()} type="button" id="add">
                  Add Sibling
                </button>
                <button
                  onClick={() => addWithInitialValue({ name: 'test' })}
                  type="button"
                  id="add-preset">
                  Add-preset
                </button>
                {fields.map(({ field, key, remove, initialValue }) => (
                  <label key={key}>
                    <h5>{field}</h5>
                    <Text
                      field={`${field}.name`}
                      initialValue={initialValue && initialValue.name}
                    />
                    <Text field={`${field}.age`} />
                    <button className="remove" onClick={remove}>
                      Remove
                    </button>
                  </label>
                ))}
              </React.Fragment>
            )}
          </ArrayField>
          <button type="submit">Submit</button>
        </Scope>
      );
    }

    it('should add unigue fields when add is clicked', () => {
      const wrapper = mount(
        <Form initialValues={{ foo: { siblings: [] } }}>{getComponent()}</Form>
      );

      let inputs = wrapper.find('input');
      expect(inputs.length).to.equal(0);

      const add = wrapper.find('#add');
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(4);

      const labels = wrapper.find('label');
      expect(labels.length).to.equal(2);
      expect(labels.at(0).text()).to.not.equal(labels.at(1).text());
    });

    it('should remove correct field when remove is clicked', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{
            foo: {
              siblings: [
                { name: 'test1' },
                { name: 'test2' },
                { name: 'test3' }
              ]
            }
          }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      let inputs = wrapper.find('input');
      expect(inputs.length).to.equal(6);
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });

      let remove = wrapper.find('.remove').at(1);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(4);
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'Jeff' }, { name: 'test3' }] }
      });

      remove = wrapper.find('.remove').at(0);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'test3' }] }
      });

      remove = wrapper.find('.remove').at(0);
      remove.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(0);
      expect(savedApi.getState().values).to.deep.equal({});

      const add = wrapper.find('#add-preset');
      add.simulate('click');
      inputs = wrapper.find('input');
      expect(inputs.length).to.equal(2);
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'test' }] }
      });
      inputs.at(0).simulate('change', { target: { value: 'test 2' } });
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'test 2' }] }
      });
    });

    it('should update value when user types', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{ foo: { siblings: [] } }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      const add = wrapper.find('#add');
      add.simulate('click');
      const inputs = wrapper.find('input');
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'Jeff' }] }
      });
    });

    it('should update value when set via formApi', () => {
      let savedApi;

      const wrapper = mount(
        <Form
          initialValues={{ foo: { siblings: [] } }}
          getApi={api => {
            savedApi = api;
          }}>
          >{getComponent()}
        </Form>
      );

      const add = wrapper.find('#add');
      add.simulate('click');
      const inputs = wrapper.find('input');
      inputs.at(0).simulate('change', { target: { value: 'Jeff' } });
      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'Jeff' }] }
      });

      savedApi.setValue('foo.siblings[0].name', 'Test');

      expect(savedApi.getState().values).to.deep.equal({
        foo: { siblings: [{ name: 'Test' }] }
      });
    });
  });
});
