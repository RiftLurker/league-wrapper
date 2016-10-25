'use strict';

const Request = require('./request.js');

/**
 * @class
 */
class Service {
  /**
   * @param {LeagueWrapper} api
   * @param {String} [version]
   * @param {boolean} [useRateLimit=true]
   * @todo Customizable RateLimit per Service
   */
  constructor(api, version, useRateLimit) {
    this.api = api;
    this.version = version;

    this.useRateLimit = typeof useRateLimit !== 'undefined' ? useRateLimit : true;
  }

  /**
   * @param {Error} error
   * @param {requestCallback} [callback]
   *
   * @returns {Promise}
   * @protected
   */
  _fail(error, callback) {
    return new Promise(function(resolve, reject) {
      return reject(error) || callback && callback(error);
    });
  }

  /**
   * @param {string} path
   * @param {Object} [options]
   * @param {Region} [options.region]
   * @param {Object} [options.params]
   * @param {Object} [options.query]
   * @returns {Request}
   */
  request(path, options) {
    options = options || {};
    return new Request(this.api, path, this, options);
  }
}

Service.Request = Request;

exports = module.exports = Service;
