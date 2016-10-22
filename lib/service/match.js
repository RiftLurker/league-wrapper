'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class MatchService extends Service {
  constructor(api) {
    super(api, 'v2.2');
  }

  /**
   * @callback MatchService~getById
   * @param {?Error} error
   * @param {MatchDetail} [data]
   */
  /**
   * @param {number} matchId
   * @param {Object} [query]
   * @param {boolean} [query.includeTimeline]
   * @param {MatchService~getById} [callback]
   *
   * @return {Promise.<MatchDetail>}
   */
  getById(matchId, query, callback) {
    return this.request(
      '/api/lol/${region}/v2.2/match/${matchId}',
      {
        params: {
          matchId: matchId
        },
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = MatchService;

