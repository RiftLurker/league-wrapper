'use strict';

const CurrentGameDto = require('../dto/current-game.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~CurrentGameService
 * @extends Service
 */
class CurrentGameService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~CurrentGameService~getBySummonerId
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/currentGame~CurrentGameInfo} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~CurrentGameService~getBySummonerId} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/currentGame~CurrentGameInfo>}
   */
  getBySummonerId(summonerId, options, callback) {
    options = Object.assign({
      path: '/observer-mode/rest/consumer/getSpectatorGameInfo/${platformId}/${summonerId}',
      params: {
        summonerId: summonerId
      },
      returnType: CurrentGameDto.CurrentGameInfo
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = CurrentGameService;

