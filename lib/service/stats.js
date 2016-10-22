'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class StatsService extends Service {
  constructor(api) {
    super(api, 'v1.3');
  }

  /**
   * @callback StatsService~getRankedBySummonerId
   * @param {?Error} error
   * @param {RankedStatsDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {StatsService~getRankedBySummonerId} [callback]
   * @return {Promise.<RankedStatsDto>}
   */
  getRankedBySummonerId(summonerId, query, callback) {
    return this.request(
      '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      {
        params: {
          summonerId: summonerId
        },
        query: query
      }
    ).execute(callback);
  }

  /**
   * @callback StatsService~getSummaryBySummonerId
   * @param {?Error} error
   * @param {PlayerStatsSummaryListDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {StatsService~getSummaryBySummonerId} [callback]
   * @return {Promise.<PlayerStatsSummaryListDto>}
   */
  getSummaryBySummonerId(summonerId, query, callback) {
    return this.request(
      '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      {
        params: {
          summonerId: summonerId
        },
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = StatsService;

