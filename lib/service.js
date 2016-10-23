'use strict';

const Request = require('./request.js');

/**
 * @class
 */
class Service {
  /**
   * @param {LeagueWrapper} api
   * @param {String} [version]
   * @param {boolean} useRateLimit
   * @todo Customizable RateLimit per Service
   */
  constructor(api, version, useRateLimit) {
    const self = this;
    this.api = api;
    this.version = version;
    this.rateLimits = [];

    if (useRateLimit) {
      api.getRateLimits().forEach(function (rateLimit) {
        self.rateLimits.push(rateLimit.clone());
      });
    }
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

  /**
   * @returns {Array.<RateLimit>}
   */
  getRateLimits() {
    let rateLimits = this.rateLimits;
    if (!Array.isArray(rateLimits)) {
      rateLimits = [rateLimits];
    }
    return rateLimits;
  }
}

Service.Request = Request;

exports = module.exports = Service;
