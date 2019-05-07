/**
 * 
 * I stole most of this code from the debug lib
 * https://github.com/visionmedia/debug
 * 
 * Just wanted it to be easy to debug without relying on the dependency!
 */


/**
	* Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @param {String} colors color pallette to choose from
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
function selectColor(namespace, colors) {
  let hash = 0;

  for (let i = 0; i < namespace.length; i++) {
    hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return colors[Math.abs(hash) % colors.length];
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatNodeArgs(args, config) {

  const name = config.namespace;

  if (config.useColors) {
    const c = config.color;
    const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
    const prefix = `  ${colorCode};1m${name} \u001B[0m`;
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
  } else {
    args[0] = name + ' ' + args[0];
  }
}

/**
 * Colorize log arguments if enabled.
 *
 */

function formatBrowserArgs(args, config) {

  args[0] = (config.useColors ? '%c' : '') + config.namespace;

  if (!config.useColors) {
    return;
  }

  const c = 'color: ' + config.color;

  // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }
    index++;
    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}


const browserColors = [
  '#0000CC',
  '#0000FF',
  '#0033CC',
  '#0033FF',
  '#0066CC',
  '#0066FF',
  '#0099CC',
  '#0099FF',
  '#00CC00',
  '#00CC33',
  '#00CC66',
  '#00CC99',
  '#00CCCC',
  '#00CCFF',
  '#3300CC',
  '#3300FF',
  '#3333CC',
  '#3333FF',
  '#3366CC',
  '#3366FF',
  '#3399CC',
  '#3399FF',
  '#33CC00',
  '#33CC33',
  '#33CC66',
  '#33CC99',
  '#33CCCC',
  '#33CCFF',
  '#6600CC',
  '#6600FF',
  '#6633CC',
  '#6633FF',
  '#66CC00',
  '#66CC33',
  '#9900CC',
  '#9900FF',
  '#9933CC',
  '#9933FF',
  '#99CC00',
  '#99CC33',
  '#CC0000',
  '#CC0033',
  '#CC0066',
  '#CC0099',
  '#CC00CC',
  '#CC00FF',
  '#CC3300',
  '#CC3333',
  '#CC3366',
  '#CC3399',
  '#CC33CC',
  '#CC33FF',
  '#CC6600',
  '#CC6633',
  '#CC9900',
  '#CC9933',
  '#CCCC00',
  '#CCCC33',
  '#FF0000',
  '#FF0033',
  '#FF0066',
  '#FF0099',
  '#FF00CC',
  '#FF00FF',
  '#FF3300',
  '#FF3333',
  '#FF3366',
  '#FF3399',
  '#FF33CC',
  '#FF33FF',
  '#FF6600',
  '#FF6633',
  '#FF9900',
  '#FF9933',
  '#FFCC00',
  '#FFCC33'
];

/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */
function loadBrowser() {
  let namespaces;
  try {
    namespaces = localStorage.getItem('debug');
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!namespaces && typeof process !== 'undefined' && 'env' in process) {
    namespaces = process.env.DEBUG;
  }

  return { 
    namespaces: namespaces || '', 
    colors: browserColors,
    useColors: true,
    formatArgs: formatBrowserArgs
  };
} 

/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */
function loadNode() {
  return { 
    namespaces: process.env.DEBUG || '',
    colors: [6, 2, 3, 4, 5, 1], 
    useColors: true, 
    formatArgs: formatNodeArgs
  };
}


function createLogger(prefix = null, config) {
  return function(...args) {

    if (prefix){
      args.unshift(prefix);
    }

    // Create a namespace regex for each namespace
    const matches = config.namespaces.split(',').map(( namespace )=>{
      // Remove wildcard and add to regex if wildcard
      if( namespace[namespace.length - 1] === '*' ){
        return new RegExp('^' + namespace.slice(0, namespace.length-1) + '.*' + '$');
      }
      return new RegExp('^' + namespace + '$');
    });
    
    // Does the prefix match a namespace
    const match = matches.some((regex)=>{
      return regex.test(prefix);
    });

    const conf = {
      color: selectColor( prefix, config.colors ),
      namespace: prefix, 
      useColors: config.useColors
    };

    if (process.env.NODE_ENV !== 'production' && match ) {
      config.formatArgs(args, conf);
      console.log(...args);
    }
  };
}

function nodeLogger(prefix) {
  return createLogger(prefix, loadNode());
}

function browserLogger(prefix) {
  return createLogger(prefix, loadBrowser());
}

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  module.exports = browserLogger;
} else {
  module.exports = nodeLogger;
}