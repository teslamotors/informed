import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Enzyme, { mount } from 'enzyme';

import { Form, Text, Scope } from '../../src';

describe('Form', () => {
  const sandbox = sinon.createSandbox();

  const checkFormApi = api => {
    expect(api).to.have.own.property('setError');
    expect(api).to.have.own.property('setTouched');
    expect(api).to.have.own.property('setValue');
    expect(api).to.have.own.property('submitForm');
    expect(api).to.have.own.property('reset');
    expect(api).to.have.own.property('getState');
  };

  afterEach(() => {
    sandbox.restore();
  });

  const checkFormState = state => {
    const formState = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0
    };
    expect(JSON.stringify(state)).to.deep.equal(JSON.stringify(formState));
  };

  const getState = state => {
    const defaultState = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0
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
      getApi: () => {},
      dontPreventDefault: true,
      onSubmitFailure: ()=>{},
      initialValues: {},
      onValueChange: ()=>{},
      onChange: () => {},
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

  it('should call onSubmit function with values when the form is submitted', () => {
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
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' });
  });

  it('should call reset function when reset button is clicked', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" />
        <button type="reset">Reset</button>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'hello'});
    const button = wrapper.find('button');
    button.simulate('reset');
    expect(savedApi.getState().values).to.deep.equal({});
  });

  it('should call preventDefault when the form is submitted', () => {
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
    expect(spy.called).to.equal(true);
  });

  it('should NOT preventDefault dontPreventDefault is passed in', () => {
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
    expect(spy.called).to.equal(false);
  });

  it('should NOT call onSubmit function with values when the invalid form is submitted due to invalid field validation', () => {
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
    expect(spy.called).to.equal(false);
  });

  it('should NOT call onSubmit function with values when the invalid form is submitted due to invalid form validation', () => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const validate = values => 
      values.a + values.b !== 4 ? 'values must sum to 4!' : undefined;
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi} validate={validate}>
        <Text field="a" />
        <Text field="b" />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('a', 1);
    api.setValue('b', 2);
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(spy.called).to.equal(false);
  });

  it('should call onSubmit function with values when the valid form is submitted due to valid form validation', () => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const validate = values => 
      values.a + values.b !== 4 ? 'values must sum to 4!' : undefined;
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi} validate={validate}>
        <Text field="a" />
        <Text field="b" />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('a', 2);
    api.setValue('b', 2);
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(spy.called).to.equal(true);
  });

  it('should reset form error after invalid form is submitted and value is changed', () => {
    const spy = sandbox.spy();
    let api;
    const setApi = param => {
      api = param;
    };
    const validate = values => 
      values.a + values.b !== 4 ? 'values must sum to 4!' : undefined;
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi} validate={validate}>
        <Text field="a" />
        <Text field="b" />
        <button type="submit">Submit</button>
      </Form>
    );
    api.setValue('a', 1);
    api.setValue('b', 2);
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(api.getState().error).to.equal('values must sum to 4!');
    api.setValue('a', 3);
    expect(api.getState().error).to.be.undefined;
  });

  it('should call onSubmitFailure function with errors when the invalid form is submitted', () => {
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
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0]).to.deep.equal({ greeting: 'ooo thats no good' });
  });

  it('should incriment submits when form is submitted', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(api.getState().submits).to.equal(1);
  });

  it('should incriment submits when form is submitted more than once', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="greeting" />
        <button type="submit">Submit</button>
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit');
    button.simulate('submit');
    button.simulate('submit');
    expect(api.getState().submits).to.equal(3);
  });

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

  it.skip('setState should set the formState', () => {
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
    mount(
      <Form getApi={setApi}>
        <Text field="greeting" />
        <Text field="name" />
        <Scope scope="favorite">
          <Text field="color" />
          <Text field="food" />
        </Scope>
      </Form>
    );
    api.setValues({ 
      greeting: 'hello', 
      name: 'joe',
      favorite: {
        color: 'green'
      }
    });
    expect(api.getState().values).to.deep.equal({ 
      greeting: 'hello', 
      name: 'joe',
      favorite: {
        color: 'green'
      }
    });
  });

  it('reset should reset the form to its initial state via initialValue prop on input', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="greeting" initialValue="ayyyoooooo"/>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(api.getState().values).to.deep.equal({ greeting: 'hello'});
    expect(api.getState()).to.deep.equal(
      getState({ values: { greeting: 'hello' }, pristine: false, dirty: true })
    );
    api.reset();
    expect(api.getState()).to.deep.equal(getState({
      values: { greeting: 'ayyyoooooo' },
      pristine: false, 
      dirty: true
    }));
  });

  it('reset should reset the form to its initial state via initialValue prop on form', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi} initialValues={{greeting: 'ayyyoooooo'}}>
        <Text field="greeting"/>
      </Form>
    );
    expect(api.getState().values).to.deep.equal({ greeting: 'ayyyoooooo' });
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(api.getState().values).to.deep.equal({ greeting: 'hello'});
    expect(api.getState()).to.deep.equal(
      getState({ values: { greeting: 'hello' }, pristine: false, dirty: true })
    );
    api.reset();
    expect(api.getState()).to.deep.equal(getState({
      values: { greeting: 'ayyyoooooo' },
      pristine: false, 
      dirty: true
    }));
  });

  it('reset should reset the form to its initial state via initialValue prop on input with scope', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi}>
        <Scope scope="favorite">
          <Text field="color" initialValue="red"/>
        </Scope>
      </Form>
    );
    expect(api.getState()).to.deep.equal(
      getState({ values: {favorite: { color: 'red'}}, pristine: false, dirty: true })
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'green' } });
    expect(api.getState()).to.deep.equal(
      getState({ values: {favorite: { color: 'green'}}, pristine: false, dirty: true })
    );
    api.reset();
    expect(api.getState()).to.deep.equal(getState({
      values: {favorite: { color: 'red'}},
      pristine: false, 
      dirty: true
    }));
  });

  it('reset should reset the form to its initial state via initialValue prop on form with scope', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    const wrapper = mount(
      <Form getApi={setApi} initialValues={{ favorite: { color: 'red'} }}>
        <Scope scope="favorite">
          <Text field="color" />
        </Scope>
      </Form>
    );
    expect(api.getState()).to.deep.equal(
      getState({ values: {favorite: { color: 'red'}}, pristine: false, dirty: true })
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'green' } });
    expect(api.getState()).to.deep.equal(
      getState({ values: {favorite: { color: 'green'}}, pristine: false, dirty: true })
    );
    api.reset();
    expect(api.getState()).to.deep.equal(getState({
      values: {favorite: { color: 'red'}},
      pristine: false, 
      dirty: true
    }));
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

  it('setValue should set a scoped value', () => {
    let api;
    const setApi = param => {
      api = param;
    };
    mount(
      <Form getApi={setApi}>
        <Scope scope="favorite">
          <Text field="color" />
        </Scope>
      </Form>
    );
    api.setValue('favorite.color', 'green');
    expect(api.getState()).to.deep.equal(
      getState({ values: {favorite: { color: 'green'}}, pristine: false, dirty: true })
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
    api.setError('greeting', undefined);
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

  it('errors should update when input is changed', () => {
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

    expect(api.getState().errors).to.deep.equal({
      name: 'ooo thats no good'
    });
  });

  it('errors should update when initial value is set and validateOnMount is passed in', () => {
    const validate = value => (value === 'Foo' ? 'ooo thats no good' : null);
    let api;
    const setApi = param => {
      api = param;
    };
    mount(
      <Form getApi={setApi}>
        <Text
          field="name"
          validateOnMount
          validate={validate}
          initialValue="Foo"
        />
      </Form>
    );
    expect(api.getState().errors).to.deep.equal({
      name: 'ooo thats no good'
    });
  });

  it('errors should update when input is changed after changing validation function prop', () => {
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
    expect(api.getState().errors).to.deep.equal({
      name: 'ooo thats no good'
    });
    input.simulate('change', { target: { value: 'Foo' } });
    expect(api.getState().errors).to.deep.equal({
      name: 'new validation!'
    });
  });
 

  // WARNINGG AND SUCCESS TESTS ^^
});
