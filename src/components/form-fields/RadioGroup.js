import React, { Component } from 'react';
import { GroupContext } from '../../Context';

import asField from '../../HOC/asField';

class RadioGroup extends Component {

  get groupContext () {
    return {
      radioGroupApi: {
        ...this.props.fieldApi,
        onChange: this.props.onChange,
        onBlur: this.props.onBlur,
      },
      radioGroupState: this.props.fieldState
    }
  }

  render () {
    return (
      <GroupContext.Provider value={this.groupContext}>
        {this.props.children}
      </GroupContext.Provider>
    )
  }
}

export default asField(RadioGroup);
