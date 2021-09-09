import React, { Component } from 'react';
import { GroupContext } from '../../Context';
import { Radio } from './Radio';

import { asField } from '../../HOC/asField';

class RadioGroup extends Component {
  get groupContext() {
    return {
      radioGroupApi: {
        ...this.props.fieldApi,
        onChange: this.props.onChange,
        onBlur: this.props.onBlur
      },
      radioGroupState: this.props.fieldState
    };
  }

  render() {
    const { options, children } = this.props;

    return (
      <GroupContext.Provider value={this.groupContext}>
        {options
          ? options.map(option => (
            <label key={option.value}>
              {option.label} <Radio value={option.value} />
            </label>
          ))
          : children}
      </GroupContext.Provider>
    );
  }
}

export { RadioGroup as BasicRadioGroup };

const WrappedRadioGroup = asField(RadioGroup);

export { WrappedRadioGroup as RadioGroup };
