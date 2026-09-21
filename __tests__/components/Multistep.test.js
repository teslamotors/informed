import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { Multistep, useFormApi, useMultistepApi } from '../../src';

// A step that exposes every bit of navigation we need to drive it from a test,
// plus the "start the form over" button from issue #382.
const Step = ({ step, field, ...fieldProps }) => {
  const { next, previous, setCurrent } = useMultistepApi();
  const { reset } = useFormApi();

  return (
    <Multistep.Step step={step}>
      <Input name={field} label={field} {...fieldProps} />
      <button type="button" onClick={() => next()}>
        {`next-${step}`}
      </button>
      <button type="button" onClick={() => previous()}>
        {`previous-${step}`}
      </button>
      <button
        type="button"
        onClick={() => {
          reset();
          setCurrent('1');
        }}>
        {`restart-${step}`}
      </button>
    </Multistep.Step>
  );
};

const ThreeStepForm = ({ formApiRef, ...props }) => (
  <Form formApiRef={formApiRef} {...props}>
    <Multistep initialStep="1">
      <Step step="1" field="one" />
      <Step step="2" field="two" />
      <Step step="3" field="three" />
    </Multistep>
  </Form>
);

const initialValues = {
  1: { one: 'i-one' },
  2: { two: 'i-two' },
  3: { three: 'i-three' }
};

describe('Multistep', () => {
  describe('reset', () => {
    // https://github.com/teslamotors/informed/issues/382
    it('should reset a multistep form and start it over without erroring', async () => {
      const formApiRef = {};

      const { getByText, getByLabelText, queryByLabelText } = render(
        <ThreeStepForm formApiRef={formApiRef} initialValues={initialValues} />
      );

      // Walk all the way to the last step, changing every value on the way
      await userEvent.clear(getByLabelText('one'));
      await userEvent.type(getByLabelText('one'), 'ONE');
      fireEvent.click(getByText('next-1'));

      await userEvent.clear(getByLabelText('two'));
      await userEvent.type(getByLabelText('two'), 'TWO');
      fireEvent.click(getByText('next-2'));

      await userEvent.clear(getByLabelText('three'));
      await userEvent.type(getByLabelText('three'), 'THREE');

      expect(formApiRef.current.getFormState().values).toEqual({
        1: { one: 'ONE' },
        2: { two: 'TWO' },
        3: { three: 'THREE' }
      });

      // Starting the form over resets fields that are not currently rendered,
      // which is what used to blow up. Nothing may be logged to the console.
      const consoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      fireEvent.click(getByText('restart-3'));

      expect(consoleError).not.toHaveBeenCalled();
      consoleError.mockRestore();

      // We are back on the first step, showing the initial value again
      expect(queryByLabelText('three')).not.toBeInTheDocument();
      expect(getByLabelText('one')).toHaveValue('i-one');
      expect(formApiRef.current.getFormState().pristine).toBe(true);

      // And the steps we never went back to are clean as well
      fireEvent.click(getByText('next-1'));
      expect(getByLabelText('two')).toHaveValue('i-two');
      fireEvent.click(getByText('next-2'));
      expect(getByLabelText('three')).toHaveValue('i-three');
    });

    it('should only reset onscreen fields when resetOnlyOnscreen is passed', async () => {
      const formApiRef = {};

      const { getByText, getByLabelText } = render(
        <ThreeStepForm
          formApiRef={formApiRef}
          initialValues={initialValues}
          resetOnlyOnscreen
        />
      );

      await userEvent.clear(getByLabelText('one'));
      await userEvent.type(getByLabelText('one'), 'ONE');
      fireEvent.click(getByText('next-1'));

      await userEvent.clear(getByLabelText('two'));
      await userEvent.type(getByLabelText('two'), 'TWO');

      act(() => {
        formApiRef.current.reset();
      });

      // The step we are on went back to its initial value
      expect(getByLabelText('two')).toHaveValue('i-two');
      // The step we already filled out was left alone
      expect(formApiRef.current.getFormState().values).toEqual({
        1: { one: 'ONE' },
        2: { two: 'i-two' }
      });
    });

    it('should not reset values when resetOnlyOnscreen is passed and resetValues is false', async () => {
      const formApiRef = {};

      const { getByLabelText } = render(
        <ThreeStepForm
          formApiRef={formApiRef}
          initialValues={initialValues}
          resetOnlyOnscreen
        />
      );

      await userEvent.clear(getByLabelText('one'));
      await userEvent.type(getByLabelText('one'), 'ONE');

      act(() => {
        formApiRef.current.reset({ resetValues: false });
      });

      expect(getByLabelText('one')).toHaveValue('ONE');
      expect(formApiRef.current.getFormState().values).toEqual({
        1: { one: 'ONE' }
      });
    });

    it('should reset to the values given to reset when resetOnlyOnscreen is passed', () => {
      const formApiRef = {};

      const { getByText, getByLabelText } = render(
        <ThreeStepForm
          formApiRef={formApiRef}
          initialValues={initialValues}
          resetOnlyOnscreen
        />
      );

      act(() => {
        formApiRef.current.reset({
          values: { 1: { one: 'NEW-ONE' }, 2: { two: 'NEW-TWO' } }
        });
      });

      // The onscreen step picks the new values up right away
      expect(getByLabelText('one')).toHaveValue('NEW-ONE');
      // And so does a step we walk onto afterwards
      fireEvent.click(getByText('next-1'));
      expect(getByLabelText('two')).toHaveValue('NEW-TWO');
    });

    it('should not leave a stale validateOnMount error behind when resetOnlyOnscreen is passed', async () => {
      const formApiRef = {};

      // `two` is rendered before `one`, and validates against `one`s value, so
      // resetting field by field would validate it against a half reset form.
      const validateTwo = (value, values) =>
        values['1'] && values['1'].one === 'i-one'
          ? undefined
          : 'one is not initial';

      const { getByLabelText } = render(
        <Form
          formApiRef={formApiRef}
          initialValues={initialValues}
          validateOnMount
          resetOnlyOnscreen>
          <Multistep initialStep="1">
            <Multistep.Step step="1">
              <Input name="two" label="two" validate={validateTwo} />
              <Input name="one" label="one" />
            </Multistep.Step>
          </Multistep>
        </Form>
      );

      await userEvent.clear(getByLabelText('one'));
      await userEvent.type(getByLabelText('one'), 'ONE');

      act(() => {
        formApiRef.current.reset();
      });

      const formState = formApiRef.current.getFormState();
      expect(formState.errors).toEqual({});
      expect(formState.valid).toBe(true);
    });
  });
});
