import React from 'react';
import { useField } from 'informed';
import { Flex, Slider, NumberField } from '@adobe/react-spectrum';

const outside = (a, [l, h]) => {
  return a < l || a > h;
};

const Input = ({ displayError, ...props }) => {
  const validate = (value) => {
    return outside(value, [props.minValue, props.maxValue]) ? 'Too far!' : undefined;
  };

  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'number',
    validate,
    ...props,
  });
  const { required, trackGradient } = userProps;
  const { error, showError } = fieldState;

  return render(
    <div className="input-slider">
      <Flex direction="row" justifyContent="space-between" alignItems="center" gap="size-100">
        <NumberField
          ref={ref}
          validationState={!error ? null : 'invalid'}
          // errorMessage={showError ? error : undefined}
          isRequired={required}
          {...userProps}
          {...informed}
          onChange={(v) => fieldApi.setValue(v, {})}
          // type={props.type}
          step={props.step}
          type="number"
        />
        <Slider
          maxWidth={120}
          ref={ref}
          validationState={!error ? null : 'invalid'}
          errorMessage={showError ? error : undefined}
          isRequired={required}
          {...userProps}
          {...informed}
          trackGradient={['white', trackGradient ?? 'rgba(177,141,32,1)']}
          label={' '}
          onChange={(v) => fieldApi.setValue(v, {})}
        />
      </Flex>
      {showError ? <small style={{ color: 'rgb(236,91,98)' }}>{error}</small> : null}
    </div>
  );
};

export default Input;
