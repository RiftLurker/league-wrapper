'use strict';

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~StatsService
 * @extends Service
 */
class StatsService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~StatsService~getRankedBySummonerId
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/stats~RankedStatsDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~StatsService~getRankedBySummonerId} [callback]
   * @return {Promise.<module:LeagueWrapper/dto/stats~RankedStatsDto>}
   */
  getRankedBySummonerId(summonerId, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      params: {
        summonerId: summonerId
      },
      query: query
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~StatsService~getSummaryBySummonerId
   * @param {?Error} error
   * @param {module:LeagueWrapper/service~StatsService~PlayerStatsSummaryListDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~StatsService~getSummaryBySummonerId} [callback]
   * @return {Promise.<module:LeagueWrapper/dto/stats~PlayerStatsSummaryListDto>}
   */
  getSummaryBySummonerId(summonerId, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      params: {
        summonerId: summonerId
      },
      query: query
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = StatsService;

