import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Form, Text, Scope, withFieldApi } from '../../src';

describe('Scope', () => {
  it('should scope value to scope', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Scope scope="favorite">
          <Text field="color" />
        </Scope>
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'green' } });
    expect(savedApi.getState().values).to.deep.equal({
      favorite: {
        color: 'green'
      }
    });
  });

  it('should scope nested scope values to scope', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Scope scope="favorites">
          <Scope scope="crayon">
            <Text field="color" />
          </Scope>
        </Scope>
      </Form>
    );

    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'green' } });
    expect(savedApi.getState().values).to.deep.equal({
      favorites: {
        crayon: {
          color: 'green'
        }
      }
    });
  });

  it('should scope touched to scope', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Scope scope="favorite">
          <Text field="color" />
        </Scope>
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('blur');
    expect(savedApi.getState().touched).to.deep.equal({
      favorite: {
        color: true
      }
    });
  });

  it('should scope error to scope', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Scope scope="favorite">
          <Text
            field="color"
            validateOnBlur
            validate={() => 'Danger Will Robinson!!!'}
          />
        </Scope>
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('blur');
    expect(savedApi.getState().errors).to.deep.equal({
      favorite: {
        color: 'Danger Will Robinson!!!'
      }
    });
  });

  it('should scope getters', () => {
    let savedFieldApi;
    const GetFieldApi = withFieldApi('color')(({ fieldApi }) => {
      savedFieldApi = fieldApi;
      return <div />;
    });
    const wrapper = mount(
      <Form>
        <Scope scope="favorite">
          <Text field="color" validate={()=> 'Ahhh!!'}/>
          <GetFieldApi />
        </Scope>
      </Form>
    );
   
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'green' } });
    input.simulate('blur');

    expect(savedFieldApi.getValue()).to.equal('green');
    expect(savedFieldApi.getTouched()).to.equal(true);
    expect(savedFieldApi.getError()).to.equal('Ahhh!!');
  });
});