/* ------------- Imports -------------- */
import React, { Component } from 'react'
import { PrismCode } from 'react-prism';

class Code extends Component {
  render() {

    const {
      children,
      language
    } = this.props;

    return (
      <pre>
        <PrismCode className={language}>
          {children}
        </PrismCode>
      </pre>
    )
  }
}

export default Code
