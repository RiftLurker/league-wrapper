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
   * @param {number} summonerId
   * @param {CurrentGameService~getBySummonerId} [callback]
   *
   * @return {Promise.<CurrentGameInfo>}
   */
  getBySummonerId(summonerId, callback) {
    return this.api.request(
      '/observer-mode/rest/consumer/getSpectatorGameInfo/${platformId}/${summonerId}',
      {
        params: {
          summonerId: summonerId
        }
      },
      this._dataHandler(callback)
    );
  }
}

exports = module.exports = CurrentGameService;

