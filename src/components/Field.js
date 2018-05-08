import React, { Component } from 'react';
import { bindToField } from '../HOC/withFieldStuff';

class Field extends Component {

  render(){
    const {
      fieldApi,
      fieldState,
      children,
      component,
      render,
    } = this.props;

    const props = {
      fieldApi,
      fieldState
    };

    if (component) {
      return React.createElement(component, props, children)
    }
    if (render) {
      return render(props)
    }
    if (typeof children === 'function') {
      return children(props)
    }
    return children
  }

}

export default bindToField( Field );
