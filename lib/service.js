'use strict';

const Request = require('./request.js');

/**
 * @class
 */
class Service {
  /**
   * @param {LeagueWrapper} api
   * @param {String} [version]
   */
  constructor(api, version) {
    this.api = api;
    this.version = version;
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
   * @param {function} callback
   * @returns {requestCallback}
   * @protected
   */
  _dataHandler(callback) {
    return function(error, data) {
      if (error) {
        return callback && callback(error);
      }
      return callback && callback(null, data);
    };
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
    Object.assign(options, {
      service: this
    });
    return new Request(this.api, path, options);
  }
}

Service.Request = Request;

exports = module.exports = Service;
