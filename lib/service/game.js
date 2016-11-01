'use strict';

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~GameService
 * @extends Service
 */
class GameService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~GameService~getBySummonerId
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/game~RecentGamesDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~GameService~getBySummonerId} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/game~RecentGamesDto>}
   */
  getBySummonerId(summonerId, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v1.3/game/by-summoner/${summonerId}/recent',
      params: {
        summonerId: summonerId
      }
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = GameService;

