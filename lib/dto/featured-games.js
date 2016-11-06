'use strict';

const BannedChampion = require('./featured-games/banned-champion.js');
const FeaturedGameInfo = require('./featured-games/featured-game-info.js');
const FeaturedGames = require('./featured-games/featured-games.js');
const Participant = require('./featured-games/participant.js');
const Observer = require('./featured-games/observer.js');

/**
 * @module module:LeagueWrapper/dto/featuredGames
 */

exports = module.exports = {
  BannedChampion,
  FeaturedGameInfo,
  FeaturedGames,
  Participant,
  Observer
};
