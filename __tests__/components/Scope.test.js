import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { Scope } from '../../src';

const getState = state => {
  const defaultState = {
    pristine: true,
    dirty: false,
    disabled: false,
    submitted: false,
    valid: true,
    invalid: false,
    submitting: false,
    validating: 0,
    values: {},
    maskedValues: {},
    modified: {},
    errors: {},
    focused: {},
    gathering: 0,
    data: {},
    touched: {},
    initialValues: {},
    dirt: {},
    memory: {}
  };
  return Object.assign({}, defaultState, state);
};

describe('Scope', () => {
  it('should properly scope form fields', async () => {
    const formApiRef = {};
    const initialValues = {
      name: 'Elon',
      age: 50,
      spouse: {
        name: 'Talulah',
        age: 36
      }
    };

    const { getByLabelText } = render(
      <Form formApiRef={formApiRef} initialValues={initialValues}>
        <Input name="name" label="Your First name:" />
        <Input name="age" label="Your Age:" type="number" />
        <Scope scope="spouse">
          <Input name="name" label="Spouse First name:" />
          <Input name="age" label="Spouse Age:" type="number" />
        </Scope>
      </Form>
    );

    // Check initial values
    expect(formApiRef.current.getFormState()).toEqual(
      getState({
        values: {
          name: 'Elon',
          age: 50,
          spouse: {
            name: 'Talulah',
            age: 36
          }
        },
        maskedValues: {
          name: 'Elon',
          age: 50,
          spouse: {
            name: 'Talulah',
            age: 36
          }
        },
        initialValues
      })
    );

    // Update scoped field
    const spouseNameInput = getByLabelText('Spouse First name:');
    await userEvent.type(spouseNameInput, '!');

    expect(formApiRef.current.getFormState()).toEqual(
      getState({
        pristine: false,
        dirty: true,
        values: {
          name: 'Elon',
          age: 50,
          spouse: {
            name: 'Talulah!',
            age: 36
          }
        },
        maskedValues: {
          name: 'Elon',
          age: 50,
          spouse: {
            name: 'Talulah!',
            age: 36
          }
        },
        modified: {
          spouse: {
            name: 'Talulah!'
          }
        },
        dirt: {
          spouse: {
            name: true
          }
        },
        focused: {
          spouse: {
            name: true
          }
        },
        initialValues
      })
    );
  });

  it('should handle nested scopes', async () => {
    const formApiRef = {};
    const initialValues = {
      name: 'Elon',
      spouse: {
        name: 'Talulah',
        mother: {
          name: 'Maye',
          age: 74
        }
      }
    };

    const { getByLabelText } = render(
      <Form formApiRef={formApiRef} initialValues={initialValues}>
        <Input name="name" label="Your First name:" />
        <Scope scope="spouse">
          <Input name="name" label="Spouse First name:" />
          <Scope scope="mother">
            <Input name="name" label="Mother First name:" />
            <Input name="age" label="Mother Age:" type="number" />
          </Scope>
        </Scope>
      </Form>
    );

    // Check initial values
    expect(formApiRef.current.getFormState()).toEqual(
      getState({
        values: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            mother: {
              name: 'Maye',
              age: 74
            }
          }
        },
        maskedValues: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            mother: {
              name: 'Maye',
              age: 74
            }
          }
        },
        initialValues
      })
    );

    // Update deeply nested field
    const motherAgeInput = getByLabelText('Mother Age:');
    await userEvent.type(motherAgeInput, '5');

    expect(formApiRef.current.getFormState()).toEqual(
      getState({
        pristine: false,
        dirty: true,
        values: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            mother: {
              name: 'Maye',
              age: 745
            }
          }
        },
        maskedValues: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            mother: {
              name: 'Maye',
              age: 745
            }
          }
        },
        modified: {
          spouse: {
            mother: {
              age: 745
            }
          }
        },
        dirt: {
          spouse: {
            mother: {
              age: true
            }
          }
        },
        focused: {
          spouse: {
            mother: {
              age: true
            }
          }
        },
        initialValues
      })
    );
  });

  it('should handle form submission with scoped values', async () => {
    const formApiRef = {};
    const onSubmit = jest.fn();
    const initialValues = {
      name: 'Elon',
      spouse: {
        name: 'Talulah',
        age: 36
      }
    };

    const { getByLabelText, getByText } = render(
      <Form
        formApiRef={formApiRef}
        onSubmit={onSubmit}
        initialValues={initialValues}>
        <Input name="name" label="Your First name:" />
        <Scope scope="spouse">
          <Input name="name" label="Spouse First name:" />
          <Input name="age" label="Spouse Age:" type="number" />
        </Scope>
        <button type="submit">Submit</button>
      </Form>
    );

    // Update a scoped field
    const spouseNameInput = getByLabelText('Spouse First name:');
    await userEvent.type(spouseNameInput, '!');

    // Submit the form
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith(
      getState({
        pristine: false,
        dirty: true,
        submitted: true,
        values: {
          name: 'Elon',
          spouse: {
            name: 'Talulah!',
            age: 36
          }
        },
        maskedValues: {
          name: 'Elon',
          spouse: {
            name: 'Talulah!',
            age: 36
          }
        },
        modified: {
          spouse: {
            name: 'Talulah!'
          }
        },
        touched: {
          name: true,
          spouse: {
            name: true,
            age: true
          }
        },
        dirt: {
          spouse: {
            name: true
          }
        },
        focused: {
          spouse: {
            name: true
          }
        },
        initialValues
      })
    );
  });

  it('should handle form reset with scoped values', async () => {
    const formApiRef = {};
    const initialValues = {
      name: 'Elon',
      spouse: {
        name: 'Talulah',
        age: 36
      }
    };

    const { getByLabelText, getByText } = render(
      <Form formApiRef={formApiRef} initialValues={initialValues}>
        <Input name="name" label="Your First name:" />
        <Scope scope="spouse">
          <Input name="name" label="Spouse First name:" />
          <Input name="age" label="Spouse Age:" type="number" />
        </Scope>
        <button type="reset">Reset</button>
      </Form>
    );

    // Update a scoped field
    const spouseNameInput = getByLabelText('Spouse First name:');
    await userEvent.type(spouseNameInput, '!');

    // Reset the form
    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);

    expect(formApiRef.current.getFormState()).toEqual(
      getState({
        values: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            age: 36
          }
        },
        maskedValues: {
          name: 'Elon',
          spouse: {
            name: 'Talulah',
            age: 36
          }
        },
        initialValues
      })
    );
  });
});
