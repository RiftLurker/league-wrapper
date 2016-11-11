'use strict';

const Cache = require('../cache.js');

class MemchacheCache extends Cache {
  constructor(memcached) {
    super();
    this.client = memcached;
  }

  /**
   * @param {string} key
   * @returns {Promise.<*>}
   */
  get(key) {
    const self = this;

    return new Promise(function(resolve, reject) {
      self.client.get(key, function(error, data) {
        if (error) {
          return reject(error);
        }
        if (data === null) {
          return resolve();
        }
        return resolve(JSON.parse(data));
      });
    });
  }

  /**
   * @param {string} key
   * @param {*} value
   * @param {module:LeagueWrapper/options~CacheOptions} options
   * @returns {Promise.<*>}
   */
  set(key, value, options) {
    const self = this;

    return new Promise(function(resolve, reject) {
      const value = JSON.stringify(value);
      self.client.set(key, value, options.ttl, function(error) {
        if (error) {
          return reject(error);
        }
        return resolve();
      });
    });
  }
}

exports = module.exports = MemchacheCache;