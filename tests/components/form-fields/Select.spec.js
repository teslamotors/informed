import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { Form, Select, Option } from '../../../src'


describe('Text', () => {

  const sandbox =  sinon.createSandbox()

  beforeEach(() => {
    sandbox.restore()
  })

  it('should update value when user types', () => {
    let savedApi
    const wrapper = mount(
      <Form getApi={api => { savedApi = api }}>
        <Select field="status">
          <Option value="" disabled>Select One...</Option>
          <Option value="single">Single</Option>
          <Option value="relationship">Relationship</Option>
          <Option value="complicated">Complicated</Option>
        </Select>
      </Form>
    )
    const input = wrapper.find('select').at(0)
    input.simulate('change', { target: { value: 'single' } });
    // TODO how do i test this :(
    //expect(savedApi.getState().values).to.deep.equal({ status: 'single' })
  })

})
