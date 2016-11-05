'use strict';

const convert = require('../../util/convert.js');

const PlayerDto = require('./player-dto.js');
const RawStatsDto = require('./raw-stats-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/game~GameDto
 * @property {number} championId - Champion ID associated with game.
 * @property {number} createDate - Date that end game data was recorded, specified as epoch milliseconds.
 * @property {Array.<module:LeagueWrapper/dto/game~PlayerDto>} fellowPlayers - Other players associated with the game.
 * @property {number} gameId - Game ID.
 * @property {string} gameMode - Game mode. (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO) // @todo: enum GameMode
 * @property {string} gameType - Game type. (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME) // @todo: enum GameType
 * @property {boolean} invalid - Invalid flag.
 * @property {number} ipEarned - IP Earned.
 * @property {number} level - Level.
 * @property {number} mapId - Map ID.
 * @property {number} spell1 - ID of first summoner spell.
 * @property {number} spell2 - ID of second summoner spell.
 * @property {module:LeagueWrapper/dto/game~RawStatsDto} stats - Statistics associated with the game for this summoner.
 * @property {string} subType - Game sub-type. (Legal values: NONE, NORMAL, BOT, RANKED_SOLO_5x5, RANKED_PREMADE_3x3, RANKED_PREMADE_5x5, ODIN_UNRANKED, RANKED_TEAM_3x3, RANKED_TEAM_5x5, NORMAL_3x3, BOT_3x3, CAP_5x5, ARAM_UNRANKED_5x5, ONEFORALL_5x5, FIRSTBLOOD_1x1, FIRSTBLOOD_2x2, SR_6x6, URF, URF_BOT, NIGHTMARE_BOT, ASCENSION, HEXAKILL, KING_PORO, COUNTER_PICK, BILGEWATER) // @todo: enum GameType
 * @property {number} teamId - Team ID associated with game. Team ID 100 is blue team. Team ID 200 is purple team.// @todo specify properties: enum
 */
class GameDto   {
  constructor(data) {
    this.championId = convert(data.championId, Number);
    this.createDate = convert(data.createDate, Number);
    this.fellowPlayers = convert(data.fellowPlayers, [PlayerDto]);
    this.gameId = convert(data.gameId, Number);
    this.gameMode = convert(data.gameMode, String);
    this.gameType = convert(data.gameType, String);
    this.invalid = convert(data.invalid, Boolean);
    this.ipEarned = convert(data.ipEarned, Number);
    this.level = convert(data.level, Number);
    this.mapId = convert(data.mapId, Number);
    this.spell1 = convert(data.spell1, Number);
    this.spell2 = convert(data.spell2, Number);
    this.stats = convert(data.stats, RawStatsDto);
    this.subType = convert(data.subType, String);
    this.teamId = convert(data.teamId, Number);
  }
}

exports = module.exports = GameDto  ;
