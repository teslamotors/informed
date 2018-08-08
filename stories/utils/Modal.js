import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    if (this.props.getControl) {
      this.props.getControl(this.controller);
    }
  }

  open = () => {
    this.setState({
      open: true
    });
  };

  close = () => {
    this.setState({
      open: false
    });
  };

  get controller() {
    return {
      open: this.open,
      close: this.close
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.open ? (
          <React.Fragment>
            <div
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.7)'
              }}
            />
            <div
              style={{
                minHeight: '50px',
                minWidth: '400px',
                position: 'fixed',
                paddingBottom: '2.5rem',
                top: '50%',
                left: '50%',
                backgroundColor: 'white',
                transform: 'translate(-50%, -50%)',
                borderRadius: '6px',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <div
                style={{
                  flex: 1,
                  textAlign: 'right',
                  color: 'rgb(167, 26, 21)',
                  fontSize: '1.8rem'
                }}>
                <span
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  onClick={this.close}>
                  <strong>x</strong>
                </span>
              </div>
              <div style={{ flex: 4, textAlign: 'center' }}>
                {this.props.children}
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Modal;
