import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import Enzyme, { mount } from 'enzyme'

import { Form, Text } from '../../src'

describe('Form', () => {
  const sandbox = sinon.sandbox.create()

  const checkFormApi = api => {
    expect(api).to.have.own.property('getError')
    expect(api).to.have.own.property('setError')
    expect(api).to.have.own.property('getTouched')
    expect(api).to.have.own.property('setTouched')
    expect(api).to.have.own.property('getValue')
    expect(api).to.have.own.property('setValue')
  }

  const checkFormState = state => {
    const formState = {
      values: {},
      touched: {},
      errors: {}
    }
    expect(JSON.stringify(state)).to.deep.equal(JSON.stringify(formState))
  }

  const getState = state => {
    const defaultState = {
      values: {},
      touched: {},
      errors: {}
    }
    return Object.assign({}, defaultState, state)
  }

  beforeEach(() => {
    sandbox.restore()
  })

  it('should call onChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(<Form onChange={spy}>{() => <Text field="greeting" />}</Form>);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'hello' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].values).to.deep.equal({ greeting: 'hello' });
  })

  it('should call onSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={spy}>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <Text field="greeting" />
            <button type="submit">Submit</button>
          </form>
        )}
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
    })
  })

  it('should call preventDefault when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={() => {}}>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    );
    const button = wrapper.find('button');
    button.simulate('submit', {
      preventDefault: spy
    })
    setImmediate(() => {
      expect(spy.called).to.equal(true);
      done();
    })
  })

  it('should NOT preventDefault dontPreventDefault is passed in', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form onSubmit={() => {}} dontPreventDefault>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
    const button = wrapper.find('button')
    button.simulate('submit', {
      preventDefault: spy
    })
    setImmediate(() => {
      expect(spy.called).to.equal(false)
      done()
    })
  })

  it('should NOT call onSubmit function with values when the invalid form is submitted', done => {
    const spy = sandbox.spy()
    let api
    const setApi = param => {
      api = param
    }
    const validate = values => ({
      greeting: values.greeting === 'hello!' ? 'ooo thats no good' : null
    })
    const wrapper = mount(
      <Form onSubmit={spy} getApi={setApi} validate={validate}>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <Text field="greeting" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
    api.setValue('greeting', 'hello!')
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(false)
      done()
    })
  })

  it('should call onSubmitFailure function with errors when the invalid form is submitted', done => {
    const spy = sandbox.spy()
    let api
    const setApi = param => {
      api = param
    }
    const validate = values => ({
      greeting: values.greeting === 'hello!' ? 'ooo thats no good' : null
    })
    const wrapper = mount(
      <Form onSubmitFailure={spy} getApi={setApi} validate={validate}>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <Text field="greeting" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
    api.setValue('greeting', 'hello!')
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(true)
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'ooo thats no good' })
      done()
    })
  })

  it('should call preSubmit function with values when the form is submitted', done => {
    const spy = sandbox.spy()
    const wrapper = mount(
      <Form preSubmit={spy}>
        {({formApi}) => (
          <form onSubmit={formApi.submitForm}>
            <Text field="greeting" />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'hello' } })
    const button = wrapper.find('button')
    button.simulate('submit')
    setImmediate(() => {
      expect(spy.called).to.equal(true)
      expect(spy.args[0][0]).to.deep.equal({ greeting: 'hello' })
      done()
    })
  })

  // SUBMITS TESTS

  it('getApi should give the passed function the formApi', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    checkFormApi(api)
  })

  it.skip('should set default values when default values are passed', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(
      <Form getApi={setApi} defaultValues={{ greeting: 'hello' }}>
        {() => <Text field="greeting" />}
      </Form>
    )
    expect(api.getFormState().values).to.deep.equal({ greeting: 'hello' })
  })

  it.skip('setFormState should set the formState', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setFormState({ values: { greeting: 'hello' } })
    expect(api.getFormState().values).to.deep.equal({ greeting: 'hello' })
  })

  it.skip('resetAll should reset the form to its initial state', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setFormState({ values: { greeting: 'hello' } })
    expect(api.getFormState()).to.deep.equal(getState({ values: { greeting: 'hello' } }))
    api.resetAll()
    expect(api.getFormState()).to.deep.equal(getState())
  })

  it('setValue should set a value', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setValue('greeting', 'hello')
    expect(api.getState()).to.deep.equal(getState({ values: { greeting: 'hello' } }))
  })

  it('setError should set an error', () => {
    let api
    const setApi = param => {
      api = param
    }
    mount(<Form getApi={setApi}>{() => <Text field="greeting" />}</Form>)
    api.setError('greeting', 'error')
    expect(api.getState()).to.deep.equal(getState({ errors: { greeting: 'error' } }))
  })

  // SET WARNINGG AND SUCCESS TESTS

  it('should give child function access to formApi', () => {
    const spy = sandbox.spy();
    mount(<Form>{spy}</Form>);
    expect(spy.called).to.equal(true);
  })

  it.skip('should give render function access to formApi and formState', done => {

  })

  it('should give component passed in access to formApi as prop', () => {
    const Inputs = () => null
    const comp = mount(<Form component={Inputs} />)
    const inputs = comp.find('Inputs')
    expect(inputs.length).to.equal(1)
    checkFormApi(inputs.props().formApi)
  })

  it('errors should update when input is changed', done => {
    const validate = value => value === 'Foo' ? 'ooo thats no good' : null;
    let api
    const setApi = param => {
      api = param
    }
    const wrapper = mount(
      <Form getApi={setApi}>
        <Text field="name" validateOnChange validate={validate}/>
      </Form>
    )
    expect(api.getState().errors).to.deep.equal({})
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Foo' } })

    setImmediate(() => {
      expect(api.getState().errors).to.deep.equal({ name: 'ooo thats no good' })
      done()
    })
  })

  // WARNINGG AND SUCCESS TESTS ^^

})
