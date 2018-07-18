import Controller from '../src/Controller/FormController';
import FieldController from '../src/Controller/FieldController';
import { expect, assert } from 'chai';
import sinon from 'sinon'

describe('Controller', () => {

  const sandbox = sinon.createSandbox();

  afterEach(()=>{
    sandbox.restore();
  });

  const checkApi = api => {
    expect(api).to.have.own.property('getError')
    expect(api).to.have.own.property('setError')
    expect(api).to.have.own.property('getAsyncError')
    expect(api).to.have.own.property('getTouched')
    expect(api).to.have.own.property('setTouched')
    expect(api).to.have.own.property('getValue')
    expect(api).to.have.own.property('setValue')
    expect(api).to.have.own.property('getState')
    expect(api).to.have.own.property('setState')
    expect(api).to.have.own.property('setValues')
    expect(api).to.have.own.property('submitForm')
    expect(api).to.have.own.property('reset')
  }

  const getFieldController = (field, formApi, config = {}) => {
    return new FieldController(
      field,
      {
        getValue: () => formApi.getValue(field),
        setValue: (value) => formApi.setValue(field, value),
        getTouched: () => formApi.getTouched(field),
        setTouched: (value) => formApi.setTouched(field, value),
        getError: () => formApi.getError(field),
        getAsyncError: () => formApi.getAsyncError(field),
        setError: (value) => formApi.setError(field, value)
      },
      config
    )
  }

  describe('constructor', () => {

    it('should initialize hooks and config when nothing is passed', () => {
      const controller = new Controller();
      expect(controller.hooks).to.deep.equal({});
      expect(controller.config).to.deep.equal({});
    });

    it('should set hooks to hooks passed in', () => {
      const hooks = {
        validate: ()=>{},
        preSubmit: ()=>{},
        onSubmit: ()=>{},
        onSubmitFailure: ()=>{},
        getApi: ()=>{}
      }
      const controller = new Controller(hooks);
      expect(controller.hooks).to.deep.equal(hooks);
    });

    it('should set config to config passed in', () => {
      const config = {
        dontPreventDefault: true,
        initialValues: {}
      }
      const controller = new Controller({}, config);
      expect(controller.config).to.deep.equal(config);
    });

    it('should create an api', () => {
      const controller = new Controller();
      checkApi(controller.api)
    });

    it('should call getApi hook', () => {
      const spy = sandbox.spy();
      const hooks = {
        getApi: spy
      }
      const controller = new Controller(hooks);
      expect(spy.called).to.equal(true);
    });

  });

  describe('api', () => {

    describe('setState', () => {

      it('should set the form state', () => {
        const controller = new Controller();
        const expected = {
          values: { greeting: 'hello' },
          errors: { greeting: 'error' },
          touched: { greeting: true },
          asyncErrors: {},
          pristine: false,
          dirty: true,
          invalid: true
        }
        controller.api.setState(expected)
        expect(controller.state).to.deep.equal(expected);
      });

      it('should emit change event', (done) => {
        const controller = new Controller();
        const state = {
          values: { greeting: 'hello' },
          errors: { greeting: 'error' },
          touched: { greeting: true }
        }
        controller.on('change', ()=>done())
        controller.api.setState(state)
      });

      it('should emit update event', (done) => {
        const controller = new Controller();
        const state = {
          values: { greeting: 'hello' },
          errors: { greeting: 'error' },
          touched: { greeting: true }
        }
        controller.on('update', ()=>done())
        controller.api.setState(state)
      });

    });

    describe('setValues', () => {

      it('should set the form values', () => {
        const controller = new Controller();
        const expected = { greeting: 'hello' };
        controller.api.setValues(expected)
        expect(controller.state.values).to.deep.equal(expected);
      });

      it('should emit change event', (done) => {
        const controller = new Controller();
        const values = { greeting: 'hello' };
        controller.on('change', ()=>done())
        controller.api.setValues(values)
      });

      it('should emit update event', (done) => {
        const controller = new Controller();
        const values = { greeting: 'hello' };
        controller.on('update', ()=>done())
        controller.api.setState(values)
      });

    });

    describe('reset', () => {
      it('resets the state', () => {
        const controller = new Controller({}, {
          initialValues: { greeting: 'foobar' }
        });
        const expected = {
          values: {
            greeting: 'foobar',
            firstname: 'Joe'
          },
          errors: {},
          asyncErrors: {},
          touched: {},
          pristine: false,
          dirty: true,
          invalid: false
        }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.register( 'firstname', getFieldController('firstname', controller.api, {
          initialValue: 'Joe'
        }))
        controller.api.setValue('greeting', 'hello');
        controller.api.setValue('firstname', 'hello')
        controller.api.reset();
        expect(controller.state).to.deep.equal(expected);
      });
    });

    describe('deregister', () => {
      it('removes a field', () => {
        const controller = new Controller();
        const expected = {
          values: {
            greeting: 'foobar',
            firstname: 'Joe'
          },
          errors: {},
          touched: {},
          asyncErrors: {},
          pristine: false,
          dirty: true,
          invalid: false
        }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.register( 'firstname', getFieldController('firstname', controller.api))
        controller.api.setValue('greeting', 'foobar');
        controller.api.setValue('firstname', 'Joe');
        expect(controller.state).to.deep.equal(expected);
        controller.deregister('firstname');
        delete expected.values.firstname;
        expect(controller.state).to.deep.equal(expected);
      });
    });

    describe('setValue', () => {

      it('should set the form value', () => {
        const controller = new Controller();
        const expected =  { greeting: 'hello' }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.api.setValue('greeting', 'hello')
        expect(controller.state.values).to.deep.equal(expected);
      });

      it('should emit change event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('change', ()=>done())
        controller.api.setValue('greeting', 'hello')
      });

      it('should emit field event with greeting event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('field', (field)=>{
          expect(field).to.equal('greeting');
          done()
        });
        controller.api.setValue('greeting', 'hello')
      });

      it('should call fields validation if present and validateOnchange is set', () => {
        const controller = new Controller();
        const spy = sandbox.spy();
        controller.register( 'greeting', getFieldController('greeting', controller.api, {
          validate: spy,
          validateOnChange: true
        }))
        controller.api.setValue('greeting', 'hello')
        expect(spy.called).to.equal(true);
      });

    });

    describe('fieldExists', () => {

      it('should return true when field exists', () => {
        const controller = new Controller();
        const expected =  { greeting: 'hello' }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        const result = controller.api.fieldExists('greeting');
        expect(result).to.be.true;
      });

      it('should return false when field does not exist', () => {
        const controller = new Controller();
        const expected =  { greeting: 'hello' }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        const result = controller.api.fieldExists('notgreeting');
        expect(result).to.be.false;
      });

    });



    describe('setTouched', () => {

      it('should set the form touched', () => {
        const controller = new Controller();
        const expected =  { greeting: true }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.api.setTouched('greeting')
        expect(controller.state.touched).to.deep.equal(expected);
      });

      it('should emit change event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('change', ()=>done())
        controller.api.setTouched('greeting')
      });

      it('should emit field event with greeting event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('field', (field)=>{
          expect(field).to.equal('greeting');
          done()
        });
        controller.api.setTouched('greeting')
      });

      it('should call fields validation if present and validateOnBlur is set', () => {
        const controller = new Controller();
        const spy = sandbox.spy();
        controller.register( 'greeting', getFieldController('greeting', controller.api, {
          validate: spy,
          validateOnBlur: true
        }))
        controller.api.setTouched('greeting')
        expect(spy.called).to.equal(true);
      });

      it('should call fields async validation if present and asyncValidateOnBlur is set', () => {
        const controller = new Controller();
        const spy = sandbox.spy();
        controller.register( 'greeting', getFieldController('greeting', controller.api, {
          asyncValidate: spy,
          asyncValidateOnBlur: true
        }))
        controller.api.setTouched('greeting')
        expect(spy.called).to.equal(true);
      });

    });

    describe('setError', () => {

      it('should set the form touched', () => {
        const controller = new Controller();
        const expected =  { greeting: 'error' }
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.api.setError('greeting', 'error')
        expect(controller.state.errors).to.deep.equal(expected);
      });

      it('should emit change event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('change', ()=>done())
        controller.api.setError('greeting', 'error')
      });

      it('should emit field event with greeting event', (done) => {
        const controller = new Controller();
        controller.register( 'greeting', getFieldController('greeting', controller.api) )
        controller.on('field', (field)=>{
          expect(field).to.equal('greeting');
          done()
        });
        controller.api.setError('greeting', 'error')
      });

    });

    describe('notify', () => {

      it('should notify other fields about changes and call their validators', () => {
        const controller = new Controller();
        const spy1 = sandbox.spy();
        const spy2 = sandbox.spy();
        const spy3 = sandbox.spy();
        controller.register( 'greeting', getFieldController('greeting', controller.api, {
          validate: spy1,
          validateOnChange: true,
          notify: ['foo','bar']
        }))
        controller.register( 'foo', getFieldController('greeting', controller.api, { validate: spy2 }));
        controller.register( 'bar', getFieldController('greeting', controller.api, { validate: spy3 }));
        controller.api.setValue('greeting', 'hello')
        expect(spy1.called).to.equal(true);
        expect(spy2.called).to.equal(true);
        expect(spy3.called).to.equal(true);
      });

      it('should throw error when field does not exist', () => {
        const controller = new Controller();
        const spy1 = sandbox.spy();
        const spy2 = sandbox.spy();
        const spy3 = sandbox.spy();
        controller.register( 'greeting', getFieldController('greeting', controller.api, {
          validate: spy1,
          validateOnChange: true,
          notify: ['foo','baz']
        }))
        controller.register( 'foo', getFieldController('greeting', controller.api, { validate: spy2 }));
        controller.register( 'bar', getFieldController('greeting', controller.api, { validate: spy3 }));
        assert.throws( () => controller.api.setValue('greeting', 'hello'), Error, "Cant notify field baz as it does not exist!");
      });

    });

  });

});
