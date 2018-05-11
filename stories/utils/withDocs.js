import React from 'react';
import { withDocs }  from 'storybook-readme';

export default withDocs({
  PreviewComponent: ({children}) => (
    <div style={{
      //textAlign: 'center',
      marginTop: '25px',
      //border: '1px dashed #e5e5e5',
      //paddingTop: '20px',
      //paddingBottom: '20px'
      //boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)'
    }}>{children}</div>
  ),
  FooterComponent: ({children}) => <div>{children}</div>
});
