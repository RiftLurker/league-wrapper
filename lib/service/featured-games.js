'use strict';

const FeaturedGamesDto = require('../dto/featured-games.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~FeaturedGamesService
 * @extends Service
 */
class FeaturedGamesService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~FeaturedGamesService~getAll
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/currentGame~FeaturedGames} [data]
   */
  /**
   * @todo example
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~FeaturedGamesService~getAll} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/currentGame~FeaturedGames>}
   */
  getAll(options, callback) {
    options = Object.assign({
      path: '/observer-mode/rest/featured',
      returnType: FeaturedGamesDto.FeaturedGames
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = FeaturedGamesService;

