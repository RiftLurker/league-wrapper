'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/team~TeamStatDetailDto
 * @property {number} averageGamesPlayed
 * @property {number} losses
 * @property {string} teamStatType
 * @property {number} wins
 */
class TeamStatDetailDto {
  constructor(data) {
    this.averageGamesPlayed = convert(data.averageGamesPlayed, Number);
    this.losses = convert(data.losses, Number);
    this.teamStatType = convert(data.teamStatType, String);
    this.wins = convert(data.wins, Number);
  }
}

exports = module.exports = TeamStatDetailDto;
