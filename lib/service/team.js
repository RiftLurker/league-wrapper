'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class TeamService extends Service {
  constructor(api) {
    super(api, 'v2.4');
  }

  /**
   * @callback TeamService~getAllBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<TeamDto>>} [data]
   */
  /**
   * @param {number[]|number} summonerIds
   * @param {Object} [query]
   * @param {number} [query.beginTime]
   * @param {TeamService~getAllBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<TeamDto>>>}
   */
  getAllBySummonerIds(summonerIds, query, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      return this._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.4/team/by-summoner/${summonerIds}',
      {
        params: {
          summonerIds: summonerIds.join(',')
        },
        query: query
      }
    ).execute(callback);
  }

  /**
   * @callback TeamService~getAllByTeamIds
   * @param {?Error} error
   * @param {Object.<TeamDto>} [data]
   */
  /**
   * @param {number[]|number} teamIds
   * @param {Object} [query]
   * @param {number} [query.beginTime]
   * @param {TeamService~getAllByTeamIds} [callback]
   *
   * @return {Promise.<Object.<TeamDto>>}
   */
  getAllByTeamIds(teamIds, query, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      return this._fail(new Error('Maximum allowed team IDs at once is 10'), callback);
    }
    return this.request(
      '/api/lol/${region}/v2.4/team/${teamIds}',
      {
        params: {
          teamIds: teamIds.join(',')
        },
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = TeamService;

