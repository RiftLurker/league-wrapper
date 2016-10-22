'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class CurrentGameService extends Service {
  constructor(api) {
    super(api, 'v1.0');
  }

  /**
   * @callback CurrentGameService~getBySummonerId
   * @param {?Error} error
   * @param {CurrentGameInfo} [data]
   */
  /**
   * @todo example
   * @param {number} summonerId
   * @param {CurrentGameService~getBySummonerId} [callback]
   *
   * @return {Promise.<CurrentGameInfo>}
   */
  getBySummonerId(summonerId, callback) {
    return this.request(
      '/observer-mode/rest/consumer/getSpectatorGameInfo/${platformId}/${summonerId}',
      {
        params: {
          summonerId: summonerId
        }
      }
    ).execute(callback);
  }
}

exports = module.exports = CurrentGameService;

