'use strict';

const convert = require('../util/convert.js');
const replace = require('../util/replace.js');

/**
 * @class
 * @alias module:LeagueWrapper/options~CacheOptions
 * @property {string} key
 * @property {number} ttl - ttl in seconds
 */
class CacheOptions {
  constructor(data) {
    this.key = convert(data.key, String);
    this.ttl = convert(data.ttl, Number);
  }
  prepareKey(param, query) {
    let key = replace(this.key, param || {});
    if (Object.keys(query).length !== 0) {
      key += '?';
      let count = 0;
      Object.keys(query).sort().forEach(function(name) {
        if (count++ > 1) {
          key += '&';
        }
        key += name + '=' + query[name];
      });
    }
    return key;
  }
}

exports = module.exports = CacheOptions;