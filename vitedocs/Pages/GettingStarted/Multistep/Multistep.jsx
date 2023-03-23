import { useEffect } from 'react';
import { DynamicMultistep } from '../../ApiReference/Multistep/DynamicMultistep/DynamicMultistep';
import MultistepIntro from '../../ApiReference/Multistep/MultistepIntro/MultistepIntro';
import MultistepState from '../../ApiReference/Multistep/MultistepState/MultistepState';

export const Multistep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MultistepIntro />
      <hr />
      <MultistepState />
      <hr />
      <DynamicMultistep />
    </>
  );
};
