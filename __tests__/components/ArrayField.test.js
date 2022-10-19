import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input, Checkbox } from '../../jest/components';
import { ArrayField, Relevant } from '../../src';

const FlatArrayfield = ({
  formApiRef,
  initialValues,
  initialValue,
  defaultValue
}) => {
  return (
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <ArrayField
        name="siblings"
        initialValue={initialValue}
        defaultValue={defaultValue}>
        {({ add, reset, remove: removeIndex }) => (
          <>
            <button onClick={add} type="button">
              Add Sibling
            </button>
            <button onClick={() => add(3)} type="button">
              Add 3 Siblings
            </button>
            <button onClick={reset} type="button">
              Reset Siblings
            </button>
            <button type="button" onClick={() => removeIndex(1)}>
              Remove Index
            </button>
            <ArrayField.Items>
              {({ remove, name, key }) => (
                <>
                  <span data-testid="key">{key}</span>
                  <Input label="Name" name={name} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </>
              )}
            </ArrayField.Items>
          </>
        )}
      </ArrayField>
      <button type="submit">Submit</button>
    </Form>
  );
};

const ObjectArrayfield = ({ formApiRef, initialValues }) => {
  return (
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <ArrayField name="siblings">
        {({ add, reset }) => (
          <>
            <button onClick={add} type="button">
              Add Sibling
            </button>
            <button onClick={reset} type="button">
              Reset Siblings
            </button>
            <ArrayField.Items>
              {({ remove, key }) => (
                <>
                  <span data-testid="key">{key}</span>
                  <Input label="First" name="first" />
                  <Input label="Last" name="last" />

                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </>
              )}
            </ArrayField.Items>
          </>
        )}
      </ArrayField>
      <button type="submit">Submit</button>
    </Form>
  );
};

const RelevantArrayfield = ({ formApiRef, initialValues }) => {
  return (
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <ArrayField name="siblings">
        {({ add, reset }) => (
          <>
            <button onClick={add} type="button">
              Add Sibling
            </button>
            <button onClick={reset} type="button">
              Reset Siblings
            </button>
            <ArrayField.Items>
              {({ remove, name, key }) => (
                <>
                  <span data-testid="key">{key}</span>
                  <Input label="First" name="first" keepState />
                  <Input label="Last" name="last" />
                  <Input label="Foo" name="foo" initialValue={`foo-${name}`} />
                  <Checkbox label="Show Info?" name="showInfo" />
                  <Relevant
                    when={({ formApi, scope }) => {
                      // console.log(`SCOPE------- ${scope}.showInfo`);
                      return formApi.getValue(`${scope}.showInfo`);
                    }}>
                    <Input type="number" label="Age" name="age" />
                    <Input label="Favorite Color" name="color" keepState />
                  </Relevant>
                  <Input
                    label="Favorite Food"
                    name="food"
                    relevanceWhen={['showInfo']}
                    relevant={({ formApi, scope }) =>
                      formApi.getValue(`${scope}.showInfo`)
                    }
                  />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </>
              )}
            </ArrayField.Items>
          </>
        )}
      </ArrayField>
      <button type="submit">Submit</button>
    </Form>
  );
};

