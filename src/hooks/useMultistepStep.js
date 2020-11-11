import React, { useEffect, useRef, useState } from 'react';
import useMultistepState from './useMultistepState';
import useFormState from './useFormState';
import useMultistepApi from './useMultistepApi';
import { MultistepStepContext } from '../Context';

const useMultistepStep = ({ step, next, previous, relevant }) => {
  const { values } = useFormState();
  const { current } = useMultistepState();
  const { register, deregister } = useMultistepApi();

  const isCurrent = step === current;
  const isRelevant = relevant ? relevant(values) : true;

  const nextRef = useRef(next);
  const prevRef = useRef(previous);
  const relevantRef = useRef();
  nextRef.current = next;
  prevRef.current = previous;
  relevantRef.current = relevant;

  useState(() => {
    register(
      step,
      {
        name: step,
        getNext: () => nextRef.current,
        getPrevious: () => prevRef.current
      },
      true
    );
  });

  useEffect(
    () => {
      register(step, {
        name: step,
        getNext: () => nextRef.current,
        getPrevious: () => prevRef.current
      });
      return () => {
        deregister(step);
      };
    },
    [step]
  );

  const render = children => {
    return (
      <MultistepStepContext.Provider
        value={{
          relevant: params =>
            relevantRef.current ? relevantRef.current(params) : true,
          multistep: true
        }}>
        {isCurrent && isRelevant ? children : null}
      </MultistepStepContext.Provider>
    );
  };

  return {
    isCurrent,
    isRelevant,
    step,
    render
  };
};

export default useMultistepStep;
