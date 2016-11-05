'use strict';

const GameDto = require('./game/game-dto.js');
const PlayerDto = require('./game/player-dto.js');
const RawStatsDto = require('./game/raw-stats-dto.js');
const RecentGamesDto = require('./game/recent-games-dto.js');

/**
 * @module module:LeagueWrapper/dto/game
 */

/**
 * @type {{GameDto, PlayerDto, RawStatsDto, RecentGamesDto}}
 */
exports = module.exports = {
  GameDto,
  PlayerDto,
  RawStatsDto,
  RecentGamesDto
};
