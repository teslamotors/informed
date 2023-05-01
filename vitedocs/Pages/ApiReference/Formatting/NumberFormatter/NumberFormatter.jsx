import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../../YourComponents/Code';
import { SideBySide } from '../../../../SideBySide';
import { Info } from '../../../../Info';
import Simple from './Simple';
import simpleCode from './Simple.jsx?raw';
import CustomFormatter from './CustomFormatter';
import customCode from './CustomFormatter.jsx?raw';

export default function NumberFormatter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>NumberFormatter</code>
      </h1>
      <Info>
        Informed comes with a built in number formatter that makes use of the
        INTL spec!
        <br />
        <br />
        <strong>Note:</strong> It will format based on the intl config passed to
        the util.
        <br />
        <strong>Note:</strong> What gets stored in values is an actualy js
        number but whats shown to user is the formatted value itself.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Simple />}
        right={<Code links input1={simpleCode} />}
      />
      <hr />
      <h2>Changing Locale</h2>
      <Info>
        Thats cool but lets take a look at a more complex example where we can
        change the currency and locale.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <hr />
      <h2>Custom Formatter</h2>
      <Info>
        Sometimes you may for whatever reason need to override the way it
        formats. You can achieve this by passing a custom part formatter.
        <br />
        <br />
        <strong>Note:</strong> In the below example the commas are replaced by
        underscores.
      </Info>
      <SideBySide
        leftHeader={<h3>Example:</h3>}
        rightHeader={<h3>Code:</h3>}
        left={<CustomFormatter />}
        right={<Code links input1={customCode} />}
      />
      <br />
      <br />
    </>
  );
}
