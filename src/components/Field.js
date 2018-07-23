import React, { PureComponent } from 'react';
import { bindToField } from '../HOC/withFieldStuff';

class Field extends PureComponent {

  constructor(props){
    super(props);
    this.me = React.createRef();
  }

  componentDidMount(){
    this.props.register();
  }

  componentWillUnmount(){
    this.props.deregister();
  }

  componentDidUpdate(){
    if( this.props.debug && this.me ){
      this.me.current.style.backgroundColor = 'red';
      setTimeout(()=>{
        this.me.current.style.backgroundColor = 'white';
      }, 500)
    }
  }

  render(){
    const {
      fieldApi,
      fieldState,
      children,
      component,
      render,
      register,
      deregister,
      forwardedRef,
      debug,
      ...rest
    } = this.props;
    const props = {
      fieldApi,
      fieldState,
      forwardedRef: debug ? this.me : forwardedRef,
      ...rest
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
