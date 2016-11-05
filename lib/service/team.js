'use strict';

const TeamDto = require('../dto/team/team-dto.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~TeamService
 * @extends Service
 */
class TeamService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~TeamService~getAllBySummonerIds
   * @param {?Error} error
   * @param {Object.<Array.<module:LeagueWrapper/dto/team~TeamDto>>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} summonerIds
   * @param {Object} [query]
   * @param {number} [query.beginTime]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~TeamService~getAllBySummonerIds} [callback]
   *
   * @return {Promise.<Object.<Array.<module:LeagueWrapper/dto/team~TeamDto>>>}
   */
  getAllBySummonerIds(summonerIds, query, options, callback) {
    if (typeof summonerIds === 'number') {
      summonerIds = [summonerIds];
    }
    if (summonerIds.length > 10) {
      return super._fail(new Error('Maximum allowed summoner IDs at once is 10'), callback);
    }

    options = Object.assign({
      path: '/api/lol/${region}/v2.4/team/by-summoner/${summonerIds}',
      params: {
        summonerIds: summonerIds.join(',')
      },
      returnType: [String, [TeamDto]]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~TeamService~getAllByTeamIds
   * @param {?Error} error
   * @param {Object.<module:LeagueWrapper/dto/team~TeamDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]|number} teamIds
   * @param {Object} [query]
   * @param {number} [query.beginTime]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~TeamService~getAllByTeamIds} [callback]
   *
   * @return {Promise.<Object.<module:LeagueWrapper/dto/team~TeamDto>>}
   */
  getAllByTeamIds(teamIds, query, options, callback) {
    if (typeof teamIds === 'number') {
      teamIds = [teamIds];
    }
    if (teamIds.length > 10) {
      return super._fail(new Error('Maximum allowed team IDs at once is 10'), callback);
    }

    options = Object.assign({
      path: '/api/lol/${region}/v2.4/team/${teamIds}',
      params: {
        teamIds: teamIds.join(',')
      },
      query: query,
      returnType: [String, TeamDto]
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = TeamService;
