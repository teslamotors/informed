import React, { PureComponent } from 'react';
import { bindToField } from '../HOC/withFieldStuff';

class Field extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const {
      fieldApi,
      fieldState,
      children,
      component,
      render,
      field,
      ...rest
    } = this.props;
    const props = {
      fieldApi,
      fieldState,
      ...rest
    };

    console.log("RENDERING", field);

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
