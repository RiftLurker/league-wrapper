'use strict';

const queueTypeHelper = require('../helper/queue-type.js');

const QueueType = require('../league-wrapper.js').QueueType;

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class LeagueService extends Service {
  constructor(api) {
    super(api, 'v2.5');
  }

  /**
   * @callback LeagueService~getBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} summonerIds
   * @param {LeagueService~getBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<LeagueDto>>>}
   */
  getBySummonerIds(summonerIds, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      return this._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.5/league/by-summoner/${summonerIds}',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback LeagueService~getEntriesBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} summonerIds
   * @param {LeagueService~getEntriesBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<LeagueDto>>>}
   */
  getEntriesBySummonerIds(summonerIds, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      return this._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.5/league/by-summoner/${summonerIds}/entry',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback LeagueService~getByTeamIds
   * @param {?Error} error
   * @param {Object.<Array.<LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} teamIds
   * @param {LeagueService~getByTeamIds} [callback]
   *
   * @return {Promise.<Object.<Array.<LeagueDto>>>}
   */
  getByTeamIds(teamIds, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      return this._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.5/league/by-team/${teamIds}',
      {
        params: {
          teamIds: teamIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback LeagueService~getEntriesByTeamIds
   * @param {?Error} error
   * @param {Object.<Array.<LeagueDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} teamIds
   * @param {LeagueService~getEntriesByTeamIds} [callback]
   *
   * @return {Promise.<Object.<Array.<LeagueDto>>>}
   */
  getEntriesByTeamIds(teamIds, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      return this._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.5/league/by-team/${teamIds}/entry',
      {
        params: {
          teamIds: teamIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback LeagueService~getChallenger
   * @param {?Error} error
   * @param {LeagueDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {QueueType} [query.type=QueueType.RANKED_SOLO_5x5]
   * @param {LeagueService~getChallenger} [callback]
   *
   * @return {Promise.<LeagueDto>}
   */
  getChallenger(query, callback) {
    query = query || {};
    query.type = query.type || QueueType.RANKED_SOLO_5x5;
    query.type = queueTypeHelper.getQueueTypeData(query.type).getQueryString();
    return this.request(
      '/api/lol/${region}/v2.5/league/challenger',
      {
        query: query
      }
    ).execute(callback);
  }

  /**
   * @callback LeagueService~getMaster
   * @param {?Error} error
   * @param {LeagueDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {QueueType} [query.type=QueueType.RANKED_SOLO_5x5]
   * @param {LeagueService~getMaster} [callback]
   *
   * @return {Promise.<LeagueDto>}
   */
  getMaster(query, callback) {
    query = query || {};
    query.type = query.type || QueueType.RANKED_SOLO_5x5;
    query.type = queueTypeHelper.getQueueTypeData(query.type).getQueryString();
    return this.request(
      '/api/lol/${region}/v2.5/league/master',
      {
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = LeagueService;

