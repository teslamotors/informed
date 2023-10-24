import ReactMarkdown from 'react-markdown';
import ReadmeContent from '../../../../README.md?raw';
import { useEffect } from 'react';

export function Readme() {
  useEffect(() => {
    // @ts-ignore
    Prism.highlightAll();
  }, []);

  return <ReactMarkdown children={ReadmeContent} />;
}
