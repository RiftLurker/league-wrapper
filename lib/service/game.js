'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class GameService extends Service {
  constructor(api) {
    super(api, 'v2.2');
  }

  /**
   * @callback GameService~getBySummonerId
   * @param {?Error} error
   * @param {GameService~RecentGamesDto} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {GameService~getBySummonerId} [callback]
   *
   * @return {Promise.<GameService~RecentGamesDto>}
   */
  getBySummonerId(summonerId, callback) {
    return this.request(
      '/api/lol/${region}/v1.3/game/by-summoner/${summonerId}/recent',
      {
        params: {
          summonerId: summonerId
        }
      }
    ).execute(callback);
  }
}

exports = module.exports = GameService;

