/**
 * Takes in a path string and turns it into a path array
 *
 * @param path path into an object
 *        Example: "foo.bar.baz[0].taz.bar[10][3].bar.0.5"
 *
 * Given the following input the following output will be generated
 * Input : "foo.bar.baz[0].taz.bar[10][3].bar.0.5"
 * Output: [ 'foo', 'bar', 'baz', 0, 'taz', 'bar', 10, 3, 'bar', '0', '5' ]
 */
const makePathArray = path => {
  const pathArray = path
    .replace(/\[(\d+)]/g, '.__int__$1')
    .replace(/\['([^.]+)']/g, '.$1')
    .split('.')
    .map(e => (e.indexOf('__int__') === 0 ? parseInt(e.substring(7), 10) : e));
  return pathArray;
};

export default makePathArray;
