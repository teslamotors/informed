import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Enzyme, { mount } from 'enzyme';

import { Form, Text } from '../../src';

describe('Form', () => {
  const sandbox = sinon.createSandbox();

  const checkFormApi = api => {
    expect(api).to.have.own.property('getError');
    expect(api).to.have.own.property('setError');
    expect(api).to.have.own.property('getTouched');
    expect(api).to.have.own.property('setTouched');
    expect(api).to.have.own.property('getValue');
    expect(api).to.have.own.property('setValue');
    expect(api).to.have.own.property('getState');
    expect(api).to.have.own.property('setState');
    expect(api).to.have.own.property('setValues');
    expect(api).to.have.own.property('submitForm');
    expect(api).to.have.own.property('reset');
  };

  afterEach(() => {
    sandbox.restore();
  });

  const checkFormState = state => {
    const formState = {
      values: {},
      touched: {},
      errors: {},
      asyncErrors: {},
      pristine: true,
      dirty: false,
      invalid: false
    };
    expect(JSON.stringify(state)).to.deep.equal(JSON.stringify(formState));
  };

  const getState = state => {
    const defaultState = {
      values: {},
      touched: {},
      errors: {},
      asyncErrors: {},
      pristine: true,
      dirty: false,
      invalid: false
    };
    return Object.assign({}, defaultState, state);
  };

  beforeEach(() => {
    sandbox.restore();
  });

  it('should display large form', () => {
    const wrapper = mount(
      <Form>
        <Text field="foo" />
        <Text field="bar" />
        <Text field="baz" />
        <Text field="raz" />
        <Text field="taz" />
        <Text field="naz" />
        <Text field="laz" />
        <Text field="ahh" />
        <Text field="baa" />
        <Text field="zaa" />
        <Text field="taa" />
        <Text field="faa" />
        <Text field="laa" />
        <Text field="bru" />
      </Form>
    );
    expect(wrapper.find(Text).length).to.equal(14);
  });

  it('should call onChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form onChange={spy}>{() => <Text field="greeting" />}</Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].values).to.deep.equal({ greeting: 'hello' });
  });

  it('does not apply unnecessary props to the form element', () => {
    const excludedProps = {
      preSubmit: true,
      getApi: () => {},
      dontPreventDefault: true,
      onSubmitFailure: true,
      initialValues: true,
      onValueChange: true,
      onChange: () => {}
    };
    const wrapper = mount(
      <Form {...excludedProps}>{() => <Text field="greeting" />}</Form>
    );
    const input = wrapper.find('form');
    expect(input.props()).to.not.have.any.keys(...Object.keys(excludedProps));
  });

  it('should call onValueChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form onValueChange={spy}>{() => <Text field="greeting" />}</Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
  });

  it('should call onSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form onSubmit={spy}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
      done();
    });
  });

  it('onSubmit function should get called with clone of values', done => {
    const spy = sandbox.spy();
    let savedApi;
    const wrapper = mount(
      <Form
        onSubmit={spy}
        getApi={api => {
          savedApi = api;
        }}
      >
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
      spy.args[0][0].greeting = 'Bad';
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'Bad' });
      expect(savedApi.getState().values).to.deep.equal({ greeting: 'hello' });
      done();
    });
  });

  it('should call reset function when reset button is clicked', done => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}
        initialValues={{ greeting: 'world' }}
      >
        <Text field="greeting" />
        <button type="reset">Reset</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    const button = wrapper.find('button');
    button.simulate('reset');
    setImmediate(() => {
      expect(savedApi.getState().values).to.deep.equal({ greeting: 'world' });
      done();
    });
  });

  it('should call preventDefault when the form is submitted', done => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form onSubmit={() => {}}>
        <button type="submit">Submit</button>
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit', {
      preventDefault: spy
    });
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      done();
    });
  });

  it('should NOT preventDefault dontPreventDefault is passed in', done => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form onSubmit={() => {}} dontPreventDefault>
        <button type="submit">Submit</button>
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit', {
      preventDefault: spy
    });
    setImmediate(() => {
      expect(spy.called).to.equal(false);
      done();
    });
  });

  it('should NOT call onSubmit function with values when the invalid form is submitted', done => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const validate = greeting =>
      greeting === 'hello!' ? 'ooo thats no good' : null;
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi}>
        <Text field="greeting" validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('greeting', 'hello!');
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(false);
      done();
    });
  });

  it('should NOT call onSubmit function with values when an asyncrounously invalid form is submitted', done => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const asyncValidate = greeting =>
      greeting === 'hello!' ? 'ooo thats no good' : null;
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi}>
        <Text field="greeting" asyncValidate={asyncValidate} />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('greeting', 'hello!');
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(false);
      done();
    });
  });

  it('should call onSubmitFailure function with errors when the invalid form is submitted', done => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const validate = greeting =>
      greeting === 'hello!' ? 'ooo thats no good' : null;
    const wrapper = mount(
      <Form onSubmitFailure={spy} getApi={setApi}>
        <Text field="greeting" validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('greeting', 'hello!');
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'ooo thats no good' });
      done();
    });
  });

  it('should call onSubmitFailure function with asyncErrors when the invalid form is submitted', done => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const asyncValidate = greeting =>
      greeting === 'hello!' ? 'ooo thats no good' : null;
    const wrapper = mount(
      <Form onSubmitFailure={spy} getApi={setApi}>
        <Text field="greeting" asyncValidate={asyncValidate} />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('greeting', 'hello!');
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][1]).to.deep.equal({ greeting: 'ooo thats no good' });
      done();
    });
  });

  it('should call preSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form preSubmit={spy}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    const button = wrapper.find('button');
    button.simulate('submit');
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
      done();
    });
  });

  // SUBMITS TESTS

  it('getApi should give the passed function the formApi', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    checkFormApi(api);
  });

  it('should set initial values when initial values are passed', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(
      <Form getApi={setApi} initialValues={{ greeting: 'hello' }}>
        {() => <Text field="greeting" />}
      </Form>
    );
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' });
  });

  it('setState should set the formState', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setState({ values: { greeting: 'hello' } });
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' });
  });

  it('setValues should set the forms values', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setValues({ greeting: 'hello' });
    expect(api.getState().values).to.deep.equal({ greeting: 'hello' });
  });

  it('fieldExists should return true when field exists', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    const result = api.fieldExists('greeting');
    expect(result).to.be.true;
  });

  it('fieldExists should return false when field does not exists', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    const result = api.fieldExists('notgreeting');
    expect(result).to.be.false;
  });

  it('reset should reset the form to its initial state', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setState({ values: { greeting: 'hello' } });
    expect(api.getState()).to.deep.equal(
      getState({ values: { greeting: 'hello' }, pristine: false, dirty: true })
    );
    api.reset();
    expect(api.getState()).to.deep.equal(getState());
  });

  it('setValue should set a value', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setValue('greeting', 'hello');
    expect(api.getState()).to.deep.equal(
      getState({ values: { greeting: 'hello' }, pristine: false, dirty: true })
    );
  });

  it('setError should set an error', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setError('greeting', 'error');
    expect(api.getState().errors).to.deep.equal({ greeting: 'error' });
  });

  it('when an error is present the form should be invalid', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setError('greeting', 'error');
    expect(api.getState().invalid).to.equal(true);
  });

  it('when an error is present then goes away form should be valid', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>);
    api.setError('greeting', 'error');
    expect(api.getState().invalid).to.equal(true);
    api.setError('greeting', null);
    expect(api.getState().invalid).to.equal(false);
  });

  // SET WARNINGG AND SUCCESS TESTS

  it('should give child function access to formApi', () => {
    const spy = sandbox.spy();
    mount(<Form>{spy}</Form>);
    expect(spy.called).to.equal(true);
    checkFormApi(spy.args[0][0].formApi);
    checkFormState(spy.args[0][0].formState);
  });

  it('should give render function access to formApi and formState', () => {
    const spy = sandbox.spy();
    mount(<Form render={spy} />);
    expect(spy.called).to.equal(true);
    checkFormApi(spy.args[0][0].formApi);
    checkFormState(spy.args[0][0].formState);
  });

  it('should give component passed in access to formApi as prop', () => {
    const Inputs = () => null;
    const comp = mount(<Form component={Inputs} />);
    const inputs = comp.find('Inputs');
    expect(inputs.length).to.equal(1);
    checkFormApi(inputs.props().formApi);
  });

  it('onValueChange gets called when value changes', done => {
    const onValueChange = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="name" onValueChange={onValueChange} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Foo' } });

    setImmediate(() => {
      expect(onValueChange.called).to.equal(true);
      expect(onValueChange.args[0][0]).to.equal('Foo');
      done();
    });
  });

  it('errors should update when input is changed', done => {
    const validate = value => (value === 'Foo' ? 'ooo thats no good' : null);
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="name" validateOnChange validate={validate} />
      </Form>
    );
    expect(api.getState().errors).to.deep.equal({});
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Foo' } });

    setImmediate(() => {
      expect(api.getState().errors).to.deep.equal({
        name: 'ooo thats no good'
      });
      done();
    });
  });

  it('errors should update when default value is set and validateOnMount is passed in', done => {
    const validate = value => (value === 'Foo' ? 'ooo thats no good' : null);
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text
          field="name"
          validateOnMount
          validate={validate}
          initialValue="Foo"
        />
      </Form>
    );
    setImmediate(() => {
      expect(api.getState().errors).to.deep.equal({
        name: 'ooo thats no good'
      });
      done();
    });
  });

  it('errors should update when input is changed after changing validation function prop', done => {
    const validate1 = value => (value === 'Foo' ? 'ooo thats no good' : null);
    const validate2 = value => (value === 'Foo' ? 'new validation!' : null);
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        {({ formState }) => (
          <Text
            field="name"
            validateOnChange
            validate={formState.values.name === 'Foo' ? validate2 : validate1}
          />
        )}
      </Form>
    );
    expect(api.getState().errors).to.deep.equal({});
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Foo' } });
    setImmediate(() => {
      expect(api.getState().errors).to.deep.equal({
        name: 'ooo thats no good'
      });
      input.simulate('change', { target: { value: 'Foo' } });
      setImmediate(() => {
        expect(api.getState().errors).to.deep.equal({
          name: 'new validation!'
        });
        done();
      });
    });
  });

  // WARNINGG AND SUCCESS TESTS ^^
});
