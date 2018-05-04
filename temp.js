function isArray (a) {
  return Array.isArray(a)
}

function isObject (a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null
}

function flattenDeep (arr, newArr = []) {
  if (!isArray(arr)) {
    newArr.push(arr)
  } else {
    for (let i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr)
    }
  }
  return newArr
}

function makePathArray (obj) {
  let path = []
  const flat = flattenDeep(obj)
  flat.forEach(part => {
    if (typeof part === 'string') {
      path = path.concat(
        part
          .replace(/\[(\d*)\]/gm, '.__int__$1')
          .replace('[', '.')
          .replace(']', '')
          .split('.')
          .map(d => {
            if (d.indexOf('__int__') === 0) {
              return parseInt(d.substring(7), 10)
            }
            return d
          })
      )
    } else {
      path.push(part)
    }
  })
  return path.filter(d => typeof d !== 'undefined')
}

module.exports = makePathArray;
