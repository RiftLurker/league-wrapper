'use strict';

function replace(key, args) {
  if (Object.keys(args).length === 0) {
    return key;
  }
  let result = key;

  for (const name in args) {
    const regex = new RegExp('\\$\\{' + name + '\\}');
    result = result.replace(regex, args[name]);
  }

  return result;
}

exports = module.exports = replace;