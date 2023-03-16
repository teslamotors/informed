import { useEffect } from 'react';
// @ts-ignore
import useApp from './hooks/useApp';

// @ts-ignore
const trim = str => {
  return str.replace(/\n/g, '').replace(/\s+/g, '');
};

// @ts-ignore
function Code({ input1, input2 }) {
  const { lineNumbers } = useApp();

  useEffect(
    () => {
      // @ts-ignore
      Prism.highlightAll();
    },
    [input1, input2, lineNumbers]
  );

  const numberClass = lineNumbers ? 'line-numbers' : '';

  if (!input2) {
    return (
      <div>
        <pre className={`language-jsx ${numberClass}`}>
          <code className="language-jsx">{input1}</code>
        </pre>
      </div>
    );
  }

  const nLinesInput1 = input1.split(/\r\n|\r|\n/).length + 2;
  const nLinesInput2 = input2.split(/\r\n|\r|\n/).length + 2;
  console.log('LINES', nLinesInput1);

  input1 =
    `// Number of lines: ${nLinesInput1}\n// Number of characters: ${
      trim(input1).length
    }\n\n` + input1;
  input2 =
    `// Number of lines: ${nLinesInput2}\n// Number of characters: ${
      trim(input2).length
    }\n\n` + input2;

  return (
    <div
      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
      <pre
        className={`language-tsx ${numberClass}`}
        style={{ flex: '1', minWidth: '600px' }}>
        <code className={`language-tsx ${numberClass}`}>{input1}</code>
      </pre>
      <pre
        className={`language-tsx ${numberClass}`}
        style={{ flex: '1', minWidth: '600px' }}>
        <code className={`language-tsx ${numberClass}`}>{input2}</code>
      </pre>
    </div>
  );
}

export default Code;
