import { useEffect } from 'react';
import { useFormController } from '../hooks/useFormController';
import { Debug } from '../debug';

const logger = Debug('informed:FormField' + '\t');

export const UpdateFields = ({ schema }) => {
  const formController = useFormController();

  // When we render add props
  useEffect(() => {
    // Example schema
    // schema =  {
    //   product: {
    //     oneOf: [
    //       { const: '', title: '- Select -' },
    //       { const: 'modelS', title: 'Model S' },
    //       { const: 'modelX', title: 'Model X' },
    //       { const: 'model3', title: 'Model 3' }
    //     ]
    //   }
    // }

    Object.entries(schema).forEach(([key, value]) => {
      logger(`update-combine ${key}`, value);
      formController.emitter.emit('update-combine', key, value);
    });

    // When we unmount take away props
    return () => {
      Object.entries(schema).forEach(([key]) => {
        logger(`update-remove ${key}`);
        formController.emitter.emit('update-remove', key);
      });
    };
  }, []);

  return null;
};
