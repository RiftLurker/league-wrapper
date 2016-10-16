'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class FeaturedGamesService extends Service {
  constructor(api) {
    super(api, 'v1.0');
  }

  /**
   * @callback FeaturedGamesService~getAll
   * @param {?Error} error
   * @param {FeaturedGames} [data]
   */
  /**
   * @param {FeaturedGamesService~getAll} [callback]
   *
   * @return {Promise.<FeaturedGames>}
   */
  getAll(callback) {
    return this.api.request(
      '/observer-mode/rest/featured',
      null,
      this._dataHandler(callback)
    );
  }
}

exports = module.exports = FeaturedGamesService;

