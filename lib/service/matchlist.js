'use strict';

const MatchList = require('../dto/matchlist/match-list.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~MatchlistService
 * @extends Service
 */
class MatchlistService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~MatchlistService~getById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/matchlist~MatchList} [data]
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
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~MatchlistService~getById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/matchlist~MatchList>}
   */
  getById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v2.2/matchlist/by-summoner/${summonerId}',
      params: {
        summonerId: id
      },
      query: query,
      returnType: MatchList
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = MatchlistService;
