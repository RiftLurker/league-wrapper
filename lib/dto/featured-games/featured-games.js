'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/featuredGames~FeaturedGames
 * @property {number} clientRefreshInterval - The suggested interval to wait before requesting FeaturedGames again
 * @property {Array.<module:LeagueWrapper/dto/featuredGames~FeaturedGameInfo>} gameList - The list of featured games
 */
class FeaturedGames {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = FeaturedGames;
