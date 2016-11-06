'use strict';

const convert = require('./util/convert.js');

const RateLimit = require('./rate-limit.js');

const Client = require('node-rest-client').Client;

const client = new Client();

/* eslint-disable no-unused-vars */
const HEADER_RETRY_AFTER = 'retry-after';
const HEADER_RATE_LIMIT_COUNT = 'x-rate-limit-count';
const HEADER_RATE_LIMIT_REGEXP = /([0-9])+:([0-9]+),?/g;
const HEADER_RATE_LIMIT_TYPE = 'x-rate-limit-type';
/* eslint-enable no-unused-vars */

/**
 * @class
 * @alias module:LeagueWrapper~Request
 * @property {module:LeagueWrapper~LeagueWrapper} api
 * @property {module:LeagueWrapper/options~RequestOptions} options
 */
class Request {
  /**
   * @param {LeagueWrapper} api
   * @param {module:LeagueWrapper/options~RequestOptions} options
   */
  constructor(api, options) {
    this.api = api;
    this.options = options;
  }

  /**
   * @param {function} [callback]
   * @returns {Promise.<*>}
   */
  execute(callback) {
    const self = this;
    // @todo: Request Cache

    /** @type {module:LeagueWrapper/constant~Region} */
    const region = self.options.region || self.api.options.region;

    const rateLimits = this.options.respectRateLimit ? this.api.getRateLimits(region) : [];

    return RateLimit.all(rateLimits).then(function(release) {
      const promise = new Promise(function(resolve, reject) {

        const host = self.options.host || region.getHostUrl();
        const url = host + self.options.path;

        const query = Object.assign(
          {
            // eslint-disable-next-line camelcase
            api_key: self.api.apiKey // api_key is defined in snake_case by the REST API
          },
          self.options.query
        );

        const params = Object.assign(
          {
            region: region.region,
            platformId: region.platformId
          },
          self.options.params
        );

        const request = client.get(
          url,
          {
            path: params,
            parameters: query
          },
          function (data, response) {
            // @todo: Handle Headers
            if (response.statusCode === 200) {
              if (data.status) {
                // @todo: Proper error naming
                /*
                 * data: {status: {message: string, status_code: number}}
                 */
                const error = new Error(data.status.message + ' (Error ' + data.status.status_code + ')');
                return reject(error) || callback && callback(error);
              }
              const convertedData = convert(data, self.options.returnType);
              return release() || resolve(convertedData, response) || callback && callback(null, convertedData, response);
            } else {
              // @todo: Retry on failure?
              const error = new Error('HTTPError ' + response.statusCode + ': ' + response.statusMessage);
              return reject(error) || callback && callback(error);
            }
          }
        );

        request.on('requestTimeout', function (req) {
          // @todo: Retry?
          req.abort();
          // @todo: Proper error naming
          const error = new Error('Request timed out');
          return reject(error) || callback && callback(error);
        });
      });

      if (callback) {
        promise.catch(callback);
      }

      return promise;
    });
  }
}

exports = module.exports = Request;
