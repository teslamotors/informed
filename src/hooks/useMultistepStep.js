import React, { useEffect } from 'react';
import { useMultistepState } from './useMultistepState';
import { useMultistepApi } from './useMultistepApi';
import { MultistepStepContext } from '../Context';
import { useRelevance } from './useRelevance';
import { Debug } from '../debug';
import { useFormController } from './useFormController';
import { Scope } from '../Components/Scope';

const logger = Debug('informed:useMultistepStep' + '\t');

const useMultistepStep = ({ step, relevant, keepState }) => {
  const formController = useFormController();
  const { current } = useMultistepState();
  const { register } = useMultistepApi();

  const active = step === current;

  useEffect(() => {
    register(step, {
      name: step,
      relevant
    });
  }, []);

  const isRelevant = useRelevance({
    name: step,
    relevant
  });

  // Cleanup on irrelivant
  useEffect(
    () => {
      if (!isRelevant && !keepState) {
        logger('MULTISTEP RELEVNAT REMOVING', step);
        formController.remove(step);
      }
    },
    [isRelevant]
  );

  const render = children => {
    return (
      <MultistepStepContext.Provider value={active}>
        <Scope scope={step}>{active ? children : null}</Scope>
      </MultistepStepContext.Provider>
    );
  };

  return {
    active,
    step,
    render,
    relevant: isRelevant
  };
};

export { useMultistepStep };
