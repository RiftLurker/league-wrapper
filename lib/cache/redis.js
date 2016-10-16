'use strict';

const Cache = require('../cache.js');

const redis = require('redis');

class RedisCache extends Cache {
  constructor(api, options) {
    super(api, options);

    const self = this;

    this._client = redis.createClient(options[options.type]);
    this._client.on('error', function(error) {
      self.api.handleError(error);
    });
  }

  get(key) {
    const self = this;

    return new Promise(function(resolve, reject) {
      self._client.get(key, function(error, data) {
        if (error) {
          return reject(error);
        }
        if (data === null) {
          return reject(null);
        }
        return resolve(JSON.parse(data));
      });
    });
  }

  set(key, value) {
    const self = this;

    return new Promise(function(resolve) {
      const json = JSON.stringify(value);
      self._client.set(key, json);
      self._client.expire(key, self.options.ttl);
      return resolve();
    });
  }
}
exports = module.exports = RedisCache;
