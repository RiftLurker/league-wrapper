'use strict';

/**
 * @namespace ServiceConfig
 * @property {string} [host]
 * @property {Object.<OperationConfig>} operations
 */
/**
 * @namespace OperationConfig
 * @property {string} path
 * @property {Object} [options]
 * @property {boolean} [options.ratelimit]
 */

/**
 * @type {Object.<ServiceConfig>}
 */
const Services = {
  CHAMPION: {
    operations: {
      ALL: {
        path: '/api/lol/${region}/v1.2/champion'
      },
      BY_ID: {
        path: '/api/lol/${region}/v1.2/champion/${id}'
      }
    }
  },
  SUMMONER: 'test123'
};

Services.CHAMPION.operations.ALL.

exports = module.exports = Services;
