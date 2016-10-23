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
   * @param {FeaturedGamesService~FeaturedGames} [data]
   */
  /**
   * @todo example
   * @param {FeaturedGamesService~getAll} [callback]
   *
   * @return {Promise.<FeaturedGamesService~FeaturedGames>}
   */
  getAll(callback) {
    return this.request(
      '/observer-mode/rest/featured'
    ).execute(callback);
  }
}

exports = module.exports = FeaturedGamesService;

