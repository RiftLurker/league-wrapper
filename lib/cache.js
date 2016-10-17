'use strict';

/**
 * @abstract
 * @class
 */
class Cache {
  /**
   * @param {LeagueWrapper} api
   * @param {Object} options
   * @param {number} options.ttl
   */
  constructor(api, options) {
    this.api = api;
    this.options = options;
  }

  /**
   * @abstract
   * @param {string} key
   * @returns {Promise.<*>}
   */
  /* eslint-disable no-unused-vars */
  get(key) {
    throw new Error('Must be implemented by subclass');
  }
  /* eslint-enable no-unused-vars */

  /**
   * @abstract
   * @param {string} key
   * @param {*} value
   * @returns {Promise}
   */
  /* eslint-disable no-unused-vars */
  set(key, value) {
    throw new Error('Must be implemented by subclass');
  }
  /* eslint-enable no-unused-vars */
}

exports = module.exports = Cache;
