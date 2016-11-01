'use strict';

const convert = require('../util/convert.js');

const Region = require('../constant/region.js');

/**
 * @class
 * @alias module:LeagueWrapper/options~RequestOptions
 * @property {string} apiKey
 * @property {string} path
 * @property {module:LeagueWrapper/constant~Region} region
 * @property {Object} params
 * @property {Object} query
 * @property {boolean} respectRateLimit=true
 * @property {boolean} queue=true
 * @property {string} host
 * @property {*} returnType
 */
class RequestOptions {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.apiKey = convert(data.apiKey, String);
    this.path = convert(data.path, String);
    this.region = convert(data.region, Region);
    this.params = convert(data.params, Object, {
      default: {}
    });
    this.query = convert(data.query, Object, {
      default: {}
    });
    this.respectRateLimit = convert(data.respectRateLimit, Boolean, {
      default: true
    });
    this.queue = convert(data.queue, Boolean, {
      default: true
    });
    this.host = convert(data.host, String);
    this.returnType = data.returnType || Object;
  }
}

exports = module.exports = RequestOptions;
