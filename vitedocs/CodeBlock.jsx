import React from 'react';
import { ActionButton, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';
import Copy from '@spectrum-icons/workflow/Copy';

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  useSandpack
} from '@codesandbox/sandpack-react';

const style = `
body {
  background-color: rgb(13, 16, 17);
  color: white !important;
}

form {
  left: 12.5%;
  width: 75%;
  position: absolute;
}

small { 
  display: block;
  margin-bottom: 1rem;
}

pre {
  background-color: rgb(29,29,29);
  padding: 10px;
}

.car {
  width: 100%;
  height: 100px;
}

.car-color-blue .car {
  background-color: #2540af;
}

.car-color-red .car {
  background-color: #e53046;
}

.car-color-green .car {
  background-color: #126014;
}

.car-color-pink .car {
  background-color: #E9246F;
}

input {
  margin-bottom: 1rem;
}

input:not([type='checkbox']):not([type='radio']),
textarea,
select {
  box-sizing: border-box;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: block;
  border-radius: 5px;
  width: 300px;
  padding: 10px 20px;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: #222222;
  color: white;
  width: 100%;
}

.radio-label {
  display: block;
}

textarea {
  max-width: 100%;
}

select {
  /* needed */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* SVG background image */
  background-size: 0.6em;
  background-position: calc(100% - 1.3em) center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ctitle%3Edown-arrow%3C/title%3E%3Cg fill='%23000000'%3E%3Cpath d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
}

.select:before {
  content: '';
  position: absolute;
  right: 10px;
  top: 8px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #f00;
}

.select:after {
  content: '';
  position: absolute;
  right: 10px;
  top: 3px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #333;
}

label {
  margin-bottom: 1rem;
  display: block;
}

button {
  text-align: left;
  display: inline-block;
  height: var(--informed-height--pill);
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 5px 40px;
  color: white;
  background-color: rebeccapurple;
  margin-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}

button:hover {
  opacity: 0.5;
  cursor: pointer;
}

button[type='submit'] {
  display: block;
}

.informed-container {
  padding: 4rem;
}
`;

const components = `
import {
  useField,
  useForm,
  ArrayField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  FormFields
} from 'informed';

// Step 1. Build your input components --------------------

export const Input = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

export const Number = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'number',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

export const Checkbox = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

export const Select = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'select',
    ...props
  });
  const { label, id, children, options, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...informed} {...rest}>
        {options ? options.map(option => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}>
            {option.label}
          </option>
        ))
        : children}
      </select>
    </>
  );
};

export const Option = ({ value, children, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {children}
    </option>
  );
};

export const Hidden = props => {
  const { informed, render, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  return render(<input {...informed} {...userProps} ref={ref} type="hidden" />);
};

// Step 2. Define Array Components --------------------

export const AddButton = () => {
  const { add } = useArrayFieldApi();
  return (
    <button onClick={add} type="button">
      Add
    </button>
  );
};

export const RemoveButton = () => {
  const { remove } = useArrayFieldItemApi();
  return (
    <button onClick={remove}>
      Remove
    </button>
  );
};

export const MyArrayField = ({ name, items, ...props }) => {
  return (
    <ArrayField name={name} {...props}>
      <AddButton />
      <ArrayField.Items>
        {() => (
          <>
            <FormFields schema={items} />
            <RemoveButton />
          </>
        )}
      </ArrayField.Items>
    </ArrayField>
  );
};

// Step 3. Define your field adapter --------------------

export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

export const ButtonGroup = ({ orientation, align, children }) =>{
  const flexDirection = orientation == 'vertical' ? 'column' : 'row';
  return <div style={{ display: 'flex', flexDirection, alignItems: align }}>{children}</div>
}

const adapter = {
  button: Button,
  select: Select,
  input: Input,
  string: Input,
  number: Number,
  checkbox: Checkbox,
  boolean: Checkbox,
  add: AddButton,
  remove: RemoveButton,
  array: MyArrayField,
  withOptions: {
    string: Select,
    number: Select,
  }
};

// Step 4. Build your form component ---------------------

export const Form = ({ children, ...rest }) => {
  // Note how we pass adapter in here!!
  const { formController, render, userProps } = useForm({ ...rest, adapter });

  return render(
    <form 
      noValidate 
      {...userProps} 
      onReset={formController.reset} 
      onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

export const Car = () => {
  return (
    <div className="car" />
  )
}
`;

// Custom hook inside a component that's a child of SandpackProvider
const CodeListenerAndCopyButton = ({ filePath }) => {
  const { sandpack } = useSandpack();

  const { files, activeFile } = sandpack;

  const currentCode = files[activeFile].code;

  return (
    <TooltipTrigger>
      <ActionButton
        aria-label="Copy Code"
        onPress={() => {
          navigator.clipboard.writeText(
            `https://teslamotors.github.io/informed/playground?code=${btoa(
              currentCode.replace("import style from './style.css';", '')
            )}`
          );
        }}>
        <Copy />
      </ActionButton>
      <Tooltip>Sharable Url</Tooltip>
    </TooltipTrigger>
  );
};

export const CodeBlock = ({ code }) => {
  return (
    <SandpackProvider
      template="react"
      theme="dark"
      files={{
        '/App.js': code,
        '/YourComponents.js': components,
        '/style.css': {
          code: style
        }
      }}
      options={{
        showLineNumbers: true,
        showNavigator: true
      }}
      customSetup={{
        dependencies: {
          informed: 'latest'
        },
        entry: '/index.js'
      }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <SandpackLayout className="sp-layout">
            <SandpackCodeEditor style={{ height: '100%', minWidth: '60%' }} />
            <SandpackPreview style={{ height: '100%' }} />
          </SandpackLayout>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <CodeListenerAndCopyButton />
        </div>
      </div>
    </SandpackProvider>
  );
};
