import Controller from '../src/FormController';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Controller', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  const checkApi = api => {
    expect(api).to.have.own.property('getError');
    expect(api).to.have.own.property('setError');
    expect(api).to.have.own.property('getTouched');
    expect(api).to.have.own.property('setTouched');
    expect(api).to.have.own.property('getValue');
    expect(api).to.have.own.property('setValue');
    expect(api).to.have.own.property('getState');
    expect(api).to.have.own.property('getValues');
    expect(api).to.have.own.property('submitForm');
    expect(api).to.have.own.property('reset');
    expect(api).to.have.own.property('setValues');
  };

  describe('constructor', () => {
    
    it('should initialize options when nothing is passed', () => {
      const controller = new Controller();
      expect(controller.options).to.deep.equal({});
    });

    it('should set options to options passed in', () => {
      const options = {
        initialValues: { foo: 'bar'},
        dontPreventDefault: true,
        validate: () => {},
      };
      const controller = new Controller(options);
      expect(controller.options).to.equal(options);
    });

    it('should create an api', () => {
      const controller = new Controller();
      checkApi(controller.getFormApi());
    });

  });

});
