'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/featuredGames~FeaturedGameInfo
 * @property {Array.<module:LeagueWrapper/dto/featuredGames~BannedChampion>} bannedChampions - Banned champion information
 * @property {number} gameId - The ID of the game
 * @property {number} gameLength - The amount of time in seconds that has passed since the game started
 * @property {string} gameMode - The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO) // @todo: enum: GameMode
 * @property {number} gameQueueConfigId - The queue type (queue types are documented on the Game Constants page)
 * @property {number} gameStartTime - The game start time represented in epoch milliseconds
 * @property {string} gameType - The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME) // @todo: enum: GameType
 * @property {number} mapId - The ID of the map
 * @property {module:LeagueWrapper/dto/featuredGames~Observer} observers - The observer information
 * @property {Array.<module:LeagueWrapper/dto/featuredGames~Participant>} participants - The participant information
 * @property {string} plattformId - The ID of the platform on which the game is being played
 */
class FeaturedGameInfo {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = FeaturedGameInfo;
