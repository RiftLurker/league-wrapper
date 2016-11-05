'use strict';

const MatchDetail = require('../dto/match/match-detail.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~MatchService
 * @extends Service
 */
class MatchService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~MatchService~getById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/match~MatchDetail} [data]
   */
  /**
   * @todo example
   * @param {number} matchId
   * @param {Object} [query]
   * @param {boolean} [query.includeTimeline]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~MatchService~getById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/match~MatchDetail>}
   */
  getById(matchId, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v2.2/match/${matchId}',
      params: {
        matchId: matchId
      },
      query: query,
      returnType: MatchDetail
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = MatchService;

