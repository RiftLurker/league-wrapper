'use strict';

const convert = require('../../util/convert.js');

const FeaturedGameInfo = require('./featured-game-info.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/featuredGames~FeaturedGames
 * @property {number} clientRefreshInterval - The suggested interval to wait before requesting FeaturedGames again
 * @property {Array.<module:LeagueWrapper/dto/featuredGames~FeaturedGameInfo>} gameList - The list of featured games
 */
class FeaturedGames {
  constructor(data) {
    this.clientRefreshInterval = convert(data.clientRefreshInterval, Number);
    this.gameList = convert(data.gameList, [FeaturedGameInfo]);
  }
}

exports = module.exports = FeaturedGames;
