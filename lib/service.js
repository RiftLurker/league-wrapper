'use strict';

const convert = require('./util/convert.js');

const RequestOptions = require('./options/request.js');

const Request = require('./request.js');

/**
 * @class
 * @alias module:LeagueWrapper~Service
 */
class Service {
  /**
   * @param {module:LeagueWrapper~LeagueWrapper} api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * @param {Error} error
   * @param {function} [callback]
   *
   * @returns {Promise}
   * @protected
   */
  _fail(error, callback) {
    const promise = Promise.reject(error);
    if (callback) {
      promise.catch(callback);
    }
    return promise || callback && callback(error);
  }

  /**
   * @param {module:LeagueWrapper/options~RequestOptions} options
   * @returns {module:LeagueWrapper~Request}
   */
  request(options) {
    options = Object.assign({
      region: this.api.getRegion()
    }, options);
    options = convert(options, RequestOptions);
    return new Request(this.api, options);
  }
}

Service.Request = Request;

exports = module.exports = Service;
