'use strict';

const Service = require('../service.js');

/* eslint-disable no-unused-vars */
const Season = require('../constant/season.js');
const QueueType = require('../constant/queue-type.js');
/* eslint-enable no-unused-vars */

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
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {StatsService~getRankedBySummonerId} [callback]
   * @return {Promise.<RankedStatsDto>}
   */
  getRankedBySummonerId(summonerId, query, callback) {
    return this.api.request(
      '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      {
        params: {
          summonerId: summonerId
        },
        query: query
      },
      this._dataHandler(callback)
    );
  }

  /**
   * @callback StatsService~getSummaryBySummonerId
   * @param {?Error} error
   * @param {PlayerStatsSummaryListDto} [data]
   */
  /**
   * @param {number} summonerId
   * @param {Object} [query]
   * @param {Season} [query.season]
   * @param {StatsService~getSummaryBySummonerId} [callback]
   * @return {Promise.<PlayerStatsSummaryListDto>}
   */
  getSummaryBySummonerId(summonerId, query, callback) {
    return this.api.request(
      '/api/lol/${region}/v1.3/stats/by-summoner/${summonerId}/ranked',
      {
        params: {
          summonerId: summonerId
        },
        query: query
      },
      this._dataHandler(callback)
    );
  }
}

exports = module.exports = StatsService;

