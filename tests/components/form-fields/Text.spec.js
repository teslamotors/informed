import React, { useState } from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text } from '../../../src';

describe('Text', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should update value when user types', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" />
      </Form>
    );
    let input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    input = wrapper.find('input').at(0);
    expect(input.props().value).to.equal('Hello!');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
  });

  it('should update value when user types and its not in the context of a form', () => {
    const wrapper = mount(
      <Text field="greeting" />
    );
    let input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    input = wrapper.find('input').at(0);
    expect(input.props().value).to.equal('Hello!');
  });

  it('should update value to number when user types into number field', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" type="number" />
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 1 } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 1 });
  });

  it('should call onChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="hello" onChange={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].target.value).to.deep.equal('world');
  });

  it('should call onBlur function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="hello" onBlur={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(spy.called).to.equal(true);
  });

  it('should expose the field name', () => {
    const wrapper = mount(
      <Form getApi={() => { }}>
        <Text field="greeting" />
      </Form>
    );
    expect(wrapper.find('input').prop('name')).to.equal('greeting');
  });

  it('onValueChange gets called when value changes', () => {
    const onValueChange = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="name" onValueChange={onValueChange} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Foo' } });
    expect(onValueChange.called).to.equal(true);
    expect(onValueChange.args[0][0]).to.equal('Foo');
  });

  it('should set initial value', () => {
    let savedApi;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" initialValue="foobarbaz" />
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobarbaz' });
  });

  it('should set initial value and mask them when initial values are passed with mask function', () => {
    let savedApi;
    const mask = (val) => `$${val}`;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" initialValue="foobarbaz" mask={mask} />
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: '$foobarbaz' });
  });

  it('should run mask when user types in text input and mask is passed', () => {
    let savedApi;
    const mask = value => `${value}!`;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" mask={mask} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'world!' });
  });

  it('should run NOT mask when user types in text input and mask is passed BUT maskOnBlur is also passed', () => {
    let savedApi;
    const mask = value => `${value}!`;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" mask={mask} maskOnBlur />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'world' });
  });

  it('should run maskWithCursorOffset when user types in text input and maskWithCursorOffset is passed', () => {
    let savedApi;
    const mask = value => ({ value: `${value}!`, offset: 1 });
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" maskWithCursorOffset={mask} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'world!' });
  });

  it('should run format and parse when user types in text input and format and parse are passed', () => {
    let savedApi;
    const format = value => `$${value}`;
    const parse = value => value.replace('$', '');
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" format={format} parse={parse} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'a' } });
    expect(wrapper.find('input').props().value).to.equal('$a');
    expect(savedApi.getState().values).to.deep.equal({ hello: 'a' });
    input.simulate('change', { target: { value: 'ab' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'ab' });
    expect(wrapper.find('input').props().value).to.equal('$ab');
    input.simulate('change', { target: { value: 'abc' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'abc' });
    expect(wrapper.find('input').props().value).to.equal('$abc');
  });

  it('should run formatter and parser when user types in text input and formatter and parser are passed', () => {
    let savedApi;
   
    const formatter = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" formatter={formatter} parser={parser} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '1' } });
    expect(wrapper.find('input').props().value).to.equal('+1 1');
    expect(savedApi.getState().values).to.deep.equal({ hello: '1' });

    input.simulate('change', { target: { value: '12' } });
    expect(wrapper.find('input').props().value).to.equal('+1 12');
    expect(savedApi.getState().values).to.deep.equal({ hello: '12' });
    
    input.simulate('change', { target: { value: '123' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123');
    expect(savedApi.getState().values).to.deep.equal({ hello: '123' });

    input.simulate('change', { target: { value: '1234' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-4');
    expect(savedApi.getState().values).to.deep.equal({ hello: '1234' });

    input.simulate('change', { target: { value: '+1 1' } });
    expect(wrapper.find('input').props().value).to.equal('+1 1');
    expect(savedApi.getState().values).to.deep.equal({ hello: '1' });
 
    input.simulate('change', { target: { value: '+1 123a' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-');
    expect(savedApi.getState().values).to.deep.equal({ hello: '123' });

    input.simulate('change', { target: { value: '+1 123abc' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-');
    expect(savedApi.getState().values).to.deep.equal({ hello: '123' });
  });

  it('should run formatter when user types in text input and ONLY formatter is passed', () => {
    let savedApi;
   
    const formatter = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" formatter={formatter} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '1' } });
    expect(wrapper.find('input').props().value).to.equal('+1 1');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 1' });

    input.simulate('change', { target: { value: '12' } });
    expect(wrapper.find('input').props().value).to.equal('+1 12');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 12' });
    
    input.simulate('change', { target: { value: '123' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 123' });

    input.simulate('change', { target: { value: '1234' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-4');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 123-4' });

    input.simulate('change', { target: { value: '+1 1' } });
    expect(wrapper.find('input').props().value).to.equal('+1 1');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 1' });
 
    input.simulate('change', { target: { value: '+1 123a' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 123-' });

    input.simulate('change', { target: { value: '+1 123abc' } });
    expect(wrapper.find('input').props().value).to.equal('+1 123-');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 123-' });
  });

  it('should run formatter on initial value', () => {
    let savedApi;
   
    const formatter = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" formatter={formatter} initialValue="1231231234" />
      </Form>
    );
    expect(wrapper.find('input').props().value).to.equal('+1 123-123-1234');
    expect(savedApi.getState().values).to.deep.equal({ hello: '+1 123-123-1234' });

  });

  it('should run formatter and parser on initial value', () => {
    let savedApi;
   
    const formatter = ['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" formatter={formatter} parser={parser} initialValue="1231231234" />
      </Form>
    );
    expect(wrapper.find('input').props().value).to.equal('+1 123-123-1234');
    expect(savedApi.getState().values).to.deep.equal({ hello: '1231231234' });

  });

  it('should run format and parse when user passes initial value and format and parse are passed', () => {
    let savedApi;
    const format = value => `$${value}`;
    const parse = value => value.replace('$', '');
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" format={format} parse={parse} initialValue="1234" />
      </Form>
    );
    expect(wrapper.find('input').props().value).to.equal('$1234');
    expect(savedApi.getState().values).to.deep.equal({ hello: '1234' });
  });

  it('should run mask when user types in text input and mask is passed', () => {
    let savedApi;
    const mask = value => `${value}!`;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" mask={mask} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'world!' });
  });

  it('other user props should update when they change', () => {
    const propsBefore = { disabled: false };
    const propsAfter = { disabled: true };
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        {({ formState }) => {
          const rest = formState.values.name === 'Foo' ? propsAfter : propsBefore;
          return (
            <Text
              field="name"
              {...rest}
            />
          );
        }}
      </Form>
    );
    expect(wrapper.find('input').props().disabled).to.equal(false);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Foo' } });
    expect(wrapper.find('input').props().disabled).to.equal(true);
  });

  it('type should change when external change occurs', () => {

    const Changer = () => {
      const [type, setType] = useState('text');
      const toggle = () => {
        setType((prev) => prev === 'text' ? 'password' : 'text');
      };
      return (
        <div>
          <Form>
            <Text
              field="name"
              type={type}
            />
          </Form>
          <button onClick={toggle}>ClickMe</button>
        </div>
      );
    };

    const wrapper = mount(
      <Changer />
    );
    expect(wrapper.find('input').props().type).to.equal('text');
    let button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('input').props().type).to.equal('password');
    button.simulate('click');
    expect(wrapper.find('input').props().type).to.equal('text');
  });

  it('should keep state when in a form and toggled', () => {

    let savedApi;

    const Toggle = () => {
      const [show, setShow] = useState(true);
      const toggle = () => setShow((prev) => !prev);
      return (
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          {show ? <Text field="greeting" keepState /> : null}
          <button type="button" onClick={toggle}>toggle</button>
        </Form>
      );
    };


    const wrapper = mount(
      <Toggle />
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hello!' } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
    const button = wrapper.find('button');
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
  });

  it('should NOT keep state when in a form and toggled with no keepState prop', () => {

    let savedApi;

    const Toggle = () => {
      const [show, setShow] = useState(true);
      const toggle = () => setShow((prev) => !prev);
      return (
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          {show ? <Text field="greeting" /> : null}
          <button type="button" onClick={toggle}>toggle</button>
        </Form>
      );
    };

    const wrapper = mount(
      <Toggle />
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hello!' } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
    const button = wrapper.find('button');
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({});
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({});
  });

  it('should set value to initial value if no value was added and keep state prop was passed when in a form and toggled', () => {

    let savedApi;

    const Toggle = () => {
      const [show, setShow] = useState(true);
      const toggle = () => setShow((prev) => !prev);
      return (
        <Form
          getApi={api => {
            savedApi = api;
          }}>
          {show ? <Text field="greeting" keepState initialValue="foobar" /> : null}
          <button type="button" onClick={toggle}>toggle</button>
        </Form>
      );
    };

    const wrapper = mount(
      <Toggle />
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
    const button = wrapper.find('button');
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
  });

  it('should set value to initial form value if no value was added and keep state prop was passed when in a form and toggled', () => {

    let savedApi;

    const Toggle = () => {
      const [show, setShow] = useState(true);
      const toggle = () => setShow((prev) => !prev);
      return (
        <Form
          initialValues={{ greeting: 'foobar' }}
          getApi={api => {
            savedApi = api;
          }}>
          {show ? <Text field="greeting" keepState /> : null}
          <button type="button" onClick={toggle}>toggle</button>
        </Form>
      );
    };

    const wrapper = mount(
      <Toggle />
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
    const button = wrapper.find('button');
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
    button.simulate('click');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobar' });
  });


});
