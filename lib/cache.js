'use strict';

/**
 * @class
 * @alias module:LeagueWrapper~Cache
 */
class Cache {

  /**
   * @param {string} key
   * @returns {Promise.<*>}
   */
  get(key) { // eslint-disable-line no-unused-vars
    return Promise.resolve();
  }

  /**
   * @param {string} key
   * @param {*} value
   * @param {module:LeagueWrapper/options~CacheOptions} options
   * @returns {Promise.<*>}
   */
  set(key, value, options) { // eslint-disable-line no-unused-vars
    return Promise.resolve();
  }
}

exports = module.exports = Cache;