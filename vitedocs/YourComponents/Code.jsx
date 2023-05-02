import { ActionButton, TooltipTrigger, Tooltip } from '@adobe/react-spectrum';
import Copy from '@spectrum-icons/workflow/Copy';
import Edit from '@spectrum-icons/workflow/Edit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import useApp from '../hooks/useApp';

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
  minWidth2 = '600px',
  children,
  links
}) {
  const { lineNumbers, comments } = useApp();

  const navigate = useNavigate();

  useEffect(
    () => {
      // @ts-ignore
      Prism.highlightAll();
    },
    [input1, input2, lineNumbers]
  );

  input1 = input1 ?? children;

  const numberClass = lineNumbers ? 'line-numbers' : '';

  // const divContentRegex = /<div className="hide">\n((?:\s{2}.*\n)+?)\s{4}<\/div>/g;

  // input1 = input1.replace(divContentRegex, (_, content) => {
  //   const outdentedContent = content.replace(/^ {4}/gm, '  ');
  //   const firstLineFixed = outdentedContent.replace(/^\s{4}/, '');
  //   const removeEmptyLine = firstLineFixed.replace(/\n$/, '');
  //   return removeEmptyLine;
  // });

  const commentRegex = /(?:^(\r\n|\r|\n))?^.*\/\*.+\*\/.*(\r\n|\r|\n)?/gm;
  if (!comments) input1 = input1.replace(commentRegex, '');

  if (!input2) {
    return (
      <div style={{ position: 'relative' }}>
        {links ? (
          <>
            <div style={{ position: 'absolute', right: '-32px' }}>
              <TooltipTrigger>
                <ActionButton
                  aria-label="Copy Code"
                  onPress={() => {
                    navigator.clipboard.writeText(input1);
                  }}>
                  <Copy />
                </ActionButton>
                <Tooltip>Copy to clipboard</Tooltip>
              </TooltipTrigger>
            </div>
            <div style={{ position: 'absolute', right: '4px' }}>
              <TooltipTrigger>
                <ActionButton
                  aria-label="Playground"
                  onPress={() => {
                    let code = input1.replace(
                      'YourComponents',
                      './YourComponents'
                    );
                    code = code.replace(/<Option key="/g, '<Option value="');
                    code = code.replace(/style="outline"/g, '');
                    code = code.replace(/style="fill"/g, '');
                    navigate(`/playground?code=${btoa(code)}`);
                  }}>
                  <Edit />
                </ActionButton>
                <Tooltip>Open in playground</Tooltip>
              </TooltipTrigger>
            </div>
          </>
        ) : null}

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
