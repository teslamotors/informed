import React, { useEffect } from 'react';
import { useMultistepState } from './useMultistepState';
import { useMultistepApi } from './useMultistepApi';
import { MultistepStepContext } from '../Context';
import { useRelevance } from './useRelevance';
import { Debug } from '../debug';
import { useFormController } from './useFormController';
import { Scope } from '../components/Scope';

const logger = Debug('informed:useMultistepStep' + '\t');

const useMultistepStep = ({
  step,
  relevant,
  keepState,
  relevanceWhen = [],
  relevanceDeps = []
}) => {
  const formController = useFormController();
  const { current, goal } = useMultistepState();
  const { register, deregister, next, metGoal } = useMultistepApi();

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
    relevanceWhen,
    relevanceDeps
  });

  // Cleanup on irrelivant
  useEffect(
    () => {
      if (!isRelevant && !keepState) {
        logger('MULTISTEP RELEVNAT REMOVING', step);
        formController.remove(step);
      }
      // We also need all steps to re evaluate if they have next and prev
      formController.emitter.emit('multistep-relevance');
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

  useEffect(() => {
    return () => {
      logger('MULTISTEP REMOVING', step);
      formController.remove(step);
      deregister(step);
    };
  }, []);

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
