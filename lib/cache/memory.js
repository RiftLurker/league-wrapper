'use strict';

const Cache = require('../cache.js');

const NodeCache = require('node-cache');

class MemoryCache extends Cache {
  constructor(api, options) {
    super(api, options);
    this._client = new NodeCache({
      stdTTL: options.ttl
    });
  }

  get(key) {
    const self = this;

    return new Promise(function(resolve, reject) {
      self._client.get(key, function(error, data) {
        if (error) {
          return reject(error);
        }
        if (typeof data === 'undefined') {
          return reject(null);
        }
        return resolve(data);
      });
    });
  }

  set(key, value) {
    const self = this;

    return new Promise(function(resolve, reject) {
      self._client.set(key, value, function(error, success) {
        if (error) {
          return reject(error);
        }
        if (!success) {
          return reject(null);
        }
        return resolve();
      });
    });
  }
}
exports = module.exports = MemoryCache;
