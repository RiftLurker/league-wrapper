'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/game~PlayerDto
 * @property {number} championId - Champion id associated with player.
 * @property {number} summonerId - Summoner id associated with player.
 * @property {number} teamId - Team id associated with player.
 */
class PlayerDto    {
  constructor(data) {
    this.championId = convert(data.championId, Number);
    this.summonerId = convert(data.summonerId, Number);
    this.teamId = convert(data.teamId, Number);
  }
}

exports = module.exports = PlayerDto   ;
