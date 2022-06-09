import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

const style = `
input {
  margin-bottom: 1rem;
}

input:not([type='checkbox']):not([type='radio']),
textarea,
select {
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: block;
  border-radius: 20px;
  width: 100%;
  padding: 10px 20px;
  font-weight: 500;
  border: 1px solid transparent;
  max-width: 400px;
  background-color: #f4f4f4;
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
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-size: 0.6em;
  background-position: calc(100% - 1.3em) center;
  background-repeat: no-repeat;
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
  /* text-align: left; */
  /* margin-left: 1rem; */
  margin-bottom: 1rem;
  display: block;
}

button {
  text-align: left;
  display: inline-block;
  height: var(--informed-height--pill);
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 5px 40px;
  color: white;
  background-color: rebeccapurple;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;
}

button[type='submit'] {
  display: block;
}

.informed-container {
  padding: 4rem;
}

.informed-black {
  background-color: rgb(13, 16, 17);
  color: white !important;
}

.informed-black input:not([type='checkbox']):not([type='radio']),
.informed-black select,
.informed-black textarea {
  background-color: #222222;
  color: white;
}

.informed-black select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ctitle%3Edown-arrow%3C/title%3E%3Cg fill='%23000000'%3E%3Cpath d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  /* filter: invert(1); */
}
`;

export const CodeBlock = ({ code }) => {
  return (
    <Sandpack
      template="react"
      theme="codesandbox-dark"
      files={{
        '/App.js': code,
        '/style.css': {
          code: style,
          hidden: true
        }
      }}
      options={{
        showLineNumbers: true,
        showNavigator: true,
        editorHeight: 570
      }}
      customSetup={{
        dependencies: {
          informed: 'latest'
        },
        entry: '/index.js'
      }}
    />
  );
};
