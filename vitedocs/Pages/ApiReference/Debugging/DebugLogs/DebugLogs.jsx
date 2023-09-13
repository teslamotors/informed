import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';

export default function DebugLogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Debugging Logs</h1>
      <Info>
        Sometimes you just want to see whats going on under the hood. Informed
        also comes with internal logging that can be enabled in following ways:
      </Info>
      <h2>When running in a browser ( development )</h2>
      <Code>localStorage.debug = 'informed:.*';</Code>
      <h2>When running in React Native ( development )</h2>
      <Code>
        {`
// only enable this in __DEV__ environment
if (__DEV__) {
  global.DEBUG_INFORMED = 'informed:.*';
}
`}
      </Code>
      <h2>When running in node ( unit tests )</h2>
      <Code>DEBUG = 'informed:.*';</Code>
      <hr />
      <h2>Testing it out</h2>
      <Info type="notice">
        Below is an example form with a single input and submit button. Look at
        the browser console and enable the logs with{' '}
        <code>localStorage.debug = 'informed:.*';</code>
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code links input1={exampleCode} />}
      />
      <Info type="notice">
        If done correctly it should look like the following when you reload and
        then type <code>"Hi"</code>
      </Info>

      <img
        style={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
          borderRadius: '20px'
        }}
        src={'/logs-example.png'}
        width="100%"
      />
      <br />
      <br />
    </>
  );
}
