import { useEffect } from 'react';
import InputExamples from '../InputExamples/InputExamples';

export default function Setup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Getting Started</h1>
      <h2>Install</h2>
      <code className="code-block">npm install informed</code>
      <hr />
      <InputExamples />
    </>
  );
}
