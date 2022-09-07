// fallback for browsers that don't support `structuredClone` yet
// this comes with some limitations in what can be cloned, but this should be fine for most use cases
// `structuredClone` can also be polyfilled using https://www.npmjs.com/package/@ungap/structured-clone
export default (typeof structuredClone === 'function'
  ? structuredClone
  : obj => JSON.parse(JSON.stringify(obj)));
