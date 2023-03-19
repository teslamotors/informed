import { useEffect } from 'react';
import CarColor from '../GettingStarted/CarColor/CarColor';

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarColor />
      <br />
      <br />
    </>
  );
}
