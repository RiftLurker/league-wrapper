'use strict';

const RateLimit = require('./rate-limit.js');

const regionHelper = require('./helper/region.js');

const Client = require('node-rest-client').Client;

const client = new Client();

/**
 *  @class
 *  @todo RateLimit
 */
class Request {
  /**
   *
   * @param {LeagueWrapper} api
   * @param {string} path
   * @param {Service} service
   * @param {Object} [options]
   * @param {Region} [options.region]
   * @param {Object} [options.params]
   * @param {Object} [options.query]
   * @param {RateLimit} [options.ratelimit]
   */
  constructor(api, path, service, options) {
    this.api = api;
    this.path = path;
    this.service = service;
    this.options = options || {};

    this.rateLimits = [].concat(this.api.getRateLimits(), this.service.getRateLimits());
  }

  /**
   * @param {Region} region
   * @returns {Request}
   */
  region(region) {
    this.options.region = region;
    return this;
  }

  /**
   * @callback requestCallback
   * @param {?Object} error
   * @param {string} error.message
   * @param {number} error.code
   * @param {*} [data]
   * @param {*} [response]
   *
   * @todo Correct type definition for service callbacks
   */
  /**
   * @param {requestCallback} [callback]
   * @returns {Promise.<*>}
   */
  execute(callback) {
    const self = this;

    return RateLimit.all(this.rateLimits).then(function() {
      return new Promise(function(resolve, reject) {
        /** @type {Region} */
        const region = self.options.region || self.api.getRegion();

        if (!region) {
          const error = new Error('No region defined');
          return reject(error) || callback && callback(error);
        }

        /** @type {RegionData} */
        const regionData = regionHelper.getRegionData(region);

        if (!regionData) {
          const error = new Error('Region ' + region + ' not found');
          return reject(error) || callback && callback(error);
        }

        const host = self.options.host || regionData.host;
        const url = host + self.path;

        const query = Object.assign(
          {
            // eslint-disable-next-line camelcase
            api_key: self.api.apiKey // api_key is defined in snake_case by the REST API
          },
          self.options.query
        );

        const params = Object.assign(
          {
            // @fixme: matchlist doesn't work with uppercase region
            region: regionData.region.toLowerCase(),
            platformId: regionData.plattformId
          },
          self.options.params
        );

        // @todo: Respect RateLimit

        const request = client.get(
          url,
          {
            path: params,
            parameters: query
          },
          function (data, response) {
            if (response.statusCode === 200) {
              // @todo: handle RateLimit Headers
              if (data.status) {
                // @todo: Proper error naming
                /*
                 * data: {status: {message: string, status_code: number}}
                 */
                const error = new Error(data.status.message + ' (Error ' + data.status.status_code + ')');
                return reject(error) || callback && callback(error);
              }
              return resolve(data, response) || callback && callback(null, data, response);
            } else {
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
    });
  }
}

exports = module.exports = Request;