// prettier-ignore
describe('ArrayField', () => {


  /* ------------------------------------ Flat Array Field ------------------------------------ */
  describe('Flat Array Field', () => {

    it('should add unique fields when add is clicked', async () => {

      const formApiRef = {};
  
      const { queryAllByLabelText, getByText, queryAllByTestId } = render(
        <FlatArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add Sibling');
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(1);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
  
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
      expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');
  
      await userEvent.type(inputs[0], 'Hello');  
      await userEvent.type(inputs[1], 'World');  
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });

    it('should add 3 unique fields when add \'3 siblings\' is clicked', () => {

      const formApiRef = {};
  
      const { queryAllByLabelText, getByText } = render(
        <FlatArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add 3 Siblings');
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(3);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
      expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');
      expect(inputs[2]).toHaveAttribute('name', 'siblings[2]');
    });
  
    it('should update state when user deletes 1 index [ a, b ] ---> [ a ]', async () => {
  
      const formApiRef = {};
  
      const { queryAllByLabelText, getByText, queryAllByTestId, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add Sibling');
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(1);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
  
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
      expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');
  
      await userEvent.type(inputs[0], 'Hello');  
      await userEvent.type(inputs[1], 'World');  
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(2);
  
      fireEvent.click(removeButtons[1]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs[0]).toHaveValue('Hello');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello'] });
  
      keys = queryAllByTestId('key');
      expect(keys.length).toBe(1);
  
    });

    it('should update state when user deletes 1 via api remove index [ a, b ] ---> [ a ]', async () => {
  
      const formApiRef = {};
  
      const { queryAllByLabelText, getByText, queryAllByTestId, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add Sibling');
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(1);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
  
      fireEvent.click(add);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
      expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');
  
      await userEvent.type(inputs[0], 'Hello');  
      await userEvent.type(inputs[1], 'World');  
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
  
      const removeButtons = queryAllByText('Remove Index');
      expect(removeButtons.length).toBe(1);
  
      fireEvent.click(removeButtons[0]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs[0]).toHaveValue('Hello');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello'] });
  
      keys = queryAllByTestId('key');
      expect(keys.length).toBe(1);
  
    });
  
    it('should initialize array field with initialValues from from', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Hello', 'World'] };
  
      const { queryAllByLabelText, queryAllByTestId } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });

    it('should initialize array field with initialValue from field', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Hello', 'World'] };
  
      const { queryAllByLabelText, queryAllByTestId } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues} initialValue={['Foo', 'Bar']}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Foo');
      expect(inputs[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Foo', 'Bar'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });

    it('should initialize array field with defaultValue passed to field', () => {
  
      const formApiRef = {};
  
      const { queryAllByLabelText, queryAllByTestId } = render(
        <FlatArrayfield formApiRef={formApiRef} defaultValue={['Foo', 'Bar']}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Foo');
      expect(inputs[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Foo', 'Bar'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });

    it('should initialize array field with form level initialValues even when defaultValue from field is passed', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Hello', 'World'] };
  
      const { queryAllByLabelText, queryAllByTestId } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues} defaultValue={['Foo', 'Bar']}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });

    it('should set all fields to touched when touchAllFields is called', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Hello', 'World'] };
  
      const { queryAllByLabelText } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');

      formApiRef.current.touchAllFields();

      expect(formApiRef.current.getFormState().touched).toEqual({ siblings: [ true, true ]});
  
    });
  
    it('should update state when user deletes 0 index [ a, b ] ---> [ b ]', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Hello', 'World'] };
  
      const { queryAllByLabelText, queryAllByTestId, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
  
      expect(inputs[0]).toHaveValue('Hello');
      expect(inputs[1]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(2);
  
      fireEvent.click(removeButtons[0]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs[0]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['World'] });
  
      keys = queryAllByTestId('key');
      expect(keys.length).toBe(1);
  
    });
  
    it('should update state when user deletes 2 index [ a, b, c ] ---> [ a, b ]', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };
  
      const { queryAllByLabelText, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(3);
  
      expect(inputs[0]).toHaveValue('Joe');
      expect(inputs[1]).toHaveValue('Anthony');
      expect(inputs[2]).toHaveValue('Bettina');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[2]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveValue('Joe');
      expect(inputs[1]).toHaveValue('Anthony');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony'] });
  
    });
  
    it('should update state when user deletes 0 index [ a, b, c ] ---> [ b, c ]', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };
  
      const { queryAllByLabelText, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(3);
  
      expect(inputs[0]).toHaveValue('Joe');
      expect(inputs[1]).toHaveValue('Anthony');
      expect(inputs[2]).toHaveValue('Bettina');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[0]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveValue('Anthony');
      expect(inputs[1]).toHaveValue('Bettina');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Anthony', 'Bettina'] });
  
    });
  
    it('should update state when user deletes 1 index [ a, b, c ] ---> [ a, c ]', () => {
  
      const formApiRef = {};
      const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };
  
      const { queryAllByLabelText, queryAllByText } = render(
        <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(3);
  
      expect(inputs[0]).toHaveValue('Joe');
      expect(inputs[1]).toHaveValue('Anthony');
      expect(inputs[2]).toHaveValue('Bettina');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[1]);
  
      inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(2);
      expect(inputs[0]).toHaveValue('Joe');
      expect(inputs[1]).toHaveValue('Bettina');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Bettina'] });
  
    });

  });


  /* ------------------------------------ Object Array Field ------------------------------------ */
  describe('Object Array Field', () => {

    it('should add unique fields when add is clicked', async () => {

      const formApiRef = {};
  
      const { queryAllByLabelText, getByText, queryAllByTestId } = render(
        <ObjectArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add Sibling');
      fireEvent.click(add);
  
      let first = queryAllByLabelText('First');
      let last = queryAllByLabelText('Last');
      expect(first.length).toBe(1);
      expect(last.length).toBe(1);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
  
      fireEvent.click(add);
  
      first = queryAllByLabelText('First');
      last = queryAllByLabelText('Last');
      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      await userEvent.type(first[0], 'Hello');  
      await userEvent.type(last[0], 'World');  
      await userEvent.type(first[1], 'Foo');  
      await userEvent.type(last[1], 'Bar');  
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(first[1]).toHaveValue('Foo');
      expect(last[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: [{
        first: 'Hello', 
        last: 'World'
      }, {
        first: 'Foo', 
        last: 'Bar'
      }] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });
  
    it('should update state when user deletes 1 index [ a, b ] ---> [ a ]', async () => {
  
      const formApiRef = {};
  
      const { queryAllByLabelText, getByText, queryAllByTestId, queryAllByText } = render(
        <ObjectArrayfield formApiRef={formApiRef}/>
      );
  
      let inputs = queryAllByLabelText('Name');
      expect(inputs.length).toBe(0);
  
      const add = getByText('Add Sibling');
      fireEvent.click(add);
  
      let first = queryAllByLabelText('First');
      let last = queryAllByLabelText('Last');
      expect(first.length).toBe(1);
      expect(last.length).toBe(1);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
  
      fireEvent.click(add);
  
      first = queryAllByLabelText('First');
      last = queryAllByLabelText('Last');
      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      await userEvent.type(first[0], 'Hello');  
      await userEvent.type(last[0], 'World');  
      await userEvent.type(first[1], 'Foo');  
      await userEvent.type(last[1], 'Bar');  
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(first[1]).toHaveValue('Foo');
      expect(last[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: [{
        first: 'Hello', 
        last: 'World'
      }, {
        first: 'Foo', 
        last: 'Bar'
      }] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(2);
  
      fireEvent.click(removeButtons[1]);
  
      first = queryAllByLabelText('First');
      last = queryAllByLabelText('Last');
      expect(first.length).toBe(1);
      expect(last.length).toBe(1);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: [{
        first: 'Hello', 
        last: 'World'
      }] });
  
      keys = queryAllByTestId('key');
      expect(keys.length).toBe(1);
  
    });
  
    it('should initialize array field with initialValues from from', () => {
  
      const formApiRef = {};
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }
        ]
      };
  
      const { queryAllByLabelText, queryAllByTestId } = render(
        <ObjectArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );

      let first = queryAllByLabelText('First');
      let last = queryAllByLabelText('Last');

      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(first[1]).toHaveValue('Foo');
      expect(last[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: [{
        first: 'Hello', 
        last: 'World'
      }, {
        first: 'Foo', 
        last: 'Bar'
      }] });
  
      let keys = queryAllByTestId('key');
      expect(keys.length).toBe(2);
    });
  
    it('should update state when user deletes 0 index [ a, b ] ---> [ b ]', () => {
  
      const formApiRef = {};
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }
        ]
      };  

      const { queryAllByLabelText, queryAllByText } = render(
        <ObjectArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(2);
  
      fireEvent.click(removeButtons[0]);
  
      const first = queryAllByLabelText('First');
      const last = queryAllByLabelText('Last');
      expect(first.length).toBe(1);
      expect(last.length).toBe(1);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
  
      expect(first[0]).toHaveValue('Foo');
      expect(last[0]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ siblings: [{
        first: 'Foo', 
        last: 'Bar'
      }] });
  
    });
  
    it('should update state when user deletes 2 index [ a, b, c ] ---> [ a, b ]', () => {
  
      const formApiRef = {};  
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          },
        ]
      };  
      
      const { queryAllByLabelText, queryAllByText } = render(
        <ObjectArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[2]);
  
      const first = queryAllByLabelText('First');
      const last = queryAllByLabelText('Last');
      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(first[1]).toHaveValue('Foo');
      expect(last[1]).toHaveValue('Bar');
      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }
        ]
      });
  
    });
  
    it('should update state when user deletes 0 index [ a, b, c ] ---> [ b, c ]', () => {
  
      const formApiRef = {};  
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          },
        ]
      };  
      
      const { queryAllByLabelText, queryAllByText } = render(
        <ObjectArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[0]);
  
      const first = queryAllByLabelText('First');
      const last = queryAllByLabelText('Last');
      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      expect(first[0]).toHaveValue('Foo');
      expect(last[0]).toHaveValue('Bar');
      expect(first[1]).toHaveValue('Baz');
      expect(last[1]).toHaveValue('Taz');
      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          }
        ]
      });
  
    });
  
    it('should update state when user deletes 1 index [ a, b, c ] ---> [ a, c ]', () => {
  
      const formApiRef = {};  
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          },
        ]
      };  
      
      const { queryAllByLabelText, queryAllByText } = render(
        <ObjectArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );
  
      const removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
  
      fireEvent.click(removeButtons[1]);
  
      const first = queryAllByLabelText('First');
      const last = queryAllByLabelText('Last');
      expect(first.length).toBe(2);
      expect(last.length).toBe(2);
      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(first[1]).toHaveValue('Baz');
      expect(last[1]).toHaveValue('Taz');
      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Baz', 
            last: 'Taz'
          }
        ]
      });
  
    });

  });


  /* ------------------------------------ Relevant Array Field ------------------------------------ */
  describe('Relevant Array Field', () => {

  
    it('should initialize array field with initialValues from from', async () => {
  
      const formApiRef = {};
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          }
        ]
      };
  
      const { queryAllByLabelText } = render(
        <RelevantArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );

      let first = queryAllByLabelText('First');
      let last = queryAllByLabelText('Last');
      let foo = queryAllByLabelText('Foo');
      let show = queryAllByLabelText('Show Info?');
      
      expect(first.length).toBe(3);
      expect(last.length).toBe(3);
      expect(foo.length).toBe(3);
      expect(show.length).toBe(3);

      expect(first[0]).toHaveAttribute('name', 'siblings[0].first');
      expect(last[0]).toHaveAttribute('name', 'siblings[0].last');
      expect(foo[0]).toHaveAttribute('name', 'siblings[0].foo');
      expect(show[0]).toHaveAttribute('name', 'siblings[0].showInfo');

      expect(first[1]).toHaveAttribute('name', 'siblings[1].first');
      expect(last[1]).toHaveAttribute('name', 'siblings[1].last');
      expect(foo[1]).toHaveAttribute('name', 'siblings[1].foo');
      expect(show[1]).toHaveAttribute('name', 'siblings[1].showInfo');

      expect(first[2]).toHaveAttribute('name', 'siblings[2].first');
      expect(last[2]).toHaveAttribute('name', 'siblings[2].last');
      expect(foo[2]).toHaveAttribute('name', 'siblings[2].foo');
      expect(show[2]).toHaveAttribute('name', 'siblings[2].showInfo');
  
      expect(first[0]).toHaveValue('Hello');
      expect(last[0]).toHaveValue('World');
      expect(foo[0]).toHaveValue('foo-siblings[0]');

      expect(first[1]).toHaveValue('Foo');
      expect(last[1]).toHaveValue('Bar');
      expect(foo[1]).toHaveValue('foo-siblings[1]');

      expect(first[2]).toHaveValue('Baz');
      expect(last[2]).toHaveValue('Taz');
      expect(foo[2]).toHaveValue('foo-siblings[2]');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]'
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]'
          }
        ]
      });
  
    });

    const fillOneAndTwo = async () => {
      const formApiRef = {};
      const initialValues = { 
        siblings: [
          {
            first: 'Hello', 
            last: 'World'
          }, {
            first: 'Foo', 
            last: 'Bar'
          }, {
            first: 'Baz', 
            last: 'Taz'
          }
        ]
      };
  
      const { queryAllByLabelText, queryAllByText, getByText } = render(
        <RelevantArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
      );

      let show = queryAllByLabelText('Show Info?');

      let removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);

      // Show middle guys info
      fireEvent.click(show[1]);

      let age = queryAllByLabelText('Age');
      let color = queryAllByLabelText('Favorite Color');
      let food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      await userEvent.type(age[0], '27');
      await userEvent.type(color[0], 'Green');
      await userEvent.type(food[0], 'Apples');

      expect(age[0]).toHaveAttribute('name', 'siblings[1].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[1].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[1].food');

      expect(age[0]).toHaveValue(27);
      expect(color[0]).toHaveValue('Green');
      expect(food[0]).toHaveValue('Apples');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]'
          }
        ]
      });


      fireEvent.click(show[2]);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(2);
      expect(color.length).toBe(2);
      expect(food.length).toBe(2);

      await userEvent.type(age[1], '20');
      await userEvent.type(color[1], 'Blue');
      await userEvent.type(food[1], 'Berries');

      expect(age[1]).toHaveAttribute('name', 'siblings[2].age');
      expect(color[1]).toHaveAttribute('name', 'siblings[2].color');
      expect(food[1]).toHaveAttribute('name', 'siblings[2].food');

      expect(age[1]).toHaveValue(20);
      expect(color[1]).toHaveValue('Blue');
      expect(food[1]).toHaveValue('Berries');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]',
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }
        ]
      });

      return { formApiRef, queryAllByLabelText, queryAllByText, getByText };
    };


    it('should update correctly when hiding and showing', async () => {
      const { formApiRef, queryAllByLabelText } = await fillOneAndTwo();

      let show = queryAllByLabelText('Show Info?');

      // Hide the middle guys info
      fireEvent.click(show[1]);

      let age = queryAllByLabelText('Age');
      let color = queryAllByLabelText('Favorite Color');
      let food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(age[0]).toHaveAttribute('name', 'siblings[2].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[2].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[2].food');

      expect(age[0]).toHaveValue(20);
      expect(color[0]).toHaveValue('Blue');
      expect(food[0]).toHaveValue('Berries');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: false,
            color: 'Green',
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]',
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }
        ]
      });

      // Hide the last guys info
      fireEvent.click(show[2]);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(0);
      expect(color.length).toBe(0);
      expect(food.length).toBe(0);

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: false,
            color: 'Green',
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]',
            showInfo: false,
            color: 'Blue', 
          }
        ]
      });


      // Show the middle guys info
      fireEvent.click(show[1]);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(age[0]).toHaveAttribute('name', 'siblings[1].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[1].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[1].food');

      expect(age[0]).not.toHaveValue(27);
      expect(color[0]).toHaveValue('Green');
      expect(food[0]).not.toHaveValue('Apples');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'
          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: true,
            color: 'Green',
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]',
            showInfo: false,
            color: 'Blue', 
          }
        ]
      });

    });


    it('should update correctly when removing last index', async () => {
      const { formApiRef, queryAllByLabelText, queryAllByText, getByText } = await fillOneAndTwo();

      let removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);

      fireEvent.click(removeButtons[2]);

      let age = queryAllByLabelText('Age');
      let color = queryAllByLabelText('Favorite Color');
      let food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(age[0]).toHaveAttribute('name', 'siblings[1].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[1].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[1].food');

      expect(age[0]).toHaveValue(27);
      expect(color[0]).toHaveValue('Green');
      expect(food[0]).toHaveValue('Apples');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          }
        ]
      });

      // Now add it back 
      const add = getByText('Add Sibling');
      fireEvent.click(add);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]',
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          },{
            // NOTE HOW INITIAL VALUES ARE NOT HERE ( This is a good thing! )
            foo: 'foo-siblings[2]',
          }
        ]
      });

    });


    it('should update correctly when removing middle index', async () => {
      const { formApiRef, queryAllByLabelText, queryAllByText, getByText } = await fillOneAndTwo();

      let removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);
      
      fireEvent.click(removeButtons[1]);

      let age = queryAllByLabelText('Age');
      let color = queryAllByLabelText('Favorite Color');
      let food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(age[0]).toHaveAttribute('name', 'siblings[1].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[1].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[1].food');

      expect(age[0]).toHaveValue(20);
      expect(color[0]).toHaveValue('Blue');
      expect(food[0]).toHaveValue('Berries');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]', // << Important to note it has initial value from when it was 3rd element
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }
        ]
      });

      // Now add it back 
      const add = getByText('Add Sibling');
      fireEvent.click(add);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(1);
      expect(color.length).toBe(1);
      expect(food.length).toBe(1);

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Hello', 
            last: 'World',
            foo: 'foo-siblings[0]'

          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]', // << Important to note it has initial value from when it was 3rd element
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }, {
            // NOTE HOW INITIAL VALUES ARE NOT HERE ( This is a good thing! )
            foo: 'foo-siblings[2]',
          }
        ]
      });

    });

    it('should update correctly when removing first index', async () => {
      const { formApiRef, queryAllByLabelText, queryAllByText, getByText } = await fillOneAndTwo();

      let removeButtons = queryAllByText('Remove');
      expect(removeButtons.length).toBe(3);

      fireEvent.click(removeButtons[0]);

      let age = queryAllByLabelText('Age');
      let color = queryAllByLabelText('Favorite Color');
      let food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(2);
      expect(color.length).toBe(2);
      expect(food.length).toBe(2);

      expect(age[0]).toHaveAttribute('name', 'siblings[0].age');
      expect(color[0]).toHaveAttribute('name', 'siblings[0].color');
      expect(food[0]).toHaveAttribute('name', 'siblings[0].food');
      expect(age[1]).toHaveAttribute('name', 'siblings[1].age');
      expect(color[1]).toHaveAttribute('name', 'siblings[1].color');
      expect(food[1]).toHaveAttribute('name', 'siblings[1].food');

      expect(age[0]).toHaveValue(27);
      expect(color[0]).toHaveValue('Green');
      expect(food[0]).toHaveValue('Apples');
      expect(age[1]).toHaveValue(20);
      expect(color[1]).toHaveValue('Blue');
      expect(food[1]).toHaveValue('Berries');

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]', // << Important to note it has initial value from when it was 2nd element
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]', // << Important to note it has initial value from when it was 3rd element
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }
        ]
      });

      // Now add it back 
      const add = getByText('Add Sibling');
      fireEvent.click(add);

      age = queryAllByLabelText('Age');
      color = queryAllByLabelText('Favorite Color');
      food = queryAllByLabelText('Favorite Food');

      expect(age.length).toBe(2);
      expect(color.length).toBe(2);
      expect(food.length).toBe(2);

      expect(formApiRef.current.getFormState().values).toEqual({ 
        siblings: [
          {
            first: 'Foo', 
            last: 'Bar',
            foo: 'foo-siblings[1]', // << Important to note it has initial value from when it was 2nd element
            showInfo: true,
            age: 27,
            color: 'Green', 
            food: 'Apples'
          }, {
            first: 'Baz', 
            last: 'Taz',
            foo: 'foo-siblings[2]', // << Important to note it has initial value from when it was 3rd element
            showInfo: true,
            age: 20,
            color: 'Blue', 
            food: 'Berries'
          }, {
            // NOTE HOW INITIAL VALUES ARE NOT HERE ( This is a good thing! )
            foo: 'foo-siblings[2]',
          }
        ]
      });

    });
  

  });

  

});
