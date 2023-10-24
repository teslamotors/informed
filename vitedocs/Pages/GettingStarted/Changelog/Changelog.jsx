import ReactMarkdown from 'react-markdown';
import ReadmeContent from '../../../../CHANGELOG.md?raw';
import { useEffect } from 'react';

export function Changelog() {
  useEffect(() => {
    // @ts-ignore
    Prism.highlightAll();
  }, []);

  return <ReactMarkdown children={ReadmeContent} />;
}
