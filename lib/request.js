'use strict';

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
   * @param {Object} [options]
   * @param {Region} [options.region]
   * @param {Service} [options.service]
   * @param {Object} [options.params]
   * @param {Object} [options.query]
   */
  constructor(api, path, options) {
    this.api = api;
    this.path = path;
    this.options = options || {};
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
   * @param {?Error} error
   * @param {*} [data]
   *
   * @todo Correct type definition for service callbacks
   */
  /**
   * @param {requestCallback} [callback]
   * @returns {Promise.<*>}
   */
  execute(callback) {
    const self = this;

    return new Promise(function(resolve, reject) {
      const region = self.options.region || self.api.getRegion();

      if (!region) {
        // @todo: Proper error naming
        const error = new Error('No region defined');
        return reject(error) || callback && callback(error);
      }

      const host = self.options.host || region.host;
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
          region: region.region.toLowerCase(),
          plattformId: region.plattformId
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
        function (data/*, response @todo: handle header data */) {
          if (data.status) {
            // @todo: Proper error naming
            /*
             * data: {status: {message: string, status_code: number}}
             */
            const error = new Error(data.status.message + ' (Error ' + data.status.status_code + ')');
            return reject(error) || callback && callback(error);
          }
          return resolve(data) || callback && callback(null, data);
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
  }
}

exports = module.exports = Request;
