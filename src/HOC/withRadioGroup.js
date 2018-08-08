import React from 'react';
import { GroupContext } from '../Context';

const withRadioGroup = Component =>
  React.forwardRef((props, ref) => (
    <GroupContext.Consumer>
      {({ radioGroupApi, radioGroupState }) => (
        <Component
          radioGroupApi={radioGroupApi}
          radioGroupState={radioGroupState}
          ref={ref}
          {...props}
        />
      )}
    </GroupContext.Consumer>
  ));

export default withRadioGroup;
