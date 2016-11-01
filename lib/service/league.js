'use strict';

const queueTypeHelper = require('../helper/queue-type.js');

const QueueType = require('../league-wrapper.js').QueueType;

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~LeagueService
 * @extends Service
 */
class LeagueService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>>}
   */
  getBySummonerIds(summonerIds, options, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      // @todo: Multicall
      return super._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/by-summoner/${summonerIds}',
      params: {
        summonerIds: summonerIds.join(',')
      }
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getEntriesBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getEntriesBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>>}
   */
  getEntriesBySummonerIds(summonerIds, options, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      // @todo: Multicall
      return super._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/by-summoner/${summonerIds}/entry',
      params: {
        summonerIds: summonerIds.join(',')
      }
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getByTeamIds
   * @param {?Error} error
   * @param {Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} teamIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getByTeamIds} [callback]
   *
   * @return {Promise.<Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>>}
   */
  getByTeamIds(teamIds, options, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      // @todo: Multicall
      return super._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/by-team/${teamIds}',
      params: {
        teamIds: teamIds.join(',')
      }
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getEntriesByTeamIds
   * @param {?Error} error
   * @param {Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} teamIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getEntriesByTeamIds} [callback]
   *
   * @return {Promise.<Object.<Array.<module:LeagueWrapper/dto/league~LeagueDto>>>}
   */
  getEntriesByTeamIds(teamIds, options, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      // @todo: Multicall
      return super._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/by-team/${teamIds}/entry',
      params: {
        teamIds: teamIds.join(',')
      }
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getChallenger
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/league~LeagueDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {QueueType} [query.type=QueueType.RANKED_SOLO_5x5]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getChallenger} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/league~LeagueDto>}
   */
  getChallenger(query, options, callback) {
    query = query || {};
    query.type = query.type || QueueType.RANKED_SOLO_5x5;
    query.type = queueTypeHelper.getQueueTypeData(query.type).getQueryString();

    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/challenger',
      query: query
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LeagueService~getMaster
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/league~LeagueDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {QueueType} [query.type=QueueType.RANKED_SOLO_5x5]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LeagueService~getMaster} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/league~LeagueDto>}
   */
  getMaster(query, options, callback) {
    query = query || {};
    query.type = query.type || QueueType.RANKED_SOLO_5x5;
    query.type = queueTypeHelper.getQueueTypeData(query.type).getQueryString();

    options = Object.assign({
      path: '/api/lol/${region}/v2.5/league/master',
      query: query
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = LeagueService;

