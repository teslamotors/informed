import { useEffect } from 'react';

export default function FormState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Field State</code>
      </h1>
      <br />
      <br />
    </>
  );
}
