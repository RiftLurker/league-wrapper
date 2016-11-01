'use strict';

const convert = require('../../util/convert.js');

const BannedChampion = require('./banned-champion.js');
const CurrentGameParticipant = require('./current-game-participant.js');
const Observer = require('./observer.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~CurrentGameInfo
 * @property {Array.<module:LeagueWrapper/dto/currentGame~BannedChampion>} bannedChampions - Banned champion information
 * @property {number} gameId - The ID of the game
 * @property {number} gameLength - The amount of time in seconds that has passed since the game started
 * @property {string} gameMode - The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO) // @todo: enum: GameMode
 * @property {number} gameQueueConfigId - The queue type (queue types are documented on the Game Constants page)
 * @property {number} gameStartTime - The game start time represented in epoch milliseconds
 * @property {string} gameType - The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME) // @todo: enum: GameType
 * @property {number} mapId - The ID of the map
 * @property {module:LeagueWrapper/dto/currentGame~Observer} observers - The observer information
 * @property {Array.<module:LeagueWrapper/dto/currentGame~CurrentGameParticipant>} participants - The participant information
 * @property {string} plattformId - The ID of the platform on which the game is being played
 */
class CurrentGameInfo {
  constructor(data) {
    this.bannedChampions = convert(data.bannedChampions, [BannedChampion]);
    this.gameId = convert(data.gameId, Number);
    this.gameLength = convert(data.gameLength, Number);
    this.gameMode = convert(data.gameMode, String);
    this.gameQueueConfigId = convert(data.gameQueueConfigId, Number);
    this.gameStartTime = convert(data.gameStartTime, Number);
    this.gameType = convert(data.gameType, String);
    this.mapId = convert(data.mapId, Number);
    this.observers = convert(data.observers, Observer);
    this.participants = convert(data.participants, [CurrentGameParticipant]);
    this.plattformId = convert(data.plattformId, String);
  }
}

exports = module.exports = CurrentGameInfo;
