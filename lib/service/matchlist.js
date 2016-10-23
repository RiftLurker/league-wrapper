'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class MatchlistService extends Service {
  constructor(api) {
    super(api, 'v2.2');
  }

  /**
   * @callback MatchlistService~getById
   * @param {?Error} error
   * @param {MatchList} [data]
   */
  /**
   * @todo example
   * @param {number} [id]
   * @param {Object} [query]
   * @param {number[]|number} [query.championIds]
   * @param {QueueTypeData[]|QueueTypeData} [query.rankedQueues]
   * @param {Season[]|Season} [query.seasons]
   * @param {number} [query.beginTime]
   * @param {number} [query.endTime]
   * @param {number} [query.beginIndex]
   * @param {number} [query.endIndex]
   * @param {MatchlistService~getById} [callback]
   *
   * @return {Promise.<MatchList>}
   */
  getById(id, query, callback) {
    return this.request(
      '/api/lol/${region}/v2.2/matchlist/by-summoner/${summonerId}',
      {
        params: {
          summonerId: id
        },
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = MatchlistService;

