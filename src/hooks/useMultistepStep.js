import React, { useEffect } from 'react';
import { useMultistepState } from './useMultistepState';
import { useMultistepApi } from './useMultistepApi';
import { MultistepStepContext } from '../Context';
import { useRelevance } from './useRelevance';
import { Debug } from '../debug';
import { useFormController } from './useFormController';
import { Scope } from '../Components/Scope';

const logger = Debug('informed:useMultistepStep' + '\t');

const useMultistepStep = ({
  step,
  relevant,
  keepState,
  relevanceWhen = []
}) => {
  const formController = useFormController();
  const { current, goal } = useMultistepState();
  const { register, next, metGoal } = useMultistepApi();

  const active = step === current;

  useEffect(() => {
    register(step, {
      name: step,
      relevant
    });
  }, []);

  const isRelevant = useRelevance({
    name: step,
    relevant,
    relevanceWhen
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

  useEffect(
    () => {
      // if we are NOT at the goal go to the next step
      if (goal && active && goal !== step) {
        logger('GOAL', goal, 'STEP', step);
        logger('GOING TO NEXT STEP');
        next();
      }
      // If we have met our goal clear it
      if (goal && active && goal === step) {
        metGoal();
      }
    },
    [goal, active]
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
