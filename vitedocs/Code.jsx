import { useEffect } from 'react';
// @ts-ignore
import useApp from './hooks/useApp';

// @ts-ignore
const trim = str => {
  return str.replace(/\n/g, '').replace(/\s+/g, '');
};

// @ts-ignore
function Code({
  input1,
  input2,
  language1 = 'jsx',
  language2 = 'jsx',
  minWidth1 = '600px',
  minWidth2 = '600px'
}) {
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
        <pre className={`language-${language1} ${numberClass}`}>
          <code className={`language-${language1}`}>{input1}</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
      <pre
        className={`language-${language1} ${numberClass}`}
        style={{ flex: '1', minWidth: minWidth1 }}>
        <code className={`language-${language1} ${numberClass}`}>{input1}</code>
      </pre>
      <pre
        className={`language-${language2} ${numberClass}`}
        style={{ flex: '1', minWidth: minWidth2 }}>
        <code className={`language-${language2} ${numberClass}`}>{input2}</code>
      </pre>
    </div>
  );
}

export default Code;
