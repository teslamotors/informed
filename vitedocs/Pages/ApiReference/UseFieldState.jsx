import { useEffect } from 'react';
import CarColor from '../GettingStarted/CarColor/CarColor';
import ScopedFieldState from './UseFieldState/ScopedFieldState/ScopedFieldState';

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarColor />
      <br />
      <br />
      <hr />
      <ScopedFieldState />
    </>
  );
}
