'use strict';

/* eslint-disable no-unused-vars */
const RiotApi = require('./api.js');
/* eslint-enable no-unused-vars */

/**
 * @class
 */
class Service {
  /**
   * @param {RiotApi} api
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
}

exports = module.exports = Service;
